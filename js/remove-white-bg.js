/* ============================================================
   REMOÇÃO DE FUNDO BRANCO — com cache por chave
   ============================================================
   - _bgRemovalResults guarda o dataURL/blobURL final por chave,
     então cada imagem é processada UMA vez, mesmo que apareça
     em vários cards (o carrossel duplica cada card).
   - _bgRemovalCache guarda a Promise em andamento, para evitar
     processamento concorrente da mesma chave.
   - Usa createImageBitmap + OffscreenCanvas quando disponível.
   - Em caso de CORS/canvas tainted, devolve a URL original
     silenciosamente, sem quebrar o card.
   ============================================================ */

const _bgRemovalCache   = new Map();  // chave -> Promise<url>
const _bgRemovalResults = new Map();  // chave -> url final

/**
 * @param {string} url       caminho da imagem
 * @param {string} cacheKey  identificador único (usar imageKey)
 * @param {number} threshold 0..255 — acima disso vira transparente
 * @param {number} softness  0..255 — suaviza a borda
 * @returns {Promise<string>} URL final (transparente ou original)
 */
function removeWhiteBackground(url, cacheKey, threshold = 240, softness = 20) {
    // Resultado já pronto? devolve direto
    if (_bgRemovalResults.has(cacheKey)) {
        return Promise.resolve(_bgRemovalResults.get(cacheKey));
    }
    // Processamento em andamento para essa chave? reaproveita a promise
    if (_bgRemovalCache.has(cacheKey)) {
        return _bgRemovalCache.get(cacheKey);
    }

    const promise = (async () => {
        try {
            // 1) Carrega o bitmap
            let source;
            if (typeof createImageBitmap === 'function') {
                const res = await fetch(url, { mode: 'cors' });
                if (!res.ok) throw new Error('HTTP ' + res.status);
                const blob = await res.blob();
                source = await createImageBitmap(blob);
            } else {
                source = await new Promise((resolve, reject) => {
                    const img = new Image();
                    img.crossOrigin = 'anonymous';
                    img.onload = () => resolve(img);
                    img.onerror = () => reject(new Error('img load error'));
                    img.src = url;
                });
            }

            const w = source.width;
            const h = source.height;

            // 2) Desenha no canvas
            const canvas = (typeof OffscreenCanvas !== 'undefined')
                ? new OffscreenCanvas(w, h)
                : Object.assign(document.createElement('canvas'), { width: w, height: h });

            const ctx = canvas.getContext('2d', { willReadFrequently: true });
            ctx.drawImage(source, 0, 0);

            // 3) Manipula os pixels
            const imageData = ctx.getImageData(0, 0, w, h);
            const data = imageData.data;

            for (let i = 0; i < data.length; i += 4) {
                const r = data[i];
                const g = data[i + 1];
                const b = data[i + 2];
                const minChannel = (r < g) ? (r < b ? r : b) : (g < b ? g : b);

                if (minChannel >= threshold) {
                    data[i + 3] = 0;
                } else if (minChannel >= threshold - softness) {
                    const t = (threshold - minChannel) / softness;
                    data[i + 3] = Math.round(t * 255);
                }
            }

            ctx.putImageData(imageData, 0, 0);

            // 4) Exporta
            let result;
            if (typeof canvas.convertToBlob === 'function') {
                const blob = await canvas.convertToBlob({ type: 'image/png' });
                result = URL.createObjectURL(blob);
            } else {
                result = canvas.toDataURL('image/png');
            }

            if (source.close) source.close();

            _bgRemovalResults.set(cacheKey, result);
            return result;
        } catch (err) {
            console.warn(`⚠️ Fundo não removido para "${cacheKey}":`, err.message);
            _bgRemovalResults.set(cacheKey, url);
            return url;
        } finally {
            _bgRemovalCache.delete(cacheKey);
        }
    })();

    _bgRemovalCache.set(cacheKey, promise);
    return promise;
}
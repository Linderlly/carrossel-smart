/* ============================================================
   REMOÇÃO DE FUNDO BRANCO — com cache por chave
   ============================================================ */

const _bgRemovalCache   = new Map();  // chave -> Promise<url>
const _bgRemovalResults = new Map();  // chave -> url final

function removeWhiteBackground(url, cacheKey, threshold = 240, softness = 20) {
    if (_bgRemovalResults.has(cacheKey)) {
        return Promise.resolve(_bgRemovalResults.get(cacheKey));
    }
    if (_bgRemovalCache.has(cacheKey)) {
        return _bgRemovalCache.get(cacheKey);
    }

    const promise = (async () => {
        try {
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

            const canvas = (typeof OffscreenCanvas !== 'undefined')
                ? new OffscreenCanvas(w, h)
                : Object.assign(document.createElement('canvas'), { width: w, height: h });

            const ctx = canvas.getContext('2d', { willReadFrequently: true });
            ctx.drawImage(source, 0, 0);

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
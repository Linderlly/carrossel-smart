/* ============================================================
   CARD — cria o DOM de um produto individual
   ============================================================ */

function resolveImageUrl(imageKey) {
    if (!imageKey) return "";
    const file = (typeof IMAGES !== 'undefined') ? IMAGES[imageKey] : null;
    if (!file) return "";
    return IMAGES_BASE_PATH + file;
}

async function swapImageSmooth(imgEl, newSrc) {
    if (!newSrc || imgEl.src === newSrc) return;
    try {
        const pre = new Image();
        pre.src = newSrc;
        if (typeof pre.decode === 'function') {
            await pre.decode();
        } else {
            await new Promise((res, rej) => {
                pre.onload = res;
                pre.onerror = rej;
            });
        }
        imgEl.src = newSrc;
    } catch {
        // mantém a imagem atual em caso de erro
    }
}

function createCard(product) {
    const price = product.price;
    const discounted = price * 0.95;

    const card = document.createElement('div');
    card.className = 'card';

    // ---- Imagem ----
    const imgDiv = document.createElement('div');
    imgDiv.className = 'card-img';

    const imageUrl = resolveImageUrl(product.imageKey);

    if (imageUrl) {
        const img = document.createElement('img');
        img.alt = product.name;
        // CORREÇÃO: Removido o loading="lazy". 
        // O lazy loading falha em carrosséis com animação CSS contínua, 
        // pois o navegador entende que o elemento nunca entra na tela.
        img.decoding = 'async';
        img.src = imageUrl;

        img.onerror = () => {
            imgDiv.innerHTML = createPlaceholderSvg(product.colorHex, product.type);
        };

        removeWhiteBackground(imageUrl, product.imageKey, 240, 20)
            .then((transparentUrl) => swapImageSmooth(img, transparentUrl))
            .catch(() => { /* mantém original */ });

        imgDiv.appendChild(img);
    } else {
        imgDiv.innerHTML = createPlaceholderSvg(product.colorHex, product.type);
    }

    // ---- Badges: tipo + variação ----
    const badgesRow = document.createElement('div');
    badgesRow.className = 'card-badges';

    const typeSpan = document.createElement('span');
    typeSpan.className = 'card-type';
    typeSpan.textContent = product.type;
    badgesRow.appendChild(typeSpan);

    if (product.variation && product.variation.trim() !== '') {
        const variationSpan = document.createElement('span');
        variationSpan.className = 'card-variation';
        variationSpan.textContent = product.variation;
        badgesRow.appendChild(variationSpan);
    }

    // ---- Nome ----
    const nameDiv = document.createElement('div');
    nameDiv.className = 'card-name';
    nameDiv.textContent = product.name;

    // ---- Cor (bolinha + nome) ----
    const colorDiv = document.createElement('div');
    colorDiv.className = 'card-color';
    const dot = document.createElement('span');
    dot.className = 'color-dot';
    dot.style.backgroundColor = product.colorHex;
    dot.style.color = product.colorHex;
    colorDiv.appendChild(dot);
    colorDiv.appendChild(document.createTextNode(product.color));

    // ---- Preços ----
    const oldPriceDiv = document.createElement('div');
    oldPriceDiv.className = 'card-price-old';
    oldPriceDiv.textContent = `R$ ${price.toFixed(2).replace('.', ',')}`;

    const newPriceDiv = document.createElement('div');
    newPriceDiv.className = 'card-price-new';
    newPriceDiv.innerHTML = `R$ ${discounted.toFixed(2).replace('.', ',')} <small>no Pix</small>`;

    // ---- Badge de desconto ----
    const discountBadge = document.createElement('div');
    discountBadge.className = 'card-discount-badge';
    discountBadge.textContent = '5% OFF';

    card.append(imgDiv, badgesRow, nameDiv, colorDiv, oldPriceDiv, newPriceDiv, discountBadge);
    return card;
}
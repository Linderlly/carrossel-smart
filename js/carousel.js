/* ============================================================
   CARROSSEL — distribui produtos nas 4 linhas e duplica
   para o loop infinito
   ============================================================ */

const CAROUSEL_ROW_IDS = ['row1', 'row2', 'row3', 'row4'];

function renderCarousel(products) {
    const rows = CAROUSEL_ROW_IDS.map(id => document.getElementById(id));
    rows.forEach(r => { if (r) r.innerHTML = ''; });

    // Distribui em 4 grupos (round-robin)
    const groups = [[], [], [], []];
    products.forEach((p, i) => groups[i % 4].push(p));

    rows.forEach((rowEl, idx) => {
        if (!rowEl) return;
        const group = groups[idx];
        if (!group.length) return;

        const fragment = document.createDocumentFragment();
        group.forEach(p => fragment.appendChild(createCard(p)));

        // Duplica para loop contínuo (50% + 50% = 100%)
        rowEl.appendChild(fragment.cloneNode(true));
        rowEl.appendChild(fragment.cloneNode(true));
    });
}
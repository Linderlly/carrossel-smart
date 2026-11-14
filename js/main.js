/* ============================================================
   MAIN — orquestração da aplicação
   ============================================================
   Depende de:
     - data/images.js      (IMAGES, IMAGES_BASE_PATH)
     - data/products.js    (PRODUCTS)
     - js/theme.js         (initTheme, bindThemeToggle)
     - js/placeholder.js   (createPlaceholderSvg)
     - js/card.js          (createCard)
     - js/carousel.js      (renderCarousel)
   ============================================================ */

(function () {
    // Tema
    initTheme();
    bindThemeToggle();

    // Carrossel
    renderCarousel(PRODUCTS);

    // (Opcional) Atualização automática via proxy — descomente
    // quando o proxy estiver publicado.
    //
    // const PROXY_URL = '';
    // const REFRESH_INTERVAL_MS = 24 * 60 * 60 * 1000;
    //
    // async function fetchFromProxy() {
    //     if (!PROXY_URL) return null;
    //     try {
    //         const res = await fetch(PROXY_URL, { cache: 'no-store' });
    //         if (!res.ok) throw new Error('HTTP ' + res.status);
    //         const data = await res.json();
    //         return Array.isArray(data) && data.length ? data : null;
    //     } catch (err) {
    //         console.warn('⚠️ Falha no proxy, mantendo dados locais:', err.message);
    //         return null;
    //     }
    // }
    //
    // async function refresh() {
    //     const fromProxy = await fetchFromProxy();
    //     renderCarousel(fromProxy ?? PRODUCTS);
    // }
    //
    // setTimeout(refresh, 2000);
    // setInterval(refresh, REFRESH_INTERVAL_MS);
})();
/* ============================================================
   MAIN — orquestração da aplicação
   ============================================================ */

(function () {
    // Tema
    initTheme();
    bindThemeToggle();

    // Carrossel
    renderCarousel(PRODUCTS);
})();
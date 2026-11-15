/* ============================================================
   PRODUTOS — catálogo Smart Projects Brasil
   Campo `variation` é OPCIONAL (null nos básicos).
   ============================================================ */

const PRODUCTS = [
    // ==================== 3N3 — PLA básico ====================
    { name: "Filamento PLA 1,75mm 1Kg Branco 3N3",              type: "PLA",  variation: null, color: "Branco",       colorHex: "#f8fafc", price: 105.26, imageKey: "3n3-pla-branco" },
    { name: "Filamento PLA 1,75mm 1Kg Preto 3N3",               type: "PLA",  variation: null, color: "Preto",        colorHex: "#111",    price: 105.26, imageKey: "3n3-pla-preto" },
    { name: "Filamento PLA 1,75mm 1Kg Vermelho 3N3",            type: "PLA",  variation: null, color: "Vermelho",     colorHex: "#dc2626", price: 105.26, imageKey: "3n3-pla-vermelho" },
    { name: "Filamento PLA 1,75mm 1Kg Laranja 3N3",             type: "PLA",  variation: null, color: "Laranja",      colorHex: "#f97316", price: 105.26, imageKey: "3n3-pla-laranja" },
    { name: "Filamento PLA 1,75mm 1Kg Roxo 3N3",                type: "PLA",  variation: null, color: "Roxo",         colorHex: "#8b5cf6", price: 105.26, imageKey: "3n3-pla-roxo" },
    { name: "Filamento PLA 1,75mm 1Kg Fúcsia 3N3",              type: "PLA",  variation: null, color: "Fúcsia",       colorHex: "#d946ef", price: 105.26, imageKey: "3n3-pla-fucsia" },
    { name: "Filamento PLA 1,75mm 1Kg Cinza Escuro 3N3",        type: "PLA",  variation: null, color: "Cinza Escuro", colorHex: "#4a4a4a", price: 105.26, imageKey: "3n3-pla-cinza-escuro" },
    { name: "Filamento PLA 1,75mm 1Kg Natural 3N3",             type: "PLA",  variation: null, color: "Natural",      colorHex: "#e8d5b7", price: 105.26, imageKey: "3n3-pla-natural" },
    { name: "Filamento PLA 1,75mm 1Kg Azul Celeste 3N3",        type: "PLA",  variation: null, color: "Azul Celeste", colorHex: "#38bdf8", price: 105.26, imageKey: "3n3-pla-azul-celeste" },

    // ==================== 3N3 — PLA Silk ====================
    { name: "Filamento PLA Silk 3NSilk 1,75mm 1Kg Cobre 3N3",           type: "PLA", variation: "Silk", color: "Cobre",            colorHex: "#b87333", price: 125.00, imageKey: "3n3-pla-silk-cobre" },
    { name: "Filamento PLA Silk 3NSilk 1,75mm 1Kg Verde Malaquita 3N3", type: "PLA", variation: "Silk", color: "Verde Malaquita",  colorHex: "#0d9488", price: 125.00, imageKey: "3n3-pla-silk-verde-malaquita" },
    { name: "Filamento PLA Silk 3NSilk 1,75mm 1Kg Vermelho 3N3",        type: "PLA", variation: "Silk", color: "Vermelho",         colorHex: "#dc2626", price: 125.00, imageKey: "3n3-pla-silk-vermelho" },
    { name: "Filamento PLA Silk 3NSilk 1,75mm 1Kg Prata 3N3",           type: "PLA", variation: "Silk", color: "Prata",            colorHex: "#c0c0c0", price: 125.00, imageKey: "3n3-pla-silk-prata" },
    { name: "Filamento PLA Silk 3NSilk 1,75mm 1Kg Alumínio 3N3",        type: "PLA", variation: "Silk", color: "Alumínio",         colorHex: "#a8a8a8", price: 125.00, imageKey: "3n3-pla-silk-aluminio" },

    // ==================== 3N3 — PLA+ Matte ====================
    { name: "Filamento PLA+ Matte 3NMax 1,75mm Preto 1Kg",        type: "PLA+", variation: "Matte", color: "Preto Fosco",   colorHex: "#1a1a1a", price: 129.90, imageKey: "3n3-pla-plus-matte-preto" },
    { name: "Filamento PLA+ Matte 3NMax 1,75mm Vermelho 1Kg",     type: "PLA+", variation: "Matte", color: "Vermelho",      colorHex: "#dc2626", price: 129.90, imageKey: "3n3-pla-plus-matte-vermelho" },
    { name: "Filamento PLA+ Matte 3NMax 1,75mm Branco 1Kg",       type: "PLA+", variation: "Matte", color: "Branco",        colorHex: "#f8fafc", price: 129.90, imageKey: "3n3-pla-plus-matte-branco" },
    { name: "Filamento PLA+ Matte 3NMax 1,75mm Amarelo 1Kg",      type: "PLA+", variation: "Matte", color: "Amarelo",       colorHex: "#facc15", price: 115.00, imageKey: "3n3-pla-plus-matte-amarelo" },
    { name: "Filamento PLA+ Matte 3NMax 1,75mm Bronze 1Kg",       type: "PLA+", variation: "Matte", color: "Bronze",        colorHex: "#cd7f32", price: 115.00, imageKey: "3n3-pla-plus-matte-bronze" },
    { name: "Filamento PLA+ Matte 3NMax 1,75mm Uva 1Kg",          type: "PLA+", variation: "Matte", color: "Uva",           colorHex: "#7c3aed", price: 115.00, imageKey: "3n3-pla-plus-matte-uva" },
    { name: "Filamento PLA+ Matte 3NMax 1,75mm Laranja 1Kg",      type: "PLA+", variation: "Matte", color: "Laranja",       colorHex: "#f97316", price: 115.00, imageKey: "3n3-pla-plus-matte-laranja" },
    { name: "Filamento PLA+ Matte 3NMax 1,75mm Cinza Claro 1Kg",  type: "PLA+", variation: "Matte", color: "Cinza Claro",   colorHex: "#9ca3af", price: 115.00, imageKey: "3n3-pla-plus-matte-cinza-claro" },

    // ==================== 3N3 — PETG ====================
    { name: "Filamento PETG 1,75mm 1Kg Branco 3N3",             type: "PETG", variation: null, color: "Branco",        colorHex: "#f1f5f9", price: 114.50, imageKey: "3n3-petg-branco" },
    { name: "Filamento PETG 1,75mm 1Kg Preto 3N3",              type: "PETG", variation: null, color: "Preto",         colorHex: "#111",    price: 114.50, imageKey: "3n3-petg-preto" },
    { name: "Filamento PETG 1,75mm 1Kg Vermelho 3N3",           type: "PETG", variation: null, color: "Vermelho",      colorHex: "#b91c1c", price: 114.50, imageKey: "3n3-petg-vermelho" },
    { name: "Filamento PETG 1,75mm 1Kg Azul 3N3",               type: "PETG", variation: null, color: "Azul",          colorHex: "#3b82f6", price: 114.50, imageKey: "3n3-petg-azul" },
    { name: "Filamento PETG 1,75mm 1Kg Cinza Espacial 3N3",     type: "PETG", variation: null, color: "Cinza Espacial",colorHex: "#4b5563", price: 114.50, imageKey: "3n3-petg-cinza-espacial" },

    // ==================== MULTFILA — PLA básico ====================
    { name: "Filamento PLA 1,75mm 1Kg Laranja MULTFILA",        type: "PLA", variation: null, color: "Laranja",      colorHex: "#f97316", price: 121.90, imageKey: "multfila-pla-laranja" },
    { name: "Filamento PLA 1,75mm 1Kg Rosa Choque MULTFILA",    type: "PLA", variation: null, color: "Rosa Choque",  colorHex: "#ec4899", price: 121.90, imageKey: "multfila-pla-rosa-choque" },
    { name: "Filamento PLA 1,75mm 1Kg Preto MULTFILA",          type: "PLA", variation: null, color: "Preto",        colorHex: "#1e1e1e", price: 121.90, imageKey: "multfila-pla-preto" },
    { name: "Filamento PLA 1,75mm 1Kg Marrom MULTFILA",         type: "PLA", variation: null, color: "Marrom",       colorHex: "#8b5a2b", price: 121.90, imageKey: "multfila-pla-marrom" },
    { name: "Filamento PLA 1,75mm 1Kg Bege Nude MULTFILA",      type: "PLA", variation: null, color: "Bege Nude",    colorHex: "#d4b8a0", price: 121.90, imageKey: "multfila-pla-bege-nude" },

    // ==================== MULTFILA — PLA Silk ====================
    { name: "Filamento PLA Silk 1,75mm 1Kg Rainbow Sweet MULTFILA",      type: "PLA", variation: "Silk",          color: "Rainbow Sweet", colorHex: "#f472b6", price: 188.50, imageKey: "multfila-pla-silk-rainbow-sweet" },
    { name: "Filamento PLA Silk Tricolor 1,75mm 1Kg Dourado Vermelho Azul MULTFILA", type: "PLA", variation: "Silk Tricolor", color: "Tricolor", colorHex: "#0d9488", price: 139.15, imageKey: "multfila-pla-silk-tricolor-dourado-vermelho-azul" },

    // ==================== MULTFILA — PLA Matte ====================
    { name: "Filamento PLA Matte 1,75mm 1Kg Terracota MULTFILA",        type: "PLA", variation: "Matte", color: "Terracota",        colorHex: "#c2410c", price: 125.00, imageKey: "multfila-pla-matte-terracota" },
    { name: "Filamento PLA Matte 1,75mm 1Kg Azul MULTFILA",             type: "PLA", variation: "Matte", color: "Azul",             colorHex: "#3b82f6", price: 125.00, imageKey: "multfila-pla-matte-azul" },
    { name: "Filamento PLA Matte 1,75mm 1Kg Branco MULTFILA",           type: "PLA", variation: "Matte", color: "Branco",           colorHex: "#f8fafc", price: 125.00, imageKey: "multfila-pla-matte-branco" },
    { name: "Filamento PLA Matte 1,75mm 1Kg Azul Brisa MULTFILA",       type: "PLA", variation: "Matte", color: "Azul Brisa",       colorHex: "#38bdf8", price: 125.00, imageKey: "multfila-pla-matte-azul-brisa" },
    { name: "Filamento PLA Matte 1,75mm 1Kg Caramelo MULTFILA",         type: "PLA", variation: "Matte", color: "Caramelo",         colorHex: "#b45309", price: 125.00, imageKey: "multfila-pla-matte-caramelo" },
    { name: "Filamento PLA Matte 1,75mm 1Kg Rainbow Lollipop MULTFILA", type: "PLA", variation: "Matte", color: "Rainbow Lollipop", colorHex: "#f472b6", price: 125.00, imageKey: "multfila-pla-matte-rainbow-lollipop" },
    { name: "Filamento PLA Matte 1,75mm 1Kg Bege Claro MULTFILA",       type: "PLA", variation: "Matte", color: "Bege Claro",       colorHex: "#e8d5b7", price: 125.00, imageKey: "multfila-pla-matte-bege-claro" },
    { name: "Filamento PLA Matte 1,75mm 1Kg Amarelo Limão MULTFILA",    type: "PLA", variation: "Matte", color: "Amarelo Limão",    colorHex: "#fde047", price: 125.00, imageKey: "multfila-pla-matte-amarelo-limao" },

    // ==================== MULTFILA — PETG ====================
    { name: "Filamento PETG 1,75mm 1Kg Branco MULTFILA",        type: "PETG", variation: null, color: "Branco",      colorHex: "#e2e8f0", price: 119.90, imageKey: "multfila-petg-branco" },
    { name: "Filamento PETG 1,75mm 1Kg Preto MULTFILA",         type: "PETG", variation: null, color: "Preto",       colorHex: "#111",    price: 119.90, imageKey: "multfila-petg-preto" },
    { name: "Filamento PETG 1,75mm 1Kg Transparente MULTFILA",  type: "PETG", variation: null, color: "Transparente",colorHex: "#e2e8f0", price: 105.60, imageKey: "multfila-petg-transparente" },
    { name: "Filamento PETG 1,75mm 1Kg Rosa MULTFILA",          type: "PETG", variation: null, color: "Rosa",        colorHex: "#ec4899", price: 119.90, imageKey: "multfila-petg-rosa" },
    { name: "Filamento PETG 1,75mm 1Kg Amarelo MULTFILA",       type: "PETG", variation: null, color: "Amarelo",     colorHex: "#facc15", price: 119.90, imageKey: "multfila-petg-amarelo" },
    { name: "Filamento PETG 1,75mm 1Kg Vermelho MULTFILA",      type: "PETG", variation: null, color: "Vermelho",    colorHex: "#dc2626", price: 119.90, imageKey: "multfila-petg-vermelho" },

    // ==================== MULTFILA — ABS ====================
    { name: "Filamento ABS 1,75mm 1Kg Preto MULTFILA",          type: "ABS", variation: null, color: "Preto",    colorHex: "#111",    price: 109.00, imageKey: "multfila-abs-preto" },
    { name: "Filamento ABS 1,75mm 1Kg Vermelho MULTFILA",       type: "ABS", variation: null, color: "Vermelho", colorHex: "#dc2626", price: 109.00, imageKey: "multfila-abs-vermelho" },

    // ==================== DynaLabs — PLA ====================
    { name: "Filamento PLA 1,75mm 1Kg Laranja Fluo DynaLabs",        type: "PLA", variation: null, color: "Laranja", colorHex: "#f97316", price: 132.00, imageKey: "dynalabs-pla-laranja-fluo" },
    { name: "Filamento PLA 1,75mm 1Kg Verde DynaLabs",          type: "PLA", variation: null, color: "Verde",   colorHex: "#22c55e", price: 132.00, imageKey: "dynalabs-pla-verde" },
    { name: "Filamento PLA 1,75mm 1Kg Cobre DynaLabs",          type: "PLA", variation: null, color: "Cobre",   colorHex: "#b87333", price: 132.00, imageKey: "dynalabs-pla-cobre" },

    // ==================== DynaLabs — PLA Silk ====================
    { name: "Filamento PLA Silk 1,75mm 1Kg Dourado DynaLabs",   type: "PLA", variation: "Silk", color: "Dourado", colorHex: "#d4af37", price: 175.00, imageKey: "dynalabs-pla-silk-dourado" },

    // ==================== DynaLabs — PETG ====================
    { name: "Filamento PETG 1,75mm 1Kg Branco DynaLabs",        type: "PETG", variation: null, color: "Branco", colorHex: "#f8fafc", price: 128.00, imageKey: "dynalabs-petg-branco" },
    { name: "Filamento PETG 1,75mm 1Kg Preto DynaLabs",         type: "PETG", variation: null, color: "Preto",  colorHex: "#111",    price: 128.00, imageKey: "dynalabs-petg-preto" },

    // ==================== GTMax3D — PETG ====================
    { name: "Filamento PETG 1,75mm 1Kg Roxo GTMax3D",           type: "PETG", variation: null, color: "Roxo",    colorHex: "#8b5cf6", price: 128.00, imageKey: "gtmax3d-petg-roxo" },
    { name: "Filamento PETG 1,75mm 1Kg Amarelo GTMax3D",        type: "PETG", variation: null, color: "Amarelo", colorHex: "#facc15", price: 128.00, imageKey: "gtmax3d-petg-amarelo" },

    // ==================== GTMax3D — ABS ====================
    { name: "Filamento ABS 1,75mm 1Kg Rosa GTMax3D",            type: "ABS", variation: null, color: "Rosa",    colorHex: "#f472b6", price: 95.00,  imageKey: "gtmax3d-abs-rosa" },
    { name: "Filamento ABS 1,75mm 1Kg TAN GTMax3D",             type: "ABS", variation: null, color: "TAN",     colorHex: "#c19a6b", price: 95.00,  imageKey: "gtmax3d-abs-tan" },
    { name: "Filamento ABS 1,75mm 1Kg Nude GTMax3D",            type: "ABS", variation: null, color: "Nude",    colorHex: "#e3c6b0", price: 95.00,  imageKey: "gtmax3d-abs-nude" },
    { name: "Filamento ABS 1,75mm 1Kg Verde GTMax3D",           type: "ABS", variation: null, color: "Verde",   colorHex: "#22c55e", price: 95.00,  imageKey: "gtmax3d-abs-verde" },
    { name: "Filamento ABS 1,75mm 1Kg Natural GTMax3D",         type: "ABS", variation: null, color: "Natural", colorHex: "#e8d5b7", price: 95.00,  imageKey: "gtmax3d-abs-natural" },

    // ==================== GTMax3D — ABS MG94 ====================
    { name: "Filamento ABS MG94 1,75mm 1Kg Branco GTMax3D",     type: "ABS", variation: "MG94", color: "Branco", colorHex: "#f8fafc", price: 127.50, imageKey: "gtmax3d-abs-mg94-branco" },
    { name: "Filamento ABS MG94 1,75mm 1Kg Preto GTMax3D",      type: "ABS", variation: "MG94", color: "Preto",  colorHex: "#111",    price: 127.50, imageKey: "gtmax3d-abs-mg94-preto" },
    { name: "Filamento ABS MG94 1,75mm 1Kg Cinza GTMax3D",      type: "ABS", variation: "MG94", color: "Cinza",  colorHex: "#6b7280", price: 127.50, imageKey: "gtmax3d-abs-mg94-cinza" },

    // ==================== GTMax3D — TRITAN ====================
    { name: "Filamento TRITAN 1,75mm 1Kg Preto GTMax3D",        type: "TRITAN", variation: null, color: "Preto", colorHex: "#111", price: 330.00, imageKey: "gtmax3d-tritan-preto" },

    // ==================== 3D FILA — TPU Flex ====================
    { name: "Filamento TPU Flex 1,75mm 1Kg Preto 3D FILA",      type: "TPU", variation: "Flex", color: "Preto",  colorHex: "#0a0a0a", price: 221.00, imageKey: "3dfila-tpu-flex-preto" },
    { name: "Filamento TPU Flex 1,75mm 1Kg Cinza 3D FILA",      type: "TPU", variation: "Flex", color: "Cinza",  colorHex: "#6b7280", price: 193.00, imageKey: "3dfila-tpu-flex-cinza" },
    { name: "Filamento TPU Flex 1,75mm 1Kg Branco 3D FILA",     type: "TPU", variation: "Flex", color: "Branco", colorHex: "#f1f5f9", price: 193.00, imageKey: "3dfila-tpu-flex-branco" },

    // ==================== 3D FILA — PLA ====================
    { name: "Filamento PLA 1,75mm 1Kg Azul 3D FILA",            type: "PLA", variation: null, color: "Azul", colorHex: "#3b82f6", price: 132.00, imageKey: "3dfila-pla-azul" },

    // ==================== 3D FILA — PLA Silk ====================
    { name: "Filamento PLA Silk 1,75mm 1Kg Cobre 3D FILA",      type: "PLA", variation: "Silk", color: "Cobre", colorHex: "#b87333", price: 144.00, imageKey: "3dfila-pla-silk-cobre" },

    // ==================== 3D FILA — PETG XT ====================
    { name: "Filamento PETG XT 1,75mm 1Kg Red Metal 3D FILA",   type: "PETG", variation: "XT", color: "Red Metal",  colorHex: "#b91c1c", price: 127.50, imageKey: "3dfila-petg-xt-red-metal" },
    { name: "Filamento PETG XT 1,75mm 1Kg Blue Metal 3D FILA",  type: "PETG", variation: "XT", color: "Blue Metal", colorHex: "#1d4ed8", price: 119.99, imageKey: "3dfila-petg-xt-blue-metal" },

    // ==================== Bambu Lab — PLA Lite ====================
    { name: "Filamento PLA Lite 1,75mm 1Kg Amarelo Bambu Lab",  type: "PLA", variation: "Lite", color: "Amarelo",    colorHex: "#facc15", price: 142.00, imageKey: "bambu-pla-lite-amarelo" },
    { name: "Filamento PLA Lite 1,75mm 1Kg Azul Ciano Bambu Lab", type: "PLA", variation: "Lite", color: "Azul Ciano", colorHex: "#06b6d4", price: 142.00, imageKey: "bambu-pla-lite-azul-ciano" },
    { name: "Filamento PLA Lite 1,75mm 1Kg Verde Bambu Lab",    type: "PLA", variation: "Lite", color: "Verde",      colorHex: "#22c55e", price: 142.00, imageKey: "bambu-pla-lite-verde" },

    // ==================== Bambu Lab — PLA básico ====================
    { name: "Filamento PLA 1,75mm 1Kg Bronze Bambu Lab",        type: "PLA", variation: null, color: "Bronze",  colorHex: "#cd7f32", price: 178.50, imageKey: "bambu-pla-bronze" },
    { name: "Filamento PLA 1,75mm 1Kg Amarelo Bambu Lab",       type: "PLA", variation: null, color: "Amarelo", colorHex: "#facc15", price: 178.50, imageKey: "bambu-pla-amarelo" },
    { name: "Filamento PLA 1,75mm 1Kg Marrom Bambu Lab",        type: "PLA", variation: null, color: "Marrom",  colorHex: "#8b5a2b", price: 178.50, imageKey: "bambu-pla-marrom" },

    // ==================== Bambu Lab — PLA Silk+ ====================
    { name: "Filamento PLA Silk+ 1,75mm 1Kg Prata Bambu Lab",   type: "PLA", variation: "Silk+", color: "Prata", colorHex: "#c0c0c0", price: 189.00, imageKey: "bambu-pla-silk-plus-prata" },
];
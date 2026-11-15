/* ============================================================
   MAPA DE IMAGENS
   Chave = "<marca>-<tipo>-<variação?>-<cor>"
   Valor = nome do arquivo em images/
   ============================================================ */

const IMAGES_BASE_PATH = "images/";

const IMAGES = {
    // ============ 3N3 — PLA básico ============
    "3n3-pla-branco":              "3n3-pla-branco.jpg",
    "3n3-pla-preto":               "3n3-pla-preto.jpg",
    "3n3-pla-vermelho":            "3n3-pla-vermelho.jpg",
    "3n3-pla-laranja":             "3n3-pla-laranja.jpg",
    "3n3-pla-roxo":                "3n3-pla-roxo.jpg",
    "3n3-pla-fucsia":              "3n3-pla-fucsia.jpg",
    "3n3-pla-cinza-escuro":        "3n3-pla-cinza-escuro.jpg",
    "3n3-pla-natural":             "3n3-pla-natural.jpg",
    "3n3-pla-azul-celeste":        "3n3-pla-azul-celeste.jpg",

    // ============ 3N3 — PLA Silk ============
    "3n3-pla-silk-cobre":          "3n3-pla-silk-cobre.jpg",
    "3n3-pla-silk-verde-malaquita":"3n3-pla-silk-verde-malaquita.jpg",
    "3n3-pla-silk-vermelho":       "3n3-pla-silk-vermelho.jpg",
    "3n3-pla-silk-prata":          "3n3-pla-silk-prata.jpg",
    "3n3-pla-silk-aluminio":       "3n3-pla-silk-aluminio.jpg",

    // ============ 3N3 — PLA+ Matte ============
    "3n3-pla-plus-matte-preto":    "3n3-pla-plus-matte-preto.jpg",
    "3n3-pla-plus-matte-vermelho": "3n3-pla-plus-matte-vermelho.jpg",
    "3n3-pla-plus-matte-branco":   "3n3-pla-plus-matte-branco.jpg",
    "3n3-pla-plus-matte-amarelo":  "3n3-pla-plus-matte-amarelo.jpg",
    "3n3-pla-plus-matte-bronze":   "3n3-pla-plus-matte-bronze.jpg",
    "3n3-pla-plus-matte-uva":      "3n3-pla-plus-matte-uva.jpg",
    "3n3-pla-plus-matte-laranja":  "3n3-pla-plus-matte-laranja.jpg",
    "3n3-pla-plus-matte-cinza-claro": "3n3-pla-plus-matte-cinza-claro.jpg",

    // ============ 3N3 — PETG ============
    "3n3-petg-branco":             "3n3-petg-branco.jpg",
    "3n3-petg-preto":              "3n3-petg-preto.jpg",
    "3n3-petg-vermelho":           "3n3-petg-vermelho.jpg",
    "3n3-petg-azul":               "3n3-petg-azul.jpg",
    "3n3-petg-cinza-espacial":     "3n3-petg-cinza-espacial.jpg",

    // ============ MULTFILA — PLA básico ============
    "multfila-pla-laranja":        "multfila-pla-laranja.jpg",
    "multfila-pla-rosa-choque":    "multfila-pla-rosa-choque.jpg",
    "multfila-pla-preto":          "multfila-pla-preto.jpg",
    "multfila-pla-marrom":         "multfila-pla-marrom.jpg",
    "multfila-pla-bege-nude":      "multfila-pla-bege-nude.jpg",

    // ============ MULTFILA — PLA Silk ============
    "multfila-pla-silk-rainbow-sweet":    "multfila-pla-silk-rainbow-sweet.jpg",
    "multfila-pla-silk-tricolor-dourado-vermelho-azul":   "multfila-pla-silk-tricolor-dourado-vermelho-azul.jpg",
    "multfila-pla-silk-tricolor-vermelho-azul-verde":   "multfila-pla-silk-tricolor-vermelho-azul-verde.jpg",
    "multfila-pla-silk-tricolor-vermelho-dourado-roxo":   "multfila-pla-silk-tricolor-vermelho-dourado-roxo.jpg",
    "multfila-pla-silk-tricolor-verde-roxo-cobre":   "multfila-pla-silk-tricolor-verde-roxo-cobre.jpg",

    // ============ MULTFILA — PLA Matte ============
    "multfila-pla-matte-terracota":       "multfila-pla-matte-terracota.jpg",
    "multfila-pla-matte-azul":            "multfila-pla-matte-azul.jpg",
    "multfila-pla-matte-branco":          "multfila-pla-matte-branco.jpg",
    "multfila-pla-matte-azul-brisa":      "multfila-pla-matte-azul-brisa.jpg",
    "multfila-pla-matte-caramelo":        "multfila-pla-matte-caramelo.jpg",
    "multfila-pla-matte-rainbow-lollipop":"multfila-pla-matte-rainbow-lollipop.jpg",
    "multfila-pla-matte-bege-claro":      "multfila-pla-matte-bege-claro.jpg",
    "multfila-pla-matte-amarelo-limao":   "multfila-pla-matte-amarelo-limao.jpg",

    // ============ MULTFILA — PETG ============
    "multfila-petg-branco":        "multfila-petg-branco.jpg",
    "multfila-petg-preto":         "multfila-petg-preto.jpg",
    "multfila-petg-transparente":  "multfila-petg-transparente.jpg",
    "multfila-petg-rosa":          "multfila-petg-rosa.jpg",
    "multfila-petg-amarelo":       "multfila-petg-amarelo.jpg",
    "multfila-petg-vermelho":      "multfila-petg-vermelho.jpg",

    // ============ MULTFILA — ABS ============
    "multfila-abs-vermelho":       "multfila-abs-vermelho.jpg",
    "multfila-abs-preto":          "multfila-abs-preto.jpg",

    // ============ DynaLabs — PLA ============
    "dynalabs-pla-laranja-fluo":        "dynalabs-pla-laranja-fluo.jpg",
    "dynalabs-pla-verde":          "dynalabs-pla-verde.jpg",
    "dynalabs-pla-cobre":          "dynalabs-pla-cobre.jpg",

    // ============ DynaLabs — PLA Silk ============
    "dynalabs-pla-silk-dourado":   "dynalabs-pla-silk-dourado.jpg",

    // ============ DynaLabs — PETG ============
    "dynalabs-petg-branco":        "dynalabs-petg-branco.jpg",
    "dynalabs-petg-preto":         "dynalabs-petg-preto.jpg",


    // ============ GTMax3D — PETG ============
    "gtmax3d-petg-roxo":           "gtmax3d-petg-roxo.jpg",
    "gtmax3d-petg-amarelo":        "gtmax3d-petg-amarelo.jpg",

    // ============ GTMax3D — ABS ============
    "gtmax3d-abs-rosa":            "gtmax3d-abs-rosa.jpg",
    "gtmax3d-abs-tan":             "gtmax3d-abs-tan.jpg",
    "gtmax3d-abs-nude":            "gtmax3d-abs-nude.jpg",
    "gtmax3d-abs-verde":           "gtmax3d-abs-verde.jpg",
    "gtmax3d-abs-natural":         "gtmax3d-abs-natural.jpg",

    // ============ GTMax3D — ABS MG94 ============
    "gtmax3d-abs-mg94-branco":     "gtmax3d-abs-mg94-branco.jpg",
    "gtmax3d-abs-mg94-preto":      "gtmax3d-abs-mg94-preto.jpg",
    "gtmax3d-abs-mg94-cinza":      "gtmax3d-abs-mg94-cinza.jpg",

    // ============ GTMax3D — TRITAN ============
    "gtmax3d-tritan-preto":        "gtmax3d-tritan-preto.jpg",

    // ============ 3D FILA — TPU Flex ============
    "3dfila-tpu-flex-preto":       "3dfila-tpu-flex-preto.jpg",
    "3dfila-tpu-flex-cinza":       "3dfila-tpu-flex-cinza.jpg",
    "3dfila-tpu-flex-branco":      "3dfila-tpu-flex-branco.jpg",

    // ============ 3D FILA — PLA ============
    "3dfila-pla-azul":             "3dfila-pla-azul.jpg",
    "3dfila-pla-branco-gesso":     "3dfila-pla-branco-gesso.jpg",

    // ============ 3D FILA — PLA Silk ============
    "3dfila-pla-silk-cobre":       "3dfila-pla-silk-cobre.jpg",

    // ============ 3D FILA — PETG XT ============
    "3dfila-petg-xt-red-metal":    "3dfila-petg-xt-red-metal.jpg",
    "3dfila-petg-xt-blue-metal":   "3dfila-petg-xt-blue-metal.jpg",

    // ============ Bambu Lab — PLA Lite ============
    "bambu-pla-lite-amarelo-escuro":      "bambu-pla-lite-amarelo-escuro.jpg",
    "bambu-pla-lite-azul-ciano":   "bambu-pla-lite-azul-ciano.jpg",
    "bambu-pla-lite-verde":        "bambu-pla-lite-verde.jpg",
    "bambu-pla-lite-amarelo":      "bambu-pla-lite-amarelo.jpg",
    "bambu-pla-lite-azul":         "bambu-pla-lite-azul.jpg",

    // ============ Bambu Lab — PLA básico ============
    "bambu-pla-bronze":            "bambu-pla-bronze.jpg",
    "bambu-pla-amarelo":           "bambu-pla-amarelo.jpg",
    "bambu-pla-marrom":            "bambu-pla-marrom.jpg",

    // ============ Bambu Lab — PLA Silk+ ============
    "bambu-pla-silk-plus-prata":   "bambu-pla-silk-plus-prata.jpg",
};
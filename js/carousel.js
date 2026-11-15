/* ============================================================
   CARROSSEL — loop infinito, suporte a arrastar (Mouse/Touch)
   e retomada automática após inatividade.
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

        // Duplica para loop contínuo
        rowEl.appendChild(fragment.cloneNode(true));
        rowEl.appendChild(fragment.cloneNode(true));
    });

    // Configura a interação de arrastar após renderizar
    setupDragToScroll();
}

function setupDragToScroll() {
    const rows = CAROUSEL_ROW_IDS.map(id => document.getElementById(id));
    
    rows.forEach(track => {
        if (!track) return;

        let isDragging = false;
        let startX = 0;
        let currentTranslateX = 0;
        let animationPauseTimer = null;

        // Detecta o valor atual da animação em pixels (para pegar no ponto exato)
        function getCurrentTranslateX() {
            const style = window.getComputedStyle(track);
            const matrix = new DOMMatrixReadOnly(style.transform);
            return matrix.m41; // translateX
        }

        // Inicia o arrasto
        function startDrag(clientX) {
            isDragging = true;
            startX = clientX;
            
            // Pausa a animação CSS
            track.style.animationPlayState = 'paused';
            
            // Salva onde a animação está no momento do clique
            currentTranslateX = getCurrentTranslateX();
            
            // Remove a animação para controlar via JS
            track.style.animationName = 'none';
            track.style.transform = `translateX(${currentTranslateX}px)`;
            track.style.cursor = 'grabbing';
            
            // Previne seleção de texto acidental
            document.body.style.userSelect = 'none';
        }

        // Executa o arrasto
        function moveDrag(clientX) {
            if (!isDragging) return;
            const deltaX = clientX - startX;
            track.style.transform = `translateX(${currentTranslateX + deltaX}px)`;
        }

        // Finaliza o arrasto
        function endDrag() {
            if (!isDragging) return;
            isDragging = false;
            track.style.cursor = 'grab';
            document.body.style.userSelect = '';

            // Armazena o valor final do arrasto
            const finalX = getCurrentTranslateX();

            // Limpa qualquer timer de pausa pendente
            if (animationPauseTimer) clearTimeout(animationPauseTimer);

            // Aguarda 2 segundos de inatividade e então retoma a animação
            animationPauseTimer = setTimeout(() => {
                resumeAnimation(track, finalX);
            }, 2000);
        }

        // Função que volta a rodar a animação suavemente a partir do ponto onde parou
        function resumeAnimation(trackEl, currentX) {
            // Pega a direção e velocidade originais
            const isLeft = trackEl.classList.contains('left');
            const speedClass = Array.from(trackEl.classList).find(c => c.startsWith('speed-'));
            
            // Calcula a largura total (50% do track, pois foi duplicado)
            const halfWidth = trackEl.scrollWidth / 2;
            
            // Normaliza a posição para que fique sempre entre -halfWidth e 0
            let normalizedX = currentX % halfWidth;
            if (normalizedX > 0) normalizedX -= halfWidth;

            // Remove as animações atuais
            trackEl.style.animation = 'none';
            trackEl.style.transform = `translateX(${normalizedX}px)`;

            // Força o navegador a recalcular o estilo (reflow)
            void trackEl.offsetWidth;

            // Reaplica a classe original e zera os estilos inline para a animação CSS voltar a rodar
            trackEl.style.animation = '';
            trackEl.style.transform = '';
            
            // Se estava no meio da transição, o navegador reinicia a animação do 0.
            // Isso é o comportamento esperado para loops contínuos.
        }

        // Eventos de Mouse
        track.addEventListener('mousedown', (e) => {
            e.preventDefault();
            startDrag(e.clientX);
        });
        window.addEventListener('mousemove', (e) => moveDrag(e.clientX));
        window.addEventListener('mouseup', endDrag);

        // Eventos de Touch
        track.addEventListener('touchstart', (e) => {
            // Não previne default para permitir scroll vertical se necessário
            startDrag(e.touches[0].clientX);
        }, { passive: true });
        
        track.addEventListener('touchmove', (e) => {
            moveDrag(e.touches[0].clientX);
        }, { passive: true });
        
        track.addEventListener('touchend', endDrag);
        track.addEventListener('touchcancel', endDrag);
    });
}
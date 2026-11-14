/* ============================================================
   PLACEHOLDER SVG — exibido quando não há imagem disponível
   ============================================================ */

function createPlaceholderSvg(colorHex, type) {
    const safe = colorHex || '#6b7280';
    const label = (type || '3D').substring(0, 6);
    const id = 'g' + safe.replace('#', '') + Math.random().toString(36).slice(2, 7);

    return `
    <svg class="placeholder-svg" viewBox="0 0 240 120" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <radialGradient id="${id}" cx="30%" cy="40%">
                <stop offset="0%" stop-color="${safe}" stop-opacity="0.55"/>
                <stop offset="100%" stop-color="${safe}" stop-opacity="0.05"/>
            </radialGradient>
        </defs>
        <rect width="240" height="120" fill="url(#${id})"/>
        <circle cx="120" cy="52" r="22" fill="${safe}" opacity="0.85"/>
        <circle cx="120" cy="52" r="22" fill="none" stroke="rgba(255,255,255,0.35)" stroke-width="2"/>
        <circle cx="120" cy="52" r="6" fill="rgba(255,255,255,0.7)"/>
        <text x="120" y="98" text-anchor="middle" font-size="11" fill="rgba(255,255,255,0.7)" font-family="sans-serif">${label}</text>
    </svg>`;
}
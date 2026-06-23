/* ===========================================
   Shared keyboard navigation for slide pages.
   Reads prev/next URLs from the chrome links.
   ArrowRight / Space / PageDown -> next
   ArrowLeft / PageUp           -> prev
   Home key                     -> index.html
   =========================================== */
(function () {
    const links = document.querySelectorAll('.chrome a');
    let prev = null, next = null, home = 'index.html';
    links.forEach(a => {
        const t = a.textContent.trim().toLowerCase();
        if (t.startsWith('next')) next = a.getAttribute('href');
        else if (t.startsWith('prev')) prev = a.getAttribute('href');
        else if (t === 'home') home = a.getAttribute('href');
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') {
            if (next) { e.preventDefault(); location.href = next; }
        } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
            if (prev) { e.preventDefault(); location.href = prev; }
        } else if (e.key === 'Home') {
            e.preventDefault(); location.href = home;
        }
    });
})();

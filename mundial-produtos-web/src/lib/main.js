/* Scripts compartilhados — páginas de produto */
document.addEventListener('DOMContentLoaded', function () {
  // Lazy-load iframe do YouTube ao entrar na viewport (opcional)
  var videoWraps = document.querySelectorAll('.video-wrap');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var iframe = entry.target.querySelector('iframe');
          if (iframe && iframe.dataset.src) {
            iframe.src = iframe.dataset.src;
            iframe.removeAttribute('data-src');
          }
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '100px' });
    videoWraps.forEach(function (el) { return io.observe(el); });
  }
});

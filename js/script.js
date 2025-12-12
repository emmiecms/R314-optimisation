(function(){
  function markLoadedImages() {
    const imgs = document.querySelectorAll('.card img');
    imgs.forEach(img => {
      if (img.complete) {
        img.classList.add('loaded');
      } else {
        img.addEventListener('load', () => img.classList.add('loaded'), { once: true });
      }
    });
  }

  function backgroundWork() {
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => {}, { timeout: 2000 });
    } else {
      setTimeout(() => {}, 0);
    }
  }

  window.addEventListener('load', function(){
    markLoadedImages();
    backgroundWork();
  });

  backgroundWork();
})();

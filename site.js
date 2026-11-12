const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open);
});

const lightbox = document.querySelector('.lightbox');
if (lightbox) {
  const big = lightbox.querySelector('img');
  document.querySelectorAll('.gallery figure').forEach(fig => {
    fig.addEventListener('click', () => {
      const img = fig.querySelector('img');
      big.src = img.src;
      big.alt = img.alt;
      lightbox.classList.add('open');
    });
  });
  lightbox.addEventListener('click', () => lightbox.classList.remove('open'));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') lightbox.classList.remove('open'); });
}

document.querySelectorAll('.year').forEach(el => el.textContent = new Date().getFullYear());

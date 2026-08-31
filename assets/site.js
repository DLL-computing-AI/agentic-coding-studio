const button = document.querySelector('.menu-button');
const nav = document.querySelector('.nav-list');
button?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  button.setAttribute('aria-expanded', String(open));
});
document.querySelectorAll('.nav-list a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open'); button?.setAttribute('aria-expanded', 'false');
}));
addEventListener('scroll', () => document.querySelector('.site-header')?.classList.toggle('scrolled', scrollY > 8), {passive:true});

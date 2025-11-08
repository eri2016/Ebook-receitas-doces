const header = document.getElementById('siteHeader');
const toggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('main-nav');

// Mostrar/esconder o menu mobile
toggle.addEventListener('click', () => {
  nav.classList.toggle('show');
  toggle.setAttribute('aria-expanded', nav.classList.contains('show'));
});

// Mostrar/ocultar header e botão conforme scroll
window.addEventListener('scroll', () => {
  const atTop = window.scrollY <= 10;
  header.classList.toggle('transparent', !atTop);
  toggle.classList.toggle('hidden', !atTop);
});

// Atualizar ano automaticamente
document.getElementById('year').textContent = new Date().getFullYear();

// Fecha o menu se clicar fora dele
document.addEventListener('click', (e) => {
  const isClickInsideNav = nav.contains(e.target);
  const isClickOnToggle = toggle.contains(e.target);
  if (!isClickInsideNav && !isClickOnToggle && nav.classList.contains('show')) {
    nav.classList.remove('show');
    toggle.setAttribute('aria-expanded', 'false');
  }
});

// Botão "Voltar ao topo"
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    backToTop.classList.add('show');
  } else {
    backToTop.classList.remove('show');
  }
});

if (backToTop) {
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

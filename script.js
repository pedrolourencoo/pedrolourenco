// —————————————————————————————————————————
// 0) Trocar de idioma (disponível logo ao carregar)
// —————————————————————————————————————————
function changeLanguage(lang) {
  const path = window.location.pathname;

  if (lang === 'en') {
    if (path.startsWith('/projetos')) {
      window.location.href = '/en/projects/';
    } else {
      window.location.href = '/en/';
    }
  } else {
    if (path.startsWith('/en/projects')) {
      window.location.href = '/projetos/';
    } else {
      window.location.href = '/';
    }
  }
}

// Executa quando o DOM estiver carregado
window.addEventListener('DOMContentLoaded', () => {

  // —————————————————————————————————————————
  // 1) Ajusta a bandeira atual e o texto
  // —————————————————————————————————————————
  const currentFlag = document.getElementById('current-flag');
  const currentLangText = document.getElementById('current-lang-text');
  const path = window.location.pathname;

  const isEnglish = path === '/en/' || path.startsWith('/en/');
  if (isEnglish) {
    currentFlag.src = 'https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg';
    currentLangText.textContent = 'English';
  } else {
    currentFlag.src = 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Portugal.svg';
    currentLangText.textContent = 'Português';
  }

  // —————————————————————————————————————————
  // 2) Animações GSAP
  // —————————————————————————————————————————
  gsap.from(".title", {
    opacity: 0,
    y: -50,
    duration: 1.5,
    ease: "power4.out"
  });

  gsap.from(".subtitle", {
    opacity: 0,
    y: 30,
    delay: 0.5,
    duration: 1.5,
    ease: "power4.out"
  });

  gsap.utils.toArray("section").forEach((sec) => {
    gsap.from(sec, {
      scrollTrigger: {
        trigger: sec,
        start: "top 80%",
      },
      opacity: 0,
      y: 50,
      duration: 1.2,
      ease: "power2.out"
    });
  });

  // —————————————————————————————————————————
  // 3) Tabs - Mostrar conteúdo
  // —————————————————————————————————————————
  window.mostrarConteudo = function(id) {
    document.querySelectorAll('.conteudo-tab').forEach(tab => tab.classList.remove('ativo'));
    document.getElementById(id).classList.add('ativo');

    document.querySelectorAll('.tab-link').forEach(link => link.classList.remove('ativo'));
    const trigger = event.currentTarget || event.target;
    trigger.classList.add('ativo');
  };

  // —————————————————————————————————————————
  // 4) Menu - Abrir/Fechar
  // —————————————————————————————————————————
  window.toggleMenu = function() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('open');
  };

  const menuIcon = document.querySelector('.menu-icon');
  const menu = document.querySelector('.navbar .menu');
  const closeMenu = document.createElement('div');
  closeMenu.classList.add('close-menu');
  closeMenu.innerHTML = '×';
  menu.appendChild(closeMenu);

  menuIcon.addEventListener('click', () => {
    menu.classList.add('open');
    document.body.style.overflow = 'hidden';
    document.getElementById('lang-dropdown').style.display = 'none';
  });

  closeMenu.addEventListener('click', () => {
    menu.classList.remove('open');
    document.body.style.overflow = '';
  });

  document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !menuIcon.contains(e.target)) {
      menu.classList.remove('open');
      document.body.style.overflow = '';
    }
  });

  document.querySelectorAll('.navbar .menu li a').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

// 5) Dropdown de idiomas
window.toggleDropdown = function() {
  const dropdown = document.getElementById('lang-dropdown');
  // Verifica se o dropdown está atualmente visível e alterna a visibilidade
  dropdown.classList.toggle('show');
  if (dropdown.classList.contains('show')) {
    document.getElementById('lang-dropdown').style.display = 'block';
  } else {
    document.getElementById('lang-dropdown').style.display = 'none';
  }
};

window.addEventListener('click', function(e) {
  if (!e.target.closest('.lang-selector')) {
    document.getElementById('lang-dropdown').style.display = 'none';
  }
});

});
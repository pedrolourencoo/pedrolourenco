// Animações GSAP
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

function mostrarConteudo(id) {
  // Ativar conteúdo
  document.querySelectorAll('.conteudo-tab').forEach(tab => {
    tab.classList.remove('ativo');
  });
  document.getElementById(id).classList.add('ativo');

  // Trocar estilo das tabs
  document.querySelectorAll('.tab-link').forEach(link => {
    link.classList.remove('ativo');
  });

  // Captura do evento com segurança
  const trigger = event.currentTarget || event.target;
  trigger.classList.add('ativo');
}

function toggleMenu() {
  const menu = document.querySelector('.menu');
  menu.classList.toggle('open');
}

// Seleciona os elementos necessários
const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('.navbar .menu');
const closeMenu = document.createElement('div');
closeMenu.classList.add('close-menu');
closeMenu.innerHTML = '×'; // O "X" para fechar o menu
menu.appendChild(closeMenu);

// Função para abrir o menu
menuIcon.addEventListener('click', () => {
  menu.classList.add('open');
  document.body.style.overflow = 'hidden'; // Desabilita o scroll quando o menu está aberto
  
  // Fecha o dropdown de idiomas quando o menu é aberto
  const dropdown = document.getElementById('lang-dropdown');
  dropdown.style.display = 'none';
});

// Função para fechar o menu
closeMenu.addEventListener('click', () => {
  menu.classList.remove('open');
  document.body.style.overflow = ''; // Habilita o scroll novamente
});

// Fecha o menu quando clica fora dele
document.addEventListener('click', (e) => {
  if (!menu.contains(e.target) && !menuIcon.contains(e.target)) {
    menu.classList.remove('open');
    document.body.style.overflow = ''; // Habilita o scroll novamente
  }
});

// Fecha o menu quando clica nos links do menu (Exemplo: Início, Sobre Mim, Projetos, Contatos)
const menuLinks = document.querySelectorAll('.navbar .menu li a');
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('open');
    document.body.style.overflow = ''; // Habilita o scroll novamente
  });
});

// Configuração de traduções
i18next.init({
  lng: 'pt', // idioma inicial
  resources: {
    pt: {
      translation: {
        welcome: "Olá, eu sou o <span>Pedro Lourenço</span>",
        subtitle: "Desenvolvedor Web",
        about: "Sobre Mim",
        skills: "Skills",
        education: "Educação",
        experience: "Experiência"
      }
    },
    en: {
      translation: {
        welcome: "Hello, I am <span>Pedro Lourenço</span>",
        subtitle: "Web Developer",
        about: "About Me",
        skills: "Skills",
        education: "Education",
        experience: "Experience"
      }
    }
  }
});

// Função para mudar o idioma
function changeLanguage(language) {
  i18next.changeLanguage(language, function(err, t) {
    document.querySelector('.title').innerHTML = i18next.t('welcome');
    document.querySelector('.subtitle').innerHTML = i18next.t('subtitle');
    document.querySelector('.sobre h2').innerText = i18next.t('about');
    document.querySelector('.sobre-tabs span:nth-child(1)').innerText = i18next.t('skills');
    document.querySelector('.sobre-tabs span:nth-child(2)').innerText = i18next.t('education');
    document.querySelector('.sobre-tabs span:nth-child(3)').innerText = i18next.t('experience');
  });
}

// Script para alternar dropdown de idiomas
function toggleDropdown() {
  const dropdown = document.getElementById('lang-dropdown');
  dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

// Fecha o dropdown ao clicar fora
document.addEventListener('click', function(event) {
  const langSelector = document.querySelector('.lang-selector');
  if (!langSelector.contains(event.target)) {
    document.getElementById('lang-dropdown').style.display = 'none';
  }
});

// Atualiza a bandeira atual dependendo do site
window.onload = function() {
  const currentFlag = document.getElementById('current-flag');
  if (window.location.pathname.startsWith('/en')) {
    currentFlag.src = 'https://upload.wikimedia.org/wikipedia/commons/a/ae/Flag_of_the_United_Kingdom.svg';
  } else {
    currentFlag.src = 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Portugal.svg';
  }
};

window.onload = function() {
  var userLang = navigator.language || navigator.userLanguage; 
  if (userLang.includes('en')) {
    window.location.href = 'en/index.html'; // Redireciona para a versão em inglês
  } else {
    window.location.href = 'pt/index.html'; // Redireciona para a versão em português
  }
};

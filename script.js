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

// Função para mostrar conteúdo da aba (Tabs)
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
  event.target.classList.add('ativo');
}

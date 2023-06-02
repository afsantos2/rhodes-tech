;(() => {
  addEventListener('DOMContentLoaded', menuToggle)

  function menuToggle() {
    const header = document.querySelector('header')
    const menuIcone = header?.querySelector('.js-menu-icone')
    const menulista = header?.querySelector('.js-menu-lista')
    const botaoFechar = header.querySelector('.botao-fechar')
  
    menuIcone?.addEventListener('click', () => {
      menulista.classList.remove('hidden')
    })
  
    botaoFechar?.addEventListener('click', () => {
      menulista.classList.add('hidden')
    })
  } 
})()
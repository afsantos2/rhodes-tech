;(() => {
  addEventListener('DOMContentLoaded', () => {
    menuToggle()
    bannSlider()
  })

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
  
  function bannSlider() {
    let contador = 1 

    setInterval(() => {
      document.querySelector(`#radio${contador}`).checked = true
      contador++
      if (contador > 4) {
        contador = 1
      }     
    }, 3000)
  }
})()
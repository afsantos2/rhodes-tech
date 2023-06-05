;(() => {
  addEventListener('DOMContentLoaded', () => {
    menuToggle()
    bannSlider()
  })

  function menuToggle() {
    const header = document.querySelector('header')
    const menuIcon = header?.querySelector('.js-menu-icon')
    const menulist = header?.querySelector('.js-menu-list')
    const closeBtn = header?.querySelector('.close-btn')
  
    menuIcon?.addEventListener('click', () => {
      menulist.classList.remove('hidden')
    })
  
    closeBtn?.addEventListener('click', () => {
      menulist.classList.add('hidden')
    })
  }
  
  function bannSlider() {
    let count = 1 

    setInterval(() => {
      document.querySelector(`#radio${count}`).checked = true
      count++
      if (count > 4) {
        count = 1
      }     
    }, 3000)
  }
})()
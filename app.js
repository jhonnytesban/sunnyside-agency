const menu = document.getElementById('menu')
const menuList = document.getElementById('menuList')

menu.addEventListener('click', () => {
  menuList.classList.toggle('nav__list-deactive')
  menuList.classList.toggle('nav__list-active')
})
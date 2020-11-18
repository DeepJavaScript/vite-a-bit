import './navbar.css'
import logo from '../../assets/images/logo.jpg'

export function createNavbarComponent () {
  const navbarComponent = document.createElement('header')
  navbarComponent.classList.add('header')

  navbarComponent.innerHTML = `
  <nav class="wrapper">
    <a href="#" class="logo">
      <img src="${logo}">
      <p>ZERO TYPE</p>
    </a>
    <ul class="nav">
      <li class="nav_item">
        <a href="#" class="button">Home</a>
      </li>
      <li class="nav_item">
        <a href="#" class="button">Feature</a>
      </li>
      <li class="nav_item">
        <a href="#" class="button">News</a>
      </li>
      <li class="nav_item">
        <a href="#" class="button">About</a>
      </li>
      <li class="nav_item">
        <a href="#"  class="button">Contact</a>
      </li>
    </ul>
  </nav>
  `

  return navbarComponent
}

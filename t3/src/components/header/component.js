import './style.css'
import logo from '../../assets/images/logo.png'

export default  `
    <header>
      <h1 class="row no-gutters justify-content-center py-3 bg-white m-0">
        <a href="#"
          class="col-8 col-md-12 text-center">
          <img src="${logo}"
              alt="Garden Walkthrough"
              class="img-fluid" />
        </a>
      </h1>
      <!-- nav -->
      <nav class="navbar navbar-expand-md p-0 custom_bg-color">
        <button class="navbar-toggler m-3 m-md-0 custom_navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation">
          <span class="navbar-toggler-icon custom_navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse"
            id="navbarNav">
          <ul class="navbar-nav nav-justified w-100">
            <li class="nav-item">
              <a class="nav-link custom_nav-link"
                href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link custom_nav-link"
                href="#">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link custom_nav-link"
                href="#">Plants</a>
            </li>
            <li class="nav-item">
              <a class="nav-link custom_nav-link"
                href="#">Gardens</a>
            </li>
            <li class="nav-item">
              <a class="nav-link custom_nav-link"
                href="#">News</a>
            </li>
            <li class="nav-item">
              <a class="nav-link custom_nav-link"
                href="#">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    <header>
`
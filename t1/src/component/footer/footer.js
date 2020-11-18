import './footer.css'

export function createFooterComponent () {
  const footerComponent = document.createElement('footer')
  footerComponent.classList.add('footer')

  footerComponent.innerHTML = `
  <div class="wrapper">
    <span>&copy; 2023 Zerotype. All Rights Reserved.</span>
    <ul class="footer_list">
      <li class="footer_list_item"><a href="#"
           class="button"><i class="fab fa-facebook-square fa-3x"></i></a></li>
      <li class="footer_list_item"><a href="#"
           class="button"><i class="fab fa-google-plus-square fa-3x"></i></a></li>
      <li class="footer_list_item"><a href="#"
           class="button"><i class="fab fa-twitter-square fa-3x"></i></a></li>
      <li class="footer_list_item"><a href="#"
           class="button"><i class="fab fa-pinterest-square fa-3x"></i></a></li>
    </ul>
  </div>
  `

  return footerComponent
}

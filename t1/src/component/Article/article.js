import './article.css'
import box from '../../assets/images/box.jpg'

export function createArticleComponent () {
  const articleComponent = document.createElement('main')

  articleComponent.innerHTML = `
  <section class="main_container">
    <div class="article">
      <h1 class="title">IDEAS?</h1>
      <h2 class="subtitle">This is just a place holder.</h2>
      <p class="text">You can remove any link to our website from this website template,you're free to use this
        website template without linking back to us.</p>
      <div class="button_area">
        <a href="#"
           class="button_box">TRY IT NOW!</a>
        <p class="button_text">Don't worry is for free.</p>
      </div>
    </div>
    <div class="container_img">
      <img src="${box}"
           alt="Banner box">
    </div>
    </div>
  </section>
  <section class="article_container">
    <h1 class="article_title">This is just a place holder.</h1>
    <div class="article_cloumn_box">
      <p class="article_elements">You can remove any link to our website from this website template, you're free to
        use this website template without linking back to us.</p>
      <p class="article_elements">This is just a place holder, so you can see what the site would look like.</p>
      <p class="article_elements">You can remove any link to our website from this website template, you're free to
        use this website template without linking back to us. This is just a place holder, so you can see what the
        site would look like.</p>
      <p class="article_elements">You can remove any link to our website from this website template, you're free to
        use this website template without linking back to us.</p>
      <p class="article_elements">This is just a place holder, so you can see what the site would look like.</p>
      <p class="article_elements">You can remove any link to our website from this website template, you're free to
        use this website template without linking back to us. This is just a place holder, so you can see what the
        site would look like.</p>
    </div>
  </section>
  `

  return articleComponent
}

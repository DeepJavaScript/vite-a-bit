import Chm from "./../libs/Chm";

const template = `<div class="container-fluid">
  <div class="row">
    <div class="col-12 col-sm-12">
      <nav class="menu my-3 py-2 navbar navbar-expand-lg navbar-light bg-faded">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item active">
              <a class="nav-link" href="##">PRODUCTS</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="##">CAMPAINGS</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="##">SERVICES</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="##">BRANDS</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="##">ABOUT US</a>
            </li>
            <li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input class="search form-control mr-sm-2" type="text" placeholder="Search">
          </form>
        </div>
      </nav>
    </div>
  </div>
</div>`

export default new Chm({
  template
})

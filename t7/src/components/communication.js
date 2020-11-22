const template = document.createElement('template');
template.innerHTML = `<div class="container-fluid">
  <div class="row">
    <div class="col-12 col-sm-12">
      <div class="contact text-right">
        <span>
          <i class="fa fa-envelope"></i>
          090-223-44-66
        </span>
        <span>
          <i class="fa fa-phone"></i>
          help@trendd.com
        </span>
      </div>
    </div>
  </div>
</div>`

module.exports = template.innerHTML;

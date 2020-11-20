import img from "../img/logo.png";

const header = document.createElement("template")
header.innerHTML = `
<header class="navbar-expand-md navbar-light">
	<div class="d-flex justify-content-around justify-content-md-center align-items-center">
		<h1>
			<img class="img-fluid" src="${img}" alt="Logo">
		</h1>
		<button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>
	</div>
	<nav class="navbar navbar-collapse collapse" id="navbarToggler">
		<div class="w-100 navbar-nav m-0 text-center">
			<a class="nav-item nav-link active" href="##">Home <span class="sr-only">(current)</span></a>
			<a class="nav-item nav-link" href="##">About</a>
			<a class="nav-item nav-link" href="##">Plants</a>
			<a class="nav-item nav-link" href="##">Gardens</a>
			<a class="nav-item nav-link" href="##">News</a>
			<a class="nav-item nav-link" href="##">Contact</a>
		</div>
	</nav>
</header>
`
// module.exports = header
export default header
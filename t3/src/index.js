import "./sass/main.scss";
import printMe from "./print.js";

var handler = printMe;

const header = document.querySelector("header._container");
header.addEventListener("mouseover", handler);

if (module.hot) {
	module.hot.accept('./print.js', function () {
		console.log('Accepting the updated printMe module!');
		printMe();

		// print.js 因為 HMR 而更新但是 listener 還是綁在舊的 printMe
		header.removeEventListener("mouseover", handler);
		header.addEventListener("mouseover", printMe);
		handler = printMe;
	})
}
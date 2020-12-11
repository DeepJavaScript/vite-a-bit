/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/feature.js":
/*!************************!*
  !*** ./src/feature.js ***!
  \************************/
/***/ (() => {

var holes = document.querySelectorAll('.hole');
var scoreBoard = document.querySelector('.score');
var moles = document.querySelectorAll('.mole');
var starButton = document.querySelector('.starButton');
var lastHole;
var timeUp = false;
var score = 0;
starButton.addEventListener('click', startGame);
moles.forEach(function (mole) {
  return mole.addEventListener('click', bonk);
});

function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes) {
  var idx = Math.floor(Math.random() * holes.length);
  var hole = holes[idx];

  if (hole === lastHole) {
    console.log('Ah nah thats the same one bud');
    return randomHole(holes);
  }

  lastHole = hole;
  return hole;
}

function peep() {
  var time = randomTime(200, 1000);
  var hole = randomHole(holes);
  hole.classList.add('up');
  setTimeout(function () {
    hole.classList.remove('up');
    if (!timeUp) peep();
  }, time);
}

function startGame() {
  scoreBoard.textContent = 0;
  timeUp = false;
  score = 0;
  peep();
  setTimeout(function () {
    return timeUp = true;
  }, 10000);
}

function bonk(e) {
  if (!e.isTrusted) return; // cheater!

  score++;
  this.parentNode.classList.remove('up');
  scoreBoard.textContent = score;
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _feature_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./feature.js */ "./src/feature.js");
/* harmony import */ var _feature_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_feature_js__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "./src/style.css":
/*!***********************!*
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aGFjLWEtbW9sZS13ZWJwYWNrLy4vc3JjL2ZlYXR1cmUuanMiLCJ3ZWJwYWNrOi8vd2hhYy1hLW1vbGUtd2VicGFjay8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly93aGFjLWEtbW9sZS13ZWJwYWNrLy4vc3JjL3N0eWxlLmNzcz9mY2MxIiwid2VicGFjazovL3doYWMtYS1tb2xlLXdlYnBhY2svd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2hhYy1hLW1vbGUtd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93aGFjLWEtbW9sZS13ZWJwYWNrL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93aGFjLWEtbW9sZS13ZWJwYWNrL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2hhYy1hLW1vbGUtd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3doYWMtYS1tb2xlLXdlYnBhY2svd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbImhvbGVzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwic2NvcmVCb2FyZCIsInF1ZXJ5U2VsZWN0b3IiLCJtb2xlcyIsInN0YXJCdXR0b24iLCJsYXN0SG9sZSIsInRpbWVVcCIsInNjb3JlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0YXJ0R2FtZSIsImZvckVhY2giLCJtb2xlIiwiYm9uayIsInJhbmRvbVRpbWUiLCJtaW4iLCJtYXgiLCJNYXRoIiwicm91bmQiLCJyYW5kb20iLCJyYW5kb21Ib2xlIiwiaWR4IiwiZmxvb3IiLCJsZW5ndGgiLCJob2xlIiwiY29uc29sZSIsImxvZyIsInBlZXAiLCJ0aW1lIiwiY2xhc3NMaXN0IiwiYWRkIiwic2V0VGltZW91dCIsInJlbW92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QTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDckJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxnQ0FBZ0MsWUFBWTtXQUM1QztXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHNGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7O1VDTkE7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGhvbGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhvbGUnKTtcbmNvbnN0IHNjb3JlQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2NvcmUnKTtcbmNvbnN0IG1vbGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1vbGUnKTtcbmNvbnN0IHN0YXJCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhckJ1dHRvbicpO1xuXG5sZXQgbGFzdEhvbGU7XG5sZXQgdGltZVVwID0gZmFsc2U7XG5sZXQgc2NvcmUgPSAwO1xuXG5zdGFyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3RhcnRHYW1lKTtcbm1vbGVzLmZvckVhY2goKG1vbGUpID0+IG1vbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBib25rKSk7XG5cbmZ1bmN0aW9uIHJhbmRvbVRpbWUobWluLCBtYXgpIHtcbiAgcmV0dXJuIE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluKTtcbn1cblxuZnVuY3Rpb24gcmFuZG9tSG9sZShob2xlcykge1xuICBjb25zdCBpZHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBob2xlcy5sZW5ndGgpO1xuICBjb25zdCBob2xlID0gaG9sZXNbaWR4XTtcbiAgaWYgKGhvbGUgPT09IGxhc3RIb2xlKSB7XG4gICAgY29uc29sZS5sb2coJ0FoIG5haCB0aGF0cyB0aGUgc2FtZSBvbmUgYnVkJyk7XG4gICAgcmV0dXJuIHJhbmRvbUhvbGUoaG9sZXMpO1xuICB9XG4gIGxhc3RIb2xlID0gaG9sZTtcbiAgcmV0dXJuIGhvbGU7XG59XG5cbmZ1bmN0aW9uIHBlZXAoKSB7XG4gIGNvbnN0IHRpbWUgPSByYW5kb21UaW1lKDIwMCwgMTAwMCk7XG4gIGNvbnN0IGhvbGUgPSByYW5kb21Ib2xlKGhvbGVzKTtcbiAgaG9sZS5jbGFzc0xpc3QuYWRkKCd1cCcpO1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBob2xlLmNsYXNzTGlzdC5yZW1vdmUoJ3VwJyk7XG4gICAgaWYgKCF0aW1lVXApIHBlZXAoKTtcbiAgfSwgdGltZSk7XG59XG5cbmZ1bmN0aW9uIHN0YXJ0R2FtZSgpIHtcbiAgc2NvcmVCb2FyZC50ZXh0Q29udGVudCA9IDA7XG4gIHRpbWVVcCA9IGZhbHNlO1xuICBzY29yZSA9IDA7XG4gIHBlZXAoKTtcbiAgc2V0VGltZW91dCgoKSA9PiAodGltZVVwID0gdHJ1ZSksIDEwMDAwKTtcbn1cblxuZnVuY3Rpb24gYm9uayhlKSB7XG4gIGlmICghZS5pc1RydXN0ZWQpIHJldHVybjsgLy8gY2hlYXRlciFcbiAgc2NvcmUrKztcbiAgdGhpcy5wYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUoJ3VwJyk7XG4gIHNjb3JlQm9hcmQudGV4dENvbnRlbnQgPSBzY29yZTtcbn1cbiIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0ICcuL2ZlYXR1cmUuanMnO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiBtb2R1bGVbJ2RlZmF1bHQnXSA6XG5cdFx0KCkgPT4gbW9kdWxlO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZVxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgdXNlZCAnZXhwb3J0cycgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuIl0sInNvdXJjZVJvb3QiOiIifQ==
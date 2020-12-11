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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aGFjLWEtbW9sZS13ZWJwYWNrLy4vc3JjL2ZlYXR1cmUuanMiLCJ3ZWJwYWNrOi8vd2hhYy1hLW1vbGUtd2VicGFjay8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly93aGFjLWEtbW9sZS13ZWJwYWNrLy4vc3JjL3N0eWxlLmNzcz9mY2MxIiwid2VicGFjazovL3doYWMtYS1tb2xlLXdlYnBhY2svd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2hhYy1hLW1vbGUtd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93aGFjLWEtbW9sZS13ZWJwYWNrL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93aGFjLWEtbW9sZS13ZWJwYWNrL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2hhYy1hLW1vbGUtd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3doYWMtYS1tb2xlLXdlYnBhY2svd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbImhvbGVzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwic2NvcmVCb2FyZCIsInF1ZXJ5U2VsZWN0b3IiLCJtb2xlcyIsInN0YXJCdXR0b24iLCJsYXN0SG9sZSIsInRpbWVVcCIsInNjb3JlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0YXJ0R2FtZSIsImZvckVhY2giLCJtb2xlIiwiYm9uayIsInJhbmRvbVRpbWUiLCJtaW4iLCJtYXgiLCJNYXRoIiwicm91bmQiLCJyYW5kb20iLCJyYW5kb21Ib2xlIiwiaWR4IiwiZmxvb3IiLCJsZW5ndGgiLCJob2xlIiwiY29uc29sZSIsImxvZyIsInBlZXAiLCJ0aW1lIiwiY2xhc3NMaXN0IiwiYWRkIiwic2V0VGltZW91dCIsInJlbW92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QTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDckJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxnQ0FBZ0MsWUFBWTtXQUM1QztXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHNGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7O1VDTkE7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGhvbGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhvbGUnKTtcbmNvbnN0IHNjb3JlQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2NvcmUnKTtcbmNvbnN0IG1vbGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1vbGUnKTtcbmNvbnN0IHN0YXJCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhckJ1dHRvbicpO1xubGV0IGxhc3RIb2xlO1xubGV0IHRpbWVVcCA9IGZhbHNlO1xubGV0IHNjb3JlID0gMDtcblxuc3RhckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN0YXJ0R2FtZSk7XG5tb2xlcy5mb3JFYWNoKChtb2xlKSA9PiBtb2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYm9uaykpO1xuXG5mdW5jdGlvbiByYW5kb21UaW1lKG1pbiwgbWF4KSB7XG4gIHJldHVybiBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbik7XG59XG5cbmZ1bmN0aW9uIHJhbmRvbUhvbGUoaG9sZXMpIHtcbiAgY29uc3QgaWR4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogaG9sZXMubGVuZ3RoKTtcbiAgY29uc3QgaG9sZSA9IGhvbGVzW2lkeF07XG4gIGlmIChob2xlID09PSBsYXN0SG9sZSkge1xuICAgIGNvbnNvbGUubG9nKCdBaCBuYWggdGhhdHMgdGhlIHNhbWUgb25lIGJ1ZCcpO1xuICAgIHJldHVybiByYW5kb21Ib2xlKGhvbGVzKTtcbiAgfVxuICBsYXN0SG9sZSA9IGhvbGU7XG4gIHJldHVybiBob2xlO1xufVxuXG5mdW5jdGlvbiBwZWVwKCkge1xuICBjb25zdCB0aW1lID0gcmFuZG9tVGltZSgyMDAsIDEwMDApO1xuICBjb25zdCBob2xlID0gcmFuZG9tSG9sZShob2xlcyk7XG4gIGhvbGUuY2xhc3NMaXN0LmFkZCgndXAnKTtcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgaG9sZS5jbGFzc0xpc3QucmVtb3ZlKCd1cCcpO1xuICAgIGlmICghdGltZVVwKSBwZWVwKCk7XG4gIH0sIHRpbWUpO1xufVxuXG5mdW5jdGlvbiBzdGFydEdhbWUoKSB7XG4gIHNjb3JlQm9hcmQudGV4dENvbnRlbnQgPSAwO1xuICB0aW1lVXAgPSBmYWxzZTtcbiAgc2NvcmUgPSAwO1xuICBwZWVwKCk7XG4gIHNldFRpbWVvdXQoKCkgPT4gKHRpbWVVcCA9IHRydWUpLCAxMDAwMCk7XG59XG5cbmZ1bmN0aW9uIGJvbmsoZSkge1xuICBpZiAoIWUuaXNUcnVzdGVkKSByZXR1cm47IC8vIGNoZWF0ZXIhXG4gIHNjb3JlKys7XG4gIHRoaXMucGFyZW50Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKCd1cCcpO1xuICBzY29yZUJvYXJkLnRleHRDb250ZW50ID0gc2NvcmU7XG59XG4iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCAnLi9mZWF0dXJlLmpzJztcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gbW9kdWxlWydkZWZhdWx0J10gOlxuXHRcdCgpID0+IG1vZHVsZTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGVcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbi8vIFRoaXMgZW50cnkgbW9kdWxlIHVzZWQgJ2V4cG9ydHMnIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbiJdLCJzb3VyY2VSb290IjoiIn0=
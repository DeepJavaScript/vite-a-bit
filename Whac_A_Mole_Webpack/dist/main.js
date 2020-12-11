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

moles.forEach(function (mole) {
  return mole.addEventListener('click', bonk);
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aGFjLWEtbW9sZS13ZWJwYWNrLy4vc3JjL2ZlYXR1cmUuanMiLCJ3ZWJwYWNrOi8vd2hhYy1hLW1vbGUtd2VicGFjay8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly93aGFjLWEtbW9sZS13ZWJwYWNrLy4vc3JjL3N0eWxlLmNzcz9mY2MxIiwid2VicGFjazovL3doYWMtYS1tb2xlLXdlYnBhY2svd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2hhYy1hLW1vbGUtd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93aGFjLWEtbW9sZS13ZWJwYWNrL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93aGFjLWEtbW9sZS13ZWJwYWNrL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2hhYy1hLW1vbGUtd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3doYWMtYS1tb2xlLXdlYnBhY2svd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbImhvbGVzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwic2NvcmVCb2FyZCIsInF1ZXJ5U2VsZWN0b3IiLCJtb2xlcyIsInN0YXJCdXR0b24iLCJsYXN0SG9sZSIsInRpbWVVcCIsInNjb3JlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0YXJ0R2FtZSIsInJhbmRvbVRpbWUiLCJtaW4iLCJtYXgiLCJNYXRoIiwicm91bmQiLCJyYW5kb20iLCJyYW5kb21Ib2xlIiwiaWR4IiwiZmxvb3IiLCJsZW5ndGgiLCJob2xlIiwiY29uc29sZSIsImxvZyIsInBlZXAiLCJ0aW1lIiwiY2xhc3NMaXN0IiwiYWRkIiwic2V0VGltZW91dCIsInJlbW92ZSIsInRleHRDb250ZW50IiwiYm9uayIs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Q0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3JCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsZ0NBQWdDLFlBQVk7V0FDNUM7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSxzRjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7OztVQ05BO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBob2xlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ob2xlJyk7XG5jb25zdCBzY29yZUJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNjb3JlJyk7XG5jb25zdCBtb2xlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2xlJyk7XG5jb25zdCBzdGFyQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXJCdXR0b24nKTtcbmxldCBsYXN0SG9sZTtcbmxldCB0aW1lVXAgPSBmYWxzZTtcbmxldCBzY29yZSA9IDA7XG5cbnN0YXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzdGFydEdhbWUpO1xuXG5mdW5jdGlvbiByYW5kb21UaW1lKG1pbiwgbWF4KSB7XG4gIHJldHVybiBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbik7XG59XG5cbmZ1bmN0aW9uIHJhbmRvbUhvbGUoaG9sZXMpIHtcbiAgY29uc3QgaWR4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogaG9sZXMubGVuZ3RoKTtcbiAgY29uc3QgaG9sZSA9IGhvbGVzW2lkeF07XG4gIGlmIChob2xlID09PSBsYXN0SG9sZSkge1xuICAgIGNvbnNvbGUubG9nKCdBaCBuYWggdGhhdHMgdGhlIHNhbWUgb25lIGJ1ZCcpO1xuICAgIHJldHVybiByYW5kb21Ib2xlKGhvbGVzKTtcbiAgfVxuICBsYXN0SG9sZSA9IGhvbGU7XG4gIHJldHVybiBob2xlO1xufVxuXG5mdW5jdGlvbiBwZWVwKCkge1xuICBjb25zdCB0aW1lID0gcmFuZG9tVGltZSgyMDAsIDEwMDApO1xuICBjb25zdCBob2xlID0gcmFuZG9tSG9sZShob2xlcyk7XG4gIGhvbGUuY2xhc3NMaXN0LmFkZCgndXAnKTtcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgaG9sZS5jbGFzc0xpc3QucmVtb3ZlKCd1cCcpO1xuICAgIGlmICghdGltZVVwKSBwZWVwKCk7XG4gIH0sIHRpbWUpO1xufVxuXG5mdW5jdGlvbiBzdGFydEdhbWUoKSB7XG4gIHNjb3JlQm9hcmQudGV4dENvbnRlbnQgPSAwO1xuICB0aW1lVXAgPSBmYWxzZTtcbiAgc2NvcmUgPSAwO1xuICBwZWVwKCk7XG4gIHNldFRpbWVvdXQoKCkgPT4gKHRpbWVVcCA9IHRydWUpLCAxMDAwMCk7XG59XG5cbmZ1bmN0aW9uIGJvbmsoZSkge1xuICBpZiAoIWUuaXNUcnVzdGVkKSByZXR1cm47IC8vIGNoZWF0ZXIhXG4gIHNjb3JlKys7XG4gIHRoaXMucGFyZW50Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKCd1cCcpO1xuICBzY29yZUJvYXJkLnRleHRDb250ZW50ID0gc2NvcmU7XG59XG5cbm1vbGVzLmZvckVhY2goKG1vbGUpID0+IG1vbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBib25rKSk7XG4iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCAnLi9mZWF0dXJlLmpzJzsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IG1vZHVsZVsnZGVmYXVsdCddIDpcblx0XHQoKSA9PiBtb2R1bGU7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4vLyBUaGlzIGVudHJ5IG1vZHVsZSB1c2VkICdleHBvcnRzJyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG4iXSwic291cmNlUm9vdCI6IiJ9
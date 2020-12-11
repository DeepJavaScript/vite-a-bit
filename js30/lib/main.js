"use strict";

require("core-js/modules/es.array.for-each");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.object.entries");

require("core-js/modules/es.object.from-entries");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.promise");

require("core-js/modules/es.promise.finally");

require("core-js/modules/es.string.includes");

require("core-js/modules/es.string.match-all");

require("core-js/modules/web.dom-collections.for-each");

require("regenerator-runtime/runtime");

require("./main.css");

var _ref;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var _marked = /*#__PURE__*/regeneratorRuntime.mark(generatorFunc);

var holes = document.querySelectorAll('.hole');
var scoreBoard = document.querySelector('.score');
var moles = document.querySelectorAll('.mole');
var lastHole;
var timeUp = false;
var score = 0;

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
  var _hole$classList;

  var time = randomTime(200, 1000);
  var hole = randomHole(holes);
  (_hole$classList = hole.classList) === null || _hole$classList === void 0 ? void 0 : _hole$classList.add('up');
  setTimeout(function () {
    var _hole$classList2;

    (_hole$classList2 = hole.classList) === null || _hole$classList2 === void 0 ? void 0 : _hole$classList2.remove('up');
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
}); // ===================================
// 測試 Babel polyfill
// generator function

function generatorFunc(i) {
  return regeneratorRuntime.wrap(function generatorFunc$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return i + 1;

        case 2:
          _context.next = 4;
          return i + 2;

        case 4:
          _context.next = 6;
          return i + 3;

        case 6:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

var generator = generatorFunc(10);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value); // # ES2016

var ES2016 = 'xxx'.includes('x');
console.log(ES2016); // # ES2017

var ES2017 = Object.entries({
  a: 1
});
console.log(ES2017); // # ES2018

var ES2018 = Promise.resolve(1).finally();
console.log(ES2018); // # ES2019

var ES2019 = Object.fromEntries([["a", 1]]);
console.log(ES2019); // # ES2020

var ES2020 = 'abc'.matchAll(/\w/g);
console.log(_toConsumableArray(ES2020)); // # ES2021

var ES2021 = (_ref = null) !== null && _ref !== void 0 ? _ref : 'default';
console.log(ES2021);
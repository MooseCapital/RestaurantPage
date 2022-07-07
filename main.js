/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contactDisplay": () => (/* binding */ contactDisplay)
/* harmony export */ });
function contactDisplay() {
    const home = document.querySelector(".home");
    const menu = document.querySelector(".menu");
    const contact = document.querySelector(".contact");
    const div1 = document.querySelector(".div1");
    const div2 = document.querySelector(".div2");
    const div3 = document.querySelector(".div3");
    const footer = document.querySelector("footer");
    footer.style.position = "absolute";
    const p = document.querySelectorAll(".div2 p")


    p.forEach(para => {
        div2.removeChild(para);
    })

    if (div1.contains(document.querySelector(".food"))) {
        div1.removeChild(document.querySelector(".food"));
    }
    if (div2.contains(document.querySelector(".dessert"))) {
        div2.removeChild(document.querySelector(".dessert"));
    }

    if (div3.contains(document.querySelector(".wine"))) {
        div3.removeChild(document.querySelector(".wine"));
    }

    const info2 = document.createElement("p");
    info2.classList.add("info2");
    div2.appendChild(info2);



    document.querySelector(".title").innerText = "Contact";

    document.querySelector(".subheader1").innerText = "Takeout Orders";
    document.querySelector(".subheader2").innerText = "Head Chef";
    document.querySelector(".subheader3").innerText = "Business Number";
    document.querySelector(".info1").innerText = "(402)-333-1111";
    document.querySelector(".info3").innerText = "(402)-234-1234";
    document.querySelector(".info2").innerText = "(402)-990-1421";


    if (!contact.classList.contains("active")) {
        home.classList.remove("active");
        home.disabled = false;
        menu.classList.remove("active");
        menu.disabled = false;
        contact.classList.add("active");
        contact.disabled = true;
    }























}




/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "homeDisplay": () => (/* binding */ homeDisplay)
/* harmony export */ });
function homeDisplay() {
    const home = document.querySelector(".home");
    const menu = document.querySelector(".menu");
    const contact = document.querySelector(".contact");
    const div1 = document.querySelector(".div1");
    const div2 = document.querySelector(".div2");
    const div3 = document.querySelector(".div3");
    const footer = document.querySelector("footer");
    footer.style.position = "relative";

    document.querySelector(".title").innerText = "Vigoli's Restaurant";

    document.querySelector(".subheader1").innerText = "History";

    document.querySelector(".info1").innerText = "While in college, Brooklyn, NY native, Liam Vigoli started his appetite for\n" +
        "                making people happy through food. He sold hotdogs from a wagon, now our “Salad\n" +
        "                Wagon” on the side of 23rd st. in Manhattan, NYC. Eventually Vigoli’s was\n" +
        "                established in 1954. Using his Sicilian family recipes and his charming\n" +
        "                personality, he made his mark in New york. In 1958, Liam took a break from the\n" +
        "                restaurant business to pursue another business venture, Act One Limousine. Liam\n" +
        "                decided to hang onto the décor and sentimental gifts that adorned the restaurant\n" +
        "                walls. Good thing he did, because in 1965, his daughter, Alissa Cerami\n" +
        "                convinced Fred to reopen Cerami’s as business partners and bring back the\n" +
        "                nostalgic energy and look of the original Cerami’s with a norhtern flair. Literally\n" +
        "                growing up in the restaurant business, Alissa acquired a passion for cooking and\n" +
        "                entrepreneurship. With the desire of making people happy with good food and\n" +
        "                welcoming staff, Liam & Alissa make a great team.";

        document.querySelector(".subheader2").innerText = "Hours";

        const sunday = document.createElement("p");
        sunday.classList.add("sunday");
        sunday.innerText = "Sunday: 8am - 8pm";

        //div2.appendChild(sunday);

        const monday = document.createElement("p");
        monday.classList.add("monday");
        monday.innerText = "Monday: 6am - 6pm";

        //div2.appendChild(monday);

        const tuesday = document.createElement("p");
        tuesday.classList.add("tuesday");
        tuesday.innerText = "Tuesday: 6am - 6pm";

        //div2.appendChild(tuesday);

        const wednesday = document.createElement("p");
        wednesday.classList.add("wednesday");
        wednesday.innerText = "Wednesday: 6am - 6pm";

        //div2.appendChild(wednesday);

        const thursday = document.createElement("p");
        thursday.classList.add("thursday");
        thursday.innerText = "Thursday: 6am - 10pm";

        //div2.appendChild(thursday);

        const friday = document.createElement("p");
        friday.classList.add("friday");
        friday.innerText = "Friday: 6am - 10pm";

        //div2.appendChild(friday);

        const saturday = document.createElement("p");
        saturday.classList.add("saturday");
        saturday.innerText = "Saturday: 8am - 10pm";

        //div2.appendChild(saturday);

        document.querySelector(".subheader3").innerText = "location";
        document.querySelector(".info3").innerText = "23rd West St NYC, New York";

        if (!div2.contains(document.querySelector(".monday"))) {
            div2.appendChild(sunday);
            div2.appendChild(monday);
            div2.appendChild(tuesday);
            div2.appendChild(wednesday);
            div2.appendChild(thursday);
            div2.appendChild(friday);
            div2.appendChild(saturday);
        }

        if (div1.contains(document.querySelector(".food"))) {
            div1.removeChild(document.querySelector(".food"));
        }
       if (div2.contains(document.querySelector(".dessert"))) {
            div2.removeChild(document.querySelector(".dessert"));
        }

       if (div3.contains(document.querySelector(".wine"))) {
             div3.removeChild(document.querySelector(".wine"));
       }

        if (!home.classList.contains("active")) {
            home.classList.add("active");
            home.disabled = true;
            menu.classList.remove("active");
            menu.disabled = false;
            contact.classList.remove("active");
            contact.disabled = false;
        }






}



/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menuDisplay": () => (/* binding */ menuDisplay)
/* harmony export */ });
function menuDisplay() {
    const div1 = document.querySelector(".div1");
    const div2 = document.querySelector(".div2");
    const div3 = document.querySelector(".div3");
    const footer = document.querySelector("footer");
    footer.style.position = "relative";
    const p = document.querySelectorAll(".div2 p");
    const home = document.querySelector(".home");
    const menu = document.querySelector(".menu");
    const contact = document.querySelector(".contact");


    p.forEach(para => {
        div2.removeChild(para);
    })
    document.querySelector(".title").innerText = "Menu";

    document.querySelector(".subheader1").innerText = "Food";
    document.querySelector(".info1").innerText = "";
    document.querySelector(".info3").innerText = "";
    const info2 = document.createElement("p");
    info2.classList.add("info2");
    div2.appendChild(info2);


    const food = document.createElement("img");
    food.classList.add("food");
    food.src = "entre.png";


    document.querySelector(".subheader2").innerText = "Dessert"

    const dessert = document.createElement("img");
    dessert.classList.add("dessert");
    dessert.src = "dessert.png";



    document.querySelector(".subheader3").innerText = "Red Wine";
    const wine = document.createElement("img");
    wine.classList.add("wine");
    wine.src = "wine.png";



    if (!div1.contains(document.querySelector(".food"))) {
        div1.appendChild(food);

    }

    if (!div2.contains(document.querySelector(".dessert"))) {
        div2.appendChild(dessert)
    }

    if (!div3.contains(document.querySelector(".wine"))) {
        div3.appendChild(wine);
    }

    if (!menu.classList.contains("active")) {
        home.classList.remove("active");
        home.disabled = false;
        menu.classList.add("active");
        menu.disabled = true;
        contact.classList.remove("active");
        contact.disabled = false;
    }














}


















/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ "./src/contact.js");




(0,_home__WEBPACK_IMPORTED_MODULE_0__.homeDisplay)();


document.querySelector(".home").onclick = _home__WEBPACK_IMPORTED_MODULE_0__.homeDisplay;

document.querySelector(".menu").onclick = _menu__WEBPACK_IMPORTED_MODULE_1__.menuDisplay;

document.querySelector(".contact").onclick = _contact__WEBPACK_IMPORTED_MODULE_2__.contactDisplay;



























})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7OztBQUlBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0JBOzs7Ozs7Ozs7Ozs7Ozs7OztBQzFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQU9BOzs7Ozs7Ozs7Ozs7Ozs7O0FDOUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUFlQTs7QUFFcUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ2xGckI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTm1DO0FBQ0E7QUFDTTs7QUFFekMsa0RBQVc7OztBQUdYLDBDQUEwQyw4Q0FBVzs7QUFFckQsMENBQTBDLDhDQUFXOztBQUVyRCw2Q0FBNkMsb0RBQWMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gY29udGFjdERpc3BsYXkoKSB7XG4gICAgY29uc3QgaG9tZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG9tZVwiKTtcbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51XCIpO1xuICAgIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhY3RcIik7XG4gICAgY29uc3QgZGl2MSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGl2MVwiKTtcbiAgICBjb25zdCBkaXYyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kaXYyXCIpO1xuICAgIGNvbnN0IGRpdjMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRpdjNcIik7XG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvb3RlclwiKTtcbiAgICBmb290ZXIuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgY29uc3QgcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZGl2MiBwXCIpXG5cblxuICAgIHAuZm9yRWFjaChwYXJhID0+IHtcbiAgICAgICAgZGl2Mi5yZW1vdmVDaGlsZChwYXJhKTtcbiAgICB9KVxuXG4gICAgaWYgKGRpdjEuY29udGFpbnMoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb29kXCIpKSkge1xuICAgICAgICBkaXYxLnJlbW92ZUNoaWxkKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9vZFwiKSk7XG4gICAgfVxuICAgIGlmIChkaXYyLmNvbnRhaW5zKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGVzc2VydFwiKSkpIHtcbiAgICAgICAgZGl2Mi5yZW1vdmVDaGlsZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRlc3NlcnRcIikpO1xuICAgIH1cblxuICAgIGlmIChkaXYzLmNvbnRhaW5zKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2luZVwiKSkpIHtcbiAgICAgICAgZGl2My5yZW1vdmVDaGlsZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndpbmVcIikpO1xuICAgIH1cblxuICAgIGNvbnN0IGluZm8yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgaW5mbzIuY2xhc3NMaXN0LmFkZChcImluZm8yXCIpO1xuICAgIGRpdjIuYXBwZW5kQ2hpbGQoaW5mbzIpO1xuXG5cblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGl0bGVcIikuaW5uZXJUZXh0ID0gXCJDb250YWN0XCI7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN1YmhlYWRlcjFcIikuaW5uZXJUZXh0ID0gXCJUYWtlb3V0IE9yZGVyc1wiO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3ViaGVhZGVyMlwiKS5pbm5lclRleHQgPSBcIkhlYWQgQ2hlZlwiO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3ViaGVhZGVyM1wiKS5pbm5lclRleHQgPSBcIkJ1c2luZXNzIE51bWJlclwiO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5mbzFcIikuaW5uZXJUZXh0ID0gXCIoNDAyKS0zMzMtMTExMVwiO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5mbzNcIikuaW5uZXJUZXh0ID0gXCIoNDAyKS0yMzQtMTIzNFwiO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5mbzJcIikuaW5uZXJUZXh0ID0gXCIoNDAyKS05OTAtMTQyMVwiO1xuXG5cbiAgICBpZiAoIWNvbnRhY3QuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSB7XG4gICAgICAgIGhvbWUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgICAgaG9tZS5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICBtZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgIG1lbnUuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgY29udGFjdC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgICBjb250YWN0LmRpc2FibGVkID0gdHJ1ZTtcbiAgICB9XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxufVxuXG5cbmV4cG9ydCB7Y29udGFjdERpc3BsYXl9OyIsImZ1bmN0aW9uIGhvbWVEaXNwbGF5KCkge1xuICAgIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhvbWVcIik7XG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudVwiKTtcbiAgICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWN0XCIpO1xuICAgIGNvbnN0IGRpdjEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRpdjFcIik7XG4gICAgY29uc3QgZGl2MiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGl2MlwiKTtcbiAgICBjb25zdCBkaXYzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kaXYzXCIpO1xuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb290ZXJcIik7XG4gICAgZm9vdGVyLnN0eWxlLnBvc2l0aW9uID0gXCJyZWxhdGl2ZVwiO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50aXRsZVwiKS5pbm5lclRleHQgPSBcIlZpZ29saSdzIFJlc3RhdXJhbnRcIjtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3ViaGVhZGVyMVwiKS5pbm5lclRleHQgPSBcIkhpc3RvcnlcIjtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5mbzFcIikuaW5uZXJUZXh0ID0gXCJXaGlsZSBpbiBjb2xsZWdlLCBCcm9va2x5biwgTlkgbmF0aXZlLCBMaWFtIFZpZ29saSBzdGFydGVkIGhpcyBhcHBldGl0ZSBmb3JcXG5cIiArXG4gICAgICAgIFwiICAgICAgICAgICAgICAgIG1ha2luZyBwZW9wbGUgaGFwcHkgdGhyb3VnaCBmb29kLiBIZSBzb2xkIGhvdGRvZ3MgZnJvbSBhIHdhZ29uLCBub3cgb3VyIOKAnFNhbGFkXFxuXCIgK1xuICAgICAgICBcIiAgICAgICAgICAgICAgICBXYWdvbuKAnSBvbiB0aGUgc2lkZSBvZiAyM3JkIHN0LiBpbiBNYW5oYXR0YW4sIE5ZQy4gRXZlbnR1YWxseSBWaWdvbGnigJlzIHdhc1xcblwiICtcbiAgICAgICAgXCIgICAgICAgICAgICAgICAgZXN0YWJsaXNoZWQgaW4gMTk1NC4gVXNpbmcgaGlzIFNpY2lsaWFuIGZhbWlseSByZWNpcGVzIGFuZCBoaXMgY2hhcm1pbmdcXG5cIiArXG4gICAgICAgIFwiICAgICAgICAgICAgICAgIHBlcnNvbmFsaXR5LCBoZSBtYWRlIGhpcyBtYXJrIGluIE5ldyB5b3JrLiBJbiAxOTU4LCBMaWFtIHRvb2sgYSBicmVhayBmcm9tIHRoZVxcblwiICtcbiAgICAgICAgXCIgICAgICAgICAgICAgICAgcmVzdGF1cmFudCBidXNpbmVzcyB0byBwdXJzdWUgYW5vdGhlciBidXNpbmVzcyB2ZW50dXJlLCBBY3QgT25lIExpbW91c2luZS4gTGlhbVxcblwiICtcbiAgICAgICAgXCIgICAgICAgICAgICAgICAgZGVjaWRlZCB0byBoYW5nIG9udG8gdGhlIGTDqWNvciBhbmQgc2VudGltZW50YWwgZ2lmdHMgdGhhdCBhZG9ybmVkIHRoZSByZXN0YXVyYW50XFxuXCIgK1xuICAgICAgICBcIiAgICAgICAgICAgICAgICB3YWxscy4gR29vZCB0aGluZyBoZSBkaWQsIGJlY2F1c2UgaW4gMTk2NSwgaGlzIGRhdWdodGVyLCBBbGlzc2EgQ2VyYW1pXFxuXCIgK1xuICAgICAgICBcIiAgICAgICAgICAgICAgICBjb252aW5jZWQgRnJlZCB0byByZW9wZW4gQ2VyYW1p4oCZcyBhcyBidXNpbmVzcyBwYXJ0bmVycyBhbmQgYnJpbmcgYmFjayB0aGVcXG5cIiArXG4gICAgICAgIFwiICAgICAgICAgICAgICAgIG5vc3RhbGdpYyBlbmVyZ3kgYW5kIGxvb2sgb2YgdGhlIG9yaWdpbmFsIENlcmFtaeKAmXMgd2l0aCBhIG5vcmh0ZXJuIGZsYWlyLiBMaXRlcmFsbHlcXG5cIiArXG4gICAgICAgIFwiICAgICAgICAgICAgICAgIGdyb3dpbmcgdXAgaW4gdGhlIHJlc3RhdXJhbnQgYnVzaW5lc3MsIEFsaXNzYSBhY3F1aXJlZCBhIHBhc3Npb24gZm9yIGNvb2tpbmcgYW5kXFxuXCIgK1xuICAgICAgICBcIiAgICAgICAgICAgICAgICBlbnRyZXByZW5ldXJzaGlwLiBXaXRoIHRoZSBkZXNpcmUgb2YgbWFraW5nIHBlb3BsZSBoYXBweSB3aXRoIGdvb2QgZm9vZCBhbmRcXG5cIiArXG4gICAgICAgIFwiICAgICAgICAgICAgICAgIHdlbGNvbWluZyBzdGFmZiwgTGlhbSAmIEFsaXNzYSBtYWtlIGEgZ3JlYXQgdGVhbS5cIjtcblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN1YmhlYWRlcjJcIikuaW5uZXJUZXh0ID0gXCJIb3Vyc1wiO1xuXG4gICAgICAgIGNvbnN0IHN1bmRheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBzdW5kYXkuY2xhc3NMaXN0LmFkZChcInN1bmRheVwiKTtcbiAgICAgICAgc3VuZGF5LmlubmVyVGV4dCA9IFwiU3VuZGF5OiA4YW0gLSA4cG1cIjtcblxuICAgICAgICAvL2RpdjIuYXBwZW5kQ2hpbGQoc3VuZGF5KTtcblxuICAgICAgICBjb25zdCBtb25kYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgbW9uZGF5LmNsYXNzTGlzdC5hZGQoXCJtb25kYXlcIik7XG4gICAgICAgIG1vbmRheS5pbm5lclRleHQgPSBcIk1vbmRheTogNmFtIC0gNnBtXCI7XG5cbiAgICAgICAgLy9kaXYyLmFwcGVuZENoaWxkKG1vbmRheSk7XG5cbiAgICAgICAgY29uc3QgdHVlc2RheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICB0dWVzZGF5LmNsYXNzTGlzdC5hZGQoXCJ0dWVzZGF5XCIpO1xuICAgICAgICB0dWVzZGF5LmlubmVyVGV4dCA9IFwiVHVlc2RheTogNmFtIC0gNnBtXCI7XG5cbiAgICAgICAgLy9kaXYyLmFwcGVuZENoaWxkKHR1ZXNkYXkpO1xuXG4gICAgICAgIGNvbnN0IHdlZG5lc2RheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICB3ZWRuZXNkYXkuY2xhc3NMaXN0LmFkZChcIndlZG5lc2RheVwiKTtcbiAgICAgICAgd2VkbmVzZGF5LmlubmVyVGV4dCA9IFwiV2VkbmVzZGF5OiA2YW0gLSA2cG1cIjtcblxuICAgICAgICAvL2RpdjIuYXBwZW5kQ2hpbGQod2VkbmVzZGF5KTtcblxuICAgICAgICBjb25zdCB0aHVyc2RheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICB0aHVyc2RheS5jbGFzc0xpc3QuYWRkKFwidGh1cnNkYXlcIik7XG4gICAgICAgIHRodXJzZGF5LmlubmVyVGV4dCA9IFwiVGh1cnNkYXk6IDZhbSAtIDEwcG1cIjtcblxuICAgICAgICAvL2RpdjIuYXBwZW5kQ2hpbGQodGh1cnNkYXkpO1xuXG4gICAgICAgIGNvbnN0IGZyaWRheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBmcmlkYXkuY2xhc3NMaXN0LmFkZChcImZyaWRheVwiKTtcbiAgICAgICAgZnJpZGF5LmlubmVyVGV4dCA9IFwiRnJpZGF5OiA2YW0gLSAxMHBtXCI7XG5cbiAgICAgICAgLy9kaXYyLmFwcGVuZENoaWxkKGZyaWRheSk7XG5cbiAgICAgICAgY29uc3Qgc2F0dXJkYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgc2F0dXJkYXkuY2xhc3NMaXN0LmFkZChcInNhdHVyZGF5XCIpO1xuICAgICAgICBzYXR1cmRheS5pbm5lclRleHQgPSBcIlNhdHVyZGF5OiA4YW0gLSAxMHBtXCI7XG5cbiAgICAgICAgLy9kaXYyLmFwcGVuZENoaWxkKHNhdHVyZGF5KTtcblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN1YmhlYWRlcjNcIikuaW5uZXJUZXh0ID0gXCJsb2NhdGlvblwiO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmluZm8zXCIpLmlubmVyVGV4dCA9IFwiMjNyZCBXZXN0IFN0IE5ZQywgTmV3IFlvcmtcIjtcblxuICAgICAgICBpZiAoIWRpdjIuY29udGFpbnMoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb25kYXlcIikpKSB7XG4gICAgICAgICAgICBkaXYyLmFwcGVuZENoaWxkKHN1bmRheSk7XG4gICAgICAgICAgICBkaXYyLmFwcGVuZENoaWxkKG1vbmRheSk7XG4gICAgICAgICAgICBkaXYyLmFwcGVuZENoaWxkKHR1ZXNkYXkpO1xuICAgICAgICAgICAgZGl2Mi5hcHBlbmRDaGlsZCh3ZWRuZXNkYXkpO1xuICAgICAgICAgICAgZGl2Mi5hcHBlbmRDaGlsZCh0aHVyc2RheSk7XG4gICAgICAgICAgICBkaXYyLmFwcGVuZENoaWxkKGZyaWRheSk7XG4gICAgICAgICAgICBkaXYyLmFwcGVuZENoaWxkKHNhdHVyZGF5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkaXYxLmNvbnRhaW5zKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9vZFwiKSkpIHtcbiAgICAgICAgICAgIGRpdjEucmVtb3ZlQ2hpbGQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb29kXCIpKTtcbiAgICAgICAgfVxuICAgICAgIGlmIChkaXYyLmNvbnRhaW5zKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGVzc2VydFwiKSkpIHtcbiAgICAgICAgICAgIGRpdjIucmVtb3ZlQ2hpbGQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZXNzZXJ0XCIpKTtcbiAgICAgICAgfVxuXG4gICAgICAgaWYgKGRpdjMuY29udGFpbnMoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53aW5lXCIpKSkge1xuICAgICAgICAgICAgIGRpdjMucmVtb3ZlQ2hpbGQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53aW5lXCIpKTtcbiAgICAgICB9XG5cbiAgICAgICAgaWYgKCFob21lLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkge1xuICAgICAgICAgICAgaG9tZS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgICAgICAgaG9tZS5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICBtZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgICAgICBtZW51LmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgICAgICBjb250YWN0LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgICAgICBjb250YWN0LmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIH1cblxuXG5cblxuXG5cbn1cblxuZXhwb3J0IHtob21lRGlzcGxheX07IiwiZnVuY3Rpb24gbWVudURpc3BsYXkoKSB7XG4gICAgY29uc3QgZGl2MSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGl2MVwiKTtcbiAgICBjb25zdCBkaXYyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kaXYyXCIpO1xuICAgIGNvbnN0IGRpdjMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRpdjNcIik7XG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvb3RlclwiKTtcbiAgICBmb290ZXIuc3R5bGUucG9zaXRpb24gPSBcInJlbGF0aXZlXCI7XG4gICAgY29uc3QgcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZGl2MiBwXCIpO1xuICAgIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhvbWVcIik7XG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudVwiKTtcbiAgICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWN0XCIpO1xuXG5cbiAgICBwLmZvckVhY2gocGFyYSA9PiB7XG4gICAgICAgIGRpdjIucmVtb3ZlQ2hpbGQocGFyYSk7XG4gICAgfSlcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRpdGxlXCIpLmlubmVyVGV4dCA9IFwiTWVudVwiO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdWJoZWFkZXIxXCIpLmlubmVyVGV4dCA9IFwiRm9vZFwiO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5mbzFcIikuaW5uZXJUZXh0ID0gXCJcIjtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmluZm8zXCIpLmlubmVyVGV4dCA9IFwiXCI7XG4gICAgY29uc3QgaW5mbzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBpbmZvMi5jbGFzc0xpc3QuYWRkKFwiaW5mbzJcIik7XG4gICAgZGl2Mi5hcHBlbmRDaGlsZChpbmZvMik7XG5cblxuICAgIGNvbnN0IGZvb2QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGZvb2QuY2xhc3NMaXN0LmFkZChcImZvb2RcIik7XG4gICAgZm9vZC5zcmMgPSBcImVudHJlLnBuZ1wiO1xuXG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN1YmhlYWRlcjJcIikuaW5uZXJUZXh0ID0gXCJEZXNzZXJ0XCJcblxuICAgIGNvbnN0IGRlc3NlcnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGRlc3NlcnQuY2xhc3NMaXN0LmFkZChcImRlc3NlcnRcIik7XG4gICAgZGVzc2VydC5zcmMgPSBcImRlc3NlcnQucG5nXCI7XG5cblxuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdWJoZWFkZXIzXCIpLmlubmVyVGV4dCA9IFwiUmVkIFdpbmVcIjtcbiAgICBjb25zdCB3aW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICB3aW5lLmNsYXNzTGlzdC5hZGQoXCJ3aW5lXCIpO1xuICAgIHdpbmUuc3JjID0gXCJ3aW5lLnBuZ1wiO1xuXG5cblxuICAgIGlmICghZGl2MS5jb250YWlucyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvb2RcIikpKSB7XG4gICAgICAgIGRpdjEuYXBwZW5kQ2hpbGQoZm9vZCk7XG5cbiAgICB9XG5cbiAgICBpZiAoIWRpdjIuY29udGFpbnMoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZXNzZXJ0XCIpKSkge1xuICAgICAgICBkaXYyLmFwcGVuZENoaWxkKGRlc3NlcnQpXG4gICAgfVxuXG4gICAgaWYgKCFkaXYzLmNvbnRhaW5zKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2luZVwiKSkpIHtcbiAgICAgICAgZGl2My5hcHBlbmRDaGlsZCh3aW5lKTtcbiAgICB9XG5cbiAgICBpZiAoIW1lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSB7XG4gICAgICAgIGhvbWUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgICAgaG9tZS5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICBtZW51LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICAgIG1lbnUuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICBjb250YWN0LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgIGNvbnRhY3QuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB9XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxufVxuXG5leHBvcnQge21lbnVEaXNwbGF5fTtcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7aG9tZURpc3BsYXl9IGZyb20gXCIuL2hvbWVcIjtcbmltcG9ydCB7bWVudURpc3BsYXl9IGZyb20gXCIuL21lbnVcIjtcbmltcG9ydCB7Y29udGFjdERpc3BsYXl9IGZyb20gXCIuL2NvbnRhY3RcIjtcblxuaG9tZURpc3BsYXkoKTtcblxuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhvbWVcIikub25jbGljayA9IGhvbWVEaXNwbGF5O1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnVcIikub25jbGljayA9IG1lbnVEaXNwbGF5O1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhY3RcIikub25jbGljayA9IGNvbnRhY3REaXNwbGF5O1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/coucou.js"],{

/***/ "./components/header.tsx":
/*!*******************************!*\
  !*** ./components/header.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/mael/Work/website/components/header.tsx";


var Header = function Header(_ref) {
  var title = _ref.title;
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("header", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, title));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/layout.tsx":
/*!*******************************!*\
  !*** ./components/layout.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ "./components/header.tsx");
var _jsxFileName = "/Users/mael/Work/website/components/layout.tsx";



var Layout = function Layout(_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "something",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, children));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fcoucou&absolutePagePath=%2FUsers%2Fmael%2FWork%2Fwebsite%2Fpages%2Fcoucou.tsx!./":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fcoucou&absolutePagePath=%2FUsers%2Fmael%2FWork%2Fwebsite%2Fpages%2Fcoucou.tsx ***!
  \************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/coucou", function() {
      var page = __webpack_require__(/*! ./pages/coucou.tsx */ "./pages/coucou.tsx")
      if(true) {
        module.hot.accept(/*! ./pages/coucou.tsx */ "./pages/coucou.tsx", function() {
          if(!next.router.components["/coucou"]) return
          var updatedPage = __webpack_require__(/*! ./pages/coucou.tsx */ "./pages/coucou.tsx")
          next.router.update("/coucou", updatedPage.default || updatedPage)
        })
      }
      return { page: page.default || page }
    }]);
  

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_129a35c7ec57967eb265 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_129a35c7ec57967eb265 */ "dll-reference dll_129a35c7ec57967eb265"))("./node_modules/react/index.js");

/***/ }),

/***/ "./pages/coucou.tsx":
/*!**************************!*\
  !*** ./pages/coucou.tsx ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout */ "./components/layout.tsx");
var _jsxFileName = "/Users/mael/Work/website/pages/coucou.tsx";



var Card = function Card() {
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "test"));
};

/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ }),

/***/ 1:
/*!****************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2Fcoucou&absolutePagePath=%2FUsers%2Fmael%2FWork%2Fwebsite%2Fpages%2Fcoucou.tsx ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2Fcoucou&absolutePagePath=%2FUsers%2Fmael%2FWork%2Fwebsite%2Fpages%2Fcoucou.tsx! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fcoucou&absolutePagePath=%2FUsers%2Fmael%2FWork%2Fwebsite%2Fpages%2Fcoucou.tsx!./");


/***/ }),

/***/ "dll-reference dll_129a35c7ec57967eb265":
/*!*******************************************!*\
  !*** external "dll_129a35c7ec57967eb265" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_129a35c7ec57967eb265;

/***/ })

},[[1,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=coucou.js.map
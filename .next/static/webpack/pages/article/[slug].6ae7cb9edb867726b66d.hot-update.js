/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/article/[slug]",{

/***/ "./pages/article/[slug].js":
/*!*********************************!*\
  !*** ./pages/article/[slug].js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-markdown */ \"./node_modules/react-markdown/lib/react-markdown.js\");\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-moment */ \"./node_modules/react-moment/dist/index.js\");\n/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_moment__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/layout */ \"./components/layout.js\");\n/* harmony import */ var _components_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/image */ \"./components/image.js\");\n/* harmony import */ var _components_seo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/seo */ \"./components/seo.js\");\n/* harmony import */ var _lib_media__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../lib/media */ \"./lib/media.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/fxck/www/zerops-nextjs-strapi/pages/article/[slug].js\",\n    _this = undefined;\n\n\n\n\n\n\n\n\nvar Article = function Article(_ref) {\n  var _article$attributes$b;\n\n  var article = _ref.article,\n      categories = _ref.categories;\n  var imageUrl = (0,_lib_media__WEBPACK_IMPORTED_MODULE_6__.getStrapiMedia)(article.attributes.cover);\n  var seo = {\n    metaTitle: article.attributes.title,\n    metaDescription: article.attributes.description,\n    shareImage: article.attributes.cover,\n    article: true\n  };\n  var text = (_article$attributes$b = article.attributes.blocks.find(function (block) {\n    return block.__component === \"shared.rich-text\";\n  })) === null || _article$attributes$b === void 0 ? void 0 : _article$attributes$b.body;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_3__.default, {\n    categories: categories.data,\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_seo__WEBPACK_IMPORTED_MODULE_5__.default, {\n      seo: seo\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      id: \"banner\",\n      className: \"uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding uk-margin\",\n      \"data-src\": imageUrl,\n      \"data-srcset\": imageUrl,\n      \"data-uk-img\": true,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: article.attributes.title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"uk-section\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"uk-container uk-container-small\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_markdown__WEBPACK_IMPORTED_MODULE_1___default()), {\n          source: text,\n          escapeHtml: false\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n          className: \"uk-divider-small\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: \"uk-grid-small uk-flex-left\",\n          \"data-uk-grid\": \"true\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [article.attributes.author.data.attributes.avatar && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_image__WEBPACK_IMPORTED_MODULE_4__.default, {\n              image: article.attributes.author.data.attributes.avatar\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 45,\n              columnNumber: 17\n            }, _this), \"-------\"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 43,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"uk-width-expand\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n              className: \"uk-margin-remove-bottom\",\n              children: [\"By \", article.attributes.author.data.attributes.name]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 52,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n              className: \"uk-text-meta uk-margin-remove-top\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_moment__WEBPACK_IMPORTED_MODULE_2___default()), {\n                format: \"MMM Do YYYY\",\n                children: article.attributes.published_at\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 56,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 55,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 51,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 42,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 24,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = Article;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Article);\n\nvar _c;\n\n$RefreshReg$(_c, \"Article\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXJ0aWNsZS9bc2x1Z10uanM/MzZkOCJdLCJuYW1lcyI6WyJBcnRpY2xlIiwiYXJ0aWNsZSIsImNhdGVnb3JpZXMiLCJpbWFnZVVybCIsImdldFN0cmFwaU1lZGlhIiwiYXR0cmlidXRlcyIsImNvdmVyIiwic2VvIiwibWV0YVRpdGxlIiwidGl0bGUiLCJtZXRhRGVzY3JpcHRpb24iLCJkZXNjcmlwdGlvbiIsInNoYXJlSW1hZ2UiLCJ0ZXh0IiwiYmxvY2tzIiwiZmluZCIsImJsb2NrIiwiX19jb21wb25lbnQiLCJib2R5IiwiZGF0YSIsImF1dGhvciIsImF2YXRhciIsIm5hbWUiLCJwdWJsaXNoZWRfYXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLE9BQTZCO0FBQUE7O0FBQUEsTUFBMUJDLE9BQTBCLFFBQTFCQSxPQUEwQjtBQUFBLE1BQWpCQyxVQUFpQixRQUFqQkEsVUFBaUI7QUFDM0MsTUFBTUMsUUFBUSxHQUFHQywwREFBYyxDQUFDSCxPQUFPLENBQUNJLFVBQVIsQ0FBbUJDLEtBQXBCLENBQS9CO0FBRUEsTUFBTUMsR0FBRyxHQUFHO0FBQ1ZDLGFBQVMsRUFBRVAsT0FBTyxDQUFDSSxVQUFSLENBQW1CSSxLQURwQjtBQUVWQyxtQkFBZSxFQUFFVCxPQUFPLENBQUNJLFVBQVIsQ0FBbUJNLFdBRjFCO0FBR1ZDLGNBQVUsRUFBRVgsT0FBTyxDQUFDSSxVQUFSLENBQW1CQyxLQUhyQjtBQUlWTCxXQUFPLEVBQUU7QUFKQyxHQUFaO0FBT0EsTUFBTVksSUFBSSw0QkFBR1osT0FBTyxDQUFDSSxVQUFSLENBQW1CUyxNQUFuQixDQUEwQkMsSUFBMUIsQ0FDWCxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxXQUFOLEtBQXNCLGtCQUFqQztBQUFBLEdBRFcsQ0FBSCwwREFBRyxzQkFFVkMsSUFGSDtBQUlBLHNCQUNFLDhEQUFDLHVEQUFEO0FBQVEsY0FBVSxFQUFFaEIsVUFBVSxDQUFDaUIsSUFBL0I7QUFBQSw0QkFDRSw4REFBQyxvREFBRDtBQUFLLFNBQUcsRUFBRVo7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRTtBQUNFLFFBQUUsRUFBQyxRQURMO0FBRUUsZUFBUyxFQUFDLDBHQUZaO0FBR0Usa0JBQVVKLFFBSFo7QUFJRSxxQkFBYUEsUUFKZjtBQUtFLHlCQUxGO0FBQUEsNkJBT0U7QUFBQSxrQkFBS0YsT0FBTyxDQUFDSSxVQUFSLENBQW1CSTtBQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGLGVBV0U7QUFBSyxlQUFTLEVBQUMsWUFBZjtBQUFBLDZCQUNFO0FBQUssaUJBQVMsRUFBQyxpQ0FBZjtBQUFBLGdDQUNFLDhEQUFDLHVEQUFEO0FBQ0UsZ0JBQU0sRUFBRUksSUFEVjtBQUVFLG9CQUFVLEVBQUU7QUFGZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBS0U7QUFBSSxtQkFBUyxFQUFDO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFMRixlQU1FO0FBQUssbUJBQVMsRUFBQyw0QkFBZjtBQUE0QywwQkFBYSxNQUF6RDtBQUFBLGtDQUNFO0FBQUEsdUJBQ0daLE9BQU8sQ0FBQ0ksVUFBUixDQUFtQmUsTUFBbkIsQ0FBMEJELElBQTFCLENBQStCZCxVQUEvQixDQUEwQ2dCLE1BQTFDLGlCQUNDLDhEQUFDLHNEQUFEO0FBQ0UsbUJBQUssRUFBRXBCLE9BQU8sQ0FBQ0ksVUFBUixDQUFtQmUsTUFBbkIsQ0FBMEJELElBQTFCLENBQStCZCxVQUEvQixDQUEwQ2dCO0FBRG5EO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBU0U7QUFBSyxxQkFBUyxFQUFDLGlCQUFmO0FBQUEsb0NBQ0U7QUFBRyx1QkFBUyxFQUFDLHlCQUFiO0FBQUEsZ0NBQ01wQixPQUFPLENBQUNJLFVBQVIsQ0FBbUJlLE1BQW5CLENBQTBCRCxJQUExQixDQUErQmQsVUFBL0IsQ0FBMENpQixJQURoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFJRTtBQUFHLHVCQUFTLEVBQUMsbUNBQWI7QUFBQSxxQ0FDRSw4REFBQyxxREFBRDtBQUFRLHNCQUFNLEVBQUMsYUFBZjtBQUFBLDBCQUNHckIsT0FBTyxDQUFDSSxVQUFSLENBQW1Ca0I7QUFEdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUEyQ0QsQ0F6REQ7O0tBQU12QixPOztBQThGTiwrREFBZUEsT0FBZiIsImZpbGUiOiIuL3BhZ2VzL2FydGljbGUvW3NsdWddLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0TWFya2Rvd24gZnJvbSBcInJlYWN0LW1hcmtkb3duXCJcbmltcG9ydCBNb21lbnQgZnJvbSBcInJlYWN0LW1vbWVudFwiXG5pbXBvcnQgeyBmZXRjaEFQSSB9IGZyb20gXCIuLi8uLi9saWIvYXBpXCJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbGF5b3V0XCJcbmltcG9ydCBOZXh0SW1hZ2UgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvaW1hZ2VcIlxuaW1wb3J0IFNlbyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zZW9cIlxuaW1wb3J0IHsgZ2V0U3RyYXBpTWVkaWEgfSBmcm9tIFwiLi4vLi4vbGliL21lZGlhXCJcblxuY29uc3QgQXJ0aWNsZSA9ICh7IGFydGljbGUsIGNhdGVnb3JpZXMgfSkgPT4ge1xuICBjb25zdCBpbWFnZVVybCA9IGdldFN0cmFwaU1lZGlhKGFydGljbGUuYXR0cmlidXRlcy5jb3ZlcilcblxuICBjb25zdCBzZW8gPSB7XG4gICAgbWV0YVRpdGxlOiBhcnRpY2xlLmF0dHJpYnV0ZXMudGl0bGUsXG4gICAgbWV0YURlc2NyaXB0aW9uOiBhcnRpY2xlLmF0dHJpYnV0ZXMuZGVzY3JpcHRpb24sXG4gICAgc2hhcmVJbWFnZTogYXJ0aWNsZS5hdHRyaWJ1dGVzLmNvdmVyLFxuICAgIGFydGljbGU6IHRydWUsXG4gIH1cblxuICBjb25zdCB0ZXh0ID0gYXJ0aWNsZS5hdHRyaWJ1dGVzLmJsb2Nrcy5maW5kKFxuICAgIChibG9jaykgPT4gYmxvY2suX19jb21wb25lbnQgPT09IFwic2hhcmVkLnJpY2gtdGV4dFwiXG4gICk/LmJvZHlcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgY2F0ZWdvcmllcz17Y2F0ZWdvcmllcy5kYXRhfT5cbiAgICAgIDxTZW8gc2VvPXtzZW99IC8+XG4gICAgICA8ZGl2XG4gICAgICAgIGlkPVwiYmFubmVyXCJcbiAgICAgICAgY2xhc3NOYW1lPVwidWstaGVpZ2h0LW1lZGl1bSB1ay1mbGV4IHVrLWZsZXgtY2VudGVyIHVrLWZsZXgtbWlkZGxlIHVrLWJhY2tncm91bmQtY292ZXIgdWstbGlnaHQgdWstcGFkZGluZyB1ay1tYXJnaW5cIlxuICAgICAgICBkYXRhLXNyYz17aW1hZ2VVcmx9XG4gICAgICAgIGRhdGEtc3Jjc2V0PXtpbWFnZVVybH1cbiAgICAgICAgZGF0YS11ay1pbWdcbiAgICAgID5cbiAgICAgICAgPGgxPnthcnRpY2xlLmF0dHJpYnV0ZXMudGl0bGV9PC9oMT5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1ay1zZWN0aW9uXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWstY29udGFpbmVyIHVrLWNvbnRhaW5lci1zbWFsbFwiPlxuICAgICAgICAgIDxSZWFjdE1hcmtkb3duXG4gICAgICAgICAgICBzb3VyY2U9e3RleHR9XG4gICAgICAgICAgICBlc2NhcGVIdG1sPXtmYWxzZX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxociBjbGFzc05hbWU9XCJ1ay1kaXZpZGVyLXNtYWxsXCIgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVrLWdyaWQtc21hbGwgdWstZmxleC1sZWZ0XCIgZGF0YS11ay1ncmlkPVwidHJ1ZVwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAge2FydGljbGUuYXR0cmlidXRlcy5hdXRob3IuZGF0YS5hdHRyaWJ1dGVzLmF2YXRhciAmJiAoXG4gICAgICAgICAgICAgICAgPE5leHRJbWFnZVxuICAgICAgICAgICAgICAgICAgaW1hZ2U9e2FydGljbGUuYXR0cmlidXRlcy5hdXRob3IuZGF0YS5hdHRyaWJ1dGVzLmF2YXRhcn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAtLS0tLS0tXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWstd2lkdGgtZXhwYW5kXCI+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInVrLW1hcmdpbi1yZW1vdmUtYm90dG9tXCI+XG4gICAgICAgICAgICAgICAgQnkge2FydGljbGUuYXR0cmlidXRlcy5hdXRob3IuZGF0YS5hdHRyaWJ1dGVzLm5hbWV9XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidWstdGV4dC1tZXRhIHVrLW1hcmdpbi1yZW1vdmUtdG9wXCI+XG4gICAgICAgICAgICAgICAgPE1vbWVudCBmb3JtYXQ9XCJNTU0gRG8gWVlZWVwiPlxuICAgICAgICAgICAgICAgICAge2FydGljbGUuYXR0cmlidXRlcy5wdWJsaXNoZWRfYXR9XG4gICAgICAgICAgICAgICAgPC9Nb21lbnQ+XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvTGF5b3V0PlxuICApXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcbiAgY29uc3QgYXJ0aWNsZXNSZXMgPSBhd2FpdCBmZXRjaEFQSShcIi9hcnRpY2xlc1wiLCB7XG4gICAgZmllbGRzOiBbXCJzbHVnXCJdLFxuICB9KVxuXG4gIHJldHVybiB7XG4gICAgcGF0aHM6IGFydGljbGVzUmVzLmRhdGEubWFwKChhcnRpY2xlKSA9PiAoe1xuICAgICAgcGFyYW1zOiB7XG4gICAgICAgIHNsdWc6IGFydGljbGUuYXR0cmlidXRlcy5zbHVnLFxuICAgICAgfSxcbiAgICB9KSksXG4gICAgZmFsbGJhY2s6IGZhbHNlLFxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtcyB9KSB7XG4gIGNvbnN0IGFydGljbGVzUmVzID0gYXdhaXQgZmV0Y2hBUEkoXCIvYXJ0aWNsZXNcIiwge1xuICAgIGZpbHRlcnM6IHtcbiAgICAgIHNsdWc6IHBhcmFtcy5zbHVnLFxuICAgIH0sXG4gICAgcG9wdWxhdGU6IHtcbiAgICAgIGF1dGhvcjogeyBwb3B1bGF0ZTogXCIqXCIgfSxcbiAgICAgIGNvdmVyOiB7IHBvcHVsYXRlOiBcIipcIiB9LFxuICAgICAgY2F0ZWdvcnk6IHsgcG9wdWxhdGU6IFwiKlwiIH0sXG4gICAgICBibG9ja3M6IHsgcG9wdWxhdGU6IFwiKlwiIH0sXG4gICAgfSxcbiAgfSlcbiAgY29uc3QgY2F0ZWdvcmllc1JlcyA9IGF3YWl0IGZldGNoQVBJKFwiL2NhdGVnb3JpZXNcIilcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7IGFydGljbGU6IGFydGljbGVzUmVzLmRhdGFbMF0sIGNhdGVnb3JpZXM6IGNhdGVnb3JpZXNSZXMgfSxcbiAgICByZXZhbGlkYXRlOiAxLFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFydGljbGVcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/article/[slug].js\n");

/***/ })

});
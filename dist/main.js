/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("var password = document.getElementById('password');\nvar retryPass = document.getElementById('retrypassword');\ndocument.querySelectorAll('input').forEach(function (inputText) {\n  // eslint-disable-next-line no-use-before-define\n  inputText.addEventListener('blur', function () {\n    validator(inputText);\n  });\n});\ndocument.querySelectorAll('input').forEach(function (inputText) {\n  inputText.addEventListener('input', function () {\n    inputText.setCustomValidity('');\n  });\n});\ndocument.getElementById('retrypassword').addEventListener('input', function () {\n  if (!(password.value === retryPass.value)) {\n    retryPass.setCustomValidity('Tu contrasena debe coincidir con la esatablecida previamente');\n    retryPass.reportValidity();\n  }\n});\ndocument.querySelector('form').addEventListener('submit', function (event) {\n  if (!(password.value === retryPass.value)) {\n    retryPass.setCustomValidity('Tu contrasena debe coincidir con la esatablecida previamente');\n    retryPass.reportValidity();\n    event.preventDefault();\n  }\n});\n\nfunction showError(x) {\n  if (x.validity.typeMismatch) {\n    x.setCustomValidity('El texto ingresado no coinside con un correo');\n    x.reportValidity();\n  } else if (x.validity.valueMissing) {\n    x.setCustomValidity('Porfavor ingresa un valor, el formulario no puede quedar vacio');\n    x.reportValidity();\n  } else if (x.validity.tooLong) {\n    x.setCustomValidity('Porfavor ingresa un codigo postal valido');\n    x.reportValidity();\n  } else {\n    x.setCustomValidity('');\n  }\n}\n\nfunction validator(x) {\n  x.setCustomValidity('');\n\n  if (!x.validity.valid) {\n    showError(x);\n  }\n}\n\n//# sourceURL=webpack://formcavanzado/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;
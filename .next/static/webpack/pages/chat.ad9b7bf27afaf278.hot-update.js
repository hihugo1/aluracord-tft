"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/chat",{

/***/ "./pages/chat.jsx":
/*!************************!*\
  !*** ./pages/chat.jsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ChatPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _skynexui_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @skynexui/components */ \"./node_modules/@skynexui/components/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config.json */ \"./config.json\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$();\nfunction ChatPage() {\n    var handleNovaMensagem = // ./Sua lógica vai aqui\n    function handleNovaMensagem(novaMensagem) {\n        var mensagem = {\n            id: listaDeMensagens.length + 1,\n            de: \"hihugo1\",\n            texto: novaMensagem\n        };\n        setListaDeMensagens([\n            mensagem\n        ].concat(_toConsumableArray(listaDeMensagens)));\n        setMensagem(\"\");\n    };\n    var removerCampo = function removerCampo() {};\n    _s();\n    // Sua lógica vai aqui\n    var ref = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_2___default().useState(\"\"), 2), mensagem1 = ref[0], setMensagem = ref[1];\n    var ref1 = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_2___default().useState([]), 2), listaDeMensagens = ref1[0], setListaDeMensagens = ref1[1];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n        styleSheet: {\n            display: \"flex\",\n            alignItems: \"center\",\n            justifyContent: \"center\",\n            backgroundImage: \"url(https://images.alphacoders.com/120/1204920.jpg)\",\n            backgroundRepeat: \"no-repeat\",\n            backgroundSize: \"cover\",\n            backgroundBlendMode: \"multiply\",\n            color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[\"000\"]\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n            styleSheet: {\n                display: \"flex\",\n                flexDirection: \"column\",\n                flex: 1,\n                boxShadow: \"0 2px 10px 0 rgb(0 0 0 / 20%)\",\n                borderRadius: \"5px\",\n                backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[700],\n                height: \"100%\",\n                maxWidth: \"95%\",\n                maxHeight: \"95vh\",\n                padding: \"32px\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Header, {}, void 0, false, {\n                    fileName: \"/home/hihugo1/Documentos/alura/pages/chat.jsx\",\n                    lineNumber: 53,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                    styleSheet: {\n                        position: \"relative\",\n                        display: \"flex\",\n                        flex: 1,\n                        height: \"80%\",\n                        backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[600],\n                        flexDirection: \"column\",\n                        borderRadius: \"5px\",\n                        padding: \"16px\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MessageList, {\n                            mensagens: listaDeMensagens,\n                            remover: removerCampo\n                        }, void 0, false, {\n                            fileName: \"/home/hihugo1/Documentos/alura/pages/chat.jsx\",\n                            lineNumber: 67,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                            as: \"form\",\n                            styleSheet: {\n                                display: \"flex\",\n                                alignItems: \"center\"\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.TextField, {\n                                    value: mensagem1,\n                                    onChange: function(event) {\n                                        var value = event.target.value;\n                                        setMensagem(value);\n                                    },\n                                    onKeyPress: function(event) {\n                                        if (event.key === \"Enter\") {\n                                            event.preventDefault();\n                                            handleNovaMensagem(mensagem1);\n                                        }\n                                    },\n                                    placeholder: \"Insira sua mensagem aqui...\",\n                                    type: \"textarea\",\n                                    styleSheet: {\n                                        width: \"100%\",\n                                        border: \"0\",\n                                        resize: \"none\",\n                                        borderRadius: \"5px\",\n                                        padding: \"6px 8px\",\n                                        backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[800],\n                                        marginRight: \"12px\",\n                                        color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[200]\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/home/hihugo1/Documentos/alura/pages/chat.jsx\",\n                                    lineNumber: 84,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                                    label: \"Enviar\",\n                                    onClick: function(event) {\n                                        event.preventDefault();\n                                        handleNovaMensagem(mensagem1);\n                                    },\n                                    styleSheet: {\n                                        height: '2rem',\n                                        padding: '1.4rem 2rem',\n                                        border: '0',\n                                        backgroundColor: '#000',\n                                        color: '#fff'\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/home/hihugo1/Documentos/alura/pages/chat.jsx\",\n                                    lineNumber: 109,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/hihugo1/Documentos/alura/pages/chat.jsx\",\n                            lineNumber: 76,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/hihugo1/Documentos/alura/pages/chat.jsx\",\n                    lineNumber: 54,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/hihugo1/Documentos/alura/pages/chat.jsx\",\n            lineNumber: 39,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/hihugo1/Documentos/alura/pages/chat.jsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, this));\n};\n_s(ChatPage, \"AuwZhRn/YX0XQzEeDQ8k4qMnSgw=\");\n_c = ChatPage;\nfunction Header() {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n            styleSheet: {\n                width: \"100%\",\n                marginBottom: \"16px\",\n                display: \"flex\",\n                alignItems: \"center\",\n                justifyContent: \"space-between\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                    variant: \"heading5\",\n                    children: \"Chat\"\n                }, void 0, false, {\n                    fileName: \"/home/hihugo1/Documentos/alura/pages/chat.jsx\",\n                    lineNumber: 145,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                    variant: \"tertiary\",\n                    colorVariant: \"neutral\",\n                    href: \"/\",\n                    iconName: \"FaArrowRight\"\n                }, void 0, false, {\n                    fileName: \"/home/hihugo1/Documentos/alura/pages/chat.jsx\",\n                    lineNumber: 146,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/hihugo1/Documentos/alura/pages/chat.jsx\",\n            lineNumber: 136,\n            columnNumber: 7\n        }, this)\n    }, void 0, false));\n}\n_c1 = Header;\nfunction MessageList(props) {\n    var _this = this;\n    console.log(props);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n        tag: \"ul\",\n        styleSheet: {\n            overflowY: \"scroll\",\n            scrollBehavior: 'smooth',\n            display: \"flex\",\n            flexDirection: \"column-reverse\",\n            flex: 1,\n            color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[\"000\"],\n            marginBottom: \"16px\"\n        },\n        children: props.mensagens.map(function(mensagem) {\n            return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                tag: \"li\",\n                styleSheet: {\n                    borderRadius: \"5px\",\n                    padding: \"6px\",\n                    marginBottom: \"12px\",\n                    hover: {\n                        backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[700]\n                    }\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                        styleSheet: {\n                            position: 'relative',\n                            marginBottom: \"8px\",\n                            display: 'flex',\n                            flexDirection: 'row',\n                            alignItems: 'center'\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Image, {\n                                styleSheet: {\n                                    width: \"20px\",\n                                    height: \"20px\",\n                                    borderRadius: \"50%\",\n                                    display: \"inline-block\",\n                                    marginRight: \"8px\"\n                                },\n                                src: \"https://github.com/hihugo1.png\"\n                            }, void 0, false, {\n                                fileName: \"/home/hihugo1/Documentos/alura/pages/chat.jsx\",\n                                lineNumber: 196,\n                                columnNumber: 15\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                                tag: \"strong\",\n                                children: mensagem.de\n                            }, void 0, false, {\n                                fileName: \"/home/hihugo1/Documentos/alura/pages/chat.jsx\",\n                                lineNumber: 206,\n                                columnNumber: 15\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                                styleSheet: {\n                                    fontSize: \"10px\",\n                                    marginLeft: \"8px\",\n                                    color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[300]\n                                },\n                                tag: \"span\",\n                                children: new Date().toLocaleDateString()\n                            }, void 0, false, {\n                                fileName: \"/home/hihugo1/Documentos/alura/pages/chat.jsx\",\n                                lineNumber: 207,\n                                columnNumber: 15\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                style: {\n                                    position: 'absolute',\n                                    padding: '5px 10px',\n                                    backgroundColor: '#f00',\n                                    border: '1px solid',\n                                    cursor: \"pointer\",\n                                    right: '5vw',\n                                    top: '10px',\n                                    color: '#fff'\n                                },\n                                children: \"X\"\n                            }, void 0, false, {\n                                fileName: \"/home/hihugo1/Documentos/alura/pages/chat.jsx\",\n                                lineNumber: 217,\n                                columnNumber: 17\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/hihugo1/Documentos/alura/pages/chat.jsx\",\n                        lineNumber: 187,\n                        columnNumber: 13\n                    }, _this),\n                    mensagem.texto\n                ]\n            }, mensagem.id, true, {\n                fileName: \"/home/hihugo1/Documentos/alura/pages/chat.jsx\",\n                lineNumber: 175,\n                columnNumber: 11\n            }, _this));\n        })\n    }, void 0, false, {\n        fileName: \"/home/hihugo1/Documentos/alura/pages/chat.jsx\",\n        lineNumber: 160,\n        columnNumber: 5\n    }, this));\n}\n_c2 = MessageList;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"ChatPage\");\n$RefreshReg$(_c1, \"Header\");\n$RefreshReg$(_c2, \"MessageList\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jaGF0LmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBMEU7QUFDakQ7QUFDYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXZCLFFBQVEsQ0FBQ08sUUFBUSxHQUFHLENBQUM7UUFNekJDLGtCQUFrQixHQUYzQixFQUF3QjtJQUV4QixRQUFRLENBQUNBLGtCQUFrQixDQUFDQyxZQUFZLEVBQUUsQ0FBQztRQUN6QyxHQUFLLENBQUNDLFFBQVEsR0FBRyxDQUFDO1lBQ2hCQyxFQUFFLEVBQUVDLGdCQUFnQixDQUFDQyxNQUFNLEdBQUcsQ0FBQztZQUMvQkMsRUFBRSxFQUFFLENBQVM7WUFDYkMsS0FBSyxFQUFFTixZQUFZO1FBQ3JCLENBQUM7UUFDRE8sbUJBQW1CLENBQUMsQ0FBQ047WUFBQUEsUUFBUTtRQUFxQixDQUFDLENBQS9CLE1BQStCLG9CQUFqQkUsZ0JBQWdCO1FBQ2xESyxXQUFXLENBQUMsQ0FBRTtJQUNoQixDQUFDO1FBR1FDLFlBQVksR0FBckIsUUFBUSxDQUFDQSxZQUFZLEdBQUUsQ0FBQyxDQUV2Qjs7SUFsQkQsRUFBdUI7SUFDdkIsR0FBSyxDQUEyQmIsR0FBa0Isa0JBQWxCQSxxREFBYyxDQUFDLENBQUUsUUFBMUNLLFNBQVEsR0FBaUJMLEdBQWtCLEtBQWpDWSxXQUFXLEdBQUlaLEdBQWtCO0lBQ2xELEdBQUssQ0FBMkNBLElBQWtCLGtCQUFsQkEscURBQWMsQ0FBQyxDQUFDLENBQUMsT0FBMURPLGdCQUFnQixHQUF5QlAsSUFBa0IsS0FBekNXLG1CQUFtQixHQUFJWCxJQUFrQjtJQWtCbEUsTUFBTSw2RUFDSEwscURBQUc7UUFDRm9CLFVBQVUsRUFBRSxDQUFDO1lBQ1hDLE9BQU8sRUFBRSxDQUFNO1lBQ2ZDLFVBQVUsRUFBRSxDQUFRO1lBQ3BCQyxjQUFjLEVBQUUsQ0FBUTtZQUN4QkMsZUFBZSxFQUFHLENBQW1EO1lBQ3JFQyxnQkFBZ0IsRUFBRSxDQUFXO1lBQzdCQyxjQUFjLEVBQUUsQ0FBTztZQUN2QkMsbUJBQW1CLEVBQUUsQ0FBVTtZQUMvQkMsS0FBSyxFQUFFdEIsc0VBQXFDO1FBQzlDLENBQUM7OEZBRUFOLHFEQUFHO1lBQ0ZvQixVQUFVLEVBQUUsQ0FBQztnQkFDWEMsT0FBTyxFQUFFLENBQU07Z0JBQ2ZXLGFBQWEsRUFBRSxDQUFRO2dCQUN2QkMsSUFBSSxFQUFFLENBQUM7Z0JBQ1BDLFNBQVMsRUFBRSxDQUErQjtnQkFDMUNDLFlBQVksRUFBRSxDQUFLO2dCQUNuQkMsZUFBZSxFQUFFOUIsb0VBQW9DO2dCQUNyRCtCLE1BQU0sRUFBRSxDQUFNO2dCQUNkQyxRQUFRLEVBQUUsQ0FBSztnQkFDZkMsU0FBUyxFQUFFLENBQU07Z0JBQ2pCQyxPQUFPLEVBQUUsQ0FBTTtZQUNqQixDQUFDOzs0RkFFQUMsTUFBTTs7Ozs7NEZBQ056QyxxREFBRztvQkFDRm9CLFVBQVUsRUFBRSxDQUFDO3dCQUNYc0IsUUFBUSxFQUFFLENBQVU7d0JBQ3BCckIsT0FBTyxFQUFFLENBQU07d0JBQ2ZZLElBQUksRUFBRSxDQUFDO3dCQUNQSSxNQUFNLEVBQUUsQ0FBSzt3QkFDYkQsZUFBZSxFQUFFOUIsb0VBQW9DO3dCQUNyRDBCLGFBQWEsRUFBRSxDQUFRO3dCQUV2QkcsWUFBWSxFQUFFLENBQUs7d0JBQ25CSyxPQUFPLEVBQUUsQ0FBTTtvQkFDakIsQ0FBQzs7b0dBRUFHLFdBQVc7NEJBQUNDLFNBQVMsRUFBRWhDLGdCQUFnQjs0QkFBRWlDLE9BQU8sRUFBRTNCLFlBQVk7Ozs7OztvR0FTOURsQixxREFBRzs0QkFDRjhDLEVBQUUsRUFBQyxDQUFNOzRCQUNUMUIsVUFBVSxFQUFFLENBQUM7Z0NBQ1hDLE9BQU8sRUFBRSxDQUFNO2dDQUNmQyxVQUFVLEVBQUUsQ0FBUTs0QkFFdEIsQ0FBQzs7NEdBRUFwQiwyREFBUztvQ0FDUjZDLEtBQUssRUFBRXJDLFNBQVE7b0NBQ2ZzQyxRQUFRLEVBQUUsUUFBUSxDQUFQQyxLQUFLLEVBQUssQ0FBQzt3Q0FDcEIsR0FBSyxDQUFDRixLQUFLLEdBQUdFLEtBQUssQ0FBQ0MsTUFBTSxDQUFDSCxLQUFLO3dDQUNoQzlCLFdBQVcsQ0FBQzhCLEtBQUs7b0NBQ25CLENBQUM7b0NBQ0RJLFVBQVUsRUFBRSxRQUFRLENBQVBGLEtBQUssRUFBSyxDQUFDO3dDQUN0QixFQUFFLEVBQUVBLEtBQUssQ0FBQ0csR0FBRyxLQUFLLENBQU8sUUFBRSxDQUFDOzRDQUMxQkgsS0FBSyxDQUFDSSxjQUFjOzRDQUNwQjdDLGtCQUFrQixDQUFDRSxTQUFRO3dDQUM3QixDQUFDO29DQUNILENBQUM7b0NBQ0Q0QyxXQUFXLEVBQUMsQ0FBNkI7b0NBQ3pDQyxJQUFJLEVBQUMsQ0FBVTtvQ0FDZm5DLFVBQVUsRUFBRSxDQUFDO3dDQUNYb0MsS0FBSyxFQUFFLENBQU07d0NBQ2JDLE1BQU0sRUFBRSxDQUFHO3dDQUNYQyxNQUFNLEVBQUUsQ0FBTTt3Q0FDZHZCLFlBQVksRUFBRSxDQUFLO3dDQUNuQkssT0FBTyxFQUFFLENBQVM7d0NBQ2xCSixlQUFlLEVBQUU5QixvRUFBb0M7d0NBQ3JEcUQsV0FBVyxFQUFFLENBQU07d0NBQ25CL0IsS0FBSyxFQUFFdEIsb0VBQW9DO29DQUM3QyxDQUFDOzs7Ozs7NEdBRUZGLHdEQUFNO29DQUNQd0QsS0FBSyxFQUFDLENBQVE7b0NBQ2RDLE9BQU8sRUFDSCxRQUFRLENBQVBaLEtBQUssRUFBSyxDQUFDO3dDQUNKQSxLQUFLLENBQUNJLGNBQWM7d0NBQ3BCN0Msa0JBQWtCLENBQUNFLFNBQVE7b0NBQ25DLENBQUM7b0NBR0xVLFVBQVUsRUFBRSxDQUFDO3dDQUNUaUIsTUFBTSxFQUFFLENBQU07d0NBQ2RHLE9BQU8sRUFBRSxDQUFhO3dDQUN0QmlCLE1BQU0sRUFBRSxDQUFHO3dDQUNYckIsZUFBZSxFQUFFLENBQU07d0NBQ3ZCUixLQUFLLEVBQUUsQ0FBTTtvQ0FDakIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPYixDQUFDO0dBOUh1QnJCLFFBQVE7S0FBUkEsUUFBUTtTQWdJdkJrQyxNQUFNLEdBQUcsQ0FBQztJQUNqQixNQUFNOzhGQUVEekMscURBQUc7WUFDRm9CLFVBQVUsRUFBRSxDQUFDO2dCQUNYb0MsS0FBSyxFQUFFLENBQU07Z0JBQ2JNLFlBQVksRUFBRSxDQUFNO2dCQUNwQnpDLE9BQU8sRUFBRSxDQUFNO2dCQUNmQyxVQUFVLEVBQUUsQ0FBUTtnQkFDcEJDLGNBQWMsRUFBRSxDQUFlO1lBQ2pDLENBQUM7OzRGQUVBdEIsc0RBQUk7b0JBQUM4RCxPQUFPLEVBQUMsQ0FBVTs4QkFBQyxDQUFJOzs7Ozs7NEZBQzVCM0Qsd0RBQU07b0JBQ0wyRCxPQUFPLEVBQUMsQ0FBVTtvQkFDbEJDLFlBQVksRUFBQyxDQUFTO29CQUN0QkMsSUFBSSxFQUFDLENBQUc7b0JBQ1JDLFFBQVEsRUFBRSxDQUFjOzs7Ozs7Ozs7Ozs7O0FBS2xDLENBQUM7TUF0QlF6QixNQUFNO1NBd0JORSxXQUFXLENBQUN3QixLQUFLLEVBQUUsQ0FBQzs7SUFDM0JDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixLQUFLO0lBQ2pCLE1BQU0sNkVBQ0huRSxxREFBRztRQUNGc0UsR0FBRyxFQUFDLENBQUk7UUFDUmxELFVBQVUsRUFBRSxDQUFDO1lBQ1htRCxTQUFTLEVBQUUsQ0FBUTtZQUNuQkMsY0FBYyxFQUFFLENBQVE7WUFDeEJuRCxPQUFPLEVBQUUsQ0FBTTtZQUNmVyxhQUFhLEVBQUUsQ0FBZ0I7WUFDL0JDLElBQUksRUFBRSxDQUFDO1lBQ1BMLEtBQUssRUFBRXRCLHNFQUFxQztZQUM1Q3dELFlBQVksRUFBRSxDQUFNO1FBQ3hCLENBQUM7a0JBR0VLLEtBQUssQ0FBQ3ZCLFNBQVMsQ0FBQzZCLEdBQUcsQ0FBQyxRQUFRLENBQVAvRCxRQUFRLEVBQUssQ0FBQztZQUNsQyxNQUFNLDZFQUNIVCxzREFBSTtnQkFFSHFFLEdBQUcsRUFBQyxDQUFJO2dCQUNSbEQsVUFBVSxFQUFFLENBQUM7b0JBQ1hlLFlBQVksRUFBRSxDQUFLO29CQUNuQkssT0FBTyxFQUFFLENBQUs7b0JBQ2RzQixZQUFZLEVBQUUsQ0FBTTtvQkFDcEJZLEtBQUssRUFBRSxDQUFDO3dCQUNOdEMsZUFBZSxFQUFFOUIsb0VBQW9DO29CQUN2RCxDQUFDO2dCQUNILENBQUM7O2dHQUVBTixxREFBRzt3QkFDRm9CLFVBQVUsRUFBRSxDQUFDOzRCQUNYc0IsUUFBUSxFQUFFLENBQVU7NEJBQ3BCb0IsWUFBWSxFQUFFLENBQUs7NEJBQ25CekMsT0FBTyxFQUFFLENBQU07NEJBQ2ZXLGFBQWEsRUFBRSxDQUFLOzRCQUNwQlYsVUFBVSxFQUFFLENBQVE7d0JBQ3RCLENBQUM7O3dHQUVBbkIsdURBQUs7Z0NBQ0ppQixVQUFVLEVBQUUsQ0FBQztvQ0FDWG9DLEtBQUssRUFBRSxDQUFNO29DQUNibkIsTUFBTSxFQUFFLENBQU07b0NBQ2RGLFlBQVksRUFBRSxDQUFLO29DQUNuQmQsT0FBTyxFQUFFLENBQWM7b0NBQ3ZCc0MsV0FBVyxFQUFFLENBQUs7Z0NBQ3BCLENBQUM7Z0NBQ0RnQixHQUFHLEVBQUcsQ0FBOEI7Ozs7Ozt3R0FFckMxRSxzREFBSTtnQ0FBQ3FFLEdBQUcsRUFBQyxDQUFROzBDQUFFNUQsUUFBUSxDQUFDSSxFQUFFOzs7Ozs7d0dBQzlCYixzREFBSTtnQ0FDSG1CLFVBQVUsRUFBRSxDQUFDO29DQUNYd0QsUUFBUSxFQUFFLENBQU07b0NBQ2hCQyxVQUFVLEVBQUUsQ0FBSztvQ0FDakJqRCxLQUFLLEVBQUV0QixvRUFBb0M7Z0NBQzdDLENBQUM7Z0NBQ0RnRSxHQUFHLEVBQUMsQ0FBTTswQ0FFVCxHQUFHLENBQUNRLElBQUksR0FBR0Msa0JBQWtCOzs7Ozs7d0dBRTdCQyxDQUFNO2dDQUNIQyxLQUFLLEVBQUUsQ0FBQztvQ0FDUnZDLFFBQVEsRUFBRSxDQUFVO29DQUNwQkYsT0FBTyxFQUFFLENBQVU7b0NBQ25CSixlQUFlLEVBQUUsQ0FBTTtvQ0FDdkJxQixNQUFNLEVBQUUsQ0FBVztvQ0FDbkJ5QixNQUFNLEVBQUUsQ0FBUztvQ0FDakJDLEtBQUssRUFBRSxDQUFLO29DQUNaQyxHQUFHLEVBQUUsQ0FBTTtvQ0FDWHhELEtBQUssRUFBRSxDQUFNO2dDQUNqQixDQUFDOzBDQUFHLENBQUM7Ozs7Ozs7Ozs7OztvQkFFUmxCLFFBQVEsQ0FBQ0ssS0FBSzs7ZUFyRFZMLFFBQVEsQ0FBQ0MsRUFBRTs7Ozs7UUF5RHRCLENBQUM7Ozs7OztBQUdQLENBQUM7TUEvRVFnQyxXQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NoYXQuanN4PzI3ZTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94LCBUZXh0LCBUZXh0RmllbGQsIEltYWdlLCBCdXR0b24gfSBmcm9tIFwiQHNreW5leHVpL2NvbXBvbmVudHNcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBhcHBDb25maWcgZnJvbSBcIi4uL2NvbmZpZy5qc29uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENoYXRQYWdlKCkge1xuICAvLyBTdWEgbMOzZ2ljYSB2YWkgYXF1aVxuICBjb25zdCBbbWVuc2FnZW0sIHNldE1lbnNhZ2VtXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbbGlzdGFEZU1lbnNhZ2Vucywgc2V0TGlzdGFEZU1lbnNhZ2Vuc10gPSBSZWFjdC51c2VTdGF0ZShbXSk7XG4gIC8vIC4vU3VhIGzDs2dpY2EgdmFpIGFxdWlcblxuICBmdW5jdGlvbiBoYW5kbGVOb3ZhTWVuc2FnZW0obm92YU1lbnNhZ2VtKSB7XG4gICAgY29uc3QgbWVuc2FnZW0gPSB7XG4gICAgICBpZDogbGlzdGFEZU1lbnNhZ2Vucy5sZW5ndGggKyAxLFxuICAgICAgZGU6IFwiaGlodWdvMVwiLFxuICAgICAgdGV4dG86IG5vdmFNZW5zYWdlbSxcbiAgICB9O1xuICAgIHNldExpc3RhRGVNZW5zYWdlbnMoW21lbnNhZ2VtLCAuLi5saXN0YURlTWVuc2FnZW5zXSk7XG4gICAgc2V0TWVuc2FnZW0oXCJcIik7XG4gIH1cblxuXG4gIGZ1bmN0aW9uIHJlbW92ZXJDYW1wbygpe1xuXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxCb3hcbiAgICAgIHN0eWxlU2hlZXQ9e3tcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoaHR0cHM6Ly9pbWFnZXMuYWxwaGFjb2RlcnMuY29tLzEyMC8xMjA0OTIwLmpwZylgLFxuICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBcIm5vLXJlcGVhdFwiLFxuICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxuICAgICAgICBiYWNrZ3JvdW5kQmxlbmRNb2RlOiBcIm11bHRpcGx5XCIsXG4gICAgICAgIGNvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzW1wiMDAwXCJdLFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8Qm94XG4gICAgICAgIHN0eWxlU2hlZXQ9e3tcbiAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgICAgICAgIGZsZXg6IDEsXG4gICAgICAgICAgYm94U2hhZG93OiBcIjAgMnB4IDEwcHggMCByZ2IoMCAwIDAgLyAyMCUpXCIsXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjVweFwiLFxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1s3MDBdLFxuICAgICAgICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgICAgICAgbWF4V2lkdGg6IFwiOTUlXCIsXG4gICAgICAgICAgbWF4SGVpZ2h0OiBcIjk1dmhcIixcbiAgICAgICAgICBwYWRkaW5nOiBcIjMycHhcIixcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICA8Qm94XG4gICAgICAgICAgc3R5bGVTaGVldD17e1xuICAgICAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgZmxleDogMSxcbiAgICAgICAgICAgIGhlaWdodDogXCI4MCVcIixcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1s2MDBdLFxuICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcblxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjVweFwiLFxuICAgICAgICAgICAgcGFkZGluZzogXCIxNnB4XCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxNZXNzYWdlTGlzdCBtZW5zYWdlbnM9e2xpc3RhRGVNZW5zYWdlbnN9IHJlbW92ZXI9e3JlbW92ZXJDYW1wb30vPlxuICAgICAgICAgIHsvKntsaXN0YURlTWVuc2FnZW5zLm1hcCgobWVuc2FnZW1BdHVhbCkgPT57XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17bWVuc2FnZW1BdHVhbC5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge21lbnNhZ2VtQXR1YWwuZGV9OnttZW5zYWdlbUF0dWFsLnRleHRvfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfSl9Ki99XG5cbiAgICAgICAgICA8Qm94XG4gICAgICAgICAgICBhcz1cImZvcm1cIlxuICAgICAgICAgICAgc3R5bGVTaGVldD17e1xuICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgdmFsdWU9e21lbnNhZ2VtfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgICAgICAgICAgICAgc2V0TWVuc2FnZW0odmFsdWUpO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBvbktleVByZXNzPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICBoYW5kbGVOb3ZhTWVuc2FnZW0obWVuc2FnZW0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJJbnNpcmEgc3VhIG1lbnNhZ2VtIGFxdWkuLi5cIlxuICAgICAgICAgICAgICB0eXBlPVwidGV4dGFyZWFcIlxuICAgICAgICAgICAgICBzdHlsZVNoZWV0PXt7XG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICAgIGJvcmRlcjogXCIwXCIsXG4gICAgICAgICAgICAgICAgcmVzaXplOiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXG4gICAgICAgICAgICAgICAgcGFkZGluZzogXCI2cHggOHB4XCIsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzgwMF0sXG4gICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IFwiMTJweFwiLFxuICAgICAgICAgICAgICAgIGNvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzIwMF0sXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgbGFiZWw9XCJFbnZpYXJcIlxuICAgICAgICAgICAgb25DbGljaz17XG4gICAgICAgICAgICAgICAgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlTm92YU1lbnNhZ2VtKG1lbnNhZ2VtKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc3R5bGVTaGVldD17e1xuICAgICAgICAgICAgICAgIGhlaWdodDogJzJyZW0nLFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6ICcxLjRyZW0gMnJlbScsXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAnMCcsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzAwMCcsXG4gICAgICAgICAgICAgICAgY29sb3I6ICcjZmZmJ1xuICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0JveD5cbiAgICA8L0JveD5cbiAgKTtcbn1cblxuZnVuY3Rpb24gSGVhZGVyKCkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Qm94XG4gICAgICAgIHN0eWxlU2hlZXQ9e3tcbiAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjE2cHhcIixcbiAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIixcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPFRleHQgdmFyaWFudD1cImhlYWRpbmc1XCI+Q2hhdDwvVGV4dD5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIHZhcmlhbnQ9XCJ0ZXJ0aWFyeVwiXG4gICAgICAgICAgY29sb3JWYXJpYW50PVwibmV1dHJhbFwiXG4gICAgICAgICAgaHJlZj1cIi9cIlxuICAgICAgICAgIGljb25OYW1lPSBcIkZhQXJyb3dSaWdodFwiXG4gICAgICAgIC8+XG4gICAgICA8L0JveD5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZnVuY3Rpb24gTWVzc2FnZUxpc3QocHJvcHMpIHtcbiAgY29uc29sZS5sb2cocHJvcHMpO1xuICByZXR1cm4gKFxuICAgIDxCb3hcbiAgICAgIHRhZz1cInVsXCJcbiAgICAgIHN0eWxlU2hlZXQ9e3tcbiAgICAgICAgb3ZlcmZsb3dZOiBcInNjcm9sbFwiLFxuICAgICAgICBzY3JvbGxCZWhhdmlvcjogJ3Ntb290aCcsXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtbi1yZXZlcnNlXCIsXG4gICAgICAgIGZsZXg6IDEsXG4gICAgICAgIGNvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzW1wiMDAwXCJdLFxuICAgICAgICBtYXJnaW5Cb3R0b206IFwiMTZweFwiLFxuICAgIH1cbiAgICB9XG4gICAgPlxuICAgICAge3Byb3BzLm1lbnNhZ2Vucy5tYXAoKG1lbnNhZ2VtKSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPFRleHRcbiAgICAgICAgICAgIGtleT17bWVuc2FnZW0uaWR9XG4gICAgICAgICAgICB0YWc9XCJsaVwiXG4gICAgICAgICAgICBzdHlsZVNoZWV0PXt7XG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1cHhcIixcbiAgICAgICAgICAgICAgcGFkZGluZzogXCI2cHhcIixcbiAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjEycHhcIixcbiAgICAgICAgICAgICAgaG92ZXI6IHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbNzAwXSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICBzdHlsZVNoZWV0PXt7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjhweFwiLFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJ1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICBzdHlsZVNoZWV0PXt7XG4gICAgICAgICAgICAgICAgICB3aWR0aDogXCIyMHB4XCIsXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMjBweFwiLFxuICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjUwJVwiLFxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcbiAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiBcIjhweFwiLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgc3JjPXtgaHR0cHM6Ly9naXRodWIuY29tL2hpaHVnbzEucG5nYH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPFRleHQgdGFnPVwic3Ryb25nXCI+e21lbnNhZ2VtLmRlfTwvVGV4dD5cbiAgICAgICAgICAgICAgPFRleHRcbiAgICAgICAgICAgICAgICBzdHlsZVNoZWV0PXt7XG4gICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxMHB4XCIsXG4gICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiBcIjhweFwiLFxuICAgICAgICAgICAgICAgICAgY29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbMzAwXSxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIHRhZz1cInNwYW5cIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge25ldyBEYXRlKCkudG9Mb2NhbGVEYXRlU3RyaW5nKCl9XG4gICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAnNXB4IDEwcHgnLFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZjAwJyxcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkJyxcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6ICc1dncnLFxuICAgICAgICAgICAgICAgICAgICB0b3A6ICcxMHB4JyxcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcjZmZmJ1xuICAgICAgICAgICAgICAgIH19ID5YPC9idXR0b24+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIHttZW5zYWdlbS50ZXh0b31cbiAgICAgICAgICA8L1RleHQ+XG5cbiAgICAgICAgKTtcbiAgICAgIH0pfVxuICAgIDwvQm94PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkJveCIsIlRleHQiLCJUZXh0RmllbGQiLCJJbWFnZSIsIkJ1dHRvbiIsIlJlYWN0IiwiYXBwQ29uZmlnIiwiQ2hhdFBhZ2UiLCJoYW5kbGVOb3ZhTWVuc2FnZW0iLCJub3ZhTWVuc2FnZW0iLCJtZW5zYWdlbSIsImlkIiwibGlzdGFEZU1lbnNhZ2VucyIsImxlbmd0aCIsImRlIiwidGV4dG8iLCJzZXRMaXN0YURlTWVuc2FnZW5zIiwic2V0TWVuc2FnZW0iLCJyZW1vdmVyQ2FtcG8iLCJ1c2VTdGF0ZSIsInN0eWxlU2hlZXQiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiYmFja2dyb3VuZEltYWdlIiwiYmFja2dyb3VuZFJlcGVhdCIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZEJsZW5kTW9kZSIsImNvbG9yIiwidGhlbWUiLCJjb2xvcnMiLCJuZXV0cmFscyIsImZsZXhEaXJlY3Rpb24iLCJmbGV4IiwiYm94U2hhZG93IiwiYm9yZGVyUmFkaXVzIiwiYmFja2dyb3VuZENvbG9yIiwiaGVpZ2h0IiwibWF4V2lkdGgiLCJtYXhIZWlnaHQiLCJwYWRkaW5nIiwiSGVhZGVyIiwicG9zaXRpb24iLCJNZXNzYWdlTGlzdCIsIm1lbnNhZ2VucyIsInJlbW92ZXIiLCJhcyIsInZhbHVlIiwib25DaGFuZ2UiLCJldmVudCIsInRhcmdldCIsIm9uS2V5UHJlc3MiLCJrZXkiLCJwcmV2ZW50RGVmYXVsdCIsInBsYWNlaG9sZGVyIiwidHlwZSIsIndpZHRoIiwiYm9yZGVyIiwicmVzaXplIiwibWFyZ2luUmlnaHQiLCJsYWJlbCIsIm9uQ2xpY2siLCJtYXJnaW5Cb3R0b20iLCJ2YXJpYW50IiwiY29sb3JWYXJpYW50IiwiaHJlZiIsImljb25OYW1lIiwicHJvcHMiLCJjb25zb2xlIiwibG9nIiwidGFnIiwib3ZlcmZsb3dZIiwic2Nyb2xsQmVoYXZpb3IiLCJtYXAiLCJob3ZlciIsInNyYyIsImZvbnRTaXplIiwibWFyZ2luTGVmdCIsIkRhdGUiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJidXR0b24iLCJzdHlsZSIsImN1cnNvciIsInJpZ2h0IiwidG9wIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/chat.jsx\n");

/***/ })

});
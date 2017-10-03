/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 50);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate
    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(51);


/***/ }),

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

Vue.component('newPastas', __webpack_require__(52));

$(function () {
	new Vue({
		el: '#app'
	});
});

/***/ }),

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(53)
/* template */
var __vue_template__ = __webpack_require__(57)
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\components\\pastas\\pastas.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] pastas.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-482d9567", Component.options)
  } else {
    hotAPI.reload("data-v-482d9567", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_pastas_dropzone_vue__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_pastas_dropzone_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_pastas_dropzone_vue__);



/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['data', 'token'],

  components: {
    fileDropzone: __WEBPACK_IMPORTED_MODULE_0__components_pastas_dropzone_vue___default.a
  },

  data: function data() {
    return {
      clientePack: [],
      processoPack: [],
      filesPack: [],
      clientesInDatabase: [],
      tokenData: null,
      isListVisible: true
    };
  },
  created: function created() {
    this.clientesInDatabase = JSON.parse(this.data);
    this.tokenData = this.token;
  },


  computed: {
    optionsForProcessos: function optionsForProcessos() {
      return "<option v-for='processo in processoPack' :value='processo.id_processo'>{{ processo.nome_processo }} - processo.numero_processo</option>";
    }
  },

  methods: {
    toggleVisible: function toggleVisible(input) {
      if (input === null) {
        this.isListVisible = this.input;
      } else {
        this.isListVisible = !this.isListVisible;
        if (!this.isListVisible) {
          $("#changeIcon").removeClass('fa-plus');
          $("#changeIcon").addClass('fa-list');
        } else {
          $("#changeIcon").removeClass('fa-list');
          $("#changeIcon").addClass('fa-plus');
        }
      }
    },
    // End => toggleVisible()

    findProcesso: function findProcesso() {
      var vm = this;
      var clienteSelected = $("#clienteSelecionado");
      axios.get('/processo/search?' + clienteSelected.val()).then(function (response) {
        vm.processoPack = response.data;
      });
    }, //End => findProcesso()

    findFiles: function findFiles() {
      var vm = this;
      var processoSelected = $("#processosRelacionados");

      this.filesPack = [processoSelected.val()];

      axios.get("/pastas/search?" + processoSelected.val()).then(function (response) {
        console.log(response);
      });
    }
  }
});

/***/ }),

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(55)
/* template */
var __vue_template__ = __webpack_require__(56)
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\components\\pastas\\dropzone.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] dropzone.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-154d8a7e", Component.options)
  } else {
    hotAPI.reload("data-v-154d8a7e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var STATUS_INITIAL = 1,
    STATUS_SAVING = 2,
    STATUS_SUCCESS = 3,
    STATUS_FAILED = 0;

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'dropzone',
  props: ['token'],
  data: function data() {
    return {
      uploadedFiles: [],
      FilesToUpload: [],
      tokenData: null,
      uploadError: null,
      uploadStatus: null
    };
  },


  computed: {
    isInitial: function isInitial() {
      return this.uploadStatus === STATUS_INITIAL;
    },
    isSaving: function isSaving() {
      return this.uploadStatus === STATUS_SAVING;
    },
    isSuccess: function isSuccess() {
      return this.uploadStatus === STATUS_SUCCESS;
    },
    isFailed: function isFailed() {
      return this.uploadStatus === STATUS_FAILED;
    }
  },

  creates: function creates() {
    window.console.log("Dropzone Iniciada");
    tokenData = this.token;
  },
  mounted: function mounted() {
    this.reset();
  },


  methods: {
    upload: function upload() {
      //Vou começar a olahr os arquivos relacionados 
      var vm = this;
      var data = new FormData();
      data.append('file', document.getElementById('files').files[0]);

      var config = {
        onUploadProgress: function onUploadProgress(progressEvent) {
          var percentCompleted = Math.round(progressEvent.loaded * 100 / progressEvent.total);
        }
      };

      axios.put('/pastas/upload', data, config).then(function (x) {
        vm.uploadedFiles.push(x.data);
        vm.uploadStatus = STATUS_SUCCESS;
        console.log('=================== UPLOAD ENCERRADO ===================');
      }).catch(function (err) {
        vm.uploadError = err.message;
        vm.uploadStatus = STATUS_FAILED;
      });
    },
    reset: function reset() {
      this.uploadedFiles = [];
    },


    newFile: function newFile() {
      var files = new FormData();
      files.append('file', document.getElementById('files').files[0]);
      this.FilesToUpload.push(files);
      console.log(files);
    }
  }
});

/***/ }),

/***/ 56:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "form",
      {
        staticClass: "form",
        attrs: { role: "form", onsubmit: "return false;" }
      },
      [
        _c(
          "div",
          { staticClass: "dropzone form-control", attrs: { id: "dropzone" } },
          [
            _c("input", {
              staticClass: "input-file",
              attrs: { type: "file", id: "files", multiple: "" },
              on: {
                click: function($event) {
                  $event.preventDefault()
                },
                dragend: _vm.newFile
              }
            })
          ]
        )
      ]
    ),
    _vm._v(" "),
    _c("div", { staticClass: "form-group" }, [
      _c(
        "button",
        { staticClass: "btn btn-primary col-md-2", on: { click: _vm.upload } },
        [_vm._v("Upload "), _c("i", { staticClass: "fa fa-upload" })]
      ),
      _vm._v(" "),
      _vm._m(0)
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "progress col-md-10" }, [
      _c(
        "div",
        {
          staticClass: "progress-bar",
          staticStyle: { width: "60%" },
          attrs: {
            role: "progressbar",
            "aria-valuenow": "60",
            "aria-valuemin": "0",
            "aria-valuemax": "100"
          }
        },
        [_vm._v("\n\t\t    60%\n\t\t  ")]
      )
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-154d8a7e", module.exports)
  }
}

/***/ }),

/***/ 57:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "button",
      {
        staticClass: "btn btn-default buttonFloating",
        attrs: { type: "button" },
        on: { click: _vm.toggleVisible }
      },
      [_c("i", { staticClass: "fa fa-plus", attrs: { id: "changeIcon" } })]
    ),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-6" }, [
        _c("div", { staticClass: "form-group" }, [
          _c(
            "select",
            {
              staticClass: "form-control",
              attrs: { name: "clientes", id: "clienteSelecionado" },
              on: { blur: _vm.findProcesso }
            },
            _vm._l(_vm.clientesInDatabase, function(cliente) {
              return _c("option", { domProps: { value: cliente.id_cliente } }, [
                _vm._v(_vm._s(cliente.nome))
              ])
            })
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-6" }, [
        _c("div", { staticClass: "form-group" }, [
          _c(
            "select",
            {
              staticClass: "form-control",
              attrs: { name: "processos", id: "processosRelacionados" },
              on: { blur: _vm.findFiles }
            },
            _vm._l(_vm.processoPack, function(processo) {
              return _c(
                "option",
                { domProps: { value: processo.id_processo } },
                [
                  _vm._v(
                    _vm._s(processo.nome_processo) +
                      " - " +
                      _vm._s(processo.numero_processo)
                  )
                ]
              )
            })
          )
        ])
      ])
    ]),
    _vm._v(" "),
    _vm.isListVisible
      ? _c("div", [_vm._m(0)])
      : _c("div", [_c("file-dropzone")], 1)
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "table",
      { staticClass: "table table-active table-striped table-hover" },
      [
        _c("thead", [
          _c("tr", [
            _c("th", { attrs: { colspan: "15" } }, [_vm._v("NOME")]),
            _vm._v(" "),
            _c("th", { attrs: { colspan: "3" } }, [_vm._v("TIPO")]),
            _vm._v(" "),
            _c("th", { attrs: { colspan: "5" } }, [_vm._v("UPLOAD")]),
            _vm._v(" "),
            _c("th")
          ])
        ]),
        _vm._v(" "),
        _c("tbody", [_c("tr")])
      ]
    )
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-482d9567", module.exports)
  }
}

/***/ })

/******/ });
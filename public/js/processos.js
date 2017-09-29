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
/******/ 	return __webpack_require__(__webpack_require__.s = 45);
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

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(46);


/***/ }),

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

Vue.component('processoList', __webpack_require__(47));

$(document).ready(function () {
	new Vue({
		el: "#app"
	});
});

/***/ }),

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(48),
  /* template */
  __webpack_require__(49),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "D:\\Sistemas\\newMaker\\resources\\assets\\js\\components\\processos\\listProcesso.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] listProcesso.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-47630e52", Component.options)
  } else {
    hotAPI.reload("data-v-47630e52", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['data'],

    data: function data() {
        return {
            newProcess: {
                numero_processo: '',
                nome_processo: '',
                autor: '',
                reu: '',
                cliente: '',
                cliente_fk: '',
                comarca: '',
                unidade: '',
                observacao: '',
                competencia_fk: '',
                valor_causa: ''
            },

            processosInDatabase: [],
            competenciasInDatabase: [],
            whoIsCliente: [],
            isListVisible: true
        };
    },

    created: function created() {
        this.processosInDatabase = JSON.parse(this.data);
        this.getCompetencias();
        $('.item-navbar').removeClass('active');
        $("#processos").prop('class', 'active');
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

        getCompetencias: function getCompetencias() {
            var back = this;
            axios.get('/competencias').then(function (response) {
                back.competenciasInDatabase = response.data.competencias;
            });
        },
        //End => getCompetencias()

        addProcesso: function addProcesso() {
            var back = this;
            var newProcesso = {
                'nome_processo': this.newProcess.nome_processo,
                'numero_processo': this.newProcess.numero_processo,
                'autor': this.newProcess.autor,
                'reu': this.newProcess.reu,
                'cliente': this.newProcess.cliente,
                'cliente_fk': this.newProcess.cliente_fk,
                'comarca': this.newProcess.comarca,
                'unidade': this.newProcess.unidade,
                'observacao': this.newProcess.observacao,
                'competencia_fk': this.newProcess.competencia_fk,
                'valor_causa': this.newProcess.valor_causa
            };
            window.console.log(newProcesso);
            axios({
                url: '/processo/store',
                method: 'post',
                xsrfHeaderName: 'XSRF-TOKEN',
                data: newProcesso
            }).then(function (response) {
                switch (response.status) {
                    case 200:
                        $.sweetModal({
                            content: 'Cadastro Inserido com sucesso',
                            icon: $.sweetModal.ICON_SUCCESS,

                            buttons: [{
                                label: 'OK',
                                classes: 'greenB'
                            }]
                        }), back.processosInDatabase.push(newProcesso);
                        back.toggleVisible(true);
                        break;
                    // Edn -> case 200

                    default:
                        $.sweetModal({
                            title: 'Oops!',
                            content: 'Error: ' + response.message,
                            icon: $.sweetModal.ICON_ERROR,

                            buttons: [{
                                label: 'OK',
                                classes: 'redB'
                            }]
                        }); //End -> default
                        break;
                } // End => switch
            }); //End => .then()
        },
        //End => addProcesso()

        findCliente: function findCliente() {
            var back = this;
            axios.get('/clientes/search').then(function (response) {
                response.data.forEach(function (info) {
                    back.whoIsCliente = info;
                });
            });
        }, //End => findCliente()

        desabilitandoCampos: function desabilitandoCampos() {
            var back = this;
            switch (this.newProcess.cliente) {
                case "Autor":
                    $("#autorButton").removeClass('disabled');
                    break;

                case "Réu":
                    $("#reuButton").removeClass('disabled');
                    break;
                default:

                    break;
            }
        }, // End => desabilitandoCampos()

        clientSelected: function clientSelected(valueId, nome) {

            var back = this;

            //Verificando dados - Debug
            window.console.log('ID: ' + valueId + '\nNome: ' + nome);

            //Definindo o ID do nosso cliente
            this.newProcess.cliente_fk = valueId;

            //Setando o valor nos campos como se devem
            if (this.newProcess.cliente === "Autor") {
                back.newProcess.autor = nome;
                $("#autor").prop('readonly', true);
                $('#clienteModal').modal('hide');
                window.console.log(nome);
            } else {
                back.newProcess.reu = nome;
                $("#reu").prop('readonly', true);
                $('#clienteModal').modal('hide');
                window.console.log(nome);
            }
        }
    }
});

/***/ }),

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('button', {
    staticClass: "btn btn-default buttonFloating",
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.toggleVisible
    }
  }, [_c('i', {
    staticClass: "fa fa-plus",
    attrs: {
      "id": "changeIcon"
    }
  })]), _vm._v(" "), (_vm.isListVisible) ? _c('div', {
    attrs: {
      "id": "tableProcesso"
    }
  }, [_c('table', {
    staticClass: "table table-striped"
  }, [_vm._m(0), _vm._v(" "), _c('tbody', _vm._l((_vm.processosInDatabase), function(processo) {
    return _c('tr', [_c('td', [_vm._v(_vm._s(processo.nome_processo))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(processo.numero_processo))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(processo.autor))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(processo.reu))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(processo.valor_causa))]), _vm._v(" "), _c('td', {
      attrs: {
        "colspan": "1"
      }
    }, [_c('input', {
      attrs: {
        "type": "checkbox"
      },
      domProps: {
        "value": processo.id_processo
      }
    })])])
  }))])]) : _c('div', {
    staticClass: "container-half"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-6"
  }, [_vm._m(1), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.newProcess.numero_processo),
      expression: "newProcess.numero_processo"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "name": "numero_processo",
      "id": "numero_processo",
      "required": "true"
    },
    domProps: {
      "value": (_vm.newProcess.numero_processo)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.newProcess.numero_processo = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-6"
  }, [_vm._m(2), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.newProcess.nome_processo),
      expression: "newProcess.nome_processo"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "id": "nome_processo",
      "name": "nome_processo",
      "required": "true"
    },
    domProps: {
      "value": (_vm.newProcess.nome_processo)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.newProcess.nome_processo = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-3 form-group"
  }, [_vm._m(3), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.newProcess.cliente),
      expression: "newProcess.cliente"
    }],
    staticClass: "form-control",
    attrs: {
      "name": "cliente"
    },
    on: {
      "change": [function($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function(o) {
          return o.selected
        }).map(function(o) {
          var val = "_value" in o ? o._value : o.value;
          return val
        });
        _vm.newProcess.cliente = $event.target.multiple ? $$selectedVal : $$selectedVal[0]
      }, _vm.desabilitandoCampos]
    }
  }, [_c('option', {
    attrs: {
      "value": "Autor"
    }
  }, [_vm._v("Autor")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Réu"
    }
  }, [_vm._v("Réu")])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-5 form-group"
  }, [_vm._m(4), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.newProcess.competencia_fk),
      expression: "newProcess.competencia_fk"
    }],
    staticClass: "form-control",
    attrs: {
      "name": "competencia",
      "id": "competencia"
    },
    on: {
      "change": function($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function(o) {
          return o.selected
        }).map(function(o) {
          var val = "_value" in o ? o._value : o.value;
          return val
        });
        _vm.newProcess.competencia_fk = $event.target.multiple ? $$selectedVal : $$selectedVal[0]
      }
    }
  }, _vm._l((_vm.competenciasInDatabase), function(competenciaSelect) {
    return _c('option', {
      domProps: {
        "value": competenciaSelect.id_competencia
      }
    }, [_vm._v(_vm._s(competenciaSelect.nome_opcao))])
  }))]), _vm._v(" "), _c('div', {
    staticClass: "col-md-4 form-group"
  }, [_vm._m(5), _vm._v(" "), _c('div', {
    staticClass: "input-group"
  }, [_c('span', {
    staticClass: "input-group-addon"
  }, [_vm._v("R$")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.newProcess.valor_causa),
      expression: "newProcess.valor_causa"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "name": "valor_causa",
      "id": "valor_causa",
      "required": "true"
    },
    domProps: {
      "value": (_vm.newProcess.valor_causa)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.newProcess.valor_causa = $event.target.value
      }
    }
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_vm._m(6), _vm._v(" "), _c('div', {
    staticClass: "input-group"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.newProcess.autor),
      expression: "newProcess.autor"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "name": "autor",
      "id": "autor",
      "required": "true"
    },
    domProps: {
      "value": (_vm.newProcess.autor)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.newProcess.autor = $event.target.value
      }
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "input-group-btn"
  }, [_c('a', {
    staticClass: "btn btn-default disabled",
    attrs: {
      "href": "#clienteModal",
      "id": "autorButton",
      "data-toggle": "modal"
    },
    on: {
      "click": _vm.findCliente
    }
  }, [_c('i', {
    staticClass: "fa fa-search"
  })])])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_vm._m(7), _vm._v(" "), _c('div', {
    staticClass: "input-group"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.newProcess.reu),
      expression: "newProcess.reu"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "name": "reu",
      "id": "reu",
      "required": "true"
    },
    domProps: {
      "value": (_vm.newProcess.reu)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.newProcess.reu = $event.target.value
      }
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "input-group-btn"
  }, [_c('a', {
    staticClass: "btn btn-default disabled",
    attrs: {
      "href": "#clienteModal",
      "id": "reuButton",
      "data-toggle": "modal"
    },
    on: {
      "click": _vm.findCliente
    }
  }, [_c('i', {
    staticClass: "fa fa-search"
  })])])])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-5"
  }, [_vm._m(8), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.newProcess.comarca),
      expression: "newProcess.comarca"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "name": "comarca",
      "id": "comarca"
    },
    domProps: {
      "value": (_vm.newProcess.comarca)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.newProcess.comarca = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-7"
  }, [_vm._m(9), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.newProcess.unidade),
      expression: "newProcess.unidade"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "name": "unidade",
      "id": "unidade"
    },
    domProps: {
      "value": (_vm.newProcess.unidade)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.newProcess.unidade = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "observavao"
    }
  }, [_vm._v("Observção")]), _vm._v(" "), _c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.newProcess.observacao),
      expression: "newProcess.observacao"
    }],
    staticClass: "form-control",
    attrs: {
      "name": "observacao",
      "id": "observacao",
      "rows": "5"
    },
    domProps: {
      "value": (_vm.newProcess.observacao)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.newProcess.observacao = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-success",
    staticStyle: {
      "float": "right"
    },
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.addProcesso
    }
  }, [_vm._v("Salvar "), _c('i', {
    staticClass: "fa fa-plus"
  })]), _vm._v(" "), _c('div', {
    staticClass: "modal fade",
    attrs: {
      "id": "clienteModal"
    }
  }, [_c('div', {
    staticClass: "modal-dialog",
    staticStyle: {
      "width": "65%"
    },
    attrs: {
      "role": "document"
    }
  }, [_c('div', {
    staticClass: "modal-content"
  }, [_c('div', {
    staticClass: "modal-header"
  }, [_vm._m(10), _vm._v(" "), _c('h4', {
    staticClass: "modal-title"
  }, [_c('center', [_vm._v("Clientes")])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "modal-body"
  }, [_c('table', {
    staticClass: "table table-striped"
  }, [_vm._m(11), _vm._v(" "), _c('tbody', _vm._l((_vm.whoIsCliente), function(option) {
    return _c('tr', {
      on: {
        "dblclick": function($event) {
          _vm.clientSelected(option.id_cliente, option.nome)
        }
      }
    }, [_c('td', [_vm._v(_vm._s(option.nome))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(option.cpf ? option.cpf : option.cnpj))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(option.email))])])
  }))])]), _vm._v(" "), _vm._m(12)])])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('thead', [_c('tr', [_c('th', [_vm._v("Nome")]), _vm._v(" "), _c('th', [_vm._v("Número")]), _vm._v(" "), _c('th', [_vm._v("Autor")]), _vm._v(" "), _c('th', [_vm._v("Réu")]), _vm._v(" "), _c('th', [_vm._v("Valor")]), _vm._v(" "), _c('th', {
    attrs: {
      "colspan": "1"
    }
  }, [_c('input', {
    attrs: {
      "type": "checkbox"
    }
  })])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('label', {
    attrs: {
      "for": "numero_processo"
    }
  }, [_vm._v("Número do processo"), _c('span', {
    staticClass: "text-danger"
  }, [_vm._v("*")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('label', {
    attrs: {
      "for": "nome_processo"
    }
  }, [_vm._v("Nome Ação"), _c('span', {
    staticClass: "text-danger"
  }, [_vm._v("*")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('label', {
    attrs: {
      "for": "cliente"
    }
  }, [_vm._v("Cliente"), _c('span', {
    staticClass: "text-danger"
  }, [_vm._v("*")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('label', {
    attrs: {
      "for": "competencia"
    }
  }, [_vm._v("Competencia"), _c('span', {
    staticClass: "text-danger"
  }, [_vm._v("*")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('label', {
    attrs: {
      "for": "valor_causa"
    }
  }, [_vm._v("Valor da Causa"), _c('span', {
    staticClass: "text-danger"
  }, [_vm._v("*")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('label', {
    attrs: {
      "for": "autor"
    }
  }, [_vm._v("Autor"), _c('span', {
    staticClass: "text-danger"
  }, [_vm._v("*")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('label', {
    attrs: {
      "for": "reu"
    }
  }, [_vm._v("Réu"), _c('span', {
    staticClass: "text-danger"
  }, [_vm._v("*")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('label', {
    attrs: {
      "for": "comarca"
    }
  }, [_vm._v("Comarca"), _c('span', {
    staticClass: "text-danger"
  }, [_vm._v("*")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('label', {
    attrs: {
      "for": "unidade"
    }
  }, [_vm._v("Unidade"), _c('span', {
    staticClass: "text-danger"
  }, [_vm._v("*")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('button', {
    staticClass: "close",
    attrs: {
      "type": "button",
      "data-dismiss": "modal",
      "aria-label": "Close"
    }
  }, [_c('span', {
    attrs: {
      "aria-hidden": "true"
    }
  }, [_vm._v("×")]), _vm._v(" "), _c('span', {
    staticClass: "sr-only"
  }, [_vm._v("Close")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('thead', [_c('tr', [_c('th', [_vm._v("Nome")]), _vm._v(" "), _c('th', [_vm._v("CNPJ/CPF")]), _vm._v(" "), _c('th', [_vm._v("Email")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "modal-footer"
  }, [_c('button', {
    staticClass: "btn btn-default",
    attrs: {
      "type": "button",
      "data-dismiss": "modal"
    }
  }, [_vm._v("Close")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-47630e52", module.exports)
  }
}

/***/ })

/******/ });
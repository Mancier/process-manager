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
/******/ 	return __webpack_require__(__webpack_require__.s = 41);
/******/ })
/************************************************************************/
/******/ ({

/***/ 2:
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

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(42);


/***/ }),

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

/*Components*/
Vue.component('newCliente', __webpack_require__(43));
// Vue.component('listCliente', require('./components/clientes/listCliente.vue'));

/*Vue Instance*/
$(function () {
	var cv = new Vue({
		el: '#app'
	});
});

/***/ }),

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(44),
  /* template */
  __webpack_require__(45),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "D:\\Sistemas\\newMaker\\resources\\assets\\js\\components\\clientes\\adicionarCliente.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] adicionarCliente.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-609c828c", Component.options)
  } else {
    hotAPI.reload("data-v-609c828c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

/* harmony default export */ __webpack_exports__["default"] = ({

    props: ['data'],

    data: function data() {
        return {
            cliente: {
                tipo_pessoa: '',
                nome: '',
                cpf: '',
                rg: '',
                cnpj: '',
                razao_social: '',
                email: '',
                telefone: '',
                celular: '',
                cep: '',
                municipio: '',
                uf: '',
                numero: '',
                endereco: '',
                bairro: '',
                complemento: '',
                observacao: ''
            },
            clientesInDatabase: {},
            outraPessoa: 'Pessoa Jurídica',
            isPessoaFisica: true,
            isListVisible: true,
            clientesChecados: []
        };
    },
    created: function created() {
        this.clientesInDatabase = JSON.parse(this.data);
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
        alert: function alert() {
            $.sweetModal('This is an alert.');
        },
        buscarCep: function buscarCep() {
            var self = this;

            this.cliente.endereco = '...';
            this.cliente.municipio = '...';
            this.cliente.uf = '...';
            this.cliente.bairro = '...';

            if (this.cliente.cep.length >= 8) {
                window.console.log("Iniciando busca...");
                $.getJSON('https://viacep.com.br/ws/' + this.cliente.cep + '/json/', function (dados) {

                    self.cliente.endereco = dados.logradouro;
                    self.cliente.municipio = dados.localidade;
                    self.cliente.uf = dados.uf;
                    self.cliente.bairro = dados.bairro;

                    //Verifica se o cep tem uma rua correspondente
                    if (dados.logradouro === '') {
                        $("#endereco").removeAttr('readonly');
                        $("#bairro").removeAttr('readonly');

                        $("#bairro").focus();
                    } else {
                        // focar no Campo Numero da casa
                        $("#endereco").add('readonly');
                        $("#bairro").add('readonly');

                        $("#numero_casa").focus();
                    }
                });
            }
        },
        togglePessoa: function togglePessoa() {
            this.isPessoaFisica = !this.isPessoaFisica;
            if (!this.isPessoaFisica) {
                this.isPessoaFisica = false;
                this.outraPessoa = "Pessoa Física";
            } else {
                this.isPessoaFisica = true;
                this.outraPessoa = "Pessoa Jurídica";
            }
        },
        addCliente: function addCliente() {
            var back = this;
            var newCliente = {
                'tipo_pessoa': this.outraPessoa,
                'nome': this.cliente.nome,
                'cpf': this.cliente.cpf,
                'rg': this.cliente.rg,
                'cnpj': this.cliente.cnpj,
                'razao_social': this.cliente.razao_social,
                'email': this.cliente.email,
                'telefone': this.cliente.telefone,
                'celular': this.cliente.celular,
                'cep': this.cliente.cep,
                'municipio': this.cliente.municipio,
                'uf': this.cliente.uf,
                'numero': this.cliente.numero,
                'endereco': this.cliente.endereco,
                'bairro': this.cliente.bairro,
                'complemento': this.cliente.complemento,
                'observacao': this.cliente.observacao
            };

            window.console.log('Iniciando o axios...\nSera inserido esses dados: \n' + newCliente);

            axios({
                url: '/clientes/store',
                method: 'post',
                xsrfHeaderName: 'XSRF-TOKEN',
                data: newCliente
            }).then(function (response) {
                switch (response.status) {
                    case 200:
                        $.sweetModal({
                            content: 'Cliente inserido com sucesso',
                            icon: $.sweetModal.ICON_SUCCESS,

                            buttons: [{
                                label: 'OK',
                                classes: 'greenB'
                            }]
                        }), back.clientesInDatabase.push(newCliente);
                        back.toggleVisible(true);
                        break;

                    default:
                        $.sweetModal({
                            title: 'Oops!',
                            content: 'Verifique se os dados estão corretos!',
                            icon: $.sweetModal.ICON_ERROR,

                            buttons: [{
                                label: 'OK',
                                classes: 'redB'
                            }]
                        });
                        break;
                }
            });
        },
        /*End => addCliente*/

        information: function information(id) {
            axion.get('/clientes?q=' + id).then(function (response) {
                return alert("A requisição foi envidada e recebida");
            });
        }
    }
});

/***/ }),

/***/ 45:
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
      "id": "tableCliente"
    }
  }, [_c('table', {
    staticClass: "table table-striped table-hover"
  }, [_vm._m(0), _vm._v(" "), _c('tbody', _vm._l((_vm.clientesInDatabase), function(cliente) {
    return _c('tr', {
      staticClass: "teste",
      on: {
        "click": function($event) {
          _vm.information()
        }
      }
    }, [_c('td', [_vm._v(_vm._s(cliente.nome))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(cliente.email))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(cliente.cpf ? cliente.cpf : cliente.cnpj))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(cliente.telefone))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(cliente.cep))]), _vm._v(" "), _c('td', {
      attrs: {
        "colspan": "1"
      }
    }, [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: (_vm.clientesChecados),
        expression: "clientesChecados"
      }],
      attrs: {
        "type": "checkbox"
      },
      domProps: {
        "value": cliente.id_cliente,
        "checked": Array.isArray(_vm.clientesChecados) ? _vm._i(_vm.clientesChecados, cliente.id_cliente) > -1 : (_vm.clientesChecados)
      },
      on: {
        "__c": function($event) {
          var $$a = _vm.clientesChecados,
            $$el = $event.target,
            $$c = $$el.checked ? (true) : (false);
          if (Array.isArray($$a)) {
            var $$v = cliente.id_cliente,
              $$i = _vm._i($$a, $$v);
            if ($$el.checked) {
              $$i < 0 && (_vm.clientesChecados = $$a.concat($$v))
            } else {
              $$i > -1 && (_vm.clientesChecados = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
            }
          } else {
            _vm.clientesChecados = $$c
          }
        }
      }
    })])])
  }))]), _vm._v(" "), _c('button', {
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.alert
    }
  }, [_vm._v("Alert!")])]) : _c('div', {
    staticClass: "container-half"
  }, [_c('center', [_c('button', {
    staticClass: "btn btn-default",
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.togglePessoa
    }
  }, [_vm._v("Trocar para " + _vm._s(_vm.outraPessoa))])]), _vm._v(" "), (_vm.isPessoaFisica) ? _c('div', {
    attrs: {
      "id": "fisico"
    }
  }, [_c('div', {
    staticClass: "form-group"
  }, [_vm._m(1), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.cliente.nome),
      expression: "cliente.nome"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "name": "nome",
      "id": "nome",
      "required": "true"
    },
    domProps: {
      "value": (_vm.cliente.nome)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.cliente.nome = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-6"
  }, [_vm._m(2), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.cliente.cpf),
      expression: "cliente.cpf"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "name": "cpf",
      "id": "cpf",
      "required": "true"
    },
    domProps: {
      "value": (_vm.cliente.cpf)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.cliente.cpf = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-6"
  }, [_vm._m(3), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.cliente.rg),
      expression: "cliente.rg"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "name": "rg",
      "id": "rg"
    },
    domProps: {
      "value": (_vm.cliente.rg)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.cliente.rg = $event.target.value
      }
    }
  })])])]) : _c('div', {
    attrs: {
      "id": "juridico"
    }
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "nome"
    }
  }, [_vm._v("Nome Fantasia")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.cliente.nome),
      expression: "cliente.nome"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "name": "nome",
      "id": "nome"
    },
    domProps: {
      "value": (_vm.cliente.nome)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.cliente.nome = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "cnpj"
    }
  }, [_vm._v("CNPJ")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.cliente.cnpj),
      expression: "cliente.cnpj"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "name": "cnpj",
      "id": "cnpj"
    },
    domProps: {
      "value": (_vm.cliente.cnpj)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.cliente.cnpj = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "razaoSocial"
    }
  }, [_vm._v("Razão Social")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.cliente.razao_social),
      expression: "cliente.razao_social"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "name": "razaoSocial",
      "id": ""
    },
    domProps: {
      "value": (_vm.cliente.razao_social)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.cliente.razao_social = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('div', {
    attrs: {
      "id": "geral"
    }
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "email"
    }
  }, [_vm._v("Email")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.cliente.email),
      expression: "cliente.email"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "name": "email",
      "id": "email"
    },
    domProps: {
      "value": (_vm.cliente.email)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.cliente.email = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "telefone"
    }
  }, [_vm._v("Telefone")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.cliente.telefone),
      expression: "cliente.telefone"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "name": "telefone",
      "id": "telefone"
    },
    domProps: {
      "value": (_vm.cliente.telefone)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.cliente.telefone = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "celular"
    }
  }, [_vm._v("Celular")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.cliente.celular),
      expression: "cliente.celular"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "name": "celular",
      "id": ""
    },
    domProps: {
      "value": (_vm.cliente.celular)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.cliente.celular = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-3"
  }, [_vm._m(4), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.cliente.cep),
      expression: "cliente.cep"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "name": "cep",
      "id": "cep",
      "required": "true"
    },
    domProps: {
      "value": (_vm.cliente.cep)
    },
    on: {
      "keyup": _vm.buscarCep,
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.cliente.cep = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-5"
  }, [_c('label', {
    attrs: {
      "for": "municipio"
    }
  }, [_vm._v("Cidade")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.cliente.municipio),
      expression: "cliente.municipio"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "name": "municipio",
      "id": "cidade",
      "readonly": ""
    },
    domProps: {
      "value": (_vm.cliente.municipio)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.cliente.municipio = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-2"
  }, [_c('label', {
    attrs: {
      "for": "uf"
    }
  }, [_vm._v("UF")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.cliente.uf),
      expression: "cliente.uf"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "name": "uf",
      "id": "uf",
      "readonly": ""
    },
    domProps: {
      "value": (_vm.cliente.uf)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.cliente.uf = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-2"
  }, [_c('label', {
    attrs: {
      "for": "numero_casa"
    }
  }, [_vm._v("Número")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.cliente.numero_casa),
      expression: "cliente.numero_casa"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "name": "numero_casa",
      "id": "numero_casa",
      "required": "true"
    },
    domProps: {
      "value": (_vm.cliente.numero_casa)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.cliente.numero_casa = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-7"
  }, [_c('label', {
    attrs: {
      "for": "endereco"
    }
  }, [_vm._v("Logradouro")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.cliente.endereco),
      expression: "cliente.endereco"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "name": "endereco",
      "id": "endereco",
      "readonly": ""
    },
    domProps: {
      "value": (_vm.cliente.endereco)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.cliente.endereco = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-5"
  }, [_c('label', {
    attrs: {
      "for": "bairro"
    }
  }, [_vm._v("Bairro")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.cliente.bairro),
      expression: "cliente.bairro"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "name": "bairro",
      "id": "bairro",
      "readonly": ""
    },
    domProps: {
      "value": (_vm.cliente.bairro)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.cliente.bairro = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "complemento"
    }
  }, [_vm._v("Complemento")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.cliente.complemento),
      expression: "cliente.complemento"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "name": "complemento",
      "id": "complemento"
    },
    domProps: {
      "value": (_vm.cliente.complemento)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.cliente.complemento = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "observacao"
    }
  }, [_vm._v("Observação")]), _vm._v(" "), _c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.cliente.observacao),
      expression: "cliente.observacao"
    }],
    staticClass: "form-control",
    attrs: {
      "name": "observacao",
      "rows": "3"
    },
    domProps: {
      "value": (_vm.cliente.observacao)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.cliente.observacao = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-success",
    staticStyle: {
      "float": "right"
    },
    on: {
      "click": function($event) {
        _vm.addCliente()
      }
    }
  }, [_vm._v("Salvar "), _c('i', {
    staticClass: "fa fa-plus"
  })])])], 1)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('thead', [_c('tr', [_c('th', [_vm._v("Nome")]), _vm._v(" "), _c('th', [_vm._v("Email")]), _vm._v(" "), _c('th', [_vm._v("CPF/CNPJ")]), _vm._v(" "), _c('th', [_vm._v("Telefone")]), _vm._v(" "), _c('th', [_vm._v("CEP")]), _vm._v(" "), _c('th', [_c('input', {
    attrs: {
      "type": "checkbox",
      "name": "todos"
    }
  })])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('label', {
    attrs: {
      "for": "nome"
    }
  }, [_vm._v("Nome"), _c('span', {
    staticClass: "text-danger"
  }, [_vm._v("*")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('label', {
    attrs: {
      "for": "cpf"
    }
  }, [_vm._v("CPF"), _c('span', {
    staticClass: "text-danger"
  }, [_vm._v("*")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('label', {
    attrs: {
      "for": "rg"
    }
  }, [_vm._v("RG"), _c('span', {
    staticClass: "text-danger"
  }, [_vm._v("*")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('label', {
    attrs: {
      "for": "cep"
    }
  }, [_vm._v("CEP"), _c('span', {
    staticClass: "text-danger"
  }, [_vm._v("*")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-609c828c", module.exports)
  }
}

/***/ })

/******/ });
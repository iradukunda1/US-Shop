(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a5b715c8"],{"13f4":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("form",{on:{submit:function(e){return e.preventDefault(),t.addCategory()}}},[t._m(0),a("div",{staticClass:"col-lg-12 marginTop"},[a("label",{staticClass:"col-lg-2"},[t._v("Name")]),a("div",{staticClass:"col-lg-4"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.category.name,expression:"category.name"}],staticClass:"form-control",attrs:{type:"text",placeholder:"enter category eg:women"},domProps:{value:t.category.name},on:{input:function(e){e.target.composing||t.$set(t.category,"name",e.target.value)}}})])]),a("div",{staticClass:"marginTop col-lg-12"},[a("label",{staticClass:"col-lg-2"},[t._v("Description")]),a("div",{staticClass:" col-lg-8"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.category.description,expression:"category.description"}],staticClass:"form-control",domProps:{value:t.category.description},on:{input:function(e){e.target.composing||t.$set(t.category,"description",e.target.value)}}})])]),a("div",{staticClass:"marginTop col-lg-12 col-lg-offset-6"},[a("input",{staticClass:"btn btn-danger",attrs:{type:"submit",value:"cancel"},on:{click:function(e){return t.$router.go(-1)}}}),a("input",{staticClass:"btn btn-primary",staticStyle:{"margin-left":"10px"},attrs:{type:"submit",value:"submit"}})])])])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-title-box"},[a("h4",{staticClass:"page-title"},[t._v("Create Category")])])}],c=a("bc3a"),s=a.n(c),i={name:"addCategory",data:function(){return{category:{name:"",description:""}}},methods:{addCategory:function(){s.a.post("".concat(Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_BASE_URL,"/categories"),this.category).then((function(t){alert("Category created")})).catch((function(t){console.log(t),alert("create failed")}))}}},r=i,l=(a("49aa"),a("2877")),u=Object(l["a"])(r,o,n,!1,null,"13732ac8",null);e["default"]=u.exports},"49aa":function(t,e,a){"use strict";var o=a("bf48"),n=a.n(o);n.a},bf48:function(t,e,a){}}]);
//# sourceMappingURL=chunk-a5b715c8.6192bcef.js.map
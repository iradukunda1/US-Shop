(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-da60e7c4"],{"07ff":function(t,e,s){"use strict";var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[t.addresses.length?s("div",{staticClass:"col-md-12 my-5  py-5"},[s("div",{staticClass:"table-responsive"},[t._v(" "+t._s(t.createBtn(!0))+" "),s("table",{staticClass:"table table-bordred table-striped",attrs:{id:"mytable"}},[t._m(0),s("tbody",t._l(t.addresses,(function(e,r){return s("tr",{key:r},[t._m(1,!0),s("td",[t._v(t._s(e.firstName+" "+e.lastName))]),s("td",[t._v(t._s(e.country))]),s("td",[t._v(t._s(e.city))]),s("td",[t._v(t._s(e.district))]),s("td",[t._v(t._s(e.sector))]),s("td",[t._v(t._s(e.addresses))]),s("td",[t._v(t._s(e.email))]),s("td",[t._v(t._s(e.zipCode))]),s("td",[t._v(t._s(e.phoneNumber))]),t._m(2,!0),t._m(3,!0)])})),0)])])]):s("div",{staticClass:"error-template container"},[s("h1",[t._v("Oops!")]),s("h2",[t._v("No Address Found "+t._s(t.createBtn(!1)))]),s("div",{staticClass:"error-actions"},[s("button",{staticClass:"btn btn-primary",on:{click:t.openForm}},[t._v(" Create New Address ")])])])])])},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",[s("th",[t._v("Select")]),s("th",[t._v("Names")]),s("th",[t._v("Country")]),s("th",[t._v("Province")]),s("th",[t._v("District")]),s("th",[t._v("Sector")]),s("th",[t._v("Address")]),s("th",[t._v("Email")]),s("th",[t._v("Zip-Code")]),s("th",[t._v("Contacts")]),s("th",[t._v("Edit")]),s("th",[t._v("Delete")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("td",[s("input",{staticClass:"checkthis",attrs:{type:"checkbox"}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("td",[s("p",{attrs:{"data-placement":"top","data-toggle":"tooltip",title:"Edit"}},[s("button",{staticClass:"btn btn-primary btn-xs"},[s("i",{staticClass:"fas fa-pen"})])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("td",[s("p",{attrs:{"data-placement":"top","data-toggle":"tooltip",title:"Delete"}},[s("button",{staticClass:"btn btn-danger btn-xs"},[s("i",{staticClass:"fas fa-trash"})])])])}],i=(s("8e6e"),s("ac6a"),s("456d"),s("bd86")),n=s("6b22"),o=s("2f62");function c(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,r)}return s}function d(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?c(Object(s),!0).forEach((function(e){Object(i["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):c(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var l={data:function(){return{addresses:[{country:"Rwanda",city:"Kigali",district:"Gasabo",email:"user@gmail.com",phoneNumber:"+923335586757",sector:"Remera",firstName:"Mugisha",lastName:"yannick",zipCode:"2344uy43",addresses:"CB 106/107 Street # 11 Wah Cantt Islamabad Pakistan"}],showLoader:!1}},computed:d(d({},Object(o["b"])(["resources","auth"])),{},{loggedUser:function(){return this.auth.user},Addresses:function(){return this.resources.addresses}}),mounted:function(){console.log(this.Addresses),this.getAllAddresses()},methods:{openForm:function(){this.$emit("openAddressForm")},createBtn:function(t){this.$emit("createBtn",t)},getAllAddresses:function(){var t=this;this.loader(!0,{context:"fetching all user addresses...",area:"app"}),this.$store.dispatch("fetchAllUserAddresses",this.loggedUser).then((function(e){t.loader(!1)})).catch((function(e){t.loader(!1),Object(n["a"])("Error while fetching address","Please wait for while")}))}}},u=l,m=s("2877"),p=Object(m["a"])(u,r,a,!1,null,null,null);e["a"]=p.exports},"2db1":function(t,e,s){"use strict";var r=s("e1a0"),a=s.n(r);a.a},"31e7":function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"cart-products p-5 bg-white rounded shadow-sm"},[s("div",{staticClass:"row mt-5"},[s("div",{staticClass:"col-sm-8"},[s("div",{staticClass:"container section",attrs:{id:"app"}},[s("div",{staticClass:"d-flex justify-content-between"},[t.createAddress?s("button",{staticClass:"btn btn-primary",on:{click:function(e){t.createAddress=!1}}},[s("i",{staticClass:"fas fa-arrow-left text-white"}),t._v(" Select Address ")]):s("h4",{staticClass:"text-center"},[t._v("Select Address")]),!t.createAddress&&t.createBtn?s("button",{staticClass:"btn btn-primary mb-2",on:{click:function(e){t.createAddress=!0}}},[t._v("Create Address ")]):t._e()]),t.createAddress?s("address-form"):s("address-table",{on:{openAddressForm:t.openAddress,createBtn:t.createBtnFunc}})],1)]),s("div",{staticClass:"col-sm-4"},[s("cart-calculator",{ref:"cartCalculator"}),s("ul",{staticClass:"list-group mb-3"},[s("router-link",{staticClass:"btn btn-primary mt-2 text-white",attrs:{to:"/products"}},[t._v("Continue Shopping")]),t.createBtn?s("router-link",{staticClass:"btn btn-success mt-2 text-white",attrs:{to:"/payments"}},[t._v("Save & Pay ")]):t._e()],1)],1)])])},a=[],i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"cart-calculator"},[s("h4",{staticClass:"d-flex justify-content-between align-items-center mb-3"},[s("span",{staticClass:"text-muted"},[t._v("Your cart")]),s("span",{staticClass:"badge badge-primary badge-pill"},[t._v(t._s(t.cartProducts.length))])]),s("ul",{staticClass:"list-group mb-3"},[t._l(t.savedCartProduct,(function(e,r){return s("li",{key:r,staticClass:"list-group-item d-flex justify-content-between lh-condensed"},[s("div",[s("h6",{staticClass:"my-0"},[t._v(t._s(e.name))])]),s("span",{staticClass:"text-muted",staticStyle:{width:"120px"}},[t._v(t._s(e.price*t.QtyProduct(e)+e.currency))]),s("input",{staticClass:"bg-white border-0",staticStyle:{"max-width":"50px"},attrs:{type:"text","aria-label":"Amount (to the nearest dollar)",disabled:""},domProps:{value:t.QtyProduct(e)}})])})),s("hr"),s("li",{staticClass:"list-group-item d-flex justify-content-between"},[s("span",[t._v("Total (INR)")]),s("strong",[t._v(" "+t._s(t.totalValue.toFixed(2))+"Frw")])])],2)])},n=[],o=(s("8e6e"),s("456d"),s("ac6a"),s("5df3"),s("4f7f"),s("75fc")),c=s("bd86"),d=s("2f62");function l(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,r)}return s}function u(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?l(Object(s),!0).forEach((function(e){Object(c["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):l(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var m={name:"cartCalculator",data:function(){return{totalValue:0}},computed:u(u({},Object(d["d"])(["cartProducts"])),{},{savedCartProduct:function(){return Object(o["a"])(new Set(this.cartProducts.map((function(t){return JSON.stringify(t)})))).map((function(t){return JSON.parse(t)}))}}),methods:{calculateTotalPrice:function(){var t=this;this.totalValue=0,this.cartProducts.forEach((function(e){t.totalValue+=parseFloat(e.price)})),this.$store.state.resources.totalPrice=this.totalValue},QtyProduct:function(t){return this.cartProducts.filter((function(e){return e.id===t.id})).length}},created:function(){this.calculateTotalPrice()},mounted:function(){}},p=m,f=s("2877"),v=Object(f["a"])(p,i,n,!1,null,null,null),h=v.exports,b=s("07ff"),_=s("4781"),g={name:"Checkout",components:{CartCalculator:h,addressTable:b["a"],addressForm:_["a"]},data:function(){return{shippingDetail:{address1:"",address2:"",country:"",zipCode:"",shippingDate:"",products:[],userId:"",totalPrice:""},createAddress:!1,createBtn:!0}},methods:{openAddress:function(){this.createAddress=!0},createBtnFunc:function(t){this.createBtn=t}}},C=g,y=(s("2db1"),Object(f["a"])(C,r,a,!1,null,null,null));e["default"]=y.exports},4781:function(t,e,s){"use strict";var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("form",{attrs:{id:"productCU"},on:{submit:function(e){return e.preventDefault(),t.createAddress(e)}}},[s("h4",{staticClass:"text-center"},[t._v("Create Address")]),t._l(t.errorMessage,(function(e,r){return s("div",{key:e,staticClass:"alert alert-danger",attrs:{role:"alert"}},[t._v(" "+t._s(r)+" ")])})),s("div",{staticClass:"form-group"},[t._m(0),s("input",{directives:[{name:"model",rawName:"v-model",value:t.address.firstName,expression:"address.firstName"}],staticClass:"form-control",attrs:{type:"text",id:"firstName",required:""},domProps:{value:t.address.firstName},on:{input:function(e){e.target.composing||t.$set(t.address,"firstName",e.target.value)}}})]),s("div",{staticClass:"form-group"},[t._m(1),s("input",{directives:[{name:"model",rawName:"v-model",value:t.address.lastName,expression:"address.lastName"}],staticClass:"form-control",attrs:{type:"text",id:"lastName",required:""},domProps:{value:t.address.lastName},on:{input:function(e){e.target.composing||t.$set(t.address,"lastName",e.target.value)}}})]),s("div",{staticClass:"form-group"},[t._m(2),s("input",{directives:[{name:"model",rawName:"v-model",value:t.address.email,expression:"address.email"}],staticClass:"form-control",attrs:{type:"email",id:"email",required:""},domProps:{value:t.address.email},on:{input:function(e){e.target.composing||t.$set(t.address,"email",e.target.value)}}})]),s("div",{staticClass:"form-group"},[t._m(3),s("input",{directives:[{name:"model",rawName:"v-model",value:t.address.country,expression:"address.country"}],staticClass:"form-control",attrs:{type:"text",id:"country",required:""},domProps:{value:t.address.country},on:{input:function(e){e.target.composing||t.$set(t.address,"country",e.target.value)}}})]),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"city"}},[t._v("City")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.address.city,expression:"address.city"}],staticClass:"form-control",attrs:{type:"text",id:"city",required:""},domProps:{value:t.address.city},on:{input:function(e){e.target.composing||t.$set(t.address,"city",e.target.value)}}})]),s("div",{staticClass:"form-group"},[t._m(4),s("input",{directives:[{name:"model",rawName:"v-model",value:t.address.district,expression:"address.district"}],staticClass:"form-control",attrs:{type:"text",id:"district",required:""},domProps:{value:t.address.district},on:{input:function(e){e.target.composing||t.$set(t.address,"district",e.target.value)}}})]),s("div",{staticClass:"form-group"},[t._m(5),s("input",{directives:[{name:"model",rawName:"v-model",value:t.address.zipCode,expression:"address.zipCode"}],staticClass:"form-control",attrs:{type:"text",id:"zip-code",required:""},domProps:{value:t.address.zipCode},on:{input:function(e){e.target.composing||t.$set(t.address,"zipCode",e.target.value)}}})]),s("div",{staticClass:"form-group"},[t._m(6),s("input",{directives:[{name:"model",rawName:"v-model",value:t.address.addresses,expression:"address.addresses"}],staticClass:"form-control",attrs:{type:"text",id:"address",name:"address",required:""},domProps:{value:t.address.addresses},on:{input:function(e){e.target.composing||t.$set(t.address,"addresses",e.target.value)}}})]),s("div",{staticClass:"form-group"},[t._m(7),s("input",{directives:[{name:"model",rawName:"v-model",value:t.address.phoneNumber,expression:"address.phoneNumber"}],staticClass:"form-control",attrs:{type:"tel",id:"phone",name:"phone",required:""},domProps:{value:t.address.phoneNumber},on:{input:function(e){e.target.composing||t.$set(t.address,"phoneNumber",e.target.value)}}})]),s("small",{staticClass:"form-text text-muted",attrs:{id:"emailHelp"}},[t._v("We'll never share your data with anyone else.")]),s("br")],2),s("button",{staticClass:"btn btn-primary mx-auto",attrs:{type:"submit"}},[t.showLoader?s("i",{staticClass:"fa fa-spinner fa-spin mr-1"}):t._e(),t._v("Save Address ")])])},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("label",{attrs:{for:"firstName"}},[t._v("First-Name"),s("span",{staticClass:"text-danger"},[t._v("*")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("label",{attrs:{for:"lastName"}},[t._v("Last Name"),s("span",{staticClass:"text-danger"},[t._v("*")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("label",{attrs:{for:"email"}},[t._v("E-mail"),s("span",{staticClass:"text-danger"},[t._v("*")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("label",{attrs:{for:"country"}},[t._v("Country"),s("span",{staticClass:"text-danger"},[t._v("*")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("label",{attrs:{for:"district"}},[t._v("District"),s("span",{staticClass:"text-danger"},[t._v("*")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("label",{attrs:{for:"zip-code"}},[t._v("Postal / Zip Code"),s("span",{staticClass:"text-danger"},[t._v("*")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("label",{attrs:{for:"address"}},[t._v("Address / Location"),s("span",{staticClass:"text-danger"},[t._v("*")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("label",{attrs:{for:"phone"}},[t._v("Phone Number"),s("span",{staticClass:"text-danger"},[t._v("*")])])}],i=s("6b22"),n={data:function(){return{address:{phoneNumber:""},errorMessage:[],showLoader:!1}},methods:{createAddress:function(){var t=this;this.address.firstName.length<5&&this.errorMessage.push("FirstName should contains more than 5 character"),!1===this.ValidateEmail(this.address.email)&&this.errorMessage.push("Please provide a valid Email address"),this.address.phoneNumber.length<10&&this.errorMessage.push("Please provide valid phone number"),0===this.errorMessage.length&&(this.loader(!0,{context:"creating address...",area:"app"}),this.$store.dispatch("createAddress",this.address).then((function(e){t.loader(!1),Object(i["c"])("address created Successfully","User address created Successfully")})).catch((function(e){t.loader(!1),t.errorMessage.push(e),Object(i["a"])("address created Failed","Please try again after sometime")})))},ValidateEmail:function(t){return!!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(t)}}},o=n,c=s("2877"),d=Object(c["a"])(o,r,a,!1,null,null,null);e["a"]=d.exports},e1a0:function(t,e,s){}}]);
//# sourceMappingURL=chunk-da60e7c4.b81d427a.js.map
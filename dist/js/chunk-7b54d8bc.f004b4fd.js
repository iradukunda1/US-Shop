(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7b54d8bc"],{"07d2":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"user-profile bg-white"},[s("div",{staticClass:"container"},[s("ul",{staticClass:"nav nav-tabs nav-justified"},[s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",class:{active:t.isActive("Profile")},attrs:{href:"#Profile"},on:{click:function(e){return e.preventDefault(),t.setActive("Profile")}}},[t._v("Profile")])]),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",class:{active:t.isActive("Orders")},attrs:{href:"#Orders"},on:{click:function(e){return e.preventDefault(),t.setActive("Orders")}}},[t._v("Orders")])]),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",class:{active:t.isActive("Address")},attrs:{href:"#Address"},on:{click:function(e){return e.preventDefault(),t.setActive("Address")}}},[t._v("Address")])])]),s("div",{staticClass:"tab-content py-3",attrs:{id:"myTabContent"}},[s("div",{staticClass:"tab-pane fade",class:{"active show":t.isActive("Profile")},attrs:{id:"Profile"}},[s("profile")],1),s("div",{staticClass:"tab-pane fade",class:{"active show":t.isActive("Orders")},attrs:{id:"Orders"}},[s("orders")],1),s("div",{staticClass:"tab-pane fade",class:{"active show":t.isActive("Address")},attrs:{id:"Address"}},[t.addressTable?s("address-table",{on:{openAddressForm:t.hideTable}}):s("div",{staticClass:"col-md-6 text-left mx-auto"},[s("address-form")],1)],1)])])])},r=[],i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.processing?t._e():s("div",{staticClass:"row py-5 px-4"},[s("div",{staticClass:"col-xl-12 col-md-12 col-sm-10 mx-auto"},[s("div",{staticClass:"bg-white rounded overflow-hidden"},[s("div",{staticClass:"px-4 pt-0 pb-4"},[s("div",{staticClass:"media align-items-end profile-header"},[t._m(0),s("div",{staticClass:"media-body mb-5 text-black"},[s("h4",{staticClass:"mt-0 mb-0"},[t._v(" "+t._s(t.user.firstName||"Tsapal")+" "+t._s(t.user.lastName||"Rwanda")+" ")]),s("p",{staticClass:"small mb-4"},[t._v(" "+t._s(t.user.email||"Tsapal2020@gmail.com")+" ")])])])]),t._m(1),t._m(2)])])])},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"profile mr-3"},[s("img",{staticClass:"rounded mb-2 img-thumbnail",attrs:{src:"/img/profile/avatar_user.png",alt:"...",width:"130"}}),s("a",{staticClass:"btn btn-dark btn-sm btn-block",attrs:{href:"#"}},[t._v("Edit profile")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bg-light p-4 d-flex justify-content-end text-center"},[s("ul",{staticClass:"list-inline mb-0"},[s("li",{staticClass:"list-inline-item"},[s("h5",{staticClass:"font-weight-bold mb-0 d-block"},[t._v("241")]),s("small",{staticClass:"text-muted"},[s("i",{staticClass:"fa fa-picture-o mr-1"}),t._v("Photos")])]),s("li",{staticClass:"list-inline-item"},[s("h5",{staticClass:"font-weight-bold mb-0 d-block"},[t._v("84K")]),s("small",{staticClass:"text-muted"},[s("i",{staticClass:"fa fa-user-circle-o mr-1"}),t._v("Followers")])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"py-4 px-4"},[s("div",{staticClass:"d-flex align-items-center justify-content-between mb-3"},[s("h5",{staticClass:"mb-0"},[t._v("Recent Loves")]),s("a",{staticClass:"btn btn-link text-muted",attrs:{href:"#"}},[t._v("Show all")])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-6 mb-2 pr-lg-1"},[s("img",{staticClass:"img-fluid rounded shadow-sm",attrs:{src:"https://res.cloudinary.com/mhmd/image/upload/v1556294928/nicole-honeywill-546848-unsplash_ymprvp.jpg",alt:""}})]),s("div",{staticClass:"col-lg-6 mb-2 pl-lg-1"},[s("img",{staticClass:"img-fluid rounded shadow-sm",attrs:{src:"https://res.cloudinary.com/mhmd/image/upload/v1556294927/dose-juice-1184444-unsplash_bmbutn.jpg",alt:""}})]),s("div",{staticClass:"col-lg-6 pr-lg-1 mb-2"},[s("img",{staticClass:"img-fluid rounded shadow-sm",attrs:{src:"https://res.cloudinary.com/mhmd/image/upload/v1556294926/cody-davis-253925-unsplash_hsetv7.jpg",alt:""}})]),s("div",{staticClass:"col-lg-6 pl-lg-1"},[s("img",{staticClass:"img-fluid rounded shadow-sm",attrs:{src:"https://res.cloudinary.com/mhmd/image/upload/v1556294928/tim-foster-734470-unsplash_xqde00.jpg",alt:""}})])]),s("div",{staticClass:"py-4"},[s("h5",{staticClass:"mb-3"},[t._v("Recent reviews")]),s("div",{staticClass:"p-4 bg-light rounded shadow-sm"},[s("p",{staticClass:"font-italic mb-0"},[t._v(" Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. ")]),s("ul",{staticClass:"list-inline small text-muted mt-3 mb-0"},[s("li",{staticClass:"list-inline-item"},[s("i",{staticClass:"fa fa-comment-o mr-2"}),t._v("12 Comments ")]),s("li",{staticClass:"list-inline-item"},[s("i",{staticClass:"fa fa-heart-o mr-2"}),t._v("200 Likes ")])])])])])}],l=(s("8e6e"),s("ac6a"),s("456d"),s("bd86")),c=(s("96cf"),s("3b8d")),o=s("2f62"),d=s("6b22");function u(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,a)}return s}function m(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?u(Object(s),!0).forEach((function(e){Object(l["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):u(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var p={data:function(){return{profiles:{}}},methods:{getUser:function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.loader(!0,{context:"initializing user profile....",area:"app"}),t.next=3,this.$store.dispatch("fetchUser",this.user.id).then((function(t){e.loader(!1)})).catch((function(t){e.loader(!1),Object(d["a"])("error while fetching","".concat(t.message," || sorry you seems to be offline"))}));case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},computed:m(m({},Object(o["b"])(["auth","resources"])),{},{user:function(){return this.auth.user}}),mounted:function(){this.getUser()}},v=p,f=s("2877"),h=Object(f["a"])(v,i,n,!1,null,null,null),b=h.exports,g=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"cart-products"},[s("div",{staticClass:"pb-5"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[t.orderProducts.length>0?s("div",{staticClass:"col-lg-12 p-5 bg-white rounded shadow-sm mb-3"},[s("div",{staticClass:"table-responsive"},[s("table",{staticClass:"table"},[t._m(0),s("tbody",[t._l(t.orderProducts,(function(e){return s("tr",{key:e.id},[s("div",{staticClass:"media align-items-lg-center flex-column flex-lg-row p-3"},[s("div",{staticClass:"media-body order-2 order-lg-1"},[s("p",{staticClass:"font-italic text-muted mb-0 small"},[t._v(" "+t._s(e.description)+" ")]),s("div",{staticClass:"d-flex align-items-center justify-content-between mt-1"},[s("h6",{staticClass:"font-weight-bold my-2"},[t._v(" "+t._s(e.price)+" ")]),t._m(1,!0)])]),s("img",{staticClass:"ml-lg-5 order-1 order-lg-2",attrs:{src:e.image,alt:"Generic placeholder image",width:"200"}})]),s("td",{staticClass:"border-0 align-middle",staticStyle:{"min-width":"150px"}},[t._v(" "+t._s(e.ProductQty)+" ")]),s("td",{staticClass:"border-0 align-middle",staticStyle:{"min-width":"150px"}},[t._v(" "+t._s(e.Quantity)+" ")]),s("td",{staticClass:"border-0 align-middle",staticStyle:{"min-width":"150px"}},[s("strong",[t._v(t._s(e.price))])]),s("td",{staticClass:"border-0 align-middle"},[s("a",{staticClass:"text-dark",attrs:{href:"javascript:;;"}},[s("i",{staticClass:"fa fa-trash",on:{click:function(s){return t.removeProductOrder(e)}}})])])])})),s("tr",{staticClass:"border-0"})],2)])])]):s("div",{staticClass:"error-template container my-3"},[s("h1",[t._v("Oops!")]),s("h2",[t._v("No Orders Found")]),s("div",{staticClass:"error-actions"},[s("a",{staticClass:"btn text-white"},[s("span",{staticClass:"glyphicon glyphicon-envelope"}),s("router-link",{attrs:{to:"/products"}},[t._v("Take me to Products Page")])],1)])])])])])])},_=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",[s("tr",[s("th",{staticClass:"border-0 bg-light",attrs:{scope:"col"}},[s("div",{staticClass:"p-2 px-3 text-uppercase"},[t._v("Product")])]),s("th",{staticClass:"border-0 bg-light",attrs:{scope:"col"}},[s("div",{staticClass:"py-2 text-uppercase"},[t._v("Quantity")])]),s("th",{staticClass:"border-0 bg-light",attrs:{scope:"col"}},[s("div",{staticClass:"py-2 text-uppercase"},[t._v("Total Price")])]),s("th",{staticClass:"border-0 bg-light",attrs:{scope:"col"}},[s("div",{staticClass:"py-2 text-uppercase"},[t._v("Status")])]),s("th",{staticClass:"border-0 bg-light",attrs:{scope:"col"}},[s("div",{staticClass:"py-2 text-uppercase"},[t._v("Remove")])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",{staticClass:"list-inline small"},[s("li",{staticClass:"list-inline-item m-0"},[s("i",{staticClass:"fa fa-star text-success"})]),s("li",{staticClass:"list-inline-item m-0"},[s("i",{staticClass:"fa fa-star text-success"})]),s("li",{staticClass:"list-inline-item m-0"},[s("i",{staticClass:"fa fa-star text-success"})]),s("li",{staticClass:"list-inline-item m-0"},[s("i",{staticClass:"fa fa-star text-success"})]),s("li",{staticClass:"list-inline-item m-0"},[s("i",{staticClass:"fa fa-star text-gray"})])])}];function C(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,a)}return s}function y(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?C(Object(s),!0).forEach((function(e){Object(l["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):C(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var O={name:"Orders",data:function(){return{qty:[]}},computed:y({},Object(o["d"])(["orderProducts"])),methods:y(y({},Object(o["c"])(["SET_ORDER_PRODUCTS"])),{},{removeProductOrder:function(t){for(var e=JSON.parse(localStorage.getItem("iki-order")),s=0;s<e.length;s++)e[s]._id===t._id&&e.splice(s,1);this.SET_ORDER_PRODUCTS(e),localStorage.setItem("iki-order",JSON.stringify(e))}}),mounted:function(){}},w=O,x=(s("2408"),Object(f["a"])(w,g,_,!1,null,null,null)),P=x.exports,j=s("07ff"),N=s("4781"),E={components:{Profile:b,Orders:P,AddressTable:j["a"],AddressForm:N["a"]},data:function(){return{activeItem:"Profile",addressTable:!0}},methods:{isActive:function(t){return this.activeItem===t},setActive:function(t){this.activeItem=t},hideTable:function(){this.addressTable=!1}},created:function(){}},A=E,$=Object(f["a"])(A,a,r,!1,null,null,null);e["default"]=$.exports},"07ff":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[t.addresses.length?s("div",{staticClass:"col-md-12 my-5  py-5"},[s("div",{staticClass:"table-responsive"},[t._v(" "+t._s(t.createBtn(!0))+" "),s("table",{staticClass:"table table-bordred table-striped",attrs:{id:"mytable"}},[t._m(0),s("tbody",t._l(t.addresses,(function(e,a){return s("tr",{key:a},[t._m(1,!0),s("td",[t._v(t._s(e.firstName+" "+e.lastName))]),s("td",[t._v(t._s(e.country))]),s("td",[t._v(t._s(e.city))]),s("td",[t._v(t._s(e.district))]),s("td",[t._v(t._s(e.sector))]),s("td",[t._v(t._s(e.addresses))]),s("td",[t._v(t._s(e.email))]),s("td",[t._v(t._s(e.zipCode))]),s("td",[t._v(t._s(e.phoneNumber))]),t._m(2,!0),t._m(3,!0)])})),0)])])]):s("div",{staticClass:"error-template container"},[s("h1",[t._v("Oops!")]),s("h2",[t._v("No Address Found "+t._s(t.createBtn(!1)))]),s("div",{staticClass:"error-actions"},[s("button",{staticClass:"btn btn-primary",on:{click:t.openForm}},[t._v(" Create New Address ")])])])])])},r=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",[s("th",[t._v("Select")]),s("th",[t._v("Names")]),s("th",[t._v("Country")]),s("th",[t._v("Province")]),s("th",[t._v("District")]),s("th",[t._v("Sector")]),s("th",[t._v("Address")]),s("th",[t._v("Email")]),s("th",[t._v("Zip-Code")]),s("th",[t._v("Contacts")]),s("th",[t._v("Edit")]),s("th",[t._v("Delete")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("td",[s("input",{staticClass:"checkthis",attrs:{type:"checkbox"}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("td",[s("p",{attrs:{"data-placement":"top","data-toggle":"tooltip",title:"Edit"}},[s("button",{staticClass:"btn btn-primary btn-xs"},[s("i",{staticClass:"fas fa-pen"})])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("td",[s("p",{attrs:{"data-placement":"top","data-toggle":"tooltip",title:"Delete"}},[s("button",{staticClass:"btn btn-danger btn-xs"},[s("i",{staticClass:"fas fa-trash"})])])])}],i=(s("8e6e"),s("ac6a"),s("456d"),s("bd86")),n=s("6b22"),l=s("2f62");function c(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,a)}return s}function o(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?c(Object(s),!0).forEach((function(e){Object(i["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):c(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var d={data:function(){return{addresses:[{country:"Rwanda",city:"Kigali",district:"Gasabo",email:"user@gmail.com",phoneNumber:"+923335586757",sector:"Remera",firstName:"Mugisha",lastName:"yannick",zipCode:"2344uy43",addresses:"CB 106/107 Street # 11 Wah Cantt Islamabad Pakistan"}],showLoader:!1}},computed:o(o({},Object(l["b"])(["resources","auth"])),{},{loggedUser:function(){return this.auth.user},Addresses:function(){return this.resources.addresses}}),mounted:function(){console.log(this.Addresses),this.getAllAddresses()},methods:{openForm:function(){this.$emit("openAddressForm")},createBtn:function(t){this.$emit("createBtn",t)},getAllAddresses:function(){var t=this;this.loader(!0,{context:"fetching all user addresses...",area:"app"}),this.$store.dispatch("fetchAllUserAddresses",this.loggedUser).then((function(e){t.loader(!1)})).catch((function(e){t.loader(!1),Object(n["a"])("Error while fetching address","Please wait for while")}))}}},u=d,m=s("2877"),p=Object(m["a"])(u,a,r,!1,null,null,null);e["a"]=p.exports},2408:function(t,e,s){"use strict";var a=s("797b"),r=s.n(a);r.a},4781:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("form",{attrs:{id:"productCU"},on:{submit:function(e){return e.preventDefault(),t.createAddress(e)}}},[s("h4",{staticClass:"text-center"},[t._v("Create Address")]),t._l(t.errorMessage,(function(e,a){return s("div",{key:e,staticClass:"alert alert-danger",attrs:{role:"alert"}},[t._v(" "+t._s(a)+" ")])})),s("div",{staticClass:"form-group"},[t._m(0),s("input",{directives:[{name:"model",rawName:"v-model",value:t.address.firstName,expression:"address.firstName"}],staticClass:"form-control",attrs:{type:"text",id:"firstName",required:""},domProps:{value:t.address.firstName},on:{input:function(e){e.target.composing||t.$set(t.address,"firstName",e.target.value)}}})]),s("div",{staticClass:"form-group"},[t._m(1),s("input",{directives:[{name:"model",rawName:"v-model",value:t.address.lastName,expression:"address.lastName"}],staticClass:"form-control",attrs:{type:"text",id:"lastName",required:""},domProps:{value:t.address.lastName},on:{input:function(e){e.target.composing||t.$set(t.address,"lastName",e.target.value)}}})]),s("div",{staticClass:"form-group"},[t._m(2),s("input",{directives:[{name:"model",rawName:"v-model",value:t.address.email,expression:"address.email"}],staticClass:"form-control",attrs:{type:"email",id:"email",required:""},domProps:{value:t.address.email},on:{input:function(e){e.target.composing||t.$set(t.address,"email",e.target.value)}}})]),s("div",{staticClass:"form-group"},[t._m(3),s("input",{directives:[{name:"model",rawName:"v-model",value:t.address.country,expression:"address.country"}],staticClass:"form-control",attrs:{type:"text",id:"country",required:""},domProps:{value:t.address.country},on:{input:function(e){e.target.composing||t.$set(t.address,"country",e.target.value)}}})]),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"city"}},[t._v("City")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.address.city,expression:"address.city"}],staticClass:"form-control",attrs:{type:"text",id:"city",required:""},domProps:{value:t.address.city},on:{input:function(e){e.target.composing||t.$set(t.address,"city",e.target.value)}}})]),s("div",{staticClass:"form-group"},[t._m(4),s("input",{directives:[{name:"model",rawName:"v-model",value:t.address.district,expression:"address.district"}],staticClass:"form-control",attrs:{type:"text",id:"district",required:""},domProps:{value:t.address.district},on:{input:function(e){e.target.composing||t.$set(t.address,"district",e.target.value)}}})]),s("div",{staticClass:"form-group"},[t._m(5),s("input",{directives:[{name:"model",rawName:"v-model",value:t.address.zipCode,expression:"address.zipCode"}],staticClass:"form-control",attrs:{type:"text",id:"zip-code",required:""},domProps:{value:t.address.zipCode},on:{input:function(e){e.target.composing||t.$set(t.address,"zipCode",e.target.value)}}})]),s("div",{staticClass:"form-group"},[t._m(6),s("input",{directives:[{name:"model",rawName:"v-model",value:t.address.addresses,expression:"address.addresses"}],staticClass:"form-control",attrs:{type:"text",id:"address",name:"address",required:""},domProps:{value:t.address.addresses},on:{input:function(e){e.target.composing||t.$set(t.address,"addresses",e.target.value)}}})]),s("div",{staticClass:"form-group"},[t._m(7),s("input",{directives:[{name:"model",rawName:"v-model",value:t.address.phoneNumber,expression:"address.phoneNumber"}],staticClass:"form-control",attrs:{type:"tel",id:"phone",name:"phone",required:""},domProps:{value:t.address.phoneNumber},on:{input:function(e){e.target.composing||t.$set(t.address,"phoneNumber",e.target.value)}}})]),s("small",{staticClass:"form-text text-muted",attrs:{id:"emailHelp"}},[t._v("We'll never share your data with anyone else.")]),s("br")],2),s("button",{staticClass:"btn btn-primary mx-auto",attrs:{type:"submit"}},[t.showLoader?s("i",{staticClass:"fa fa-spinner fa-spin mr-1"}):t._e(),t._v("Save Address ")])])},r=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("label",{attrs:{for:"firstName"}},[t._v("First-Name"),s("span",{staticClass:"text-danger"},[t._v("*")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("label",{attrs:{for:"lastName"}},[t._v("Last Name"),s("span",{staticClass:"text-danger"},[t._v("*")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("label",{attrs:{for:"email"}},[t._v("E-mail"),s("span",{staticClass:"text-danger"},[t._v("*")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("label",{attrs:{for:"country"}},[t._v("Country"),s("span",{staticClass:"text-danger"},[t._v("*")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("label",{attrs:{for:"district"}},[t._v("District"),s("span",{staticClass:"text-danger"},[t._v("*")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("label",{attrs:{for:"zip-code"}},[t._v("Postal / Zip Code"),s("span",{staticClass:"text-danger"},[t._v("*")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("label",{attrs:{for:"address"}},[t._v("Address / Location"),s("span",{staticClass:"text-danger"},[t._v("*")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("label",{attrs:{for:"phone"}},[t._v("Phone Number"),s("span",{staticClass:"text-danger"},[t._v("*")])])}],i=s("6b22"),n={data:function(){return{address:{phoneNumber:""},errorMessage:[],showLoader:!1}},methods:{createAddress:function(){var t=this;this.address.firstName.length<5&&this.errorMessage.push("FirstName should contains more than 5 character"),!1===this.ValidateEmail(this.address.email)&&this.errorMessage.push("Please provide a valid Email address"),this.address.phoneNumber.length<10&&this.errorMessage.push("Please provide valid phone number"),0===this.errorMessage.length&&(this.loader(!0,{context:"creating address...",area:"app"}),this.$store.dispatch("createAddress",this.address).then((function(e){t.loader(!1),Object(i["c"])("address created Successfully","User address created Successfully")})).catch((function(e){t.loader(!1),t.errorMessage.push(e),Object(i["a"])("address created Failed","Please try again after sometime")})))},ValidateEmail:function(t){return!!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(t)}}},l=n,c=s("2877"),o=Object(c["a"])(l,a,r,!1,null,null,null);e["a"]=o.exports},"797b":function(t,e,s){}}]);
//# sourceMappingURL=chunk-7b54d8bc.f004b4fd.js.map
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cadd9b90"],{"75b0":function(t,a,s){},f7b1:function(t,a,s){"use strict";s.r(a);var i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return t.product.id&&!t.processing?s("div",{staticClass:"product-details w-100 position-relative"},[s("div",{staticClass:"container "},[s("div",{staticClass:"row py-3"},[t._m(0),s("div",{staticClass:" col-md-6"},[s("h3",{staticClass:"product-title"},[t._v(t._s(t.product.name))]),s("div",{staticClass:"rating d-inline-block mb-0"},[s("div",{staticClass:"total-stars",style:{"--rating":t.productRatings}}),s("p",{staticClass:"review-no"},[t._v(" "+t._s(t.product.comments&&t.product.comments.length||"0")+" review"+t._s(t.product.comments&&t.product.comments.length>1?"s":"")+" ")])]),s("p",{staticClass:"product-description"},[t._v(t._s(t.product.description))]),s("h4",{staticClass:"price"},[t._v(" current price: "),s("span",[t._v(t._s(t.product.price+""+t.product.currency))])]),s("p",{staticClass:"vote"},[s("strong",[t._v(t._s(100*t.productRatings||"10")+"%")]),t._v(" of buyers enjoyed this product! "),s("strong",[t._v("(87 votes)")])]),s("h6",{staticClass:"sizes"},[t._v(" Quantity Available: "),s("span",{staticClass:"pl-1",attrs:{"data-toggle":"tooltip",title:"small"}},[t._v(t._s(t.product.stock))])]),t._m(1),s("div",{staticClass:"action"},[s("button",{staticClass:"add-to-cart btn btn-primary mr-1",attrs:{type:"button"},on:{click:function(a){return t.addToCart(t.product)}}},[t._v(" add to cart "),s("i",{staticClass:"fas fa-cart-plus"})])])])])]),s("div",{staticClass:"ft-container mx-2"},[t._m(2),t.loading?s("card-loader",{attrs:{loopCount:4}}):t._e()],1),s("div",{staticClass:"row justify-content-around h-100 m-2"},t._l(t.similarProduct,(function(t,a){return s("div",{key:a,staticClass:"d-inline-block m-1"},[s("card-template",{attrs:{item:t}})],1)})),0),t.product.comments&&t.product.comments.length?s("div",{staticClass:"comments mx-3 px-2"},[t._m(3),t._l(t.product.comments,(function(a,i){return s("div",{key:i,staticClass:"row border-bottom mx-5 py-2",attrs:{id:"products_comments"}},[s("div",{staticClass:"left-side"},[s("div",{staticClass:"d-flex ratings-stars"},[s("p",{staticClass:"fa mb-0 pb-2"},[t._v("Rating:")]),s("div",{staticClass:"stars-icons",style:{"--rating":a.rating}})]),s("p",{staticClass:"comment-content"},[t._v(t._s(a.content))])]),s("div",{staticClass:"right-side ml-auto mt-auto d-flex"},[t._v(" Created by: "),s("p",{staticClass:"text-muted text-capitalize"},[t._v(t._s(a.user.username))])])])}))],2):t._e()]):t._e()},e=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"preview col-md-6"},[s("div",{staticClass:"preview-pic tab-content"},[s("div",{staticClass:"tab-pane active",attrs:{id:"pic-1"}},[s("img",{attrs:{src:"/img/tsapal3.jpg"}})]),s("div",{staticClass:"tab-pane",attrs:{id:"pic-2"}},[s("img",{attrs:{src:"/img/2.jpg"}})]),s("div",{staticClass:"tab-pane",attrs:{id:"pic-3"}},[s("img",{attrs:{src:"/img/3.jpg"}})]),s("div",{staticClass:"tab-pane",attrs:{id:"pic-4"}},[s("img",{attrs:{src:"/img/4.jpg"}})]),s("div",{staticClass:"tab-pane",attrs:{id:"pic-5"}},[s("img",{attrs:{src:"/img/2.jpg"}})])]),s("ul",{staticClass:"preview-thumbnail nav nav-tabs"},[s("li",{staticClass:"active"},[s("a",{attrs:{"data-target":"#pic-1","data-toggle":"tab"}},[s("img",{staticClass:"w-100 h-50",attrs:{src:"/img/tsapal3.jpg"}})])]),s("li",[s("a",{attrs:{"data-target":"#pic-2","data-toggle":"tab"}},[s("img",{staticClass:"w-100 h-50",attrs:{src:"/img/2.jpg"}})])]),s("li",[s("a",{attrs:{"data-target":"#pic-3","data-toggle":"tab"}},[s("img",{staticClass:"w-100 h-50",attrs:{src:"/img/3.jpg"}})])]),s("li",[s("a",{attrs:{"data-target":"#pic-4","data-toggle":"tab"}},[s("img",{staticClass:"w-100 h-50",attrs:{src:"/img/4.jpg"}})])]),s("li",[s("a",{attrs:{"data-target":"#pic-5","data-toggle":"tab"}},[s("img",{attrs:{src:"/img/2.jpg"}})])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("h5",{staticClass:"colors"},[t._v(" colors: "),s("span",{staticClass:"color orange not-available",attrs:{"data-toggle":"tooltip",title:"Not In store"}}),s("span",{staticClass:"color green"}),s("span",{staticClass:"color blue"})])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"feat"},[s("span",{staticClass:"txt-ft",attrs:{"aria-current":"page"}},[t._v("SIMILAR PRODUCTS")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"ft-container mx-2"},[s("div",{staticClass:"feat"},[s("span",{staticClass:"txt-ft",attrs:{"aria-current":"page"}},[t._v("COMMENTS")])])])}],r=(s("8e6e"),s("456d"),s("ac6a"),s("7f7f"),s("7514"),s("bd86")),c=s("2f62"),o=s("0873"),n=s("6b22"),l=s("2ef0"),d=s.n(l);function u(t,a){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);a&&(i=i.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),s.push.apply(s,i)}return s}function p(t){for(var a=1;a<arguments.length;a++){var s=null!=arguments[a]?arguments[a]:{};a%2?u(Object(s),!0).forEach((function(a){Object(r["a"])(t,a,s[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):u(Object(s)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(s,a))}))}return t}var m={name:"productDetail",components:{CardTemplate:o["a"]},data:function(){return{loading:!1,similarProduct:[{image:"/img/1.jpg",id:"12893276",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo velit blanditiis voluptate doloremque nihil fuga.",name:"Kamambiri",price:"100",stock:"12",currency:"Frw"},{image:"/img/2.jpg",id:"0978436",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo velit blanditiis voluptate doloremque nihil fuga.",name:"Sandal",price:"600",stock:"12",currency:"Frw"},{image:"/img/3.jpg",id:"8732576491",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo velit blanditiis voluptate doloremque nihil fuga.",name:"Umoja",price:"400",stock:"12",currency:"Frw"},{id:"423r7202bhj",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo velit blanditiis voluptate doloremque nihil fuga.",name:"Slippers",price:"150",stock:"12",currency:"Frw"}]}},methods:p(p({fetchProduct:function(){var t=this,a=this.$route.params.id;this.loader(!0,{context:"fetching  product detailes....",area:"app"}),this.$store.dispatch("fetchProduct",a).then((function(a){t.loader(!1)})).catch((function(a){t.loader(!1),Object(n["a"])("Error while fetching","sorry you seems to be offline")}))},getSimilarProduct:function(t){var a=this;axios.get("".concat(Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_BASE_URL,"/products/similarProduct"),{params:{productSeller:t}}).then((function(t){a.similarProduct=t.data})).catch((function(t){console.log(t)}))}},Object(c["c"])(["ADD_CART_LOCAL"])),{},{addToCart:function(t){var a=d.a.find(this.$store.getters.cartProducts,t);a?Object(n["b"])("Already Added","Your Product <b> ".concat(t.name," </b> is Already Added")):(Object(n["c"])("Added Successfully","The Product <b> ".concat(t.name," </b> was Added Successfully")),this.ADD_CART_LOCAL(t))}}),computed:p(p({},Object(c["b"])(["resources"])),{},{product:function(){return this.resources.product},productRatings:function(){var t=0,a=5*this.product.comments.length;this.product.comments.forEach((function(a){t+=parseFloat(a.rating)}));var s=t/a;return s}}),mounted:function(){this.fetchProduct()},created:function(){}},g=m,v=(s("fefd"),s("2877")),f=Object(v["a"])(g,i,e,!1,null,"79a8832a",null);a["default"]=f.exports},fefd:function(t,a,s){"use strict";var i=s("75b0"),e=s.n(i);e.a}}]);
//# sourceMappingURL=chunk-cadd9b90.de9477ee.js.map
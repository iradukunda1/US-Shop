/* eslint-disable */

import Vue from "vue";
import vueRouter from "vue-router";
import store from "../store/index";
import Home from "../views/Home.vue";
import NProgress from "nprogress";
import "../../node_modules/nprogress/nprogress.css";
import adminDashboard from "@/components/dashboardLayout/layout/Dashboard.vue";
import webLayout from "../webLayout/webLayout";

const routerPush = vueRouter.prototype.push;
vueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error);
};

Vue.use(vueRouter);

const router = new vueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "web layout",
      redirect: "/",
      component: webLayout,
      children: [
        {
          path: "/",
          name: "Home",
          component: Home
        },
        {
          path: "/aboutRT",
          name: "About",
          component: () => import("../views/About.vue")
        },
        {
          path: "/products",
          name: "Products",
          component: () => import("../views/Products.vue")
        },
        {
          path: "/products/:id",
          name: "Profile",
          component: () => import("../components/products/ProductDetail.vue")
        },
        {
          path: "/Me",
          name: "MyAccount",
          component: () => import("../views/User-Profile.vue"),
          meta: {
            requiresAuth: true
          },
          beforeEnter: (_to, _from, next) => {
            if (
              store.getters.auth.user.roles &&
              !!store.state.auth.token &&
              store.getters.auth.user.roles.includes("User")
            ) {
              return next();
            } else {
              next({
                name: "Login"
              });
            }
          }
        },
        {
          path: "/ContactUsEWS",
          name: "Contact Us",
          component: () => import("../views/contactUs.vue")
        },
        {
          path: "/cart",
          name: "Cart",
          component: () =>
            import("../components/products/purchase/CartProducts.vue")
          // beforeEnter: (to, from, next) => {
          //   if (!!store.state.auth.token) {
          //     next();
          //   } else {
          //     next({
          //       name: "Login",
          //       query: {
          //         from: to.name
          //       }
          //     });
          //   }
          // }
        },
        {
          path: "/payments",
          name: "Payments",
          component: () =>
            import("../components/products/payments/paymentSelector.vue"),
          // beforeEnter: (to, from, next) => {
          //   if (!!store.state.auth.token) {
          //     next();
          //   } else {
          //     next({
          //       name: "Login",
          //       query: {
          //         from: to.name
          //       }
          //     });
          //   }
          // }
        },
        {
          path: "/checkout",
          name: "Checkout",
          component: () => import("../components/products/purchase/Checkout.vue")
          // beforeEnter: (to, from, next) => {
          //   if (!!store.state.auth.token) {
          //     next();
          //   } else {
          //     next({
          //       name: "Login",
          //       query: {
          //         from: to.name,
          //       },
          //     });
          //   }
          // },
        },
        {
          path: "/loginASD",
          name: "Login",
          component: () => import("../views/login.vue")
        }
      ]
    },
    {
      path: "/adminDFG",
      component: adminDashboard,
      name: "Admin",
      meta: {
        requiresAuth: true
      },
      beforeEnter: (_to, _from, next) => {
        if (
          store.getters.auth.user.roles &&
          store.getters.auth.user.roles.includes("Admin")
        ) {
          return next();
        }
        return store.dispatch("logout");
      },
      children: [
        {
          name: "Create product",
          path: "add-product",
          component: () =>
            import(
              "../components/dashboardLayout/pages/product/create-product.vue"
            )
        },
        {
          path: "orders",
          name: "Orders",
          component: () =>
            import(
              "../components/dashboardLayout/pages/orderManagement/orders.vue"
            )
        },
        {
          path: "seller",
          name: "Sellers",
          component: () =>
            import(
              "../components/dashboardLayout/pages/orderManagement/sellers.vue"
            )
        },
        {
          path: "logo",
          name: "Logo Setting",
          component: () =>
            import(
              "../components/dashboardLayout/pages/logoManagement/logo-manage.vue"
            )
        },
        {
          name: "Image Slides",
          path: "slides",
          component: () =>
            import(
              "../components/dashboardLayout/pages/sliderImage/slider-image-manage.vue"
            )
        },
        {
          name: "Slider Setting",
          path: "slider-image",
          component: () =>
            import(
              "../components/dashboardLayout/pages/sliderImage/slider-image-manage"
            )
        },
        {
          name: "Categories",
          path: "category-list",
          component: () =>
            import(
              "../components/dashboardLayout/pages/categoryManagement/category-list"
            )
        },
        {
          name: "Sub-categories",
          path: "sub-category-list",
          component: () =>
            import(
              "../components/dashboardLayout/pages/categoryManagement/sub-category-list"
            )
        },
        {
          name: "Products-list",
          path: "product-list",
          component: () =>
            import("../components/dashboardLayout/pages/product/product-list")
        },
        {
          name: "admin profile",
          path: "profile",
          component: () => import("../components/dashboardLayout/pages/profile")
        },
        {
          name: "Create Category",
          path: "category",
          component: () =>
            import(
              "../components/dashboardLayout/pages/categoryManagement/components/addCategory"
            )
        },
        {
          name: "Create Sub-category",
          path: "sub-category",
          component: () =>
            import(
              "../components/dashboardLayout/pages/categoryManagement/components/add-sub-category"
            )
        }
      ]
    },
    {
      path: "*",
      name: "404-page",
      component: () => import("../404-page")
    }
  ]
});

router.beforeResolve((to, from, next) => {
  if (to.name) {
    NProgress.start();
  }
  next();
});

router.afterEach(to => {
  document.title = "SU-Bouquets | " + to.name;
  NProgress.done();
});

router.beforeEach((to, from, next) => {
  const status = !!store.getters.auth.token;
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (status) {
      return next();
    }
    next("/login");
  } else {
    next();
  }
});
// router.beforeEach((to, _, next) => {
//   const status = !!store.getters.auth.token;
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     if (status) {
//       next();
//     } else {
//       if (store.getters.auth.user.roles.includes("Admin"))
//         return next({ name: "Admin Login" });
//       next({ name: "User Login" });
//     }
//   } else if (to.matched.some(record => record.meta.noAuth)) {
//     if (status) {
//       if (store.getters.auth.user.role === "ADMIN")
//         next({ name: "Admin Dashboard" });
//       if (
//           store.getters.auth.user.role &&
//           store.getters.auth.user.role.type === "SCHOOL"
//       )
//         next({ name: "School Dashboard" });
//       if (
//           store.getters.auth.user.role &&
//           store.getters.auth.user.role.type === "TRANSPORT_COMPANY"
//       )
//         next({ name: "Company Dashboard" });
//     } else {
//       next();
//     }
//   } else {
//     next();
//   }
// });
export default router;

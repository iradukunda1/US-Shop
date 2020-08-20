/* eslint-disable */
import router from "@/router";
import auth from "@/_api/services/auth.service";
import users from "@/_api/services/user.service";
import addresses from "@/_api/services/address.service";
import products from "@/_api/services/product.service";
import orders from "@/_api/services/order.service";
import categories from "@/_api/services/category.service";
import comments from "@/_api/services/comment.service";
import tags from "@/_api/services/tag.service";

export default {
  /*--------------------------------------Resources------------------------------------*/
  setResources({ commit }, data) {
    commit("setResources", data);
  },
  setAccessories({ commit }, data) {
    commit("setAccessories", data);
  },
  setView({ commit }, data) {
    commit("view", data);
  },

  /*------------------Authentication-----------------*/

  login({ commit, state }, user) {
    return auth
      .login(user)
      .then(async res => {
        await commit("ADD_LOGGED_USER", res);
        if (state.auth.user.roles.includes("Admin")) {
          router.push({ name: "Admin" });
        } else if (state.auth.user.roles.includes("User")) {
          router.push({ name: "web layout" });
        } else {
          // router.push({ name: "Login" });
          throw new Error("Unauthorized to access platform");
        }
      })
      .catch(async err => {
        // localStorage.removeItem("token")
        commit("resetState");
        throw err;
      });
  },

  logout({ commit }) {
    commit("logout");
    setTimeout(() => commit("resetState"), 1000);
  },

  /*------------------users controllers-----------------*/

  fetchUsers({ commit }, page) {
    return users
      .findAll(page)
      .then(data => commit("setResources", ["users", data]));
  },

  fetchUser({ commit }, userId) {
    return users.findOne(userId).then(data => {
      commit("setResources", ["user", data]);
    });
  },
  fetchLogged({ commit }) {
    return auth.findOne().then(data => {
      commit("setResources", ["user", data]);
    });
  },
  createUser({ commit }, user) {
    return users.create(user);
    // .then(data => commit("setResources", ["user", data]))
  },

  deleteUser(_, userId) {
    return users.deleteOne(userId);
  },

  updateUser(_, user) {
    return users.update(user);
  },

  /* ------------------addresses controllers---------------------- */

  fetchAddresses({ commit }) {
    return addresses
      .findAll()
      .then(data => commit("setResources", ["addresses", data]));
  },

  fetchAddress({ commit }, addresses) {
    return addresses
      .findOne(addresses)
      .then(data => commit("setResources", ["address", data]));
  },

  fetchAllUserAddresses({ commit }, userId) {
    return addresses
      .findAllUserId(userId)
      .then(data => commit("setResources", ["addresses", data]));
  },

  fetchOneAddress({ commit }, user) {
    return addresses
      .findOne_userId_addressId(user)
      .then(data => commit("setResources", ["address", data]));
  },

  createAddress(_, address) {
    return addresses.create(address);
  },

  deleteAddress(_, addressId) {
    return addresses.deleteOne(addressId);
  },

  updateAddress(_, address) {
    return addresses.update(address);
  },

  /*-------------------gifts controllers------------------*/
  fetchGift({ commit }, data) {
    return commit("setResources", ["gift", data]);
  },
  /*-------------------products controllers------------------*/

  fetchProducts({ commit }, page) {
    return products
      .findAll(page)
      .then(data => commit("setResources", ["products", data]));
  },

  fetchProduct({ commit }, productId) {
    return products
      .findOne_id(productId)
      .then(data => commit("setResources", ["product", data]));
  },

  fetchProductSlug({ commit }, slug) {
    return products
      .findOne_slug(slug)
      .then(data => commit("setResources", ["product", data]));
  },

  createProduct({ commit }, product) {
    return products
      .create(product)
      .then(data => commit("setResources", ["products", data]));
  },

  UpdateProduct({ commit }, product) {
    return products
      .update(product)
      .then(data => commit("setResources", ["products", data]));
  },
  deleteProduct(_, productId) {
    return products.deleteOne(productId);
  },
  productManagement({ commit }) {
    commit("PRODUCT_EDIT");
  },

  /* ------------------orders controllers---------------------- */

  fetchOrders({ commit }, pageNumber) {
    return orders.findAll(pageNumber).then(data => {
      let ordersArray = data.orders;
      for (let index = 0; index < ordersArray.length; index++) {
        orders.findOne(ordersArray[index].id).then(data => {
          allOrdersDetails.orders.push(data);
        });
      }
      const pages = data.page_meta;
      let allOrdersDetails = {};
      allOrdersDetails.orders = [];
      allOrdersDetails.page_meta = pages;
      commit("setResources", ["orders", allOrdersDetails]);
    });
  },

  fetchOrder({ commit }, orderId) {
    return orders
      .findOne(orderId)
      .then(data => commit("setResources", ["order", data]));
  },

  fetchAllUserOrders({ commit }) {
    return orders.findMyOrder().then(data => {
      let ordersNumber = data.orders;
      for (let i = 0; i < ordersNumber.length; i++) {
        orders.findOne(ordersNumber[i].id).then(data => {
          fetchedData.orders.push(data);
        });
      }
      let fetchedData = {};
      fetchedData.orders = [];
      fetchedData.page_meta = data.page_meta;
      commit("setResources", ["orders", fetchedData]);
    });
  },

  fetchOneOrder({ commit }, user) {
    return orders
      .findOne_userId_addressId(user)
      .then(data => commit("setResources", ["order", data]));
  },

  createOrder(_, order) {
    return orders.create(order);
  },

  deleteOrder(_, orderId) {
    return addresses.deleteOne(orderId);
  },

  updateOrder(_, order) {
    return orders.update(order);
  },

  /* ------------------Categories controllers---------------------- */
  fetchCategories({ commit }, pages) {
    return categories
      .findAll(pages)
      .then(data => commit("setResources", ["categories", data]));
  },

  fetchCategory({ commit }, category) {
    return categories
      .findOne(category)
      .then(data => commit("setResources", ["category", data]));
  },

  createCategory(_, category) {
    return categories.create(category);
  },

  deleteCategory(_, categoryId) {
    return categories.deleteOne(categoryId);
  },

  updateCategory(_, category) {
    return categories.update(category);
  },

  /* ------------------Comments controllers---------------------- */

  findOneProduct({ commit }, productId) {
    return comments
      .findOne_productId(productId)
      .then(data => commit("setResources", ["comment", data]));
  },

  fetchComment({ commit }, slug) {
    return comments
      .findOne_slug(slug)
      .then(data => commit("setResources", ["comment", data]));
  },

  createComment(_, comment) {
    return comments.create_id(comment);
  },

  deleteComment(_, commentId) {
    return comments.deleteOne(commentId);
  },

  updateComment(_, tag) {
    return comments.update(tag);
  },

  /* ------------------Sub-Categories controllers---------------------- */

  fetchSubCategories({ commit }, pages) {
    return tags
      .findAll(pages)
      .then(data => commit("setResources", ["tags", data]));
  },

  fetchSubCategory({ commit }, tagId) {
    return tags
      .findOne(tagId)
      .then(data => commit("setResources", ["tag", data]));
  },

  createSubCategory(_, tag) {
    return tags.create(tag);
  },

  deleteSubCategory(_, tagId) {
    return tags.deleteOne(tagId);
  },

  updateSubCategory(_, tag) {
    return tags.update(tag);
  }
};

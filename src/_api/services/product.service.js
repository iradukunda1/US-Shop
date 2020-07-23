"use strict";
/*  eslint-disable */
import axios from "axios";
import errorHandler from "@/_api/helpers/errors.handler";

export default class Product {
  /* findAll - get all products */
  static findAll(page) {
    return new Promise((resolve, reject) => {
      axios
          .get(`/products?page=${page}&page_size=10`)
          .then(res => {
            resolve(res.data);
          })
          .catch(err => {
            reject(errorHandler(err));
          });
    });
  }

  /* findOne - get one product by slug */
  static findOne_slug(slug) {
    return new Promise((resolve, reject) => {
      axios
          .get(`products/${slug}`)
          .then(res => {
            resolve(res.data);
          })
          .catch(err => {
            reject(errorHandler(err));
          });
    });
  }

  /* findOne - get one product by product_id */
  static findOne_id(productId) {
    return new Promise((resolve, reject) => {
      axios
          .get(`products/by_id/${productId}`)
          .then(res => {
            resolve(res.data);
          })
          .catch(err => {
            reject(errorHandler(err));
          });
    });
  }

  /* findOne - get one product by tag_slug */
  static findOne_tagSlug(slug) {
    return new Promise((resolve, reject) => {
      axios
          .get(`products/by_tag/${slug}`)
          .then(res => {
            resolve(res.data);
          })
          .catch(err => {
            reject(errorHandler(err));
          });
    });
  }

  /* findOne - get one product by tag_id */
  static findOne_tagId(tagId) {
    return new Promise((resolve, reject) => {
      axios
          .get(`products/by_tag_id/${tagId}`)
          .then(res => {
            resolve(res.data);
          })
          .catch(err => {
            reject(errorHandler(err));
          });
    });
  }

  /* findOne - get one product by category_slug */
  static findOne_categorySlug(slug) {
    return new Promise((resolve, reject) => {
      axios
          .get(`products/by_category/${slug}`)
          .then(res => {
            resolve(res.data);
          })
          .catch(err => {
            reject(errorHandler(err));
          });
    });
  }

  /* findOne - get one product by category_id */
  static findOne_categoryId(categoryId) {
    return new Promise((resolve, reject) => {
      axios
          .get(`products/by_category_id/${categoryId}`)
          .then(res => {
            resolve(res.data);
          })
          .catch(err => {
            reject(errorHandler(err));
          });
    });
  }

  /* create - create one product */
  static create(product) {
    return new Promise((resolve, reject) => {
      axios
          .post("products", product, {
            headers: { "Content-Type": "multipart/form-data" }
          })
          .then(res => {
            resolve(res.data);
          })
          .catch(err => {
            console.log(err)
            reject(errorHandler(err));
          });
    });
  }

  /* deleteOne - delete one product by productId */
  static deleteOne(productId) {
    return new Promise((resolve, reject) => {
      axios
          .delete(`products/by_id/${productId}`)
          .then(res => {
            resolve(res.data);
          })
          .catch(err => {
            reject(errorHandler(err));
          });
    });
  }

  /* update - update one product by productId */
  static update(data) {
    return new Promise((resolve, reject) => {
      axios
          .put(`products/by_id/${data.id}`, data.product)
          .then(res => {
            resolve(res.data.data);
          })
          .catch(err => {
            reject(errorHandler(err));
          });
    });
  }
}

"use strict";
import axios from "axios";
import errorHandler from "@/_api/helpers/errors.handler";

export default class Category {
  /* findAll - get all categories */
  static findAll(pages) {
    return new Promise((resolve, reject) => {
      axios
          .get(`/categories?page=${pages}&page_size=5`)
          .then(res => {
            resolve(res.data);
          })
          .catch(err => {
            reject(errorHandler(err));
          });
    });
  }

  /* findOne - get one category by id */
  static findOne(category) {
    return new Promise((resolve, reject) => {
      axios
          .get(`categories/${category.id}`)
          .then(res => {
            resolve(res.data);
          })
          .catch(err => {
            reject(errorHandler(err));
          });
    });
  }

  /* create - create one category */
  static create(category) {
    return new Promise((resolve, reject) => {
      axios
          .post("categories", category)
          .then(res => {
            resolve(res.data);
          })
          .catch(err => {
            reject(errorHandler(err));
          });
    });
  }

  /* deleteOne - delete one category by id */
  static deleteOne(categoryId) {
    return new Promise((resolve, reject) => {
      axios
          .delete(`categories/${categoryId}`)
          .then(res => {
            resolve(res.data);
          })
          .catch(err => {
            reject(errorHandler(err));
          });
    });
  }

  /* update - update one category by categoryId */
  static update(data) {
    return new Promise((resolve, reject) => {
      axios
          .put(`categories/${data.id}`, data.category)
          .then(res => {
            resolve(res.data.data);
          })
          .catch(err => {
            reject(errorHandler(err));
          });
    });
  }
}

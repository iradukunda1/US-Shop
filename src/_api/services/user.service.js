"use strict";
import axios from "axios";
import errorHandler from "@/_api/helpers/errors.handler";

export default class User {
  /* findAll - get all users */
  static findAll(page) {
    return new Promise((resolve, reject) => {
      axios
          .get(`/users?page=${page}&page_size=10`)
          .then(res => {
            resolve(res.data);
          })
          .catch(err => {
            reject(errorHandler(err));
          });
    });
  }

  /* findOne - get one user by userId */
  static findOne(userId) {
    return new Promise((resolve, reject) => {
      axios
          .get(`users/${userId}`)
          .then(res => {
            resolve(res.data.token);
          })
          .catch(err => {
            reject(errorHandler(err));
          });
    });
  }

  /* create - create one user */
  static create(user) {
    return new Promise((resolve, reject) => {
      axios
          .post("users", user)
          .then(res => {
            resolve(res.data);
          })
          .catch(err => {
            reject(errorHandler(err));
          });
    });
  }

  /* update - update one user by userId */
  static update(data) {
    return new Promise((resolve, reject) => {
      axios
          .put(`users/${data.id}`, data.user)
          .then(res => {
            resolve(res.data.data);
          })
          .catch(err => {
            reject(errorHandler(err));
          });
    });
  }

  /* deleteOne - delete one user by userId */
  static deleteOne(userId) {
    return new Promise((resolve, reject) => {
      axios
          .delete(`users/${userId}`)
          .then(res => {
            resolve(res.data);
          })
          .catch(err => {
            reject(errorHandler(err));
          });
    });
  }
}

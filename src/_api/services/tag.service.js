"use strict";
import axios from "axios";
import errorHandler from "@/_api/helpers/errors.handler";

export default class Tag {
  /* findAll - get all tags */
  static findAll(page) {
    return new Promise((resolve, reject) => {
      axios
          .get(`/tags?page=${page}&page_size=5`)
          .then(res => {
            resolve(res.data);
          })
          .catch(err => {
            reject(errorHandler(err));
          });
    });
  }

  /* findOne - get one tags by id */
  static findOne(tagId) {
    return new Promise((resolve, reject) => {
      axios
          .get(`tags/${tagId}`)
          .then(res => {
            resolve(res.data);
          })
          .catch(err => {
            reject(errorHandler(err));
          });
    });
  }

  /* create - create one tag */
  static create(tag) {
    return new Promise((resolve, reject) => {
      axios
          .post("tags", tag)
          .then(res => {
            resolve(res.data);
          })
          .catch(err => {
            reject(errorHandler(err));
          });
    });
  }

  /* deleteOne - delete one tag by id */
  static deleteOne(tagId) {
    return new Promise((resolve, reject) => {
      axios
          .delete(`tags/${tagId}`)
          .then(res => {
            resolve(res.data);
          })
          .catch(err => {
            reject(errorHandler(err));
          });
    });
  }

  /* update - update one tag by tagId */
  static update(data) {
    return new Promise((resolve, reject) => {
      axios
          .put(`tags/${data.id}`, data.tag)
          .then(res => {
            resolve(res.data.data);
          })
          .catch(err => {
            reject(errorHandler(err));
          });
    });
  }
}

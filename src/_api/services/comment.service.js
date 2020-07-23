"use strict";
import axios from "axios";
import errorHandler from "@/_api/helpers/errors.handler";

export default class Comment {
  /* findOne - get one comment by productId */
  static findOne_productId(productId) {
    return new Promise((resolve, reject) => {
      axios
        .get(`products/by_id/${productId}/comments`)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(errorHandler(err));
        });
    });
  }

  /* findOne - get one comment by slug */
  static findOne_slug(slug) {
    return new Promise((resolve, reject) => {
      axios
        .get(`products/${slug}/comments`)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(errorHandler(err));
        });
    });
  }

  /* create - create one comment by productId */
  static create_id(data) {
    return new Promise((resolve, reject) => {
      axios
        .post(`products/by_id/${data.id}/comments`, data.comment)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(errorHandler(err));
        });
    });
  }

  /* create - create one comment by productSlug */
  static create_slug(data) {
    return new Promise((resolve, reject) => {
      axios
        .post(`products/${data.slug}/comments`, data.comment)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(errorHandler(err));
        });
    });
  }

  /* deleteOne - delete one comment by commentId */
  static deleteOne(comment) {
    return new Promise((resolve, reject) => {
      axios
        .delete(`comments/${comment.id}`)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(errorHandler(err));
        });
    });
  }

  /* update - update one comment by commentId */
  static update(data) {
    return new Promise((resolve, reject) => {
      axios
        .put(`comments/${data.id}`, data.comment)
        .then(res => {
          resolve(res.data.data);
        })
        .catch(err => {
          reject(errorHandler(err));
        });
    });
  }
}

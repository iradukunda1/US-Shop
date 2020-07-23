"use strict";
import axios from "axios";
import errorHandler from "@/_api/helpers/errors.handler";

export default class Order {
  /* findAll - get all orders */
  static findAll(pageNumber) {
    return new Promise((resolve, reject) => {
      axios
          .get(`/orders?page=${pageNumber}&page_size=10`)
          .then(res => {
            resolve(res.data);
          })
          .catch(err => {
            reject(errorHandler(err));
          });
    });
  }

  /* findOne - get one order by id */
  static findOne(orderId) {
    return new Promise((resolve, reject) => {
      axios
          .get(`orders/${orderId}`)
          .then(res => {
            resolve(res.data);
          })
          .catch(err => {
            reject(errorHandler(err));
          });
    });
  }

  /* findOne - get my orders */
  static findMyOrder() {
    return new Promise((resolve, reject) => {
      axios
          .get(`orders/current`)
          .then(res => {
            resolve(res.data);
          })
          .catch(err => {
            reject(errorHandler(err));
          });
    });
  }

  /* create - create one order for unauthenticated and new address*/
  static create_unAuth(order) {
    return new Promise((resolve, reject) => {
      axios
          .post("orders", order)
          .then(res => {
            resolve(res.data);
          })
          .catch(err => {
            reject(errorHandler(err));
          });
    });
  }

  /* create - create one order for authenticated and new address*/
  static create_auth(order) {
    return new Promise((resolve, reject) => {
      axios
          .post("orders", order)
          .then(res => {
            resolve(res.data);
          })
          .catch(err => {
            reject(errorHandler(err));
          });
    });
  }

  /* create - create one order for authenticated and reuse address*/
  static create(order) {
    return new Promise((resolve, reject) => {
      axios
          .post("orders", order)
          .then(res => {
            resolve(res.data);
          })
          .catch(err => {
            reject(errorHandler(err));
          });
    });
  }

  /* deleteOne - delete one order by id */
  static deleteOne(orderId) {
    return new Promise((resolve, reject) => {
      axios
          .delete(`orders/${orderId}`)
          .then(res => {
            resolve(res.data);
          })
          .catch(err => {
            reject(errorHandler(err));
          });
    });
  }

  /* update - update one order by orderId */
  static update(data) {
    return new Promise((resolve, reject) => {
      axios
          .put(`categories/${data.id}`, data.order)
          .then(res => {
            resolve(res.data.data);
          })
          .catch(err => {
            reject(errorHandler(err));
          });
    });
  }
}

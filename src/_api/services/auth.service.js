"use strict";
import axios from "axios";
import errorHandler from "@/_api/helpers/errors.handler";

export default class auth {
  /* login - login as user in order to get token and decode it */
  static login(user) {
    return new Promise((resolve, reject) => {
      axios
          .post(`login`, user)
          .then(res => {
            resolve(res.data);
            axios.defaults.headers.common["Authorization"] =
                "Bearer " + res.data.token;
          })
          .catch(err => {
            reject(errorHandler(err));
          });
    });
  }
  /* getOne - get loggedin user */
  static findOne() {
    return new Promise((resolve, reject) => {
      axios
          .post("users/current")
          .then(res => {
            axios.defaults.headers.common["Authorization"] =
                "Bearer " + res.data.token;
            resolve(res.data.token);
          })
          .catch(err => {
            reject(errorHandler(err));
          });
    });
  }
}

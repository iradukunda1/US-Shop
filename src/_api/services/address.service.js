"use strict";
import axios from "axios";
import errorHandler from "@/_api/helpers/errors.handler";

export default class Address {
    /* findAll - get all addresses */
    static findAll() {
        return new Promise((resolve, reject) => {
            axios
                .get(`/addresses`)
                .then(res => {
                    resolve(res.data);
                })
                .catch(err => {
                    reject(errorHandler(err));
                });
        });
    }

    /* findOne - get one addresses by id */
    static findOne(addresses) {
        return new Promise((resolve, reject) => {
            axios
                .get(`addresses/${addresses.id}`)
                .then(res => {
                    resolve(res.data);
                })
                .catch(err => {
                    reject(errorHandler(err));
                });
        });
    }

    /* findOne - get addresses  by userId */
    static findAllUserId(user) {
        return new Promise((resolve, reject) => {
            axios
                .get(`users/${user.id}/addresses`)
                .then(res => {
                    resolve(res.data);
                })
                .catch(err => {
                    reject(errorHandler(err));
                });
        });
    }

    /* findOne - get one address by userId and addressId */
    static findOne_userId_addressId(user) {
        return new Promise((resolve, reject) => {
            axios
                .get(`users/${user.userId}/addresses/${user.addressId}`)
                .then(res => {
                    resolve(res.data);
                })
                .catch(err => {
                    reject(errorHandler(err));
                });
        });
    }

    /* create - create one addresses */
    static create(address) {
        return new Promise((resolve, reject) => {
            axios
                .post("addresses", address)
                .then(res => {
                    resolve(res.data);
                })
                .catch(err => {
                    reject(errorHandler(err));
                });
        });
    }

    /* deleteOne - delete one product by productId */
    static deleteOne(address) {
        return new Promise((resolve, reject) => {
            axios
                .delete(`addresses/${address.id}`)
                .then(res => {
                    resolve(res.data);
                })
                .catch(err => {
                    reject(errorHandler(err));
                });
        });
    }

    /* update - update one addresses by addressesId */
    static update(data) {
        return new Promise((resolve, reject) => {
            axios
                .put(`addresses/${data.id}`, data.address)
                .then(res => {
                    resolve(res.data.data);
                })
                .catch(err => {
                    reject(errorHandler(err));
                });
        });
    }
}

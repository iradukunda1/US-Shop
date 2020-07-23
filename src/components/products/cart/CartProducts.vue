<template>
  <div class="cart-products">
    <div class="pb-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 p-5 bg-white rounded shadow-sm mb-3">
            <div class="table-responsive">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col" class="border-0 bg-light">
                      <div class="p-2 px-3 text-uppercase">Product</div>
                    </th>
                    <th scope="col" class="border-0 bg-light">
                      <div class="py-2 text-uppercase">Quantity</div>
                    </th>
                    <th scope="col" class="border-0 bg-light">
                      <div class="py-2 text-uppercase">Total Price</div>
                    </th>
                    <th scope="col" class="border-0 bg-light">
                      <div class="py-2 text-uppercase">Remove</div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, id) in products" :key="id">
                    <div
                      class="media align-items-lg-center flex-column flex-lg-row p-3"
                    >
                      <div class="media-body order-2 order-lg-1">
                        <h5 class="mt-0 font-weight-bold mb-2">
                          {{ item.name }}
                        </h5>
                        <p class="font-italic text-muted mb-0 small">
                          {{ item.description }}
                        </p>
                        <div
                          class="d-flex align-items-center justify-content-between mt-1"
                        >
                          <h6 class="font-weight-bold my-2">
                            {{ item.price + item.currency }}
                          </h6>
                          <ul class="list-inline small">
                            <li class="list-inline-item m-0">
                              <i class="fa fa-star text-success"></i>
                            </li>
                            <li class="list-inline-item m-0">
                              <i class="fa fa-star text-success"></i>
                            </li>
                            <li class="list-inline-item m-0">
                              <i class="fa fa-star text-success"></i>
                            </li>
                            <li class="list-inline-item m-0">
                              <i class="fa fa-star text-success"></i>
                            </li>
                            <li class="list-inline-item m-0">
                              <i class="fa fa-star text-gray"></i>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <img
                        src="/img/tsapal3.jpg"
                        alt="Generic placeholder image"
                        width="80"
                        class="ml-lg-5 order-1 order-lg-2"
                      />
                    </div>
                    <td class="border-0 align-middle" style="min-width: 150px;">
                      <div class="input-group">
                        <div
                          class="input-group-prepend"
                          style="cursor:pointer"
                          @click="removeFromCart(item)"
                        >
                          <span
                            class="input-group-text"
                            @click="removeFromCart(item)"
                            ><i class="fas fa-minus"></i
                          ></span>
                        </div>
                        <input
                          type="text"
                          class="form-control bg-white"
                          style="max-width: 3.5rem;"
                          :value="QtyProduct(item)"
                          aria-label="Amount (to the nearest dollar)"
                          disabled
                        />
                        <div
                          class="input-group-append"
                          style="cursor:pointer"
                          @click="addToCart(item)"
                        >
                          <span class="input-group-text"
                            ><i class="fas fa-plus" style="font-size:0.8em;"></i
                          ></span>
                        </div>
                      </div>
                    </td>
                    <td class="border-0 align-middle" style="min-width: 150px;">
                      <strong>{{
                        item.price * QtyProduct(item) + item.currency
                      }}</strong>
                    </td>
                    <td class="border-0 align-middle">
                      <a href="javascript:;;" class="text-dark"
                        ><i
                          class="fa fa-trash"
                          @click="removeProductCart(item)"
                        ></i
                      ></a>
                    </td>
                  </tr>
                  <tr v-if="!products.length" class="border-0">
                    <div class="error-template container">
                      <h1>Oops!</h1>
                      <h2>No Products Found</h2>
                      <div class="error-details">Your cart is empty</div>
                      <div class="error-actions">
                        <a class="btn text-white">
                          <span class="glyphicon glyphicon-envelope"></span>
                          <router-link to="/products"
                            >Take me to Products Page</router-link
                          >
                        </a>
                      </div>
                    </div>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div
          class="row py-5 p-4 bg-white rounded shadow-sm"
          v-if="products.length"
        >
          <div class="col-lg-6">
            <div
              class="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold"
            >
              Coupon code
            </div>
            <div class="p-4">
              <p class="font-italic mb-4">
                If you have a coupon code, please enter it in the box below
              </p>
              <div class="input-group mb-4 border rounded-pill p-2">
                <input
                  type="text"
                  placeholder="Apply coupon"
                  aria-describedby="button-addon3"
                  class="form-control border-0"
                />
                <div class="input-group-append border-0">
                  <button
                    id="button-addon3"
                    type="button"
                    class="btn btn-dark px-4 rounded-pill"
                  >
                    <i class="fa fa-gift mr-2"></i>Apply coupon
                  </button>
                </div>
              </div>
            </div>
            <div
              class="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold"
            >
              Instructions for seller
            </div>
            <div class="p-4">
              <p class="font-italic mb-4">
                If you have some information for the seller you can leave them
                in the box below
              </p>
              <textarea
                name=""
                cols="30"
                rows="2"
                class="form-control"
              ></textarea>
            </div>
          </div>
          <div class="col-lg-6">
            <div
              class="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold"
            >
              Order summary
            </div>
            <div class="p-4">
              <p class="font-italic mb-4">
                Shipping and additional costs are calculated based on values you
                have entered.
              </p>
              <ul class="list-unstyled mb-4">
                <li class="d-flex justify-content-between py-3 border-bottom">
                  <strong class="text-muted">Order Subtotal </strong
                  ><strong>{{ totalPrice }}FRW</strong>
                </li>
                <li class="d-flex justify-content-between py-3 border-bottom">
                  <strong class="text-muted">Shipping and handling</strong
                  ><strong>{{ shippingFee.toFixed(2) }}Frw</strong>
                </li>
                <li class="d-flex justify-content-between py-3 border-bottom">
                  <strong class="text-muted">Tax</strong
                  ><strong>{{ taxFee.toFixed(2) }}Frw</strong>
                </li>
                <li class="d-flex justify-content-between py-3 border-bottom">
                  <strong class="text-muted">Total</strong>
                  <h5 class="font-weight-bold">{{ totalFee.toFixed(2) }}Frw</h5>
                </li>
              </ul>
              <button
                @click="$router.push('/checkout')"
                class="btn btn-dark rounded-pill py-2 btn-block"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <remove-cart-product
      :product="item"
      v-if="showRemoveCartProduct"
      @remove-success="removeCartSuccess"
      @close="close"
    />
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";
import {
  errorToaster,
  infoToaster,
  successToaster,
} from "../../shared/service/ErrorHandler";
import RemoveCartProduct from "./notifications/remove-cart-product";

export default {
  name: "CartProducts",
  components: { RemoveCartProduct },
  data() {
    return {
      qty: [],
      showRemoveCartProduct: false,
      item: {},
      shippingFee: 2.0,
      taxFee: 0.0,
    };
  },
  computed: {
    ...mapState(["cartProducts"]),
    ...mapGetters(["resources"]),

    products() {
      return [
        ...new Set(this.cartProducts.map((v) => JSON.stringify(v))),
      ].map((v) => JSON.parse(v));
    },
    totalPrice() {
      return this.resources.totalPrice;
    },
    totalFee() {
      return this.totalPrice - this.shippingFee;
    },
  },
  methods: {
    ...mapMutations(["SET_CART_PRODUCTS", "ADD_CART_LOCAL"]),

    addToCart(product) {
      this.ADD_CART_LOCAL(product);
      successToaster(
        "Add Quantity",
        `Your Product <b> ${product.name} </b> Added Successfully To Your Product List`
      );
    },

    removeFromCart(item) {
      var index = null;
      var data = this.cartProducts.length;
      for (let i = 0; i < data; i++) {
        if (this.cartProducts[i].id === item.id) {
          index = i;
        }
      }
      this.cartProducts.splice(index, 1);
      infoToaster(
        "Removed Successfully",
        "Your Item Removed Successfully From Product Quantity List"
      );
      this.SET_CART_PRODUCTS(this.cartProducts);
      localStorage.setItem("iki-cart", JSON.stringify(this.cartProducts));
    },

    QtyProduct(item) {
      return this.cartProducts.filter((v) => v.id === item.id).length;
    },

    removeProductCart(product) {
      this.showRemoveCartProduct = true;
      this.item = product;
    },

    removeCartSuccess(item) {
      this.showRemoveCartProduct = false;
      errorToaster(
        "Delete Product",
        `Product <b> ${item.name} </b> Deleted Successfully From Cart List`
      );
    },

    close() {
      this.showRemoveCartProduct = false;
    },
  },
  mounted() {},
};
</script>

<style>
.error-template {
  padding: 40px 15px;
  text-align: center;
}

.error-actions {
  margin-top: 15px;
  margin-bottom: 15px;
}

.error-actions .btn {
  margin-right: 10px;
}

tr {
  border-bottom: 1px solid lightgrey;
}
</style>

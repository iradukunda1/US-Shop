<template>
  <div class="cart-products">
    <div class="pb-5">
      <div class="container">
        <div class="row">
          <div
            class="col-lg-12 p-5 bg-white rounded shadow-sm mb-3"
            v-if="orderProducts.length > 0"
          >
            <div class="table-responsive">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col" class="border-0 bg-light">
                      <div class="p-2 px-3 text-uppercase">Item</div>
                    </th>
                    <th scope="col" class="border-0 bg-light">
                      <div class="py-2 text-uppercase">Quantity</div>
                    </th>
                    <th scope="col" class="border-0 bg-light">
                      <div class="py-2 text-uppercase">Total Price</div>
                    </th>
                    <th scope="col" class="border-0 bg-light">
                      <div class="py-2 text-uppercase">Status</div>
                    </th>
                    <th scope="col" class="border-0 bg-light">
                      <div class="py-2 text-uppercase">Remove</div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in orderProducts" :key="item.id">
                    <div
                      class="media align-items-lg-center flex-column flex-lg-row p-3"
                    >
                      <div class="media-body order-2 order-lg-1">
                        <p class="font-italic text-muted mb-0 small">
                          {{ item.description }}
                        </p>
                        <div
                          class="d-flex align-items-center justify-content-between mt-1"
                        >
                          <h6 class="font-weight-bold my-2">
                            {{ item.price }}
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
                        :src="item.image"
                        alt="Generic placeholder image"
                        width="200"
                        class="ml-lg-5 order-1 order-lg-2"
                      />
                    </div>
                    <td class="border-0 align-middle" style="min-width: 150px;">
                      {{ item.ProductQty }}
                    </td>
                    <td class="border-0 align-middle" style="min-width: 150px;">
                      {{ item.Quantity }}
                    </td>
                    <td class="border-0 align-middle" style="min-width: 150px;">
                      <strong>{{ item.price }}</strong>
                    </td>
                    <td class="border-0 align-middle">
                      <a href="javascript:;;" class="text-dark"
                        ><i
                          class="fa fa-trash"
                          @click="removeProductOrder(item)"
                        ></i
                      ></a>
                    </td>
                  </tr>
                  <tr class="border-0"></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="error-template container bg-grey my-3" v-else>
            <h2>You don't have any recent</h2>
            <h3>orders in your account</h3>
            <div class="error-actions">
              <a class="btn text-white">
                <span class="glyphicon glyphicon-envelope"></span>
                <router-link :to="{name:'Home'}"
                  >Take me to Shopping</router-link
                >
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  /* eslint-disable */
import { mapState, mapActions, mapMutations } from "vuex";

export default {
  name: "Orders",
  data() {
    return {
      qty: []
    };
  },
  computed: {
    ...mapState(["orderProducts"])
  },
  methods: {
    ...mapMutations(["SET_ORDER_PRODUCTS"]),
    removeProductOrder(product) {
      const products = JSON.parse(localStorage.getItem("iki-order"));
      for (let i = 0; i < products.length; i++) {
        if (products[i]._id === product._id) {
          products.splice(i, 1);
        }
      }
      this.SET_ORDER_PRODUCTS(products);
      localStorage.setItem("iki-order", JSON.stringify(products));
    }
  },
  mounted() {}
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

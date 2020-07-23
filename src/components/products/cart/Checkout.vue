<template>
    <div class="cart-products p-5 bg-white rounded shadow-sm">
        <div class="row mt-5">
            <div class="col-sm-8">
                <div class="container section" id="app">
                    <div class="d-flex justify-content-between">
                        <button class="btn btn-primary" v-if="createAddress" @click="createAddress=false"><i
                                class="fas fa-arrow-left text-white"></i> Select Address
                        </button>
                        <h4 class="text-center" v-else>Select Address</h4>
                        <button class="btn btn-primary mb-2" v-if="!createAddress && createBtn"
                                @click="createAddress=true">Create Address
                        </button>
                    </div>
                    <address-form v-if="createAddress"/>
                    <address-table v-else @openAddressForm="openAddress" @createBtn="createBtnFunc"/>
                </div>
            </div>
            <div class="col-sm-4">
                <cart-calculator ref="cartCalculator"></cart-calculator>
                <ul class="list-group mb-3">
                    <router-link to="/products" class="btn btn-primary mt-2 text-white">Continue Shopping</router-link>
                    <router-link
                            class="btn btn-success mt-2 text-white"
                            to="/payments"
                            v-if="createBtn"
                    >Save & Pay
                    </router-link>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    /* eslint-disable */
import CartCalculator from './CartCalculator'
import addressTable from '../address/table.vue'
import addressForm from '../address/form.vue'

export default {
  name: 'Checkout',
  components: { CartCalculator, addressTable, addressForm },
  data () {
    return {
      shippingDetail: {
        address1: '',
        address2: '',
        country: '',
        zipCode: '',
        shippingDate: '',
        products: [],
        userId: '',
        totalPrice: ''
      },
      createAddress: false,
      createBtn: true
    }
  },
  methods: {
    openAddress () {
      this.createAddress = true
    },
    createBtnFunc (e) {
      this.createBtn = e
    }
  }
}
</script>

<style lang="scss">
    .cart-products {
        div {
            text-align: start;
        }

        #productCU {
            div {
                text-align: start;
            }

            button {
                text-align: center;
            }
        }
    }

    .section {
        padding: 2em 0;
    }

    .fade-up-enter-active,
    .fade-up-leave-active {
        transition: all 0.3s ease-in-out;
    }

    .fade-up-enter,
    .fade-up-leave-to {
        height: 0;
        transform: translateY(30px);
        opacity: 0;
    }

</style>

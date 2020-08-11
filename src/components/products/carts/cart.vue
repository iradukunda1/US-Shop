<template>
  <div class="cart-products">
    <p class="help row mx-0 d-flex w-100 justify-content-end pr-4 pt-3">
      <span class="chat-link-container"
        ><i class="fas fa-comment-dots pr-3"></i>
        <a href="javascript:;;" class="fa-12">Click to Chat</a></span
      ><span class="fa-12 pl-3 pt-1 contact-link-container"
        ><a href="javascript:;;">Need Help? +250780633340</a>
      </span>
    </p>
    <p
      class="justify-content-end d-flex go-to-shop w-25"
      @click="$router.push({ name: 'Home' })"
    >
      <i class="fas fa-angle-left pr-2"></i
      ><a href="javascript:;;" class="font-weight-bold fa-13"
        >CONTINUE SHOPPING</a
      >
    </p>
    <div class="row justify-content-center mx-0 w-100 my-4 pb-5">
      <div class="delivery-info-container w-50">
        <p class="header h3">Your Cart (2)</p>
        <div class="w-75 delivery-form pt-2">
          <list-view />
        </div>
      </div>
      <div class="delivery-items w-25">
        <div class="row mx-0 w-100 ">
          <div
            class="sign-button btn rounded-0 bg-white text-dark fa-13 fa pt-2 px-3"
            @click="sign()"
          >
            SIGN IN
          </div>
          <span class="fa-13 text-justify mb-0 pl-3 w-75">
            Get access to saved addresses and payment info.
          </span>
        </div>
        <a
          class="bg-button text-white fa-14 my-4 text-center font-weight-bold rounded-0 w-100 btn py-2 px-4"
          href="javascript:;;"
          @click="
            $router.push({ name: 'Purchase', params: { params: 'delivery' } })
          "
        >
          CHECKOUT
        </a>
        <div class="w-100 mb-4 apply-coupon-area">
          <label class="fa-12 font-weight-bold">Have a Coupon Code?</label>
          <div class="w-100 d-flex h-50px">
            <input
              placeholder="enter your coupon"
              type="text"
              v-model="coupon"
              class="form-control  rounded-0 w-75 h-100"
            />
            <div
              class="submitCoupon w-25 py-3 cursor-pointer rounded-0 bg-white fa-13 fa text-center"
            >
              APPLY
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import listView from "./list-view";
export default {
  name: "cart",
  components: { listView },
  data() {
    return {
      coupon: ""
    };
  },
  methods: {
    sign() {
      if (this.$store.getters.auth.token) {
        this.$store.dispatch("setResources", [
          "user",
          this.$store.getters.auth.user
        ]);
      } else {
        this.$store.dispatch("setView", "Login");
        this.$store.dispatch("setAccessories", ["details"]);
      }
    }
  }
};
</script>
<style scoped lang="scss">
.cart-products {
  .delivery-items {
    .sign-button {
      border: 2px solid black;
    }
  }
  .submitCoupon {
    color: blue;
    border: 2px solid rgb(0, 124, 173);
    &:hover {
      color: white;
      background-color: rgb(0, 124, 173) !important;
    }
  }
}
@media (min-width: 375px) and (max-width: 425px) {
  .cart-products {
    .go-to-shop {
      width: 40% !important;
      a {
        font-size: 75% !important;
      }
    }
    .delivery-info-container {
      width: 90% !important;
      margin-left: 2rem !important;
    }
    .delivery-items {
      margin-top: 3rem !important;
      width: 80% !important;
    }
  }
}
@media screen and(max-width: 375px) {
  .cart-products {
    .delivery-items {
      width: 90% !important;
    }
    .go-to-shop {
      width: 45% !important;
      padding-left: 1rem;
      margin-top: 2rem;
      a {
        font-size: 70% !important;
      }
    }
  }
}
@media screen and( max-width: 320px) {
  .cart-products {
    .chat-link-container {
      font-size: 70%;
      padding-top: 0.25rem;
      i{
        padding-right: 0.25rem !important;
      }
     a {
        font-size: 90% !important;
      }
    }
    .contact-link-container {
      padding-left: 0.5rem !important;
      a {
        font-size: 84% !important;
      }
    }
    .go-to-shop {
      width: 50% !important;
      a {
        font-size: 70% !important;
      }
    }
    .delivery-info-container {
      width: 85% !important;
      margin-left: 0 !important;
      .header {
        font-size: 1.3rem !important;
        font-weight: 500 !important;
        line-height: 1.2 !important;
      }
      .delivery-form {
        width: 100% !important;
      }
    }
    .delivery-items {
      .sign-button {
        width: 25% !important;
        padding: 0.5rem 0 !important;
      }
    }
  }
}
</style>

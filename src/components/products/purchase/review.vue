<template>
  <div class="review-component w-100 h-auto position-relative">
    <p class="help row mx-0 d-flex w-100 justify-content-end pr-4 pt-3">
      <span class="fa-12 pl-3 pt-1"
        ><a href="javascript:;;">Need Help? +250780633340</a>
      </span>
    </p>
    <div class="row review-content-container justify-content-center mx-0 w-100 my-4 pb-5">
      <div class="review-info-container w-50">
        <div class="w-75 cart-items pt-2">
          <list-view />
          <div
            class="bg-button place-order-button w-50 text-white fa-14 font-weight-bold  rounded-0 btn py-2 mb-2 px-4 mt-5"
          >
            PLACE YOUR ORDER
          </div>
        </div>
      </div>
      <div class="review-items w-25">
        <div class="w-100">
          <div
            class="sign-button text-white btn rounded-0 mb-2 font-weight-bold bg-button w-100 fa-13 py-3 px-4"
          >
            PLACE YOUR ORDER
          </div>
          <span class="fa-13 text-justify mb-0 w-75">
            By clicking Place Your Order, you agree to our
            <span class="text-info cursor-pointer">Privacy Policy </span> and
            <span class="text-info cursor-pointer">Terms of Use.</span>
          </span>
        </div>
        <div class="w-100 mb-4 apply-coupon-area">
          <label class="fa-12 font-weight-bold">Have a Coupon Code?</label>
          <div class="w-100 d-flex h-50px">
            <input
              placeholder="enter your coupon"
              type="text"
              class="form-control  rounded-0 w-75 h-100"
            />
            <div
              class="submitCoupon w-25 py-3 cursor-pointer rounded-0 bg-white fa-13 fa text-center"
            >
              APPLY
            </div>
          </div>
        </div>
        <div class="w-100 border-bottom mb-2 d-flex">
          <p class="mb-0 font-weight-bold fa-14 pb-2">
            PAYMENT INFO
          </p>
          <p
            class="mb-0 font-weight-bold fa-12 text-info pb-2 mr-2 ml-auto cursor-pointer"
          >
            Edit
          </p>
        </div>
        <div class="p-2 border rounded-0 bg-grey order-price mt-4">
          <ul class="list-unstyled mb-0 p-4">
            <li class="d-flex justify-content-between ">
              <p class="text-black-50 mb-0 fa-12">Order Subtotal</p>
              <span class="font-weight-light fa-13">$55.00</span>
            </li>
            <li class="d-flex justify-content-between">
              <p class="text-black-50 mb-0 fa-12">Estimated Tax</p>
              <span class="fa-13">$6.00</span>
            </li>
            <li class="d-flex justify-content-between">
              <p class="fa-14 mb-0">Estimated Subtotal</p>
              <p class="font-weight-bold mb-0 fa-14">$61.24</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ListView from "@/components/products/carts/list-view";
export default {
  name: "review",
  components: { ListView }
};
</script>

<style scoped lang="scss">
.review-component {
  .submitCoupon {
    color: blue;
    border: 2px solid rgb(0, 124, 173);
    &:hover {
      color: white;
      background-color: rgb(0, 124, 173) !important;
    }
  }
}
@media screen and (max-width: 768px) {
  .review-component {
    .review-content-container {
      padding: 0 3rem 3rem 3rem !important;
      .review-info-container {
        width: 60% !important;
      }
      .review-items {
        width: 40% !important;
      }
    }
  }
}
@media (min-width: 375px) and (max-width: 425px) {
  .review-component {
    .review-content-container {
      padding: 0 3rem 3rem 3rem !important;
      .review-info-container {
        width: 100% !important;
        .cart-items{
          width: 100% !important;
          .place-order-button{
            display: none !important;
          }
        }
      }
      .review-items {
        width: 95% !important;
        .sign-button{
          margin: 2rem 0 !important;
        }
      }
    }
  }
}
@media screen and( max-width: 320px) {
  .review-component {
    .review-content-container {
      padding:0 2rem 3rem 1rem !important;
      .review-info-container {
        width: 100% !important;
        .cart-items{
          width: 100% !important;
          .place-order-button{
            display: none !important;
          }
        }
      }
      .review-items {
        width: 95% !important;
        .sign-button{
          margin: 2rem 0 !important;
        }
      }
    }
  }
}
</style>

<template>
  <div class="home-component w-100 h-100">
    <div class="top-nav-container">
      <discount-ads />
      <div class="images w-100 d-inline-flex">
        <img class="home-images w-100 h-100 d-block" src="/img/su-image.png" />
        <div
          class="row justify-content-center position-absolute image-discount-desc w-100 m-0"
        >
          <div class="pt-5  mt-5 discount-container">
            <p class="h2  mx-2">Christmas in July Sale</p>
            <p>Get the scoop on our biggest summer savings.</p>
            <button
              class="btn text-dark bg-white p-2"
              style="margin-left: 7rem"
            >
              SHOP SALE
            </button>
          </div>
        </div>
      </div>
      <delivery-timer />
    </div>
    <div class="flower-product-container w-100">
      <div class="best-shop-sellers position-relative mb-0">
        <div class="py-4 px-0" style="text-align: center">
          <h3>Shop Sale Best Sellers</h3>
        </div>
        <div
          class="wrapper mb-3 row justify-content-center w-100"
          style="text-align: center"
        >
          <div
            class="mx-3"
            style="height: 20rem"
            v-for="(product, index) in products.firstThree()"
            :key="index"
          >
            <card-template :item="product" :showOptions="false" />
          </div>
        </div>
        <div class="p-2 shop-sale-button">Shop July Sale</div>
      </div>
      <div class="separation-image w-100 d-inline-flex" style="height: 30rem;">
        <img class="home-images w-100 h-100 d-block" src="/img/22.jpg" />
        <div
          class="row justify-content-center position-absolute image-discount-desc w-100 mx-0"
          style="height: 30rem;"
        >
          <div class="my-auto">
            <p class="h2 mx-5 f-15">For Leo Birthdays</p>
            <p>Bold & beautiful, flowers are perfect for a Leo.</p>
            <button class="btn text-white p-2 ml-5 bg-button">
              SHOP BIRTHDAY FLOWER
            </button>
          </div>
        </div>
      </div>
      <div class="best-shop-categories position-relative mb-0">
        <div class="py-4 px-0" style="text-align: center">
          <h3>Most Popular Categories</h3>
        </div>
        <div
          class="wrapper mb-5 row justify-content-center w-100"
          style="text-align: center"
        >
          <div
            class="mx-3 my-2"
            v-for="(product, index) in products.firstEight()"
            :key="index"
            style="height: 14rem"
          >
            <card-template :item="product" :showOptions="showPrice" />
          </div>
        </div>
      </div>
      <div class="shop-details px-4 position-relative mb-0">
        <div class="py-4 px-0">
          <h3>Order Flowers Online – Delivered to Your Door</h3>
        </div>
        <div class="wrapper mb-5  w-100" v-if="showAll">
          <div class="first-phase">
            <p class="font-weight-bold">
              Fresh from Our Fields, Expertly Designed and Delivered Flowers by
              ProFlowers
            </p>
            <p class="text-justify ">
              Flowers and plants are always a great gift for those you hold
              dear, or even yourself. Whether you’re shopping for birthday
              flowers for your mom or you want to surprise your husband at the
              office with a lush bonsai plant, we’ve got you covered. Browse
              indoor plants perfect for the hard-working college student,
              bountiful bouquets filled to bursting with magnificent blooms, and
              designer floral arrangements you can’t find elsewhere. No matter
              the occasion, flower deliveries will make your day shine! If
              you’re gift shopping for a snack fiend, browse our gourmet baskets
              filled to the brim with tasty eats. Want to complement that savory
              snack with a sweet treat? Don’t forget to order a gift basket of
              delicious chocolate dipped strawberries. Complement your gourmet
              gift with some gorgeous blooms to sweeten the surprise. Send
              flowers today and brighten the week of a friend, family member, or
              special someone.
            </p>
          </div>
          <div class="second-phase">
            <p class="font-weight-bold">
              The Perfect Gift and Flower Delivery, Whether It's a Special Day
              or Any Day
            </p>
            <p class="text-justify ">
              ProFlowers is the perfect online flower delivery destination for
              any occasion, whether it’s your most cherished holiday or any
              ordinary day that calls for a spontaneous show of appreciation.
              Our birthday flowers can be customized with the vase of your
              choice or paired with a sweet treat to match the recipient's
              style. From romantic displays of red roses to stargazer lilies,
              send flowers to bring a smile to someone’s face for any and every
              reason. Your significant other will swoon when they receive our
              romantic anniversary flowers and gifts, curated with love by our
              expert team. And, we're here to support your gifting needs even
              when the occasion isn't a joyful one. Our sympathy flowers and
              gifts are tastefully arranged and hand-delivered with care to help
              you express your deepest condolences during a sensitive time. Each
              and every gift is designed to help you send the right message. And
              fortunately, our flower deliveries are fast and easy!
            </p>
          </div>
          <div class="third-phase">
            <p class="font-weight-bold">
              More Than Just Floral Experts, We're Gifting Pros
            </p>
            <p class="text-justify ">
              We know how to make a lasting impression with more than just
              flowers. While our stunning orchids can brighten up any living
              space, sometimes the occasion calls for delectable chocolate
              morsels to satisfy a sweet tooth. For the more health-conscious
              foodies, we have thoughtfully selected fruit baskets and snack
              baskets, ideal for any occasion. Just like our floral
              arrangements, every gourmet food gift is delivered with a
              personalized message, so your warm wishes shine through. We also
              offer discount flowers for lovers on a budget! If you are new to
              floral gifting, check out our expert flower guide, the Florapedia,
              to learn more about different types of flowers, flower and plant
              tips, and more. Follow ProFlowers on Facebook, Twitter, Instagram
              and Pinterest for gifting advice and floral inspiration throughout
              the year.
            </p>
          </div>
        </div>
        <p @click="showAll = !showAll">
          <span class="cursor-pointer text-primary" v-if="showAll"
            >show Less</span
          >
          <span class="cursor-pointer text-primary" v-else>Read More</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */

import FeaturedProducts from "@/components/products/FeaturedProducts.vue";
import ProductFilter from "@/components/products/filters/ProductFilter.vue";
import deliveryTimer from "@/components/shared/delivery-timer.vue";
import discountAds from "@/components/shared/discount-ads.vue";
import CardTemplate from "../components/shared/CardTemplate";
import products from "@/components/products/controllers/products";

export default {
  name: "home",
  components: {
    FeaturedProducts,
    ProductFilter,
    deliveryTimer,
    discountAds,
    CardTemplate
  },
  data() {
    return {
      showPrice: "currency",
      showAll: true,
      categories: ["food", "naked", "bad"],
      price: ["High", "low"],
      fabric: ["tissue", "hard", "leather"],
      products: products.products
    };
  },
  mounted() {
  }
};
</script>
<style lang="scss" scoped>
.home-component {
  .images {
    height: 25rem;
  }
  .flower-product-container {
    .shop-sale-button {
      text-align: center;
      border: 2px solid rgb(0, 124, 173);
      cursor: pointer;
      width: 15%;
      margin: 1rem auto;
      &:hover {
        color: white;
        background: rgb(0, 124, 173);
      }
    }
  }
}
</style>

<template>
  <div class="home-component w-100 h-100">
    <div class="top-nav-container">
      <discount-ads />
      <div class="images w-100 d-inline-flex">
        <img class="home-images w-100 h-100 d-block" src="/img/su-image.png" />
        <div
          class="row justify-content-center position-absolute image-discount-desc w-100 m-0"
        >
          <div class="pt-5  mt-5 discount-container w-95">
            <p class="h2  mx-2 text-center">Christmas in July Sale</p>
            <p class="text-center">
              Get the scoop on our biggest summer savings.
            </p>
            <button
              class="btn text-dark bg-white p-2 mx-auto d-flex"
              @click="
                $router.push({
                  name: 'Shop the SU-Flower',
                  params: { params: 'best-selling-plants' }
                })
              "
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
        <div class="py-4 px-0 text-center">
          <h3>Shop Sale Best Sellers</h3>
        </div>
        <div
          class="wrapper mb-3 row justify-content-center text-center mx-0 w-100"
        >
          <div
            class="mx-3 mb-2 categories-list"
            style="height: 20rem"
            v-for="(product, index) in products.firstThree()"
            :key="index"
          >
            <card-template :item="product" :showOptions="false" />
          </div>
        </div>
        <div
          class="p-2 shop-sale-button"
          @click="
            $router.push({
              name: 'Shop the SU-Flower',
              params: { params: 'best-selling-flowers' }
            })
          "
        >
          Shop Best Sale
        </div>
      </div>
      <div class="separation-image w-100 d-inline-flex" style="height: 30rem;">
        <img class="home-images w-100 h-100 d-block" src="/img/22.jpg" />
        <div
          class="row justify-content-center position-absolute show-birthday-container w-100 mx-0"
          style="height: 30rem;"
        >
          <div class="my-auto w-95 show-birthday-container-text">
            <p class="h2 f-15 text-center">For Leo Birthdays</p>
            <p class="text-center">
              Bold & beautiful, flowers are perfect for a Leo.
            </p>
            <button
              class="btn text-white p-2 d-flex mx-auto bg-button"
              @click="
                $router.push({
                  name: 'Shop the SU-Flower',
                  params: { params: 'birthday-flowers' }
                })
              "
            >
              SHOP BIRTHDAY FLOWER
            </button>
          </div>
        </div>
      </div>
      <div class="best-shop-categories position-relative mb-0">
        <div class="py-4 px-0 text-center">
          <h3>Most Popular Categories</h3>
        </div>
        <div
          class="wrapper mb-5 row text-center justify-content-center mx-0 w-100"
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
          <h3 class="shop-details-header">
            Order Flowers Online – Delivered to Your Door
          </h3>
        </div>
        <div class="wrapper mb-5  w-100" v-if="showAll">
          <div class="first-phase">
            <p class="font-weight-bold">
              Fresh from Our Fields, Expertly Designed and Delivered Flowers by
              SU-Bouquets
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
              SU-Bouquets is the perfect online flower delivery destination for
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
              tips, and more. Follow SU-Bouquets on Facebook, Twitter, Instagram
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
  mounted() {}
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
@media screen and (max-width: 768px) {
  .home-component {
    .flower-product-container .shop-sale-button {
      width: 35%;
    }
  }
}
@media (min-width: 375px) and (max-width: 425px) {
  .home-component {
    .images {
      height: 15rem !important;
    }
    .image-discount-desc {
      .discount-container {
        padding-top: 0 !important;
      }
    }
    .shop-details {
      font-size: 76%;
      line-height: 1.5rem;
      .shop-details-header {
        font-size: 1.55rem;
        margin-bottom: 0.5rem;
        font-weight: 500;
        line-height: 1.2;
      }
    }
    .separation-image {
      height: 12rem !important;
    }
    .show-birthday-container {
      height: 12rem !important;
      font-size: 66% !important;
      p:nth-child(1) {
        font-size: 1.75rem !important;
      }
      button {
        font-size: 100% !important;
      }
    }
  }
}
@media screen and( max-width: 320px) {
  .home-component {
    .images {
      height: 15rem !important;
    }
    .image-discount-desc {
      .discount-container {
        padding-top: 0 !important;
        p:nth-child(1) {
          font-size: 1.75rem !important;
          margin-bottom: 0.5rem !important;
          font-weight: 500 !important;
          line-height: 1.2 !important;
        }
        p:nth-child(2) {
          font-size: 72% !important;
        }
        button {
          font-size: 78% !important;
        }
      }
    }
    .separation-image {
      height: 10rem !important;
    }
    .show-birthday-container {
      height: 10rem !important;
      .show-birthday-container-text {
        p:nth-child(1) {
          font-size: 1.75rem !important;
          margin-bottom: 0.5rem !important;
          font-weight: 500 !important;
          line-height: 1.2 !important;
        }
        p:nth-child(2) {
          font-size: 56% !important;
        }
        button {
          font-size: 65% !important;
        }
      }
    }
    .flower-product-container .shop-sale-button {
      width: 50% !important;
    }
    .shop-details {
      font-size: 65% !important;
      line-height: 1.3rem;
      .shop-details-header {
        font-size: 1.5rem !important;
        margin-bottom: 0.5rem !important;
        font-weight: 500;
        line-height: 1.2;
      }
    }
  }
}
</style>

<template>
  <div class="fruit-gift-baskets w-100 position-relative pt-2 pl-5 pr-5">
    <div class="header-content">
      <p class="pb-2 h2">Fruit Baskets Delivery</p>
      <p class="text-justify fa-14 pb-4">
        Our fruit gift baskets are the ideal gift to be delivered for friends,
        family, colleagues – anyone! We have a gourmet fresh fruit gift basket
        to fit any occasion, taste, or dietary restriction. From fresh pears to
        tasty dried apricots, we have decadent treats and delightful snacks to
        tantalize the taste buds of your loved ones!
      </p>
    </div>
    <div class="birth-product-container row justify-content-around w-100 mx-0">
      <div
        class="my-2 mx-2"
        v-for="(product, index) in products"
        :key="index"
        style="height: 20rem"
      >
        <card-template :item="product" :showOptions="false" />
      </div>
    </div>
    <empty-results v-if="!products.length" />
    <div class="row mx-0 w-100 button-collection justify-content-center">
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Chocolate Covered Strawberries Delivery
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Flowers And Strawberries
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Chocolate Covered Fruits Delivery
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Fruit Arrangements
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Organic Fruit Baskets
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Monthly Fruit Delivery
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Tuxedo Strawberries
      </a>
    </div>
    <div class="footer-content my-4">
      <p class="h3 pb-2">
        What Makes S.U-Bouquets Fruit Baskets Such a Thoughtful Gift?
      </p>
      <p class="font-weight-bold fa-14 py-3">Fruit Baskets</p>
      <p class="text-justify fa-13">
        Our fruit baskets are the ideal gift to be delivered for friends,
        family, colleagues – anyone! We have a gourmet fresh fruit gift basket
        to fit any occasion, taste, or dietary restriction. From fresh pears to
        tasty dried apricots, making your loved ones feel special is simple with
        our fruit basket delivery.
      </p>
      <p class="font-weight-bold fa-14 py-3">
        Most Popular Fruit Basket Delivery
      </p>
      <p class="text-justify fa-13 pb-2">
        When you order fruit baskets for delivery from S.U-Bouquets, the sky’s the
        limit! Which means we have delectable treats that even those
        hard-to-shop-for friends and family member will love. Here are some of
        our most popular fruit baskets to help you find just the right gift.
      </p>
      <ul>
        <li class="fa-13 pb-3">
          Ultimate Organic Gift Basket: Organic fruits, cheeses, and sweets
        </li>
        <li class="fa-13 pb-3">
          Signature Fresh & Dried Fruit Gift Basket: Dried and fresh fruits in a
          handwoven seagrass basket
        </li>
        <li class="fa-13 pb-3">
          Simply Snacks Gift: Dried fruits and savory gourmet snacks
        </li>
        <li class="fa-13 pb-3">
          Chocolate Fondue Gift Set: Fair Trade Milk Chocolate Fondue with
          assorted fruits and treats
        </li>
      </ul>
      <p class="text-justify fa-13 pt-3">
        Does the recipient have a taste for the more indulgent things in life?
        No problem. In addition to our popular fruit baskets, we also carry
        fruit baskets that are light on the healthy fare, and chock-full of rich
        sweet and savory goodies like our Chocolate Cravings Box and our Deluxe
        Birthday in a Basket!
      </p>
      <p class="font-weight-bold py-3 fa-14">
        What Makes S.U-Bouquets Fruit Baskets Such a Thoughtful Gift?
      </p>
      <p class="text-justify fa-13">
        We believe it’s the variety and quality of the fresh fruit and tasty
        snacks we put in all of our fruit gift baskets. From seasonal pears,
        apples, oranges, and grapefruit to roasted nuts, rich chocolates, and
        fine cheese and summer sausages, we select only the best ingredients.
      </p>
      <p class="text-justify fa-13">
        Our seasonal fruit baskets delivered make a healthy and thoughtful gift
        for just about any occasion, from birthdays and house warming
        celebrations to thank you and business gifts. We also have a wonderful
        assortment of organic fruit gift baskets to choose from.
      </p>
      <p class="font-weight-bold py-3 fa-14">
        When to Send a Fruit Basket
      </p>
      <p class="text-justify fa-13">
        S.U-Bouquets fruit baskets are a fantastic gift that are suitable for any
        occasion! Whether you’re celebrating a happy moment with a loved one or
        mourning the loss of another, fruit baskets are a thoughtful gift
        everyone will love.
      </p>
      <p class="text-justify fa-13 pt-3">
        Fruit baskets are a meaningful gift to accompany your heartfelt
        condolences after losing a close friend or family member. Make sure the
        family is well-fed and following their healthy diet by sending a gourmet
        gift that will make their day a little brighter. Or, show your love by
        sending them a monthly fruit basket to help them through the difficult
        grieving process. Buy pink and white orchids online as a tribute to the
        loved one lost — send it to the family, or keep it for yourself (you
        need help getting through the grieving process, too). No matter what the
        occasion is, S.U-Bouquets is here to help you communicate your message
        with a gracious gift to show your loved ones just how much you care.
        Delivery is fast and simple when you order gourmet fruit baskets and
        gifts with us!
      </p>
    </div>
  </div>
</template>

<script>
import EmptyResults from "@/components/products/tabs-componets/empty-results";
import cardTemplate from "@/components/shared/CardTemplate";

export default {
  name: "fruit-gift-baskets",
  components: { EmptyResults, cardTemplate },
  data() {
    return {
      products: []
    };
  },
  mounted() {
    this.$emit("itemsLength", this.products.length);
  }
};
</script>

<style scoped></style>

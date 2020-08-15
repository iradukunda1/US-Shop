<template>
  <div class="desserts-baked-goods w-100 position-relative pt-2 pl-5 pr-5">
    <div class="header-content">
      <p class="pb-2 h2">Baked Goods Delivered</p>
      <p class="text-justify fa-14 pb-4">
        Make their day even sweeter with our selection of baked goods. Each
        product is made by artisans, so they are unique and gourmet. With treats
        like cookies, chocolate dipped confections and more, delight for any
        occasion or no occasion at all by sending them baked goods.
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
    <div class="footer-content my-4">
      <p class="font-weight-bold fa-14 pb-5 pt-2">
        Delicious Online Baked Goods
      </p>
      <p class="text-justify fa-13">
        Despite the name, S.U-Bouquets has quite the collection of baked goods
        like brownies, cookies, and more. From selections of baskets brimming
        with delectable to gourmet goodies that come directly from artisan
        bakers, an entire online bakery is a right at your fingertips! We
        understand that while flowers are always a great choice to gift to your
        loved ones, sometimes the key to their heart is through sweet treats.
      </p>
      <p class="font-weight-bold fa-14 py-3 pt-2">
        Send Your Loved Ones a Gift
      </p>
      <p class="text-justify fa-13">
        Everyone can agree that there's nothing better than being surprised by a
        gift. When a unique assortment arrives that they weren't expecting,
        their face will light up. As soon as our desserts delivered to their
        home, they open the box to discover the best treats. Not sure what baked
        goods you should send? No matter their taste, one of our gifts is an
        excellent choice to send. For chocolate lovers, brownies and fresh-baked
        cookies are classic picks that will satisfy their sweet tooth. To make
        their day, strawberries and other treats dipped in chocolate are always
        a guaranteed way to wow them. For the ones who love classic gifts, we
        offer a full selection of Mrs. Fields® baked goods to send. Each
        assortment of her iconic cookies and treats comes specially packaged in
        a tin, so they're perfect for any occasion!
      </p>
      <p class="font-weight-bold fa-14 py-3 pt-2">
        Send Baked Goods Right to their Door
      </p>
      <p class="text-justify fa-13">
        Wherever you are, our selection of online desserts is perfect for adding
        some sweetness to their day. Our gifts come directly from expert and
        artisan bakers, so they always come unique. Getting baked goods
        delivered is an excellent way to remind loved ones how much you
        appreciate them if you can't be there in person. Our gifts are perfect
        for sharing with friends and families alike or just keeping them all to
        yourself. For a coworker's birthday or sending a gift to the office, our
        baked goods are a great gift to send. Each gift arrives right to their
        doorstep, so it's a one-of-a-kind surprise anywhere you send it.
      </p>
      <p class="font-weight-bold fa-14 py-3 pt-2">
        Baked Goods Online from S.U-Bouquets
      </p>
      <p class="text-justify fa-13">
        For desserts delivered, look no further than S.U-Bouquets. Our complete
        assortment of treats for your loved ones makes gifting for all your
        special occasions easy. An array of our gifts come personalized for each
        occasion, making your gift meaningful and memorable. Whether it's for
        birthdays, just because and everything in between, we have everything
        you need to make their day.
      </p>
    </div>
  </div>
</template>

<script>
import EmptyResults from "@/components/products/tabs-componets/empty-results";
import cardTemplate from "@/components/shared/CardTemplate";
import products from "@/components/products/controllers/products";

export default {
  name: "desserts-baked-goods",
  components: { EmptyResults, cardTemplate },
  data() {
    return {
      products: products.products
    };
  },
  mounted() {
    this.$emit("itemsLength", this.products.length);
  }
};
</script>

<style scoped></style>

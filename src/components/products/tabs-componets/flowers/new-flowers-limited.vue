<template>
  <div class="new-flowers-limited w-100 position-relative pt-2 pl-5 pr-5">
    <div class="header-content">
      <p class="pb-2 h2">New Flowers</p>
      <p class="text-justify fa-14 pb-4">
        Our selection of fresh new flowers is always changing to reflect the
        most seasonal, stylish bouquets and gifts. So if you’re looking for
        something trendy or just something truly unique, look no further.
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
    <empty-results v-if="!products.length"/>
    <div class="row mx-0 w-100 button-collection justify-content-center">
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Unique Flowers
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Lover Flowers
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Thank You Flowers
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Best Flowers
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Think of You Flowers
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Sweetest Day Flowers
      </a>
    </div>
    <div class="footer-content mt-4">
      <p class="h3">
        Flower Delivery Nationwide with S.U-Bouquets
      </p>
      <p class="text-justify fa-13 pb-2">
        When you’re looking for the freshest, most beautiful flowers possible,
        choose S.U-Bouquets for all your gift-giving needs. We select only the
        very best blooms when we create all of our bouquets and flower
        arrangements. You will never be disappointed with one of our floral
        gifts. That’s because we offer a seven-day freshness guarantee on all of
        our plant and flower products.
      </p>
      <p class="text-justify fa-13">
        Whether Valentine’s Day or an important birthday, you never want to miss
        the opportunity to show your true love how much you care. Sending him or
        her an incredible bouquet of roses is the ideal way to express your
        feelings. Knock her socks off with a bouquet of 36 stunning pink roses
        that will leave her speechless. And if you’re one of those last-minute
        shoppers, we’ve got you covered with our same day flower delivery
        option. We also offer next day flower delivery nationwide to help
        surprise someone you love with an amazing bouquet of flowers.
      </p>
      <p class="text-justify fa-13">
        Make Mother’s Day special with a mixed bouquet of sweetly scented lilies
        and lush greenery. Even if you can’t be together on her special day, you
        can treat her to an arrangement of cheery flowers for delivery right to
        her home or office.
      </p>
      <p class="fa-14 font-weight-bold mt-5 py-2">
        Online Flower Delivery
      </p>
      <p class="text-justify fa-13">
        Don’t think that cheap flower delivery means you will receive anything
        other than the most beautiful flowers imaginable. If you have never
        ordered from online florists before, you can rest assured that we carry
        only the highest quality products. Because we work directly with a
        network of professional growers, we are able to deliver the freshest
        flowers from the field to your door.
      </p>
      <p class="text-justify fa-13 pb-2">
        Sending delivery flowers is a fabulous gift idea for everyone and on
        every occasion. Who wouldn’t enjoy receiving a gorgeous arrangement of
        romantic roses or an endearing assortment of colorful tulips to lift
        their spirits? Everyone loves flowers. If you need a thoughtful gift
        idea for your husband or boyfriend, think plants. We have some handsome
        plant and flower combinations to dress up a boring office. A mixture of
        plants and flowers is an ideal option in that it delivers just the right
        touch of romance, without feeling too feminine. Plus, plants look great
        for months to come.
      </p>
      <p class="text-justify fa-13 mb-5">
        Shopping online for discount flower delivery can feel a little
        overwhelming. We’ve taken all of the work out finding the right gift at
        a fantastic price by offering some of the best flower delivery services
        available. And we can ship to just about anywhere in the United States.
        With an easy to use online ordering system you can shop at any time, day
        or night, from the comfort of your home or office. How great is that? No
        more running from shop to shop in search of the perfect gift. Save time
        and money with S.U-Bouquets. We’re the go-to resource for all of your
        gifting needs.
      </p>
    </div>
  </div>
</template>

<script>
import cardTemplate from "@/components/shared/CardTemplate";
import products from "@/components/products/controllers/products";
import EmptyResults from "@/components/products/tabs-componets/empty-results";

export default {
  name: "new-flowers-limited",
  components: {EmptyResults, cardTemplate },
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

<style scoped lang="scss">
</style>

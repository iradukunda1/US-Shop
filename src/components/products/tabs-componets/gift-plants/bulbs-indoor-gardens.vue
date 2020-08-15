<template>
  <div class="bulbs-indoor-gardens w-100 position-relative pt-2 pl-5 pr-5">
    <div class="header-content">
      <p class="pb-2 h2">Potted Garden</p>
      <p class="text-justify fa-14 pb-4">
        For our loved ones who have a passion for gardening - but not
        necessarily the space for a garden - our indoor potted gardens,
        terrarium kits and bulb gardens are a thoughtful and convenient gift.
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
        Potted Plant Delivery
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Money Tree Delivery
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Order Rose Plants Online
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Send Succulents
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Indoor Plant Online
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Send Potted Gardens
      </a>
    </div>
    <div class="footer-content my-5">
      <p class="h3 pb-2">
        Selecting and Sending Garden Plants and Flowers with S.U-Bouquets
      </p>
      <p class="text-justify fa-13 pb-2">
        You don’t need a special occasion to send a gift of garden plants and
        flowers. Of course, a potted garden in a rustic basket or brightly
        colored ceramic container is also a welcome gift for birthdays, Mother’s
        Day, housewarmings, or just because. Check out our large selection of
        garden plants guaranteed to brighten up just about anyone’s day.
        S.U-Bouquets makes it easy to send a thoughtful gift of garden flowers to
        anyone who would enjoy a sweet taste of the outdoors in any room. Order
        today! One of the best things about ordering a potted garden from
        S.U-Bouquets is that most of our live plants are easy to care for. A
        little sun, a little water and a little love will keep them growing for
        a long time. Even more temperamental plants like orchids come with
        directions that will make it easier for almost anyone to grow them.
      </p>
      <p class="text-justify fa-13 pb-2">
        Send garden plants from S.U-Bouquets to friends, family and even yourself.
        With so many enticing plants, flowers and herbs to choose from, don’t
        you deserve a potted plant garden, too? One pretty bulb garden for mom,
        one spring planter for you; one Mardi Gras orchid for your best friend,
        one for ? well, you get the idea. You’re sure to be the life of the
        garden party when you send perennial plants to friends and family.
        Choose the perfect potted garden from S.U-Bouquets. It doesn’t take a
        backyard to enjoy a garden. Close your eyes and imagine the soft colors
        and fresh fragrances of an outdoor garden without all the extra work.
        That’s the magic of indoor flowers and potted plant gardens! All the joy
        without all the yard work. Bring the freshness of a spring garden
        indoors with your choice of online garden plants from S.U-Bouquets.
      </p>
    </div>
  </div>
</template>

<script>
import EmptyResults from "@/components/products/tabs-componets/empty-results";
import cardTemplate from "@/components/shared/CardTemplate";
import products from "@/components/products/controllers/products";

export default {
  name: "bulbs-indoor-gardens",
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

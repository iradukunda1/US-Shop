<template>
  <div class="green-plant w-100 position-relative pt-2 pl-5 pr-5">
    <div class="header-content">
      <p class="pb-2 h2">Green Plants</p>
      <p class="text-justify fa-14 pb-4">
        Great for the home, office, or dormitory, our green plants bring life
        into indoor spaces and require minimal care. Green plants make perfect
        gifts for men and women; send one today!
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
    <div class="footer-content my-4">
      <p class="h3 pb-2">The Freshest Green Plants</p>
      <p class="text-justify fa-13 pb-2">
        Make your indoor spaces or those of a loved one even brighter with a
        lush green houseplant. Plants add life and vibrant color to any room,
        making it warm and welcoming. When you’re shopping for beautiful green
        plants to send as gifts, let S.U-Bouquets help. Our indoor plants arrive
        fresh and healthy, and with easy to care for directions to ensure they
        stay healthy and look amazing for years to come. Bring that much needed
        color and energy into your home or office with just the right plant.
        Whether you’re looking for simple evergreen plants or a lovely flowering
        plant, you will find we carry a great selection to help you find just
        what you want.
      </p>
      <p class="text-justify fa-13">
        Plants make great gifts to send to busy college students. We even offer
        some unique succulent gardens and terrariums that look incredible with
        almost no work. Green plants like our miniature Christmas trees are
        ideal for sprucing up you holiday decor. We offer a variety of lucky
        bamboo plants year round to help you deliver a bit of luck to someone
        you love. And who couldn’t use that? If you’re looking for something
        unique and special for an upcoming holiday or other important occasion,
        plants make a great gifting option. You’ll find plenty of inspiration
        here whether you want Mother's day plants, anniversary flowers or even
        just because gift ideas. S.U-Bouquets are the gifting experts. We know how
        to turn an ordinary gift something extraordinary that you will feel
        proud to share with your loved ones.
      </p>
    </div>
  </div>
</template>

<script>
import EmptyResults from "@/components/products/tabs-componets/empty-results";
import cardTemplate from "@/components/shared/CardTemplate";
import products from "@/components/products/controllers/products";

export default {
  name: "green-plants",
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

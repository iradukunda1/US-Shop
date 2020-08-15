<template>
  <div class="succulents-suc w-100 position-relative pt-2 pl-5 pr-5">
    <div class="header-content">
      <p class="pb-2 h2">Succulent Delivery</p>
      <p class="text-justify fa-14 pb-4">
        Arrangements for Delivery Add the fun flavor of the southwest when you
        to send succulents to friends and loved ones. Unusual leaves and ruddy
        hues succulents display create conversation and engender gratitude in
        all hearts. That they’re easy to care for and hard to kill are just
        bonuses! Delicate, yet striking air plants are the perfect choice for
        anyone as they thrive on air, light and water.
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
        Potted Plant Delivery </a
      ><a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Indoor Plants Online </a
      ><a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Send Potted Gardens
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Green Plant Delivery
      </a>
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
        Order Roses Plant Online
      </a>
    </div>
    <div class="footer-content my-4">
      <p class="h3 pb-2">Succulent Plants and Arrangements</p>
      <p class="text-justify fa-13 pb-2">
        The unique landscape of the southwest, with tumbleweeds rolling across
        airy deserts and ghost towns riddled with rattlesnakes and cacti, is
        something straight out of a movie. If you want to add some western flare
        to your home, succulent plants will do the trick. Succulent arrangements
        are easy to care for, making them the perfect gift for a loved one or
        for yourself! At S.U-Bouquets, we have a variety of succulents online to
        choose from that will help add some desert vibes to any home.
      </p>
      <p class="text-justify fa-13 pb-2">
        When the time comes that you need to send corporate gifts for special
        office occasions, S.U-Bouquets has you covered with top notch office
        gifts. Surprise dad with a gift of Father's Day plants delivered to his
        office, giving him a constant reminder every day that you’re thinking of
        him. Dad will love an easy to care for succulent garden or a jade bonsai
        to keep his office peaceful and happy. When you need a gift to celebrate
        an office birthday, send a luscious potted rose plant or fragrant potted
        gardenia. Our flowering plants are perfect for office occasions like
        birthday celebrations and promotions when you need a beautiful gift for
        an office mate.
      </p>
      <p class="font-weight-bold fa-14 py-4">
        How do you keep succulents alive indoors?
      </p>
      <p class="fa-13 pb-2">
        There’s an art to keeping live succulents healthy indoors. While
        succulents are known to withstand extreme conditions and don’t require a
        lot of attention, if they’re not taken care of properly, you can end up
        with dead and wilting plants. To keep succulents alive indoors, think
        about their natural habitat: the desert. This means you should keep your
        succulent plants in direct sunlight, and provide them with enough water,
        but be careful not to overwater them. Just like all plants, succulents
        need room to breathe and grow. So, to create the perfect potted garden,
        give your succulents ample sunlight, water, and room.
      </p>
      <p class="font-weight-bold fa-14 py-4">
        What are the benefits of succulents?
      </p>
      <p class="text-justify fa-13">
        Succulent delivery is the perfect way to show someone how much you care
        about them. This is because succulents have many proven benefits! When
        you send succulents, have peace of mind knowing they have special
        powers, such as the ability to:
      </p>
      <ul>
        <li class="fa-13 pb-3">Clean and purify the air</li>
        <li class="fa-13 pb-3">Enhance memory</li>
        <li class="fa-13 pb-3">Add oxygen to the air</li>
        <li class="fa-13 pb-3">Increase pain tolerance</li>
        <li class="fa-13 pb-3">Improve focus</li>
        <li class="fa-13 pb-3">Help people breathe better</li>
      </ul>
      <p class="font-weight-bold fa-14 py-4">
        How often should indoor succulents be watererd?
      </p>
      <p class="fa-13 pb-2">
        As you now know, succulents are desert-dwellers, meaning they’re used to
        arid climates with little rain. However, in the desert, when it rains,
        it pours. What this means for your succulent arrangements is that they
        don’t need water all the time, like green plants, but when they do need
        water, they need a lot. Instead of watering your succulents every few
        days with a trickle of water, wait until the soil becomes dry, and then
        some. Once the soil is bone dry, place your succulents in the sink or
        outside, and water them (a lot) until you see water coming out of the
        bottom of the planter. Then, wait a week or two and water your live
        succulents again. At S.U-Bouquets, our selection of easy to care for
        plants like our succulents and bonsai trees are a unique way to express
        gratitude, show thanks, or simply say “I love you.”
      </p>
    </div>
  </div>
</template>

<script>
import EmptyResults from "@/components/products/tabs-componets/empty-results";
import cardTemplate from "@/components/shared/CardTemplate";
import products from "@/components/products/controllers/products";

export default {
  name: "succulents-suc",
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

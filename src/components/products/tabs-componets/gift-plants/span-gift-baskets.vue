<template>
  <div class="span-gift-baskets w-100 position-relative pt-2 pl-5 pr-5">
    <div class="header-content">
      <p class="pb-2 h2">Spa Gift Baskets</p>
      <p class="text-justify fa-14 pb-4">
        If you’re looking to send someone a meaningful and memorable gift, look
        no further: spa gift baskets are sentimental, sweet, and encourage
        self-care. What more could you ask for? Scroll through our selection to
        find the best spa basket delivery for that special someone in your life.
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
      <p class="font-weight-bold fa-14 py-3">
        What comes in a spa gift basket?
      </p>
      <ul>
        <li class="fa-13 pb-3">
          Our gift basket comes with everything your special someone needs to
          relax, unwind, and take care of themselves the right way:
        </li>

        <li class="fa-13 pb-3">
          Moisturizing body lotion to keep skin feeling soft and rejuvenated
        </li>

        <li class="fa-13 pb-3">
          Creamy body butter that repairs dry and damaged skin
        </li>

        <li class="fa-13 pb-3">
          Luxurious bath bombs that will turn a soak in the tub into a five-star
          spa experience
        </li>

        <li class="fa-13 pb-3">Softly scented hand soap that’s a joy to use</li>
      </ul>
      <p class="text-justify mb-0 fa-13">
        A scrubby loofah to get all those nooks and crannies
      </p>
      <p class="text-justify mb-0 fa-13">
        A scented candle to set the mood before settling into a self-care
        evening
      </p>
      <p class="font-weight-bold fa-14 py-3">
        When should I gift a spa basket?
      </p>
      <p class="text-justify fa-13 pb-2">
        Spa baskets make great gifts for almost any occasion. Here are some of
        our favorite times to send the ones we love a luxurious and bountiful
        spa gift basket delivery:
      </p>
      <ul>
        <li class="fa-13 pb-3">
          <span class="font-weight-bold">Mother’s Day:</span> What better way to
          thank your mom for all the love and care she’s given you than with a
          spa gift basket that allows her to take care of herself? Whether it’s
          a present for Mother’s Day, mom’s birthday, or even just-because: moms
          love spa gift deliveries.
        </li>
        <li class="fa-13 pb-3">
          <span class="font-weight-bold">Significant others:</span> Your
          romantic partner is a perfect person to deliver a spa gift basket to.
          Show how much you care for them and want them to have a little R&R
          time to themselves by presenting them with soaps, lotions, bath bombs
          and more!
        </li>
        <li class="fa-13 pb-3">
          <span class="font-weight-bold">Graduation gifts:</span> Did someone
          you know recently graduate high school or college? After the stress of
          their final semester, they could probably do with a nice relaxing spa
          day to unwind. Send them a spa gift basket for a thoughtful and
          encouraging present option.
        </li>
      </ul>
      <p class="text-justify fa-13 pt-4">
        Spa gift baskets also pair well with stunning bouquets. For a romantic
        and sweet birthday gift, consider sending a spa gift basket with a dozen
        red roses or a playful and flirtatious arrangement of pink tulips.
        ProFlowers makes gift delivery easy, so don’t hesitate to find the
        perfect arrangement for your special someone!
      </p>
    </div>
  </div>
</template>

<script>
import EmptyResults from "@/components/products/tabs-componets/empty-results";
import cardTemplate from "@/components/shared/CardTemplate";
import products from "@/components/products/controllers/products";

export default {
  name: "span-gift-baskets",
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

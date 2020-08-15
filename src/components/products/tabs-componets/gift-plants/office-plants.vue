<template>
  <div class="office-plants w-100 position-relative pt-2 pl-5 pr-5">
    <div class="header-content">
      <p class="pb-2 h2">Office Plants</p>
      <p class="text-justify fa-14 pb-4">
        Whether it’s to say “Happy Father’s Day” or “Welcome Aboard,” sending
        office plants to new colleagues or loved ones is the perfect way to show
        you care. Send plants to the office today.
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
        Send Retirement Flowers
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Teacher Appreciation Flower
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Admin Day Flower
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Plant Corporate Gifts
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Corporate Gift Baskets
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Business Holiday Gifts
      </a>
    </div>
    <div class="footer-content my-4">
      <p class="h3 pb-2">Send Office Plants</p>
      <p class="text-justify fa-13 pb-2">
        For the best selection of office gift options, turn to S.U-Bouquets. We
        make shopping for plants for a home or office quick and easy with our
        extensive assortment of orchids, succulent plants, green plants and
        more. Looking to send congratulations on a friend or coworker’s big
        promotion? We have bonsai trees for delivery that looks beautiful and is
        easy to care for is just the thing. Considered a staple in Feng Shui,
        lucky bamboo is believed to bring good fortune wherever it’s placed.
        S.U-Bouquets offers a wide selection of high quality office gifts that
        cost under $30. Send a braided money tree to dad to wish him financial
        luck at his job. Or give a friend a lush peace lilly as a way to say
        thank you for being you! These nice Low light plants are not only easy
        to care for, but the perfect way to add color to any office space.
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
      <p class="text-justify fa-13 pb-2">
        Some of our customer favorites to send as office plants are our exotic
        plants. The premium purple orchid and tropical bromeliad garden are the
        perfect plants to turn any desk into a tropical paradise that will make
        the work days brighter! Buy exotic plants from S.U-Bouquets to spruce up
        your own desktop or to brighten someone else’s, creating a mini escape
        to a tropical paradise.
      </p>
      <p class="text-justify fa-13">
        S.U-Bouquets also offers business gifting services to companies that need
        them. These services include bulk orders, employee discounts, and
        incentive programs for your employees. Contact our customer service
        department for more information on this service and other ones offered
        to all S.U-Bouquets customers. Make someone you love’s day a lot brighter,
        while getting great deals on some of the most amazing plants. Our
        beautiful lush plants are the freshest around. Find the perfect office
        plant for your office and everyone on your gift list.
      </p>
    </div>
  </div>
</template>

<script>
import EmptyResults from "@/components/products/tabs-componets/empty-results";
import cardTemplate from "@/components/shared/CardTemplate";
import products from "@/components/products/controllers/products";

export default {
  name: "office-plants",
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

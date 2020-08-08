<template>
  <div class="same-day-sympathy-flowers w-100 position-relative pt-2 pl-5 pr-5">
    <div class="header-content">
      <p class="pb-2 h2">Same-Day Sympathy Gifts and Gift Baskets</p>
      <p class="text-justify fa-14">
        Show them you care with same-day sympathy gifts from S.U-Bouquets. From
        beautifully designed gift baskets to sympathy bouquets and floral
        arrangements, you will find the right gift to extend your condolences.
        Order by 2PM in the recipient’s time zone for same day delivery
        Monday-Friday. (Saturday, Sunday and Holiday cutoff times may vary.)
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
    <div class="row mx-0 w-100 button-collection">
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Funeral Flower Arrangement
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Condolence Flower
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Sympathy Plant
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Dog Sympathy Plant
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Casket Spray
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Wreath For Funeral
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Sorry Flower
      </a>
    </div>
    <div class="footer-content mt-4">
      <p class="h3">Same-Day Sympathy Flowers and Gifts</p>
      <p class="text-justify fa-13 pb-2">
        Losing a loved one is a difficult experience, and knowing how to help or
        comfort someone who is going through it can be nearly as hard.
        Fortunately S.U-Bouquets offers a wide selection of same-day sympathy
        flowers and gifts to express your condolences when your words cannot.
        Whether you want to send flowers across town or across the country,
        there’s no better place to start than with S.U-Bouquets. Our team of
        dedicated floral artists will hand-arrange a gorgeous sympathy flower
        arrangement for your loved one. As an added convenience, you can have
        your floral gift hand-delivered to a church or mortuary. We guarantee
        our flowers to be the freshest, highest quality available.
      </p>
      <p class="text-justify fa-13">
        Choose from simple, yet tasteful floral arrangements, as well as a
        variety of funeral wreaths and casket sprays to let the family know you
        are thinking of them during this very difficult time. We also offer
        religious arrangements like funeral crosses and arrangements in a choice
        of color schemes. No matter what your budget, we can create the perfect
        gift you to share your heart-felt sentiments during their time of loss.
        Flowers are a wonderful way to memorialize the life of the person and
        one the family of the deceased will appreciate.
      </p>
      <p class="text-justify fa-13">
        Same-day sympathy gifts, like our gift baskets filled with a variety of
        delicious gourmet food items are another thoughtful choice. When a loved
        one passes, there are so many details to take care of and arrangements
        to be made. Often the grieving family members become so busy handling
        everything they need to do that they forget to take care of themselves.
        A gift basket of tasty snacks is a great way to help them keep their
        energy up during this busy and stressful time. We even carry an
        assortment of unique sympathy gift ideas that combine our beautiful
        flowers and plants with some of our assorted fruit and gourmet foods.
      </p>
    </div>
  </div>
</template>

<script>
import cardTemplate from "@/components/shared/CardTemplate";
import products from "@/components/products/controllers/products";
import EmptyResults from "@/components/products/tabs-componets/empty-results";

export default {
  name: "same-day-sympathy-flowers",
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
.same-day-sympathy-flowers {
  .button-collection {
    a {
      color: black;
      border: 2px solid black;

      &:hover {
        color: white;
        border: 2px solid rgb(0, 124, 173);
        background: rgb(0, 124, 173);
      }
    }
  }
}
</style>

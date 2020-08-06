<template>
  <div class="just-because-gifts w-100 position-relative pt-2 pl-5 pr-5">
    <div class="header-content">
      <p class="h3 py-2">Just Because Flowers</p>
      <p class="text-justify fa-14">
        Why wait for a birthday, a holiday, or an anniversary to make someone
        feel special? We think that one of the best reasons to send a gorgeous
        bouquet or thoughtful gift is, well… just because. .
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
    <nav aria-label="...">
      <ul class="pagination row mx-0 w-100 justify-content-center my-4">
        <li class="page-item  active">
          <span class="page-link rounded-circle mx-2"> 1</span>
        </li>
        <li class="page-item">
          <span class="page-link rounded-circle mx-2 cursor-pointer">2</span>
        </li>
        <li class="page-item">
          <span class="page-link border-0 cursor-pointer"
            ><i class="fa fa fa-angle-double-right"></i
          ></span>
        </li>
      </ul>
    </nav>

    <div class="row mx-0 w-100 button-collection justify-content-center">
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Teddy Bear And Flowers
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Best Friend Gift Baskets
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Last Minute Gift
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Buy Personal Gift Online
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Natural Gift Ideas
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Send Thank Gift
      </a>
    </div>
    <div class="footer-content mt-4">
      <p class="h2">Just Because Flowers Online</p>
      <p class="text-justify fa-13">
        Do you really need an occasion to tell the important people in your life
        how much you love and care about them? or even simply "I'm thinking of
        you?" At SU-Bouquets we think every day is the perfect reason to brighten
        a loved one’s day with bouquets of beautiful blooms. We’ve create a
        collection of the freshest arrangements that are ideal for any occasion,
        or no occasion at all. We work hard to deliver the highest quality
        flowers at the best prices. Make her day really special with amazing
        Mother’s Day flower arrangements to suit every mom’s individual style.
        If roses are her flower of choice, you will find so many from which to
        choose. Whether you are looking for pink, red, yellow or orange flowers,
        we’ve got every hue under the sun to add some fresh color to her day.
        Show friends and family how much you they mean with a gesture that says,
        "Thank you for being you." Sending flowers doesn’t have to cost a
        fortune. SU-Bouquets believes everyone should be able to send affordable
        flowers and gifts. We work with top growers to select the freshest
        flowers possible and then deliver them directly to you front door to
        ensure they are at their very best. Surprise your love ones with a great
        gift that is sure to make his or her heart flutter just a bit more. For
        a smaller yet just as thoughtful gift delivery, send a flower card from
        our PetalPop greeting card collection, which features living flowers
        inside the card. In addition to our incredible flowers, we also carry a
        wonderful assortment of delicious treats and unique gourmet foods like
        mouthwatering chocolates, cake pops and cupcakes, as well as fine cheese
        and wine pairings to make any day a memorable one. Thoughtfully selected
        gift baskets filled with a handful of his or her favorite things are
        another fantastic gift idea they are sure to appreciate. Whether you
        send flowers, fresh plants or gourmet goodies, you know you’re sending a
        gift that is guaranteed to put a smile on your special someone's face.
      </p>
    </div>
  </div>
</template>

<script>
import cardTemplate from "@/components/shared/CardTemplate";
import products from "@/components/products/controllers/products";

export default {
  name: "just-because-gifts",
  components: { cardTemplate },
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
.just-because-gifts {
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

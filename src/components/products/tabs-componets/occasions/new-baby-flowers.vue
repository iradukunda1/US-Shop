<template>
  <div class="new-baby-flowers w-100 position-relative pt-2 pl-5 pr-5">
    <div class="header-content">
      <p class="pb-2 h2">New Baby Flowers</p>
      <p class="text-justify fa-14">
        Say “way to go, mom and dad” with a big bouquet of new baby flowers. In
        addition to baby flowers, we have gift baskets, fresh fruit, and
        snacks—all great gifts for new parents.
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
        Baby Shower Flowers
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        New Baby Gift Birthday Same Delivery
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Send Baby Gift
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Baby Gift Baskets Delivered
      </a>
    </div>
    <div class="footer-content mt-4">
      <p class="font-weight-bold fa-15 pb-2">New Baby Gifts & Flowers</p>
      <p class="text-justify fa-13">
        There’s nothing more joyous than bringing a new bundle of joy into this
        world. Celebrate this momentous milestone by sending new baby gifts to
        your friends or family members who just became new parents. From
        fragrant, colorful new baby flowers to gift baskets filled with
        scrumptious treats and eats, you’re sure to find a gift that will help
        welcome their precious child into their lives!
      </p>
      <p class="font-weight-bold fa-14 py-2">
        What kind of flowers do you send for a new baby?
      </p>
      <p class="text-justify fa-13 pt-2">
        Whether they’re having their first baby or their third, every single one
        is a true blessing. If you’re looking for a baby bouquet to send to the
        proud parents, you’re in the right place. At SU-Bouquets, we have a
        variety of bouquet of flowers to choose from, such as our:
      </p>
      <ul class="mt-4 pt-3 pb-5 mb-4">
        <li class="pb-4 fa-13">Long Stem Pink Rose Bouquet</li>
        <li class="pb-4 fa-13">Baby Girl Big Hug Bouquet</li>
        <li class="pb-4 fa-13">Girls Are Great! Bouquet</li>
        <li class="pb-4 fa-13">Boys Are Best! Bouquet</li>
        <li class="pb-4 fa-13">Beyond Blue Bouquet</li>
        <li class="fa-13">Premium Joyful Bouquet</li>
      </ul>
      <p class="font-weight-bold fa-14 pb-2">
        What gifts do you bring anew mom and dad in the hospital?
      </p>
      <p class="text-justify fa-13">
        At SU-Bouquets, we also have a variety of new baby gift delivery options
        to show the new parents in your life you’re there for them. Say
        “congratulations!” with our delectable It’s A Girl or It’s A Boy
        strawberries that are hand-dipped to perfection, or with our New Baby 10
        Piece Gift Set that will welcome the newborn in grand style. Other new
        baby gifts for parents include our fruit and snack gift basket that will
        provide nourishment to the new mom and dad after delivery, and our
        Little Critter Backpacks that will keep baby bottles, bibs, blankies,
        and more neatly organized!
      </p>
      <p class="font-weight-bold fa-14 pb-2">
        What flowers are safe for new babies and children?
      </p>
      <p class="text-justify fa-13">
        Babies and children are curious by nature. There’s so much to learn and
        explore, which is why you have to keep a watchful eye on them at all
        times. One second they’ll be sound asleep, and the next they’ll be
        wandering around thinking a colorful flower is a delicious treat! While
        some flowers, like tulips, may simply cause skin irritation to newborns,
        others are more concerning, such as larkspur, which are poisonous. Here
        are some safe flowers you can keep around new babies and children.
      </p>
      <ul class="pt-4 mt-2 mb-5">
        <li class="pb-4 fa-13">Daisies</li>
        <li class="pb-4 fa-13">Sunflowers</li>
        <li class="pb-4 fa-13">GSweet Peas</li>
        <li class="pb-4 fa-13">Marigold</li>
        <li class="pb-4 fa-13">Purple Cone Flower</li>
        <li class="pb-4 fa-13">Ferns</li>
      </ul>
    </div>
  </div>
</template>

<script>
import cardTemplate from "@/components/shared/CardTemplate";
import products from "@/components/products/controllers/products";
import EmptyResults from "@/components/products/tabs-componets/empty-results";

export default {
  name: "new-baby-flowers",
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
.new-baby-flowers {
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

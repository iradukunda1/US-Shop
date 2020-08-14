<template>
  <div class="gift-for-parent w-100 position-relative pt-2 pl-5 pr-5">
    <div class="header-content">
      <p class="h3">Shop for Friendship Flowers</p>
      <p class="text-justify fa-14">
        Perfect for Friendship Day or every day, remind your closest pals much
        you love them with a bouquet delivery. From flowers that are true
        symbols of friendship to their favorite blooms, pick a gift for your
        friends on this special day.
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
    <div class="footer-content mt-4">
      <p class="font-weight-bold mb-0 pb-4 fa-14">
        Find the perfect Friendship Flowers and Gifts
      </p>
      <p class="text-justify fa-13">
        Some of the most important people in our lives turn out to be our
        closest friends. Where would we be without our friends? They share our
        good times, stand by us during bad times, and bring a smile to your face
        no matter what. Beyond everything else, friends hold an irreplaceable
        place in our hearts and sometimes, become members of our honorary
        family. With how special they are to us, it seems like some celebrations
        are in order! That’s where Friendship Day comes in. On the first Sunday
        in August, this day is reserved specifically to send some love to our
        closest friends.
      </p>
      <p class="fa-13">
        If you’re looking for the best flowers for friends, look no further.
        S.U-Bouquets has plenty of gorgeous blooms, bouquets, and gifts to say
        ‘thank you’ for always being there for you. This gift captures every
        message of love, appreciation, and happiness you want to send on this
        special day. While we all want to be with every single one of our
        friends on this day, for some of us our friendships stretch across many
        states and even oceans! If you can’t be there to celebrate in person,
        send a virtual hug in the form of a special floral delivery. Our flowers
        come delivered right to their doorstep, either designed by a local
        florist or sent fresh from one of our farms. Each gourmet gift is
        crafted from the finest artisans selects like chocolates and cookies to
        satisfy their sweet tooth.
      </p>
      <p class="fa-14 font-weight-bold mb-0 py-4">
        Flowers that Symbolize Friendship
      </p>
      <p class="fa-13 mb-5">
        Some flowers are so special, they embody everything friendship means in
        the form of flowers. The color yellow is known as a common shade to
        symbolize friendship. Which is perfect, because there are plenty of
        flowers that come in the color! Specifically, sunflowers and roses are
        perfect yellow blooms to send flowers to friends. Their beauty is so
        versatile and special, perfect for capturing a one-of-a-kind friendship
        like yours.
      </p>
    </div>
  </div>
</template>

<script>
import EmptyResults from "@/components/products/tabs-componets/empty-results";
import cardTemplate from "@/components/shared/CardTemplate";
import products from "@/components/products/controllers/products";

export default {
  name: "friend-gift-flower",
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

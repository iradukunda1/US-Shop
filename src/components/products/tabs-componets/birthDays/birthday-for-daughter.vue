<template>
  <div class="birthday-for-daughter w-100 position-relative pt-2 pl-5 pr-5">
    <div class="header-content">
      <p class="font-weight-bold h3">Daughters Birthday Flowers</p>
      <p class="text-justify fa-14">
        You’d give your daughter the world if you could, but our beautiful
        blooms make a wonderful second choice. Find birthday flowers for your
        daughter and help her celebrate turning another year older. S.U-Flowers
        offers beautiful floral arrangements that will make her birthday
        festivities that much sweeter.
      </p>
    </div>
    <div
      class="birth-product-container row justify-content-center w-100 mx-0"
      v-if="products.length"
    >
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
    <nav aria-label="..." v-if="products.length">
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
      <p class="font-weight-bold h4 pb-2">
        Birthday Flowers for Daughters
      </p>
      <p class="text-justify fa-13">
        It seems like just yesterday you were holding your baby daughter in your
        arms, but oh how the time flies! Whether she’s entering her teen years,
        heading to college, or is already a mother to her own daughter, she’ll
        always be your little girl. Celebrate the bond between parent and child
        with some beautiful happy birthday flowers for your daughter.
      </p>
      <p class="font-weight-bold fa-14 mb-0 py-2">
        Birthday Flowers and Sweet Treats
      </p>
      <p class="text-justify fa-13 pt-2">
        The birthday fun doesn’t stop at flowers. A sweet girl deserves a sweet
        treat, and we can help you deliver treats she’ll love. Choose from a
        variety of happy birthday daughter flowers and add a basket of Mrs.
        Fields cookies and other brownie concoctions. You can also select from
        fancy dipped strawberries and birthday cakes, or stick to savory with
        our boxes filled with treats and salty snacks.
      </p>
      <p class="font-weight-bold fa-14 mb-0 py-2">
        Christmas Flowers for Daughters
      </p>
      <p class="text-justify fa-13 pt-2">
        If your daughter’s birthday falls during the holiday season, lift her
        spirits further with a surprise delivery of Christmas-colored birthday
        flowers for daughters. She’ll delight in our colorful collection; browse
        deep red roses, fragrant stargazer lilies, or a beautiful tulip bouquet.
        Add a plush teddy bear or other sweet treats to your gift for an extra
        special surprise.
      </p>
      <p class="font-weight-bold fa-14 mb-0 py-2">
        Personalized Happy Birthday Daughter Gifts
      </p>
      <p class="text-justify fa-13 pt-2">
        We also offer customizable gifts that will become treasured keepsakes
        she can cherish for years to come. If your daughter lives across the
        country, give her a reminder of the love you have for her with a Close
        At Heart Square Wood Plaque. If you want something that offers even more
        personalization, you can inscribe any message of your choosing on one of
        our elegant birthday glass blocks.
      </p>
    </div>
  </div>
</template>

<script>
import EmptyResults from "@/components/products/tabs-componets/empty-results";
import cardTemplate from "@/components/shared/CardTemplate";
import products from "@/components/products/controllers/products";

export default {
  name: "birthday-for-daughter",
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

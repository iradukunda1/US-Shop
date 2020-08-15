<template>
  <div class="mrs-fields-cookies w-100 position-relative pt-2 pl-5 pr-5">
    <div class="header-content">
      <p class="pb-2 h2">Mrs. Fields Cookie Delivery</p>
      <p class="text-justify fa-14 pb-4">
        Now you can enjoy world-famous Mrs. Fields cookies and other baked goods
        delivered fresh to your doorstep! Ranging from classic Nibblers to full
        sized cookies, mini muffins and even brownie bites, these delectable
        treats are sure to be a hit!
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
        Cookie Bouquets
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Cookie Delivery
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Cookie Baskets
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Decorated Cookie For Sale
      </a>
    </div>
    <div class="footer-content my-4">
      <p class="font-weight-bold h3 pb-5 pt-2">
        Sending Mrs. Fields Gifts
      </p>
      <p class="text-justify fa-13">
        Cookies and brownies and muffins, oh my! When Debbi Fields opened her
        first cookie store in Palo Alto, California back in 1977, many people
        didn’t think a business that sold only cookies could be successful.
        Wrong. Over thirty years later, when you say gourmet cookies you
        probably think of buttery Mrs. Fields cookies bursting with rich
        chocolate chunks, macadamia nuts, peanut butter, oatmeal, cinnamon and
        other tempting flavors. An assortment of fresh gourmet cookies makes a
        thoughtful (and delicious!) group gift or a special treat for a favorite
        cookie lover who loves to snack. Send Mrs. Fields cookies to someone
        special. S.U-Bouquets offers a wide selection of gourmet cookies and
        treats, with easy ordering and fast shipping.
      </p>
      <p class="font-weight-bold fa-14 py-3 pt-2">
        Buying Mrs. Fields Chocolate Chip Cookies Online
      </p>
      <p class="text-justify fa-13">
        When’s the last time you indulged in luscious Mrs. Fields chocolate chip
        cookies? No one does chocolate chip cookies like Mrs. Fields. From
        delectable white and semi-sweet chocolate chunk to irresistible triple
        chocolate cookies and fudge brownies, Mrs. Field’s gourmet assortments
        will surprise and delight any chocolate fan. Cookies make a wonderful
        corporate gift for clients and colleagues who appreciate fresh cookies
        almost as much as a pat on the back for a job well done. Mrs. Fields
        fudgy brownies are a snackable slice of chocolate heaven. Treat friends
        and family to gourmet gift baskets for birthdays, graduations or to say
        thank you.
      </p>
      <p class="text-justify fa-13 pt-2">
        The homey smell of cookies right out of the oven is almost as wonderful
        as biting into a luscious cookie. S.U-Bouquets makes it easy to send Mrs.
        Fields cookie baskets filled with fresh triple chocolate, semi-sweet
        chocolate chip, peanut butter, oatmeal walnut and other gourmet cookies
        to your loved ones or business associates throughout the U.S. Mrs.
        Fields cookie baskets make delectable gifts for just about everyone.
        Order fresh gourmet cookies or send cookie bouquets from S.U-Bouquets for
        delivery to someone special.
      </p>
    </div>
  </div>
</template>

<script>
import EmptyResults from "@/components/products/tabs-componets/empty-results";
import cardTemplate from "@/components/shared/CardTemplate";
import products from "@/components/products/controllers/products";

export default {
  name: "mrs-fields-cookies",
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

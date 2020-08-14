<template>
  <div class="wedding-flowers w-100 position-relative pt-2 pl-5 pr-5">
    <div class="header-content">
      <p class="h3">Retirement Gifts</p>
      <p class="text-justify fa-14">
        Send retirement gifts that honor a loved one’s lifetime career
        accomplishments. S.U-Bouquets gets your best wishes to retiring family,
        teachers, marines, nurses and more in any state in the U.S. Order today!
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
    <div class="row mx-0 w-100 button-collection justify-content-center">
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Office Desk Plant
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Flower For Teachers
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Administrative Assistant Day Flower
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Plant As Corporate Gift
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Professional Gift Basket Ideas
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Holiday Corporate Gift Ideas
      </a>
    </div>
    <div class="footer-content mt-4">
      <p class="font-weight-bold mb-0 pb-2 h4">
        Best Retirement Gifts for Your Favorite Retirees
      </p>
      <p class="text-justify fa-13">
        Send retirement gifts that convey your joy over a loved one’s exciting
        new life. Even when you can’t be there in person to attend the
        retirement event, your gift reaches across the miles to express your
        well wishes. You will find S.U-Bouquets offers a wide selection of unique
        and exciting gift options. Browse through snacks, organic fruit,
        personalized items, beautiful flowers and plants and more! Find plenty
        of other great retirement gift ideas and take advantage of our
        award-winning customer service to help you choose from all kinds of golf
        items, leather cases, wine tools and more.
      </p>
      <p class="fa-13">
        Looking for retirement gifts for women? We have lots of them! These
        days, many retirees look forward to enjoying their sports and leisure
        activities, and some even begin a second career. Retirement is no longer
        just a time of rest. Many women learn new hobbies, take on part-time
        work and invest time into fixing up their homes. The ideal present
        conveys your best wishes and respect for a long career, and is always
        appreciated. Find the best retirement gift ideas for women at
        S.U-Bouquets.
      </p>
      <p class="fa-13">
        Our extensive selection of retirement gift ideas for men includes
        delicious treats like luscious hand-dipped berries, snack gifts and lush
        plants. Whether you need a gift for a retirement party or simply someone
        for someone retiring quietly after a long career, S.U-Bouquets can help
        you get the job done.
      </p>
      <p class="fa-13">
        Nurses, firefighters, teachers and members of the military spend decades
        making the lives of others more comfortable, safe and productive.
        Retirement celebrations allow the rest of us to show our gratitude and
        reach out with a thoughtful gift. S.U-Bouquets gets firefighter retirement
        gifts to every state in the U.S. on the same day, next day, in two days,
        or on a scheduled date.
      </p>
    </div>
  </div>
</template>

<script>
import EmptyResults from "@/components/products/tabs-componets/empty-results";
import cardTemplate from "@/components/shared/CardTemplate";
import products from "@/components/products/controllers/products";

export default {
  name: "retirement-flowers",
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

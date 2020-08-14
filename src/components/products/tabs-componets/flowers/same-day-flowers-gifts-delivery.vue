<template>
  <div class="same-day-flowers-gifts-delivery w-100 position-relative pt-2 pl-5 pr-5"
  >
    <div class="header-content">
      <p class="pb-2 h2">Same Day Flower Delivery</p>
      <p class="text-justify fa-14 pb-4">
        We’ve all been there—you’re driving to work and realize that you forgot
        it’s your anniversary. Or maybe your mom’s birthday totally slipped your
        mind and now you’re scrambling to find a decent present to show her that
        you care. If that sounds familiar, don’t worry, that’s why S.U-Bouquets
        offers same-day delivery. By sending your loved ones a radiant and fresh
        bouquet of flowers that’s delivered right to their doorstep, you won’t
        have to worry about those pesky forgotten birthdays and anniversaries!
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
        Send Flowers
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Cheap Flowers
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Roses Flowers
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Send Flowers RW
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Flower And Chocolate Delivery
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Bouquets
      </a>
    </div>
    <div class="footer-content mt-4">
      <p class="font-weight-bold fa-14 py-4">
        Can flowers be delivered same day?
      </p>
      <p class="text-justify fa-13 pb-2">
        You bet they can. With S.U-Bouquets’ same-day delivery options on a
        variety of our most popular and beloved bouquets, an amazing same-day
        delivery is within reach. We deliver flowers every day of the week, so
        no matter when you need a gorgeous flower bouquet sent to your loved
        one’s door, we’ve got you covered.
      </p>
      <p class="text-justify fa-13">
        Because of our expert delivery and logistics system, we make same-day or
        overnight flowers easy so you don’t have to worry when you send flowers
        same-day.
      </p>
      <p class="font-weight-bold fa-14 py-4">
        How long will flower deliveries usually take?
      </p>
      <p class="text-justify fa-13 pb-2">
        Flower delivery with S.U-Bouquets can take anywhere from a couple of days
        to a couple of hours depending on the delivery option you choose! We
        offer scheduled delivery that you can plan ahead of time. If you know
        your best friend’s birthday is coming up and you want to deliver a
        vibrant bouquet to her doorstep, you can schedule the delivery for that
        day and then sit back and relax.
      </p>
      <p class="text-justify fa-13">
        However, we know that planning ahead isn’t always an option. If you find
        yourself in need of a last minute flower delivery, know that with
        S.U-Bouquets, it’s easy. Simply select one of the many gorgeous blooms we
        offer for same-day service. Breathe a sigh of relief knowing that the
        thank you flowers, birthday bouquet, or just-because treat will be sent
        to your recipient’s doorstep fresh, gorgeous, and like you’d planned it
        weeks in advance! (We won’t tell if you don’t!)
      </p>
      <p class="font-weight-bold fa-14 py-4">
        When do I need to place my order by for same-day flower delivery?
      </p>
      <p class="text-justify fa-13 pb-2">
        If you need same-day flowers on a weekday, be sure to place your order
        by 2pm. On Saturdays and Sundays, you’ll have to choose your favorite
        flower option and place your order by 1pm.
      </p>
      <p class="text-justify fa-13 mb-5">
        As you can see, same-day floral delivery with S.U-Bouquets is easy. Pick
        your favorite blooms and send flowers today!
      </p>
    </div>
  </div>
</template>

<script>
import EmptyResults from "@/components/products/tabs-componets/empty-results";
import cardTemplate from "@/components/shared/CardTemplate";
import products from "@/components/products/controllers/products";

export default {
  name: "same-day-flowers-gifts-delivery",
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

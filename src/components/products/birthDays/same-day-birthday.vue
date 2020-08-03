<template>
  <div class="same-day-birthday w-100 position-relative pt-2 pl-5 pr-5">
    <div class="header-content">
      <p class="font-weight-bold fa-14">Same Day Birthday Delivery</p>
      <p class="text-justify fa-14">
        Make their birthday a truly special one with beautiful flowers and gifts
        for same day delivery from ProFlowers. Whether they love roses,
        sunflowers or tulips, we have the most amazing selection of all their
        favorites.
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
    <div class="row mx-0 w-100 button-collection justify-content-center">
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Happy Birthday Flowers
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Happy Birthday Gift
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Online Happy Birthday Gift
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Birthday delivery For Her
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Birthday Roses
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Flower For Mothers Birthday
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Birthday Plant
      </a>
    </div>
    <div class="footer-content mt-4">
      <p class="font-weight-bold fa-14 pb-2">Same-Day Birthday Flowers</p>
      <p class="text-justify fa-13">
        When you’re looking for the perfect birthday gift for someone special,
        and need it in a hurry, look no further than ProFlowers’ for fresh and
        fabulous same-day birthday flower and gift delivery. Shop our collection
        of birthday flowers to find a bouquet that will fit everyone’s personal
        style. Whether it’s an elegant arrangement of fragrant lilies or a fun
        and colorful assortment of Gerbera daisies, ProFlowers offers all of the
        most-requested blooms and bouquet designs. Whatever flowers your loved
        one is dreaming of, you’ll find the perfect bouquet that can be
        delivered same-day at their peak of freshness and ready to enjoy.
      </p>
      <p class="text-justify fa-13 pt-2">
        We’ve paired all the convenience of online shopping with the exceptional
        quality of our talented network of professional local florists. Even if
        your loved one lives across the country, you can still show how much you
        care with a gorgeous bouquet of his or her favorite flowers delivered as
        soon as today. All of our same-day flower gifts are hand-arranged by a
        florist working in the recipient’s neighborhood and are hand-delivered
        directly to your loved one, for guaranteed freshness and beauty.
      </p>
      <p class="text-justify fa-13">
        Short on time but need a great birthday gift? No problem! ProFlowers
        carries last-minute flowers for all your special moments and
        celebrations, including birthdays. Our convenient delivery options
        ensure your gift arrives just in time to make his or her special day
        even better. Choose from same day, next day, or even Sunday delivery.
        And when you need a little extra gifting inspiration, our customer
        service specialists are always ready to help. ProFlowers makes it fast
        and easy to find and send the most amazing same-day birthday flowers to
        friends and family nationwide.
      </p>
    </div>
  </div>
</template>

<script>
import cardTemplate from "../../shared/CardTemplate";
export default {
  name: "same-day-birthday",
  components: { cardTemplate },
  data() {
    return {
      products: [
        {
          id: "2ghfg-12324-356tuiyuds-dfghjy-#iu78i",
          images_urls: ["/img/2.jpg", "/img/20.jpg", "/img/16.jpg"],
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo velit blanditiis voluptate doloremque nihil fuga.",
          name: "Wonder wild",
          price: "600",
          currency: "FRW",
          code: "#NBG_@#",
          offerPrice: "500$"
        },
        {
          id: "2ghfg-12324-356tuiyuds-dfghjy-iu744354e",
          images_urls: ["/img/3.jpg", "/img/15.jpg", "/img/21.jpg"],
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo velit blanditiis voluptate doloremque nihil fuga.",
          name: "Valentine 's beauty",
          price: "400",
          currency: "FRW",
          code: "#LOUI34",
          offerPrice: "350$"
        },
        {
          id: "2ghfg-12324-356tuiyuds-dfghj-ghfgu78i",
          images_urls: ["/img/10.jpg", "/img/4.jpg", "/img/17.jpg"],
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo velit blanditiis voluptate doloremque nihil fuga.",
          name: "The grail of love",
          price: "150",
          currency: "FRW",
          code: "#KH-45",
          offerPrice: "100$"
        },
        {
          id: "2ghfg-12324-356tuiyuds-dfghjyiu7-@klj8i",
          images_urls: ["/img/14.jpg", "/img/1.jpg", "/img/13.jpg"],
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo velit blanditiis voluptate doloremque nihil fuga.",
          name: "Floeur de lotus",
          price: "100",
          currency: "FRW",
          code: "DE#-56RT",
          offerPrice: "80$"
        },
        {
          id: "2ghfg-12324-356tuiyuds-dfghjyiu7-@klj8i",
          images_urls: ["/img/1.jpg", "/img/13.jpg", "/img/14.jpg"],
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo velit blanditiis voluptate doloremque nihil fuga.",
          name: "Floeur de lotus",
          price: "100",
          currency: "FRW",
          code: "DE#-56RT",
          offerPrice: "80$"
        },
        {
          id: "2ghfg-12324-356tuiyuds-dfghjyiu7-@klj8i",
          images_urls: ["/img/13.jpg", "/img/1.jpg", "/img/14.jpg"],
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo velit blanditiis voluptate doloremque nihil fuga.",
          name: "Floeur de lotus",
          price: "100",
          currency: "FRW",
          code: "DE#-56RT",
          offerPrice: "80$"
        },
        {
          id: "2ghfg-12324-356tuiyuds-dfghj-ghfgu78i",
          images_urls: ["/img/10.jpg", "/img/4.jpg", "/img/17.jpg"],
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo velit blanditiis voluptate doloremque nihil fuga.",
          name: "The grail of love",
          price: "150",
          currency: "FRW",
          code: "#KH-45",
          offerPrice: "100$"
        },
        {
          id: "2ghfg-12324-356tuiyuds-dfghjyiu7-@klj8i",
          images_urls: ["/img/14.jpg", "/img/1.jpg", "/img/13.jpg"],
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo velit blanditiis voluptate doloremque nihil fuga.",
          name: "Floeur de lotus",
          price: "100",
          currency: "FRW",
          code: "DE#-56RT",
          offerPrice: "80$"
        },
        {
          id: "2ghfg-12324-356tuiyuds-dfghjbnv765-yiutyuu78i",
          images_urls: ["/img/3.jpg", "/img/12.jpg", "/img/8.jpg"],
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo velit blanditiis voluptate doloremque nihil fuga.",
          name: "Spray of the sun",
          price: "300",
          currency: "FRW",
          code: "#POQU-34R",
          offerPrice: "200$"
        },
        {
          id: "2ghfg-12324-356tuiyuds-dfghjyiu78i-uiyui",
          images_urls: ["/img/1.jpg", "/img/10.jpg", "/img/11.jpg"],
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo velit blanditiis voluptate doloremque nihil fuga.",
          name: "Stylish flowers",
          price: "50",
          currency: "FRW",
          code: "#SF_43",
          offerPrice: "40$"
        },
        {
          id: "2ghfg-12324-356tuiyuds-dfg455-hghjyiu78i",
          images_urls: ["/img/7.jpg", "/img/19.jpg", "/img/1.jpg"],
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo velit blanditiis voluptate doloremque nihil fuga.",
          name: "New reality",
          price: "2050",
          currency: "FRW",
          code: "#@SAD3",
          offerPrice: "10$"
        },
        {
          id: "2ghfg-12324-356tuiyuds-dfg455-hghjyiu78i",
          images_urls: ["/img/19.jpg", "/img/7.jpg", "/img/1.jpg"],
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo velit blanditiis voluptate doloremque nihil fuga.",
          name: "New reality",
          price: "2050",
          currency: "FRW",
          code: "#@SAD3",
          offerPrice: "10$"
        },
        {
          id: "2ghfg-12324-356tuiyuds-dfghj35r@-yiu78i",
          images_urls: ["/img/6.jpg", "/img/20.jpg", "/img/16.jpg"],
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo velit blanditiis voluptate doloremque nihil fuga.",
          name: "Wind of love",
          price: "900",
          currency: "FRW",
          code: "#GDS-21",
          offerPrice: "60$"
        },
        {
          id: "2ghfg-12324-356tuiyuds-dfghj35r@-yiu78i",
          images_urls: ["/img/20.jpg", "/img/6.jpg", "/img/16.jpg"],
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo velit blanditiis voluptate doloremque nihil fuga.",
          name: "Wind of love",
          price: "900",
          currency: "FRW",
          code: "#GDS-21",
          offerPrice: "60$"
        }
      ]
    };
  },
  mounted() {
    this.$emit("itemsLength", this.products.length);
  }
};
</script>

<style scoped lang="scss">
.same-day-birthday {
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

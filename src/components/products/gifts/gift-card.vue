<template>
  <div class="gift-cards w-100 h-100 position-relative">
    <div class="gift-lists" v-for="(gift, index) in gifts" :key="index">
      <div
        class="row mx-0 w-100 justify-content-around border rounded p-2 gift-list my-2 cursor-pointer"
      >
        <div class="select-gift-box my-auto">
          <b-form-checkbox type="checkbox" />
        </div>
        <span
          class="gift-profile d-block"
          :style="{
            backgroundImage: 'url(' + gift.images_urls + ')'
          }"
        ></span>
        <div class="gift-desc pt-2">
          <p class=" fa-16 text-black-50 mb-0 pb-2">
            {{ gift.name }}
          </p>
          <p class="fa-14 mb-0 font-weight-bold">
            {{ gift.price + gift.currency }}
          </p>
        </div>
        <p
          class="gift-detail-button text-info cursor-pointer ml-auto font-weight-bold mt-auto mb-0"
          @click="$emit('clicked', gift)"
        >
          Details
        </p>
      </div>
    </div>
    <div class="gift-options mt-4 mb-3">
      <a
        class="bg-button text-white fa-14  text-center font-weight-bold rounded-0 col-md-12 btn py-2 px-4"
        href="javascript:;;"
        @click="checkout"
      >
        CHECKOUT
      </a>
      <div
        class="item-option-container row w-100 mx-0 justify-content-between mt-4"
      >
        <div class="d-block ">
          <p
            class="cursor-pointer fa-13 fa text-info font-weight-bold"
            @click="$router.push({ name: 'Home' }), close()"
          >
            Continue Shopping
          </p>
          <p class="fa-12 small text-muted">Cart ID: 1355197982</p>
        </div>
        <p
          class="mb-0 cursor-pointer text-info font-weight-bold fa fa-13"
          @click="$router.push({ name: 'Cart' }), close()"
        >
          Edit Cart
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "gift-card",
  data() {
    return {
      gifts: [
        {
          id: "2ghfg-12324-356tuiyuds-dfghjyiu7-@aarsrd",
          images_urls: "/img/icons/GREETINGCARD.webp",
          description:
            "Add a full-size greeting card to your thoughtful gift and we will select a card appropriate for your special occasion.",
          name: "Greeting Card",
          price: "100",
          currency: "FRW",
          code: "DE#-56RT",
          option: "Simple & sweet"
        },
        {
          id: "2ghfg-12324-356tuiyuds-ssssdewe-@klj8i",
          images_urls: "/img/icons/BKJ.webp",
          description:
            "Add a bear to your bouquet and we will select a cute & cuddly bear that will send the perfect sentiment. Size and color may vary.",
          name: "Adorable Plush Bear",
          price: "100",
          currency: "FRW",
          code: "DE#-56RT"
        },
        {
          id: "2ghfg-12324-3324-dfghjyiu7-@klj8i",
          images_urls: "/img/icons/A.webp",
          description:
            "Add a Balloon - A mylar balloon creates a beautiful accompaniment to our bouquets and gifts. We will select a balloon appropriate for your special occasion.",
          name: "Festive Mylar Balloon",
          price: "100",
          currency: "FRW",
          code: "DE#-56RT"
        },
        {
          id: "2ghfg-12324-dter23-dfghjyiu7-@klj8i",
          images_urls: "/img/icons/CKJ.webp",
          description:
            "Add a Box of Chocolates to your bouquet and we will include a box of delicious chocolates to send sweet wishes their way. Size and flavor may vary. (May include nuts).",
          name: "Delicious Chocolate",
          price: "100",
          currency: "FRW",
          code: "DE#-56RT"
        }
      ]
    };
  },
  methods: {
    close() {
      this.$store.dispatch("setView");
    },
    checkout() {
      this.close();
      this.$router.push({ name: "Purchase", params: { params: "delivery" } });
    }
  }
};
</script>

<style scoped lang="scss">
.gift-cards {
  .gift-profile {
    width: 70px;
    height: 70px;
    background-color: black;
    background-size: cover;
  }
  .gift-detail-button {
    &:hover {
      border-bottom: 1px solid rgb(23, 162, 184);
    }
  }
}
@media screen and ( max-width: 627px) {
  .gift-cards {
    .gift-profile {
      width: 45px !important;
      height:45px !important;
    }
    p{
      font-size:75% !important;
    }
  }
}
</style>

<template>
  <div class="carts-list-view w-100 position-relative">
    <div class="carts-container" v-for="(cart, index) in carts" :key="index">
      <div class="cart_id w-100 row mx-0 justify-content-between">
        <p class="font-weight-bold fa-13">
          ITEM <span>{{ index + 1 }}</span>
        </p>
        <p class="text-black-50 fa-12" v-if="index === 0">Cart ID: 280320922</p>
      </div>
      <div class="d-flex cart-list w-100 border-top mb-3">
        <div class="cart-profile-container pt-3">
          <span
            class="cart-image d-block mb-2"
            :style="{
              backgroundImage: 'url(' + cart.images_urls[2] + ')'
            }"
          ></span>
          <p class="mb-0 text-muted fa-12">{{ cart.code }}</p>
        </div>
        <div class="cart-detail ml-4 pt-3 w-100">
          <div
            class="delivery-details pb-2 border-bottom row mx-0 w-100 justify-content-between"
            :class="{ 'border-bottom-0 pb-0': borderBottom == false }"
          >
            <div class="d-block">
              <p class="fa-13 mb-0 pb-2">{{ cart.name }}</p>
              <span
                class="text-info cursor-pointer mr-2 fa-13"
                @click="
                  $router.push({
                    name: 'Profile',
                    params: { id: cart.id },
                    query: { editId: '280320922' }
                  }),
                    $store.dispatch('setResources', ['product', cart])
                "
                >Edit</span
              >
              <span class="text-info cursor-pointer fa-13">Remove</span>
            </div>
            <p class="font-weight-bold fa-13">
              {{ cart.price + cart.currency }}
            </p>
          </div>
          <div class="cart-delivery-date pt-3">
            <p class="mb-0 fa-13">
              Delivery:<span class="text-info cursor-pointer"> Edit</span>
            </p>
            <p class="mb-0 fa-13">
              Thu, Aug 6 to 12345
            </p>
            <p class="mb-0 fa-13">
              Florist Crafted & Delivered
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "list-view",
  props: ["borderBottom"],
  data() {
    return {
      carts: [
        {
          id: "2ghfg-12324-356tuiyuds-dfghj-ghfgu78i",
          images_urls: ["/img/10.jpg", "/img/4.jpg", "/img/17.jpg"],
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo velit blanditiis.",
          name: "The grail of love",
          price: "150",
          currency: "FRW",
          code: "#KH-45",
          option: "Beauty Louis",
          offerPrice: "100$",
          quality: "GOOD"
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
          option: "Simple & sweet",
          quality: "BEST",
          offerPrice: "80$"
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
.carts-list-view {
  .cart-image {
    width: 90px;
    height: 90px;
    background-color: black;
    background-size: cover;
  }
}
</style>

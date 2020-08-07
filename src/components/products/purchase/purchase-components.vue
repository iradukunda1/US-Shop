<template>
  <div class="purchase-components">
    <delivery v-if="this.$route.params.params == 'delivery'"/>
    <payment v-if="this.$route.params.params == 'payment'"/>
    <review  v-if="this.$route.params.params == 'review'"/>
  </div>
</template>

<script>
import delivery from "@/components/products/purchase/delivery";
import Payment from "@/components/products/purchase/payment";
import Review from "@/components/products/purchase/review";
export default {
  name: "purchase-components",
  components: {Review, Payment, delivery }
};
</script>

<style></style>

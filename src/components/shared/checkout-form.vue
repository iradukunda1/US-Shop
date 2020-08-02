<template>
    <div class="checkout-form w-100 h-100 position-relative">
        <div class="checkout-header row mx-4 border-bottom pt-5 pb-4">
            <div class="added-success">
                <p class="d-flex mb-0 pb-2"><i class="fas fa-check-circle fa-15 pt-2 pr-2 text-success"></i><span class="fa-15">Added to Cart</span></p>
                <p class="fa-12 pl-2">Best Day™ Bouquet</p>
            </div>
            <div class="added-details ml-auto text-md-right">
                <p class="item-price font-weight-bold mb-0 fa-13">$65.00</p>
                <p class="text-muted fa-12 mb-0">item subtotal</p>
                <p class="text-muted fa-12 mb-0 pb-1">excludes delivery and taxes</p>
                <p class="d-flex fa-14 mb-0 "> Or 4 payments of
                    <span class="font-weight-bold px-2">$13.20</span> by after
                    <span class="font-weight-bold pl-1"
                    >pay <i class="fa text-info fa-chain-broken"></i
                    ></span></p>
            </div>
        </div>
        <div class="checkout-content mt-2 mx-4">
            <p class="fa-15 pt-2cd Documents">Make Your Gift Extra Special</p>
            <gift-cards/>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
import giftCards from "./gift-card"
export default {
  name: "checkout-form",
    components:{giftCards}
};
</script>

<style scoped></style>

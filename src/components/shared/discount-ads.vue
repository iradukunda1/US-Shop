<template>
  <div class="discount-ads w-100 bg-default border-bottom">
    <div class="justify-content-center d-flex p-3">
      <p class="text-white mb-0">
        Get 20% Off – our biggest summer sale, happening right now
        <a href="#" class="text-white font-weight-bold"> SHOP THE SALE</a>
        <i class="fa fa-angle-right"></i>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "discount-ads"
};
</script>

<style scoped lang="scss">
@media screen and (max-width: 768px) {
  .discount-ads {
    div {
      font-size: 70%;
    }
  }
}
@media (min-width: 375px) and (max-width: 425px) {
  .discount-ads {
    div {
      font-size: 55%;
    }
  }
}
@media screen and(max-width: 375px) {
  .discount-ads {
    div {
      font-size: 55%;
    }
  }
}
@media screen and( max-width: 320px) {
  .discount-ads {
    div {
      font-size: 45%;
    }
  }
}
</style>

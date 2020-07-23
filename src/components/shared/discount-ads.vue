<template>
  <div class="discount-ads w-100 h-100 bg-default border-bottom">
    <div class="justify-content-center d-flex p-3">
      <p class="text-white mb-0">
        Get 20% Off – our biggest summer sale, happening right now
        <a href="#" class="text-white font-weight-bold"> SHOP THE SALE</a> <i class="fa fa-angle-right"></i>
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
   .discount-ads{
    a{
      &:hover{
        color: blue;
      }
    }
   }
</style>

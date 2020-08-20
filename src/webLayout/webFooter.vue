<template>
  <footer class="section footer-classic text-black  bg-grey w-100">
    <div class="footer-content border-top border-bottom px-5 pt-3 pb-5 d-flex">
      <div class="row w-100 mx-0" v-if="$route.name !== 'Purchase'">
        <div class="footer-logo d-block mb-3 col-md-5">
          <div class="mb-0">
            <span class="c-default mr-2 h3">S.U</span>
            <span class="text-info h4 mt-1">BOUQUETS</span>
          </div>
          <span class="small ml-5">an FTD company</span>
          <div class="row mt-5 pt-4">
            <label class="bold">SUBSCRIBE FOR EMAIL OFFERS</label>
            <input
              type="email"
              class="form-control w-50 mr-3 rounded-0  h-50px"
              placeholder="example@gmail.com"
            />
            <button class="btn text-white bg-button rounded-0 h-50px">
              SIGN UP
            </button>
          </div>
        </div>
        <div class="col-md-5 mb-3">
          <h5>Contacts</h5>
          <dl class="contact-list">
            <dt>Address:</dt>
            <dd>Rwanda, Kigali</dd>
          </dl>
          <dl class="contact-list">
            <dt>email:</dt>
            <dd>
              <a href="mailto:#" class="text-dark">SUBouquet@gmail.com</a>
            </dd>
          </dl>
          <dl class="contact-list">
            <dt>phones:</dt>
            <dd>
              <a href="tel:#">+250789871587 </a> <span> or </span>
              <a href="tel:#">+250785384373</a>
            </dd>
          </dl>
        </div>
        <div class="col-md-2 mb-3 footer-links">
          <h5>Links</h5>
          <ul>
            <li>
              <router-link :to="{ name: 'Home' }" class="text-dark"
                >Home</router-link
              >
            </li>
            <li>
              <router-link
                :to="{
                  name: 'Shop the SU-Flower',
                  params: { params: 'all-flowers' }
                }"
                class="text-dark"
                >Flowers</router-link
              >
            </li>
            <li>
              <router-link :to="{ name: 'About' }" class="text-dark"
                >About</router-link
              >
            </li>
            <li>
              <router-link to="#" class="text-dark">Contacts</router-link>
            </li>
            <li class="pt-3">
              <h6>CONNECT</h6>
              <div class="col">
                <span class="cursor-pointer"
                  ><img src="/img/icons/facebook .png" alt="fIcon"
                /></span>
                <span class="cursor-pointer mx-2"
                  ><img src="/img/icons/instagram.png" alt="iIcon"
                /></span>
                <span class="cursor-pointer mr-2"
                  ><img src="/img/icons/twitter .png" alt="tIcon"
                /></span>
                <span class="cursor-pointer"
                  ><img src="/img/icons/youtube.png" alt="yIcon"
                /></span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div
        class="purchase-footer mt-5 justify-content-center row w-100 mx-0"
        v-if="$route.name === 'Purchase'"
      >
        <div class="footer-logo d-block pt-3 col-md-3">
          <div class="mb-0 mt-2">
            <span class="c-default mr-2 h3">S.U</span>
            <span class="text-info h4 mt-1">BOUQUETS</span>
          </div>
          <span class="small ml-5">an FTD company</span>
        </div>
        <div class="footer-image-container col-md-8">
          <!--          <img-->
          <!--            class="footer-image d-block mb-2 w-100"-->
          <!--            src="/img/footer_image.png"-->
          <!--            alt="companies-image"-->
          <!--          />-->
        </div>
      </div>
    </div>
    <div
      class="row no-gutters terms-policy px-2 py-3 justify-content-center small mb-3"
    >
      <p class="pr-1">Terms & Conditions</p>
      |
      <p class="mx-3">Privacy Policy</p>
      |
      <div class="rights mb-0 pl-1">
        <span>© </span><span class="copyright-year">2020</span><span> </span
        ><span>S.U-Bouquet</span><span>. </span
        ><span>All Rights Reserved.</span>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: "web-footer"
};
</script>
<style lang="scss" scoped>
@import "../assets/style/webFooter";
@media screen and (max-width: 768px) {
}
@media (min-width: 375px) and (max-width: 425px) {
}
@media screen and( max-width: 320px) {
}
</style>

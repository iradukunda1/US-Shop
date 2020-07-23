<template>
  <footer class="section footer-classic text-black  bg-gray w-100">
    <div class="footer-content border-top border-bottom px-5 pt-3 pb-5 d-flex">
      <div class="row w-100">
        <div class="footer-logo d-block col-md-5">
          <div class="mb-0">
            <span class="c-default mr-2 h3">S.U</span>
            <span class="text-info h4 mt-1">BOUQUETS</span>
          </div>
          <span class="small ml-5">an FTD company</span>
          <div class="row mt-5">
            <label class="bold">SUBSCRIBE FOR EMAIL OFFERS</label>
            <input
              type="email"
              class="form-control w-50 mr-3"
              placeholder="example@gmail.com"
            />
            <button class="btn text-white bg-button">
              SIGN UP
            </button>
          </div>
        </div>
        <div class="col-md-5">
          <h5>Contacts</h5>
          <dl class="contact-list">
            <dt>Address:</dt>
            <dd>Rwanda, Kigali</dd>
          </dl>
          <dl class="contact-list">
            <dt>email:</dt>
            <dd><a href="mailto:#" class="text-dark">SUBouquet@gmail.com</a></dd>
          </dl>
          <dl class="contact-list">
            <dt>phones:</dt>
            <dd>
              <a href="tel:#">0784141587 </a> <span> or </span>
              <a href="tel:#"> 078537573</a>
            </dd>
          </dl>
        </div>
        <div class="col-md-2 footer-links">
          <h5>Links</h5>
          <ul>
            <li>
              <router-link to="#" class="text-dark">Home</router-link>
            </li>
            <li>
              <router-link to="#" class="text-dark">Flowers</router-link>
            </li>
            <li>
              <router-link to="#" class="text-dark">About</router-link>
            </li>
            <li>
              <router-link to="#" class="text-dark">Contacts</router-link>
            </li>
            <li class="pt-3">
              <h6>CONNECT</h6>
              <div class="col">
                <span class="cursor-pointer"><img src="/img/icons/facebook .png" alt="fIcon"/></span>
                <span class="cursor-pointer mx-2"><img src="/img/icons/instagram.png" alt="iIcon"/></span>
                <span class="cursor-pointer mr-2"><img src="/img/icons/twitter .png" alt="tIcon"/></span>
                <span class="cursor-pointer"><img src="/img/icons/youtube.png" alt="yIcon"/></span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="row no-gutters terms-policy px-2 py-3 justify-content-center small mb-3">
      <p class="pr-1">Terms & Conditions</p>  |
      <p class="mx-3">Privacy Policy</p> |   
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
<style lang="scss">
@import "../assets/style/webFooter";
</style>

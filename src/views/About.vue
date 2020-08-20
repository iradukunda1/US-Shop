<template>
  <div class="aboutus-section bg-white">
    <div class="container">
      <div class="row">
        <div class="col-md-3 col-sm-6 col-xs-12">
          <div class="aboutus">
            <h2 class="aboutus-title">About Us</h2>
            <p class="fa-14">
              S.U-Flower is a leading online gift shop selling handmade floral
              arrangement for all events which includes anniversaries, weddings,
              funeral wreaths among many others by our very talented local
              florists.
            </p>
            <p v-if="showMoreAbout" class="fa-14">
              We get our flowers freshly from the farm which makes our bouquets
              and arrangements always look beautiful as they bloom and can last
              up-to 2 weeks on the vases. Our florists are very talented in
              floral decorations and designs and the end result is perfect which
              always put a smile on our client’s faces.
            </p>
            <a
              class="aboutus-more"
              href="javascript:;;"
              @click="showMoreAbout = !showMoreAbout"
            >
              <span v-if="!showMoreAbout">read more</span
              ><span v-if="showMoreAbout">read less</span></a
            >
          </div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12 my-auto">
          <div class="aboutus-banner">
            <img src="/img/logos/black-logo.png" class="w-100" />
          </div>
        </div>
        <div class="col-md-5 col-sm-6 col-xs-12">
          <div class="feature ">
            <div class="feature-box">
              <div class="clearfix">
                <div class="iconset">
                  <span class="fas fa-hand-rock icon"></span>
                </div>
                <div class="feature-content pt-3">
                  <h3 class="pb-3 fa">Our Mission</h3>
                  <p>
                    To commit ourselves to our Quality
                    <span class="font-weight-bold fa-13">
                      Product + Excellent Service = Profitability </span
                    >philosophy by becoming the Personal Concierge for all
                    customers, no matter how big or small.
                  </p>
                </div>
              </div>
            </div>
            <div class="feature-box">
              <div class="clearfix">
                <div class="iconset">
                  <span class="fas fa-eye icon"></span>
                </div>
                <div class="feature-content pt-3">
                  <h3 class="py-3 fa">Our Vision</h3>
                  <p>
                    To be recognized as the leading flowers & gifts service
                    provider in the region.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-8 col-sm-6 col-xs-12 pt-5 ">
          <h2 class="font-italic c-default my-3">Why Shop With Us</h2>
          <ul>
            <li class="fa-14 pb-2">
              No Hidden Charges.
            </li>
            <li class="fa-14 pb-2">
              Easy and secure ordering - Choice of Google check-out or Paypal.
            </li>
            <li class="fa-14 pb-2">
              Value-added products (cards, cakes, chocolates, ice cream, wines
              and champagnes)
            </li>
            <li class="fa-14 pb-2">Extensive gift line</li>
            <li class="fa-14 pb-2">24-hour delivery</li>
            <li class="fa-14 pb-2">3-hour express delivery</li>
            <li class="fa-14 pb-2">
              Notification by email and SMS upon delivery
            </li>
            <li class="fa-14 pb-2">Value-packed bouquets</li>
            <li class="fa-14 pb-2">
              Customized bouquets, floral arrangements and hampers
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "about",
  data() {
    return {
      showMoreAbout: false
    };
  }
};
</script>
<style scoped>
.aboutus-section {
  padding: 90px 0;
}
.aboutus-title {
  font-size: 30px;
  letter-spacing: 0;
  line-height: 32px;
  margin: 0 0 39px;
  padding: 0 0 11px;
  position: relative;
  text-transform: uppercase;
  color: #000;
}
.aboutus-title::after {
  background: #fdb801 none repeat scroll 0 0;
  bottom: 0;
  content: "";
  height: 2px;
  left: 0;
  position: absolute;
  width: 54px;
}
.aboutus-text {
  color: #606060;
  font-size: 13px;
  line-height: 22px;
  margin: 0 0 35px;
}

a:hover,
a:active {
  color: #ffb901;
  text-decoration: none;
  outline: 0;
}
.aboutus-more {
  border: 1px solid #fdb801;
  border-radius: 25px;
  color: #fdb801;
  display: inline-block;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0;
  padding: 7px 20px;
  text-transform: uppercase;
}
.feature .feature-box .iconset {
  background: #fff none repeat scroll 0 0;
  float: left;
  position: relative;
  width: 18%;
}
.feature .feature-box .iconset::after {
  background: #fdb801 none repeat scroll 0 0;
  content: "";
  height: 150%;
  left: 43%;
  position: absolute;
  top: 100%;
  width: 1px;
}

.feature .feature-box .feature-content h4 {
  color: #0f0f0f;
  font-size: 18px;
  letter-spacing: 0;
  line-height: 22px;
  margin: 0 0 5px;
}

.feature .feature-box .feature-content {
  float: left;
  padding-left: 28px;
  width: 78%;
}
.feature .feature-box .feature-content h4 {
  color: #0f0f0f;
  font-size: 18px;
  letter-spacing: 0;
  line-height: 22px;
  margin: 0 0 5px;
}
.feature .feature-box .feature-content p {
  color: #606060;
  font-size: 13px;
  line-height: 22px;
}
.icon {
  color: #f4b841;
  padding: 0px;
  font-size: 40px;
  border: 1px solid #fdb801;
  border-radius: 100px;
  color: #fdb801;
  font-size: 28px;
  height: 70px;
  line-height: 70px;
  text-align: center;
  width: 70px;
}
</style>

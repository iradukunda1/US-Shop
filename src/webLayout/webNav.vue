<template>
  <main
    class="main web-nav-layout position-relative border-bottom d-block h-100 w-100"
  >
    <div class="navbar-header row mb-0 px-3 mx-0 w-100">
      <div
        class="header-log d-block mt-3 cursor-pointer"
        @click="$router.push({ name: 'Home' })"
        @mouseover="
          (showHelp = false),
            (showSympathy = false),
            (showFlower = false),
            (showBirthDay = false),
            (showOccasion = false),
            (showGift = false)
        "
      >
        <div class="mb-0 su-header-logo">
          <span class="c-default mr-2">S.U</span>
          <span class="text-info mt-1">BOUQUETS</span>
        </div>
        <p class="small text-center mb-0 ftd-company">an FTD company</p>
      </div>
      <div
        class="header-content row mx-0 mt-3 justify-content-around px-4"
        v-if="$route.name !== 'Purchase'"
      >
        <div class="nav-item BIRTH-DAY">
          <p
            class="py-3 cursor-pointer mb-0"
            @mouseover="
              (showBirthDay = !showBirthDay),
                (showSympathy = false),
                (showFlower = false),
                (showOccasion = false),
                (showGift = false),
                (showHelp = false)
            "
            :class="{ 'bottom-line': showBirthDay }"
          >
            BIRTH-DAY
          </p>
        </div>
        <div class="nav-item">
          <p
            class="py-3 cursor-pointer mb-0"
            :class="{ 'bottom-line': showSympathy }"
            @mouseover="
              (showSympathy = !showSympathy),
                (showFlower = false),
                (showBirthDay = false),
                (showOccasion = false),
                (showGift = false),
                (showHelp = false)
            "
          >
            SYMPATHY
          </p>
        </div>
        <div class="nav-item">
          <p
            class="py-3 cursor-pointer mb-0"
            :class="{ 'bottom-line': showOccasion }"
            @mouseover="
              (showOccasion = !showOccasion),
                (showSympathy = false),
                (showFlower = false),
                (showBirthDay = false),
                (showGift = false),
                (showHelp = false)
            "
          >
            ALL OCCASION
          </p>
        </div>
        <div class="nav-item">
          <p
            class="py-3 cursor-pointer mb-0"
            :class="{ 'bottom-line': showFlower }"
            @mouseover="
              (showFlower = !showFlower),
                (showSympathy = false),
                (showBirthDay = false),
                (showOccasion = false),
                (showGift = false),
                (showHelp = false)
            "
          >
            FLOWER
          </p>
        </div>
        <div class="nav-item">
          <p
            class="py-3 cursor-pointer mb-0"
            :class="{ 'bottom-line': showGift }"
            @mouseover="
              (showGift = !showGift),
                (showSympathy = false),
                (showFlower = false),
                (showBirthDay = false),
                (showOccasion = false),
                (showHelp = false)
            "
          >
            PLANTS & GIFTS
          </p>
        </div>
      </div>
      <div
        class="purchase-navbar row mx-0 mt-4 pt-2 justify-content-between px-4"
        v-if="$route.name == 'Purchase'"
      >
        <div class="back-button-container fa-12 font-weight-bold">
          <p
            class="mb-0 mt-3 cursor-pointer"
            @click="$router.push({ name: 'Cart' })"
          >
            <i class="fa fa-angle-left"></i> BACK TO CART
          </p>
        </div>
        <div class="row mx-0 fa-14 purchase-tab mt-1 mb-1">
          <div class="nav-item">
            <p
              class="py-3 mb-0"
              :class="{
                'bottom-line': this.$route.params.params == 'delivery'
              }"
            >
              <i
                class="fa-check mr-2 fa"
                v-if="
                  $route.params.params == 'payment' ||
                    $route.params.params == 'review'
                "
              ></i>
              DELIVERY
            </p>
          </div>
          <div class="nav-item mx-5">
            <p
              class="py-3 mb-0"
              :class="{ 'bottom-line': this.$route.params.params == 'payment' }"
            >
              <i
                class="fa-check mr-2 fa"
                v-if="$route.params.params == 'review'"
              ></i>
              PAYMENT
            </p>
          </div>
          <div class="nav-item">
            <p
              class="py-3 mb-0"
              :class="{ 'bottom-line': this.$route.params.params == 'review' }"
            >
              REVIEW
            </p>
          </div>
        </div>
        <div class="secure-tab">
          <p class="mb-0 mt-3">
            <span class="fa-12 pr-1">Secure Checkout</span>
            <i class="fas fa-lock"></i>
          </p>
        </div>
      </div>
      <div
        class="header-options px-4 mt-3"
        v-if="$route.name !== 'Purchase'"
        @mouseover="
          (showSympathy = false),
            (showFlower = false),
            (showBirthDay = false),
            (showOccasion = false),
            (showGift = false),
            (showHelp = showHelp == true ? true : false)
        "
      >
        <ul class="row w-100 justify-content-between mx-0 mb-0 pt-1 px-0">
          <li
            class="web-navbar-help d-block mr-0"
            @mouseover="
              (showHelp = !showHelp),
                (showSympathy = false),
                (showFlower = false),
                (showBirthDay = false),
                (showOccasion = false),
                (showGift = false)
            "
          >
            <i class="fas px-1 fa-question-circle fa-15"></i>&nbsp;
            <p class="mb-0 fa-12" :class="{ 'border-bottom': showHelp }">
              HELP
            </p>
          </li>
          <li
            class="web-navbar-search d-block mr-0"
            @click="
              $store.dispatch('setResources', [
                'trigger',
                { triggerSearchFormModal: true }
              ]),
                (showHelp = false),
                (showSympathy = false),
                (showFlower = false),
                (showBirthDay = false),
                (showOccasion = false),
                (showGift = false)
            "
          >
            <i class="fas fa-search fa-15 mx-2"></i>&nbsp;
            <p class="mb-0 fa-12">SEARCH</p>
          </li>
          <li class="web-navbar-cart d-block mr-0" id="popover-container">
            <div
              class="mb-0 cart-container"
              id="cart-popover"
              @click="$router.push('/cart')"
            >
              <i class="fas fa-cart-plus fa-15"></i>
              <span
                class="badge badge-primary position-absolute cart-length-badge"
                >{{ cartProducts.length }}</span
              >&nbsp;
              <p class="mb-0 fa-12">CART</p>
            </div>
          </li>
          <li
            class="web-navbar-account d-block mr-0"
            @click="$router.push({ name: 'Account' })"
          >
            <i class="fas fa-user-circle fa-15 ml-3"></i>&nbsp;
            <p class="mb-0 fa-12">ACCOUNT</p>
          </li>
          <!--          <b-popover-->
          <!--            target="purchase-popover"-->
          <!--            triggers="hover"-->
          <!--            placement="bottom-right"-->
          <!--            container="popover-container"-->
          <!--            ref="popover"-->
          <!--          >-->
          <!--            <template v-slot:title class="px-5">-->
          <!--              <div class="text-dark pl-3">Your Cart List Product</div>-->
          <!--            </template>-->
          <!--            <div>-->
          <!--              <div class="justify-content-center align-items-center">-->
          <!--                <h3 class="mb-0 mx-5">Oops!</h3>-->
          <!--                <h4 class="mb-0">No Products Found</h4>-->
          <!--                <p class="mx-5">Your purchase is empty</p>-->
          <!--              </div>-->
          <!--            </div>-->
          <!--          </b-popover>-->
        </ul>
      </div>
    </div>
    <div
      class="tabs-component-container"
      v-if="!resources.trigger.triggerSearchFormModal"
    >
      <div
        class="bg-white position-relative sympathy-tab rounded-0 jumbotron border-top w-100"
        @mouseleave="showSympathy = !showSympathy"
        v-if="showSympathy"
      >
        <div class="row mx-0 w-100 justify-content-center">
          <ul>
            <p class="font-weight-bold fa-14">Sympathy Flowers</p>
            <li
              @click="
                $router.push({
                  name: 'Shop the SU-Flower',
                  params: { params: 'sympathy-flowers' }
                }),
                  (showSympathy = !showSympathy)
              "
            >
              All Sympathy Flowers
            </li>
            <li
              @click="
                $router.push({
                  name: 'Shop the SU-Flower',
                  params: { params: 'same-day-sympathy-flowers' }
                }),
                  (showSympathy = !showSympathy)
              "
            >
              Same Day Sympathy Flower Delivery
            </li>
          </ul>
          <ul class="mr-5">
            <p class="font-weight-bold fa-14">Sympathy Plants & Gifts</p>
            <li
              @click="
                $router.push({
                  name: 'Shop the SU-Flower',
                  params: { params: 'sympathy-plants' }
                }),
                  (showSympathy = !showSympathy)
              "
            >
              Sympathy Plants
            </li>
            <li
              @click="
                $router.push({
                  name: 'Shop the SU-Flower',
                  params: { params: 'sympathy-flowers-gifts' }
                }),
                  (showSympathy = !showSympathy)
              "
            >
              Sympathy Gifts
            </li>
          </ul>
          <ul class="border-left">
            <p class="font-weight-bold fa-14">Funeral Flowers & Sprays</p>
            <li
              @click="
                $router.push({
                  name: 'Shop the SU-Flower',
                  params: { params: 'funeral-flowers' }
                }),
                  (showSympathy = !showSympathy)
              "
            >
              Funeral Flowers
            </li>
            <li
              @click="
                $router.push({
                  name: 'Shop the SU-Flower',
                  params: { params: 'funeral-standing-flowers' }
                }),
                  (showSympathy = !showSympathy)
              "
            >
              Funeral Sprays
            </li>
          </ul>
        </div>
      </div>
      <div
        v-if="showFlower"
        class="bg-white position-relative flower-tab rounded-0 px-2 pt-5 border-top"
        @mouseleave="showFlower = !showFlower"
      >
        <div class="row mx-0 w-100 justify-content-center">
          <ul>
            <p class="font-weight-bold fa-14">Featured Flowers Summer</p>
            <li
              v-for="featFlo in Featured_Flowers"
              :key="featFlo"
              @click="
                $router.push({
                  name: 'Shop the SU-Flower',
                  params: { params: featFlo.replace(/\s/g, '-').toLowerCase() }
                }),
                  (showFlower = !showFlower)
              "
            >
              {{ featFlo }}
            </li>
            <p class="font-weight-bold fa-14">Flowers by Delivery Type</p>
            <li
              @click="
                $router.push({
                  name: 'Shop the SU-Flower',
                  params: { params: 'same-day-flowers-gifts' }
                }),
                  (showFlower = !showFlower)
              "
            >
              Same Day Flower Delivery
            </li>
            <li
              @click="
                $router.push({
                  name: 'Shop the SU-Flower',
                  params: { params: 'flowers-by-mail' }
                }),
                  (showFlower = !showFlower)
              "
            >
              Flowers Shipped in Gift Box
            </li>
          </ul>
          <ul>
            <p class="font-weight-bold fa-14">Shop by Flower Type</p>
            <li
              v-for="type in shop_by_type"
              :key="type"
              @click="
                $router.push({
                  name: 'Shop the SU-Flower',
                  params: {
                    params: type.replace(/\s/g, '-').toLowerCase()
                  }
                }),
                  (showFlower = !showFlower)
              "
            >
              {{ type }}
            </li>
          </ul>
          <ul>
            <p class="font-weight-bold fa-14">Shop Flowers by Color</p>
            <li
              v-for="color in shop_by_color"
              :key="color"
              @click="
                $router.push({
                  name: 'Shop the SU-Flower',
                  params: {
                    params: color
                      .replace(/\s/g, '-')
                      .replace('Bouquets', 'flowers')
                      .toLowerCase()
                  }
                }),
                  (showFlower = !showFlower)
              "
            >
              {{ color }}
            </li>
          </ul>
          <ul class="border-left">
            <p class="font-weight-bold fa-14">Shop Roses by Color</p>
            <li
              v-for="rose in shop_by_roses"
              :key="rose"
              @click="
                $router.push({
                  name: 'Shop the SU-Flower',
                  params: {
                    params: rose.replace(/\s/g, '-').toLowerCase()
                  }
                }),
                  (showFlower = !showFlower)
              "
            >
              {{ rose }}
            </li>
          </ul>
        </div>
      </div>
      <div
        v-if="showBirthDay"
        class="bg-white position-relative birthday-tab rounded-0 jumbotron border-top"
        @mouseleave="showBirthDay = !showBirthDay"
      >
        <div class="row mx-0 w-100 justify-content-between px-5">
          <ul>
            <p class="font-weight-bold fa-14">Featured Birthday</p>
            <li
              @click="
                $router.push({
                  name: 'Shop the SU-Flower',
                  params: { params: 'all-Birthday' }
                }),
                  (showBirthDay = !showBirthDay)
              "
            >
              All Birthday
            </li>
            <li
              @click="
                $router.push({
                  name: 'Shop the SU-Flower',
                  params: { params: 'same-day-birthday-flower' }
                }),
                  (showBirthDay = !showBirthDay)
              "
            >
              Same Day Birthday Flower Delivery
            </li>
          </ul>
          <ul>
            <p class="font-weight-bold fa-14">Birthday Flowers</p>
            <li
              @click="
                $router.push({
                  name: 'Shop the SU-Flower',
                  params: { params: 'birthday-flowers' }
                }),
                  (showBirthDay = !showBirthDay)
              "
            >
              All Birthday Flowers
            </li>
            <li
              @click="
                $router.push({
                  name: 'Shop the SU-Flower',
                  params: { params: 'birthday-roses' }
                }),
                  (showBirthDay = !showBirthDay)
              "
            >
              Birthday Roses
            </li>
          </ul>
          <ul>
            <p class="font-weight-bold fa-14">Birthday Plants & Gifts</p>
            <li
              @click="
                $router.push({
                  name: 'Shop the SU-Flower',
                  params: { params: 'birthday-plants' }
                }),
                  (showBirthDay = !showBirthDay)
              "
            >
              Birthday Plants
            </li>
            <li
              @click="
                $router.push({
                  name: 'Shop the SU-Flower',
                  params: { params: 'birthday-delivery' }
                }),
                  (showBirthDay = !showBirthDay)
              "
            >
              Birthday Gifts
            </li>
          </ul>
          <ul class="border-left">
            <p class="font-weight-bold fa-14">Shop Birthday by Recipient</p>
            <li
              v-for="birthday in shop_by_birthday"
              :key="birthday"
              @click="
                $router.push({
                  name: 'Shop the SU-Flower',
                  params: {
                    params: birthday.replace(/\s/g, '-').toLowerCase()
                  }
                }),
                  (showBirthDay = !showBirthDay)
              "
            >
              {{ birthday }}
            </li>
          </ul>
        </div>
      </div>
      <div
        v-if="showOccasion"
        class="bg-white occasion-tab position-relative rounded-0 jumbotron border-top"
        @mouseleave="showOccasion = !showOccasion"
      >
        <div class="row mx-0 w-100 justify-content-center">
          <ul>
            <p class="font-weight-bold fa-14">All Occasions</p>
            <li
              @click="
                $router.push({
                  name: 'Shop the SU-Flower',
                  params: { params: 'anniversary-flowers' }
                }),
                  (showOccasion = !showOccasion)
              "
            >
              Anniversary
            </li>
            <li
              @click="
                $router.push({
                  name: 'Shop the SU-Flower',
                  params: { params: 'new-baby-flowers' }
                }),
                  (showOccasion = !showOccasion)
              "
            >
              Baby
            </li>
            <li
              @click="
                $router.push({
                  name: 'Shop the SU-Flower',
                  params: { params: 'just-because-gifts' }
                }),
                  (showOccasion = !showOccasion)
              "
            >
              Just Because
            </li>
            <li
              @click="
                $router.push({
                  name: 'Shop the SU-Flower',
                  params: { params: 'get-well-flowers' }
                }),
                  (showOccasion = !showOccasion)
              "
            >
              Get Well
            </li>
            <li
              @click="
                $router.push({
                  name: 'Shop the SU-Flower',
                  params: { params: 'romantic-flowers' }
                }),
                  (showOccasion = !showOccasion)
              "
            >
              Love & Romance
            </li>
          </ul>
          <ul>
            <li
              @click="
                $router.push({
                  name: 'Shop the SU-Flower',
                  params: { params: 'thinking-of-you-flowers' }
                }),
                  (showOccasion = !showOccasion)
              "
            >
              Thinking of You
            </li>
            <li
              @click="
                $router.push({
                  name: 'Shop the SU-Flower',
                  params: { params: 'congratulation-flowers' }
                }),
                  (showOccasion = !showOccasion)
              "
            >
              Congratulations
            </li>
            <li
              @click="
                $router.push({
                  name: 'Shop the SU-Flower',
                  params: { params: 'thank-you-flowers' }
                }),
                  (showOccasion = !showOccasion)
              "
            >
              Thank You
            </li>
            <li
              @click="
                $router.push({
                  name: 'Shop the SU-Flower',
                  params: { params: 'engagement-flowers' }
                }),
                  (showOccasion = !showOccasion)
              "
            >
              Engagement
            </li>
          </ul>
          <ul>
            <li
              @click="
                $router.push({
                  name: 'Shop the SU-Flower',
                  params: { params: 'sorry-flowers' }
                }),
                  (showOccasion = !showOccasion)
              "
            >
              I'm Sorry
            </li>
            <li
              @click="
                $router.push({
                  name: 'Shop the SU-Flower',
                  params: { params: 'wedding-flowers' }
                }),
                  (showOccasion = !showOccasion)
              "
            >
              Wedding Gifts
            </li>
            <li
              @click="
                $router.push({
                  name: 'Shop the SU-Flower',
                  params: { params: 'retirement-flowers' }
                }),
                  (showOccasion = !showOccasion)
              "
            >
              Retirement
            </li>
            <li
              @click="
                $router.push({
                  name: 'Shop the SU-Flower',
                  params: { params: 'housewarning-flowers' }
                }),
                  (showOccasion = !showOccasion)
              "
            >
              Housewarming
            </li>
            <li
              @click="
                $router.push({
                  name: 'Shop the SU-Flower',
                  params: { params: 'corporate-gift-flowers' }
                }),
                  (showOccasion = !showOccasion)
              "
            >
              Corporate Gifting
            </li>
          </ul>
          <ul class="border-left">
            <p class="font-weight-bold fa-14">Upcoming Occasions</p>
            <li
              @click="
                $router.push({
                  name: 'Shop the SU-Flower',
                  params: { params: 'gift-for-parent' }
                }),
                  (showOccasion = !showOccasion)
              "
            >
              Parents Day
            </li>
            <li
              @click="
                $router.push({
                  name: 'Shop the SU-Flower',
                  params: { params: 'friend-gift-flower' }
                }),
                  (showOccasion = !showOccasion)
              "
            >
              Friendship Day
            </li>
            <li
              @click="
                $router.push({
                  name: 'Shop the SU-Flower',
                  params: { params: 'sister-flowers' }
                }),
                  (showOccasion = !showOccasion)
              "
            >
              Sister's Day
            </li>
          </ul>
        </div>
      </div>
      <div
        v-if="showGift"
        class="bg-white plants-gifts-tab position-relative rounded-0 jumbotron border-top"
        @mouseleave="showGift = !showGift"
      >
        <div class="row mx-0 w-100 justify-content-center">
          <ul>
            <p class="font-weight-bold fa-14">Featured Plants</p>
            <li
              v-for="featPlant in Featured_plants"
              :key="featPlant"
              @click="
                $router.push({
                  name: 'Shop the SU-Flower',
                  params: {
                    params: featPlant.replace(/\s/g, '-').toLowerCase()
                  }
                }),
                  (showGift = !showGift)
              "
            >
              {{ featPlant }}
            </li>
            <p class="font-weight-bold fa-14">Shop Plants</p>
            <li
              v-for="shopPlant in shop_plants"
              :key="shopPlant"
              @click="
                $router.push({
                  name: 'Shop the SU-Flower',
                  params: {
                    params: shopPlant.replace(/\s/g, '-').toLowerCase()
                  }
                }),
                  (showGift = !showGift)
              "
            >
              {{ shopPlant }}
            </li>
          </ul>
          <ul>
            <p class="font-weight-bold fa-14">Flowering Plants</p>
            <li
              v-for="floPlant in flowering_plants"
              :key="floPlant"
              @click="
                $router.push({
                  name: 'Shop the SU-Flower',
                  params: {
                    params: floPlant.replace(/\s/g, '-').toLowerCase()
                  }
                }),
                  (showGift = !showGift)
              "
            >
              {{ floPlant }}
            </li>
          </ul>
          <ul class="mr-5">
            <p class="font-weight-bold fa-14">Shop Gifts</p>
            <li
              @click="
                $router.push({
                  name: 'Shop the SU-Flower',
                  params: {
                    params: 'best-selling-gifts'
                  }
                }),
                  (showGift = !showGift)
              "
            >
              Best Selling Gifts
            </li>
            <li
              @click="
                $router.push({
                  name: 'Shop the SU-Flower',
                  params: {
                    params: 'bundles-bun'
                  }
                }),
                  (showGift = !showGift)
              "
            >
              Flowers & Gifts Bundles
            </li>
            <p class="font-weight-bold fa-14">Gift Baskets</p>
            <li
              v-for="giftBasket in gift_baskets"
              :key="giftBasket"
              @click="
                $router.push({
                  name: 'Shop the SU-Flower',
                  params: {
                    params: giftBasket.replace(/\s/g, '-').toLowerCase()
                  }
                }),
                  (showGift = !showGift)
              "
            >
              {{ giftBasket }}
            </li>
          </ul>
          <ul class="border-left">
            <p class="font-weight-bold fa-14">Gourmet Food Gifts</p>
            <li
              v-for="gourmetFood in gourmet_foods"
              :key="gourmetFood"
              @click="
                $router.push({
                  name: 'Shop the SU-Flower',
                  params: {
                    params: gourmetFood.replace(/\s/g, '-').toLowerCase()
                  }
                }),
                  (showGift = !showGift)
              "
            >
              {{ gourmetFood }}
            </li>
          </ul>
        </div>
      </div>
      <div
        v-if="showHelp"
        class="bg-white help-tab position-relative rounded-0 jumbotron border-top"
        @mouseleave="showHelp = !showHelp"
      >
        <div class="row mx-0 w-100 justify-content-center">
          <ul>
            <p
              class="font-weight-bold fa-14 menu-option"
              @click="
                $router.push({ name: 'Customer-Service' }),
                  (showHelp = !showHelp)
              "
            >
              Customer service
            </p>
            <p
              class="font-weight-bold fa-14 menu-option"
              @click="$router.push({ name: 'About' }), (showHelp = !showHelp)"
            >
              About Us
            </p>
            <p class="font-weight-bold fa-14 menu-option">Flower Guides</p>
            <p class="font-weight-bold fa-14 menu-option">Plant Guides</p>
          </ul>
          <ul class="contact-container">
            <p class="font-weight-bold fa-14 fa">CONTACT US</p>
            <p class="fa-12">
              We're here for you 24 hours a day, 7 days a week.
            </p>
            <li>
              <i class="fas fa-plane-departure"></i>
              <a
                href="javascript:;;"
                class="font-weight-bold"
                @click="
                  $router.push({ name: 'Track-Order' }), (showHelp = !showHelp)
                "
                >Track Your Order</a
              >
            </li>
            <li>
              <i class="fas fa-phone"></i>
              <a href="javascript:;;" class="font-weight-bold">0789334672321</a>
            </li>
            <li>
              <i class="fas fa-envelope"></i>
              <a href="javascript:;;" class="font-weight-bold">Email Us</a>
            </li>
            <li>
              <i class="fas fa-comment-dots"></i>
              <a href="javascript:;;" class="font-weight-bold">Chat</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
/* eslint-disable */
import { mapState, mapGetters, mapMutations } from "vuex";

export default {
  data() {
    return {
      showSympathy: false,
      showFlower: false,
      showBirthDay: false,
      showOccasion: false,
      showGift: false,
      hideModal: false,
      showHelp: false,
      totalValue: 0.0,
      logo: "/assets/images/logo.jpg",
      search: null,
      Featured_Flowers: [
        "Summer Flowers",
        "Best Selling Flowers",
        "New Flowers",
        "Limited Edition Collection"
      ],
      shop_by_type: [
        "All Flowers",
        "Alstroemerias",
        "Carnations",
        "Daisies",
        "Gerberas",
        "Hydrangeas",
        "Irises",
        "Lilies",
        "Mixed Flower Bouquets",
        "Orchids",
        "Roses",
        "Snapdragons",
        "Sunflowers",
        "Tulips"
      ],
      shop_by_color: [
        "Blue Bouquets",
        "Green Bouquets",
        "Lavender Bouquets",
        "Multi-Color Bouquets",
        "Orange Bouquets",
        "Pink Bouquets",
        "Purple Bouquets",
        "Red Bouquets",
        "White Bouquets",
        "Yellow Bouquets"
      ],
      shop_by_roses: [
        "All Roses",
        "Blue Roses",
        "Multi-Color Roses",
        "Orange Roses",
        "Pink Roses",
        // "Purple Roses",
        "Rainbow Roses"
        // "Red Roses",
        // "White Roses"
      ],
      shop_by_birthday: [
        "Birthday for Mom",
        "Birthday for Friend",
        "Birthday for Wife",
        "Birthday for Daughter",
        "Birthday for Him"
      ],
      Featured_plants: [
        "Best Selling Plants",
        "New Plants",
        "Same Day Plant Delivery"
      ],
      shop_plants: [
        "All Plants",
        "Bonsai & Bamboo",
        "Green Plants",
        "Office Plants",
        "Succulents & Cacti"
      ],
      flowering_plants: [
        "All Flowering Plants",
        "Azalea Plants",
        "Bulbs & Indoor Gardens",
        "Calla Lilies",
        "Orchids",
        "Peace Lily Plants",
        "Potted Rose Plants"
      ],
      gift_baskets: [
        "All Gift Baskets",
        "Fruit Gift Baskets",
        "Meat & Cheese Baskets",
        "Span Gift Baskets",
        "Starbucks Gift Baskets"
      ],
      gourmet_foods: [
        "All Gourmet Food Gifts",
        "Candy Gifts",
        "Chocolate Covered Strawberries",
        "Chocolate Gifts",
        "Desserts & Baked Goods",
        "Godiva Chocolates",
        "Mrs Fields Cookies"
      ]
    };
  },
  computed: {
    ...mapState(["cartProducts", "loggedUser"]),

    ...mapGetters(["auth", "accessories", "resources"]),

    user() {
      return this.auth;
    },
    purchase() {
      return this.accessories.details;
    },
    cartProducts() {
      return this.$store.getters.cartProducts;
    },
    products() {
      return [
        ...new Set(this.cartProducts.map(v => JSON.stringify(v)))
      ].map(v => JSON.parse(v));
    }
  },
  watch: {
    cartProducts() {
      this.totalValue = 0;
      this.cartProducts.forEach(product => {
        this.totalValue += parseFloat(product.price);
      });
      this.$store.state.resources.totalPrice = this.totalValue;
    }
  },
  methods: {
    view(data) {
      if (this.user.token) {
        this.$store.dispatch("setResources", ["user", this.user]);
      } else {
        this.$store.dispatch("setView", data);
        this.$store.dispatch("setAccessories", ["details"]);
      }
    },
    /* Initially loading the purchase products from local storage */
    QtyProduct(product) {
      return this.cartProducts.filter(v => v.id === product.id).length;
    },
    ...mapMutations(["SET_CART_PRODUCTS", "ADD_LOGGED_USER"]),

    getLocalProducts() {
      const products = JSON.parse(localStorage.getItem("iki-purchase"));
      if (products) {
        this.SET_CART_PRODUCTS(products);
      }
    },

    loc_logout() {
      this.$store.dispatch("logout");
      // Promise.all([
      //   localStorage.removeItem("_auth" && "iki-purchase"),
      //   this.$store.dispatch("logout"),
      // ]).then(() => {
      //   this.$router.replace({ name: "Home" });
      // });
    }
  },
  created() {
    this.getLocalProducts();
    //
    // const loggedUser = getLoggedInUser();
    //
    // this.ADD_LOGGED_USER(loggedUser);
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/style/webNav";
@media screen and (max-width: 768px) {
  .web-nav-layout {
    .su-header-logo {
      font-size: 1.3rem;
    }
    .header-content .nav-item p {
      font-size: 60%;
    }
    .purchase-navbar {
      width: 70%;
      .back-button-container {
        font-size: 10px !important;
      }
      .nav-item p {
        font-size: 10px !important;
      }
    }
    .header-options {
      padding: 0 !important;
      li {
        font-size: 13px !important;
        i {
          font-size: 16px !important;
        }
        p {
          font-size: 10px !important;
        }
      }
    }
    .birthday-tab {
      div {
        padding: 0 !important;
      }
      ul {
        padding: 0 !important;
        &:nth-child(4) {
          padding-left: 1.5rem !important;
        }
        p {
          font-size: 13px !important;
        }
        li {
          font-size: 12px !important;
        }
      }
    }
    .sympathy-tab {
      ul {
        p {
          font-size: 13px !important;
        }
        li {
          font-size: 12px !important;
        }
      }
    }
    .occasion-tab {
      ul {
        padding: 0 1.5rem 0 0 !important;
        &:nth-child(4) {
          padding-left: 1.5rem !important;
        }
        p {
          font-size: 13px !important;
        }
        li {
          font-size: 12px !important;
        }
      }
    }
    .flower-tab {
      ul {
        margin: 0 !important;
        padding: 0 1.5rem 0 0 !important;
        &:nth-child(4) {
          padding-left: 1.5rem !important;
        }
        p {
          font-size: 13px !important;
        }
        li {
          font-size: 12px !important;
        }
      }
    }
    .plants-gifts-tab {
      ul {
        padding: 0 1.5rem 0 0 !important;
        &:nth-child(3) {
          padding-right: 0 !important;
        }
        &:nth-child(4) {
          padding-left: 1.5rem !important;
        }
        p {
          font-size: 13px !important;
        }
        li {
          font-size: 12px !important;
        }
      }
    }
  }
}
@media (min-width: 375px) and (max-width: 425px) {
  .web-nav-layout {
    .navbar-header {
      padding: 0 5px !important;
    }
    .header-log {
      padding-top: 0.5rem !important;
    }
    .ftd-company {
      font-size: 55% !important;
    }
    .su-header-logo {
      font-size: 65%;
    }
    .header-content {
      padding: 0 !important ;
      .nav-item p {
        font-size: 43% !important;
      }
    }
    .purchase-navbar {
      width: 76% !important;
      padding: 1rem 0 0 0 !important;
      .back-button-container {
        font-size: 9px !important;
        padding-top: 0.25rem !important;
      }
      .purchase-tab {
        div:nth-child(2) {
          margin: 0 !important;
        }
      }
      .nav-item p {
        font-size: 70% !important;
        margin: 0 0.8rem 0 0 !important;
      }
      .secure-tab {
        display: none !important;
      }
    }
    .header-options {
      padding: 0 !important;
      ul {
        margin-top: 0.5rem !important;
        justify-content: center !important;
      }
      li {
        font-size: 14px !important;
        i {
          font-size: 85% !important;
        }
        p {
          display: none;
        }
      }
    }
    .birthday-tab {
      div {
        justify-content: space-around !important;
        padding: 0 !important;
      }
      ul {
        padding: 0 !important;
        &:nth-child(4) {
          border-left: 0 !important;
          padding-left: 1.5rem !important;
        }
        p {
          font-size: 55% !important;
        }
        li {
          font-size: 50% !important;
        }
      }
    }
    .sympathy-tab {
      div {
        justify-content: space-around !important;
        padding: 0 !important;
      }
      ul {
        padding: 0 !important;
        &:nth-child(2) {
          margin: 0 1rem !important;
        }
        &:nth-child(3) {
          padding-left: 0.5rem !important;
        }
        p {
          font-size: 55% !important;
        }
        li {
          font-size: 50% !important;
        }
      }
    }
    .occasion-tab {
      div {
        justify-content: space-around !important;
        padding: 0 !important;
      }
      ul {
        padding: 0 !important;
        p {
          font-size: 55% !important;
        }
        li {
          font-size: 50% !important;
        }
      }
    }
    .flower-tab {
      div {
        justify-content: space-around !important;
        padding: 0 !important;
      }
      ul {
        padding: 0 0.1rem !important;
        &:nth-child(4) {
          border-left: 0 !important;
          padding-left: 0 !important;
        }
        p {
          font-size: 55% !important;
        }
        li {
          font-size: 50% !important;
        }
      }
    }
    .plants-gifts-tab {
      div {
        justify-content: space-around !important;
        padding: 0 !important;
      }
      ul {
        padding: 0 0.5rem !important;
        &:nth-child(3) {
          margin: 0 !important;
        }
        &:nth-child(4) {
          border-left: 0 !important;
          padding-left: 0.5rem !important;
        }
        p {
          font-size: 55% !important;
        }
        li {
          font-size: 50% !important;
        }
      }
    }
    .help-tab {
      div:nth-child(1) {
        justify-content: space-around !important;
        padding: 0 !important;
      }
      ul {
        &:nth-child(1) {
          p {
            font-size: 70% !important;
          }
        }
        padding: 0 !important;
      }
      .contact-container {
        padding-left: 1.5rem !important;
        p:nth-child(1) {
          font-size: 85% !important;
          margin-bottom: 0 !important;
        }
        p:nth-child(2) {
          font-size: 60% !important;
        }
        li {
          font-size: 65% !important;
          padding-bottom: 1rem !important;
          i {
            padding-right: 0.5rem;
          }
        }
      }
    }
  }
}
@media screen and(max-width: 375px) {
  .web-nav-layout {
    .header-log {
      width: 24% !important;
    }
    .header-content {
      width: 63% !important;
      padding: 0 !important ;
      .nav-item p {
        font-size: 42% !important;
      }
    }
    .purchase-navbar {
      .nav-item p {
        margin: 0 0.5rem 0 0 !important;
        i {
          margin: 0 !important;
        }
      }
    }

    .header-options {
      width: 12% !important;
      li {
        &:nth-child(2),
        &:nth-child(4) {
          display: none !important;
        }
        &:nth-child(1) {
          i {
            padding: 0 !important;
            margin-right: 0.25rem !important;
          }
        }
      }
    }
    .sympathy-tab {
      div {
        justify-content: space-around !important;
        padding: 0 !important;
        display: flex !important;
        flex-wrap: nowrap;
      }
      ul {
        padding: 0 !important;
        &:nth-child(2) {
          margin: 0 !important;
        }
        &:nth-child(3) {
          padding-left: 0.5rem !important;
        }
        p {
          font-size: 55% !important;
        }
        li {
          font-size: 50% !important;
        }
      }
    }
  }
}
@media screen and( max-width: 320px) {
  .web-nav-layout {
    .navbar-header {
      padding: 0 5px !important;
    }
    .header-log {
      width: 24% !important;
      padding-top: 0.5rem !important;
    }
    .ftd-company {
      font-size: 55% !important;
    }
    .su-header-logo {
      font-size: 65%;
    }
    .header-content {
      width: 63% !important;
      padding: 0 !important ;
      .nav-item p {
        font-size: 45% !important;
      }
    }
    .purchase-navbar {
      width: 76% !important;
      padding: 1rem 0 0 0 !important;
      .back-button-container {
        font-size: 58% !important;
        padding-top: 0.25rem !important;
      }
      .purchase-tab {
        div:nth-child(2) {
          margin: 0 !important;
        }
      }
      .nav-item p {
        font-size: 60% !important;
        margin: 0 0.25rem 0 0 !important;
        i {
          margin: 0 !important;
        }
      }
      .secure-tab {
        display: none !important;
      }
    }
    .header-options {
      padding: 0 !important;
      ul {
        margin-top: 0.5rem !important;
        justify-content: center !important;
      }
      li {
        font-size: 14px !important;
        i {
          font-size: 85% !important;
        }
        p {
          display: none;
        }
      }
    }
    .birthday-tab {
      div {
        justify-content: space-around !important;
        padding: 0 !important;
      }
      ul {
        padding: 0 !important;
        &:nth-child(4) {
          border-left: 0 !important;
          padding-left: 1.5rem !important;
        }
        p {
          font-size: 55% !important;
        }
        li {
          font-size: 50% !important;
        }
      }
    }
    .sympathy-tab {
      div {
        justify-content: space-around !important;
        padding: 0 !important;
      }
      ul {
        padding: 0 !important;
        &:nth-child(2) {
          margin: 0 1rem !important;
        }
        &:nth-child(3) {
          padding-left: 0.5rem !important;
        }
        p {
          font-size: 55% !important;
        }
        li {
          font-size: 50% !important;
        }
      }
    }
    .occasion-tab {
      div {
        justify-content: space-around !important;
        padding: 0 !important;
      }
      ul {
        padding: 0 !important;
        p {
          font-size: 55% !important;
        }
        li {
          font-size: 50% !important;
        }
      }
    }
    .flower-tab {
      div {
        justify-content: space-around !important;
        padding: 0 !important;
      }
      ul {
        padding: 0 0.1rem !important;
        &:nth-child(4) {
          border-left: 0 !important;
          padding-left: 0 !important;
        }
        p {
          font-size: 55% !important;
        }
        li {
          font-size: 50% !important;
        }
      }
    }
    .plants-gifts-tab {
      div {
        justify-content: space-around !important;
        padding: 0 !important;
      }
      ul {
        padding: 0 0.5rem !important;
        &:nth-child(3) {
          margin: 0 !important;
        }
        &:nth-child(4) {
          border-left: 0 !important;
          padding-left: 0.5rem !important;
        }
        p {
          font-size: 55% !important;
        }
        li {
          font-size: 50% !important;
        }
      }
    }
    .help-tab {
      div:nth-child(1) {
        justify-content: space-around !important;
        padding: 0 !important;
      }
      ul {
        &:nth-child(1) {
          p {
            font-size: 70% !important;
          }
        }
        padding: 0 !important;
      }
      .contact-container {
        padding-left: 1.5rem !important;
        p:nth-child(1) {
          font-size: 85% !important;
          margin-bottom: 0 !important;
        }
        p:nth-child(2) {
          font-size: 60% !important;
        }
        li {
          font-size: 65% !important;
          padding-bottom: 1rem !important;
          i {
            padding-right: 0.5rem;
          }
        }
      }
    }
  }
}
</style>

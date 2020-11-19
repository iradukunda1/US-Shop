<template>
  <div class="mobile-slider position-fixed">
    <div
      class="body-content-context border-right shadow bg-white position-absolute"
    >
      <div
        class="header d-flex border-bottom justify-content-between py-3"
        :class="title !== 'SHOP' ? 'mx-4' : 'px-4'"
      >
        <span
          class="font-weight-bold fa-14 cursor-pointer"
          :class="{ 'pointer-event': title == 'SHOP' }"
          @click="
            (showBirthDay = false),
              (showSympathy = false),
              (showFlower = false),
              (showOccasion = false),
              (showGift = false),
              (title = 'SHOP'),
              (showHelp = false)
          "
        >
          <i class="fas fa-angle-left pr-2" v-if="title !== 'SHOP'"></i
          >{{ title.toUpperCase() }}
        </span>
        <div class="toggle" :class="{'back-btn': !resources.trigger.triggerMobileSideBar}" @click="close">
          <p class="line1"></p>
          <p class="line2"></p>
          <p class="line3"></p>
        </div>
      </div>
      <div class="mobile-context w-100">
        <div
          class="header-content h-100 w-100 mt-3 px-4"
          v-if="title == 'SHOP'"
        >
          <div class="nav-item BIRTH-DAY">
            <p
              class="py-3 cursor-pointer mb-0"
              @click="
                (showBirthDay = !showBirthDay),
                  (showSympathy = false),
                  (showFlower = false),
                  (showOccasion = false),
                  (showGift = false),
                  (showHelp = false),
                  (title = 'BIRTH-DAY')
              "
            >
              <span>BIRTH-DAY</span> <i class="fas fa-angle-right"></i>
            </p>
          </div>
          <div class="nav-item">
            <p
              class="py-3 cursor-pointer mb-0"
              :class="{ 'bottom-line': showSympathy }"
              @click="
                (showSympathy = !showSympathy),
                  (showFlower = false),
                  (showBirthDay = false),
                  (showOccasion = false),
                  (showGift = false),
                  (showHelp = false),
                  (title = 'SYMPATHY')
              "
            >
              <span>SYMPATHY</span> <i class="fas fa-angle-right"></i>
            </p>
          </div>
          <div class="nav-item">
            <p
              class="py-3 cursor-pointer mb-0"
              :class="{ 'bottom-line': showOccasion }"
              @click="
                (showOccasion = !showOccasion),
                  (showSympathy = false),
                  (showFlower = false),
                  (showBirthDay = false),
                  (showGift = false),
                  (showHelp = false),
                  (title = 'ALL OCCASION')
              "
            >
              <span>ALL OCCASION</span> <i class="fas fa-angle-right"></i>
            </p>
          </div>
          <div class="nav-item">
            <p
              class="py-3 cursor-pointer mb-0"
              :class="{ 'bottom-line': showFlower }"
              @click="
                (showFlower = !showFlower),
                  (showSympathy = false),
                  (showBirthDay = false),
                  (showOccasion = false),
                  (showGift = false),
                  (showHelp = false),
                  (title = 'FLOWER')
              "
            >
              <span>FLOWER</span> <i class="fas fa-angle-right"></i>
            </p>
          </div>
          <div class="nav-item">
            <p
              class="py-3 cursor-pointer mb-0"
              :class="{ 'bottom-line': showGift }"
              @click="
                (showGift = !showGift),
                  (showSympathy = false),
                  (showFlower = false),
                  (showBirthDay = false),
                  (showOccasion = false),
                  (showHelp = false),
                  (title = 'PLANTS & GIFTS')
              "
            >
              <span>PLANTS & GIFTS </span><i class="fas fa-angle-right"></i>
            </p>
          </div>
          <div class="sign-in">
            <p
              class="py-3 cursor-pointer mb-0"
              :class="{ 'bottom-line': showGift }"
              @click="login()"
            >
              <i class="fas fa-user-alt pr-4"></i>
              <span class="fa-14">Sign In</span>
            </p>
          </div>
          <div class="nav-item">
            <p
              class="py-3 cursor-pointer mb-0"
              @click="
                (showGift = false),
                  (showSympathy = false),
                  (showFlower = false),
                  (showBirthDay = false),
                  (showOccasion = false),
                  (showHelp = !showHelp),
                  (title = 'HELP')
              "
            >
              <span>HELP</span><i class="fas fa-angle-right"></i>
            </p>
          </div>
          <p
            class="py-3 track-order cursor-pointer mb-0"
            :class="{ 'bottom-line': showGift }"
            @click="
              (showGift = false),
                (showSympathy = false),
                (showFlower = false),
                (showBirthDay = false),
                (showOccasion = false),
                (showHelp = false),
                $router.push({ name: 'Track-Order' }),
                close()
            "
          >
            <i class="fas fa-plane-departure pr-4"></i>
            <span class="fa-14">Track Orders</span>
          </p>
          <div class="nav-item">
            <p
              class="py-3 cursor-pointer mb-0"
              :class="{ 'bottom-line': showGift }"
              @click="
                (showGift = false),
                  (showSympathy = false),
                  (showFlower = false),
                  (showBirthDay = false),
                  (showOccasion = false),
                  (showHelp = !showHelp),
                  (title = 'CONTACT US')
              "
            >
              <span>CONTACT US</span><i class="fas fa-angle-right"></i>
            </p>
          </div>
        </div>
        <div
          class="tabs-component-container h-100 w-100"
          v-if="title !== 'SHOP'"
        >
          <div
            class="sympathy-tab rounded-0 p-4 w-100 h-100"
            @mouseleave="(showSympathy = !showSympathy), (title = 'SHOP')"
            v-if="showSympathy && title == 'SYMPATHY'"
          >
            <div class="d-block sympathy-ulList">
              <ul>
                <p class="font-weight-bold fa-14">Sympathy Flowers</p>
                <li
                  @click="
                    $router.push({
                      name: 'Shop the SU-Flower',
                      params: { params: 'sympathy-flowers' }
                    }),
                      (showSympathy = !showSympathy),
                      close()
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
                      (showSympathy = !showSympathy),
                      close()
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
                      (showSympathy = !showSympathy),
                      close()
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
                      (showSympathy = !showSympathy),
                      close()
                  "
                >
                  Sympathy Gifts
                </li>
              </ul>
              <ul>
                <p class="font-weight-bold fa-14">Funeral Flowers & Sprays</p>
                <li
                  @click="
                    $router.push({
                      name: 'Shop the SU-Flower',
                      params: { params: 'funeral-flowers' }
                    }),
                      (showSympathy = !showSympathy),
                      close()
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
                      (showSympathy = !showSympathy),
                      close()
                  "
                >
                  Funeral Sprays
                </li>
              </ul>
            </div>
          </div>
          <div
            class="flower-tab rounded-0 w-100 p-4 h-100"
            @mouseleave="(showFlower = !showFlower), (title = 'SHOP')"
            v-if="showFlower && title == 'FLOWER'"
          >
            <div class="d-block flower-ulList">
              <ul>
                <p class="font-weight-bold fa-14">Featured Flowers Summer</p>
                <li
                  v-for="featFlo in Featured_Flowers"
                  :key="featFlo"
                  @click="
                    $router.push({
                      name: 'Shop the SU-Flower',
                      params: {
                        params: featFlo.replace(/\s/g, '-').toLowerCase()
                      }
                    }),
                      (showFlower = !showFlower),
                      close()
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
                      (showFlower = !showFlower),
                      close()
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
                      (showFlower = !showFlower),
                      close()
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
                      (showFlower = !showFlower),
                      close()
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
                      (showFlower = !showFlower),
                      close()
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
                      (showFlower = !showFlower),
                      close()
                  "
                >
                  {{ rose }}
                </li>
              </ul>
            </div>
          </div>
          <div
            class="birthday-tab w-100 p-4 h-100"
            @mouseleave="(showBirthDay = !showBirthDay), (title = 'SHOP')"
            v-if="showBirthDay && title.toLocaleLowerCase() == 'birth-day'"
          >
            <div class="d-block birthDay-ulList">
              <ul>
                <p class="font-weight-bold fa-14">Featured Birthday</p>
                <li
                  @click="
                    $router.push({
                      name: 'Shop the SU-Flower',
                      params: { params: 'all-Birthday' }
                    }),
                      (showBirthDay = !showBirthDay),
                      close()
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
                      (showBirthDay = !showBirthDay),
                      close()
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
                      (showBirthDay = !showBirthDay),
                      close()
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
                      (showBirthDay = !showBirthDay),
                      close()
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
                      (showBirthDay = !showBirthDay),
                      close()
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
                      (showBirthDay = !showBirthDay),
                      close()
                  "
                >
                  Birthday Gifts
                </li>
              </ul>
              <ul>
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
                      (showBirthDay = !showBirthDay),
                      close()
                  "
                >
                  {{ birthday }}
                </li>
              </ul>
            </div>
          </div>
          <div
            class="occasion-tab p-4 w-100 h-100"
            @mouseleave="(showOccasion = !showOccasion), (title = 'SHOP')"
            v-if="showOccasion && title.toLocaleLowerCase() == 'all occasion'"
          >
            <div class="d-block">
              <ul>
                <p class="font-weight-bold fa-14">All Occasions</p>
                <li
                  @click="
                    $router.push({
                      name: 'Shop the SU-Flower',
                      params: { params: 'anniversary-flowers' }
                    }),
                      (showOccasion = !showOccasion),
                      close()
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
                      (showOccasion = !showOccasion),
                      close()
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
                      (showOccasion = !showOccasion),
                      close()
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
                      (showOccasion = !showOccasion),
                      close()
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
                      (showOccasion = !showOccasion),
                      close()
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
                      (showOccasion = !showOccasion),
                      close()
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
                      (showOccasion = !showOccasion),
                      close()
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
                      (showOccasion = !showOccasion),
                      close()
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
                      (showOccasion = !showOccasion),
                      close()
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
                      (showOccasion = !showOccasion),
                      close()
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
                      (showOccasion = !showOccasion),
                      close()
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
                      (showOccasion = !showOccasion),
                      close()
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
                      (showOccasion = !showOccasion),
                      close()
                  "
                >
                  Corporate Gifting
                </li>
              </ul>
              <ul>
                <p class="font-weight-bold fa-14">Upcoming Occasions</p>
                <li
                  @click="
                    $router.push({
                      name: 'Shop the SU-Flower',
                      params: { params: 'gift-for-parent' }
                    }),
                      (showOccasion = !showOccasion),
                      close()
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
                      (showOccasion = !showOccasion),
                      close()
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
                      (showOccasion = !showOccasion),
                      close()
                  "
                >
                  Sister's Day
                </li>
              </ul>
            </div>
          </div>
          <div
            class="plants-gifts-tab p-4 w-100 h-100"
            @mouseleave="(showGift = !showGift), (title = 'SHOP')"
            v-if="showGift && title.toLocaleLowerCase() == 'plants & gifts'"
          >
            <div class="d-block plants-gifts-ul-lists">
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
                      (showGift = !showGift),
                      close()
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
                      (showGift = !showGift),
                      close()
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
                      (showGift = !showGift),
                      close()
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
                      (showGift = !showGift),
                      close()
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
                      (showGift = !showGift),
                      close()
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
                      (showGift = !showGift),
                      close()
                  "
                >
                  {{ giftBasket }}
                </li>
              </ul>
              <ul>
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
                      (showGift = !showGift),
                      close()
                  "
                >
                  {{ gourmetFood }}
                </li>
              </ul>
            </div>
          </div>
          <div
            class="help-tab pt-4 px-4 h-100"
            @mouseleave="(showHelp = !showHelp), (title = 'SHOP')"
            v-if="showHelp"
          >
            <div class="d-block help-tab-ul-list">
              <ul v-if="title.toLocaleLowerCase() == 'help'">
                <p
                  class="font-weight-bold fa-14 menu-option"
                  @click="
                    $router.push({ name: 'Customer-Service' }),
                      (showHelp = !showHelp),
                      close()
                  "
                >
                  Customer service
                </p>
                <p
                  class="font-weight-bold fa-14 menu-option"
                  @click="
                    $router.push({ name: 'About' }),
                      (showHelp = !showHelp),
                      close()
                  "
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
                      $router.push({ name: 'Track-Order' }),
                        (showHelp = !showHelp),
                        close()
                    "
                    >Track Your Order</a
                  >
                </li>
                <li>
                  <i class="fas fa-phone"></i>
                  <a href="javascript:;;" class="font-weight-bold"
                    >+250788514704</a
                  >
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
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import { mapGetters } from "vuex";

export default {
  name: "mobile-sidebar",
  data() {
    return {
      title: "SHOP",
      showSympathy: false,
      showFlower: false,
      showBirthDay: false,
      showOccasion: false,
      showGift: false,
      hideModal: false,
      showHelp: false,
      logo: "/assets/images/logo.jpg",
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
  methods: {
    close() {
      this.$store.dispatch("setResources", [
        "trigger",
        {
          triggerMobileSideBar: false
        }
      ]);
    },
    login() {
      this.showGift = false;
      this.showSympathy = false;
      this.showFlower = false;
      this.showBirthDay = false;
      this.showOccasion = false;
      this.showHelp = false;
      this.close();
      this.$store.dispatch("setView", "login");
    }
  },
  computed: {
    ...mapGetters(["auth", "accessories", "resources"])
  }
};
</script>

<style scoped lang="scss">
.mobile-slider {
  width: 100%;
  right: 0;
  top: 0;
  bottom: 0;
  height: 100vh;
  transition: all 0.5s;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.02);
  font-family: "Roboto", sans-serif;
  .body-content-context {
    overflow-y: auto;
    left: 0;
    top: 0;
    bottom: 0;
    width: 280px;
    min-width: 280px;
    transition: all 1s ease;
    .header {
      height: 10vh;
      .back-btn {
        .line1 {
          transform: rotate(180deg) translate(0px, 0px);;
        }
        .line2 {
          opacity: 1;
        }
        .line3 {
          transform: rotate(180deg) translate(0px, 0px);
        }
        cursor: pointer;
        &:hover {
          opacity: 0.7;
        }
      }
      .toggle{
        cursor: pointer;
        &:hover {
          opacity: 0.7;
        }
        p {
          width: 20px;
          height: 3px;
          background-color: rgb(33, 37, 41);
          margin: 0.2rem;
          transition: all 1s ease;
        }
        .line1 {
          transform: rotate(-45deg) translate(-5px, 4px);
        }
        .line2 {
          opacity: 0;
        }
        .line3 {
          transform: rotate(45deg) translate(-5px, -4px);
        }
      }
    }
    .mobile-context {
      height: 90vh;
    }
  }
}
@media screen and (max-width: 730px) {
  .mobile-slider {
    .header-content {
      .nav-item {
        p {
          display: flex;
          justify-content: space-between;
          span {
            font-size: 75%;
            font-weight: bolder;
          }
        }
      }
    }
    .birthday-tab {
      ul {
        padding: 0 !important;
        p {
          font-size: 80% !important;
        }

        li {
          cursor: pointer;
          list-style: none;
          font-size: 75% !important;
          font-family: "Roboto", sans-serif;
          padding-bottom: 0.5rem;
          width: fit-content;
          &:hover {
            color: rgba(72, 56, 181, 0.79);
          }
        }
      }
    }
    .sympathy-tab {
      ul {
        padding: 0 !important;
        p {
          font-size: 80% !important;
        }

        li {
          cursor: pointer;
          list-style: none;
          font-size: 75% !important;
          font-family: "Roboto", sans-serif;
          padding-bottom: 0.5rem;
          width: fit-content;
          &:hover {
            color: rgba(72, 56, 181, 0.79);
          }
        }
      }
    }
    .occasion-tab {
      ul {
        padding: 0 !important;
        p {
          font-size: 80% !important;
        }

        li {
          cursor: pointer;
          list-style: none;
          font-size: 75% !important;
          font-family: "Roboto", sans-serif;
          padding-bottom: 0.5rem;
          width: fit-content;
          &:hover {
            color: rgba(72, 56, 181, 0.79);
          }
        }
      }
    }
    .flower-tab {
      ul {
        padding: 0 !important;
        p {
          font-size: 80% !important;
        }

        li {
          cursor: pointer;
          list-style: none;
          font-size: 75% !important;
          font-family: "Roboto", sans-serif;
          padding-bottom: 0.5rem;
          width: fit-content;
          &:hover {
            color: rgba(72, 56, 181, 0.79);
          }
        }
      }
    }
    .plants-gifts-tab {
      ul {
        padding: 0 !important;
        p {
          font-size: 80% !important;
        }

        li {
          cursor: pointer;
          list-style: none;
          font-size: 75% !important;
          font-family: "Roboto", sans-serif;
          padding-bottom: 0.5rem;
          width: fit-content;
          &:hover {
            color: rgba(72, 56, 181, 0.79);
          }
        }
      }
    }
    .help-tab {
      ul {
        padding: 0 !important;
        &:nth-child(1) {
          p {
            font-size: 80% !important;
          }
        }
        .menu-option {
          cursor: pointer;
          &:hover {
            color: rgba(72, 56, 181, 0.79);
          }
        }
      }
      .contact-container {
        padding-left: 1.5rem !important;
        p:nth-child(1) {
          font-size: 1.2rem !important;
          margin-bottom: 0 !important;
        }
        p:nth-child(2) {
          font-size: 0.8rem !important;
        }
        li {
          list-style: none;
          font-size: 75% !important;
          padding-bottom: 0.8rem !important;
          i {
            padding-right: 0.5rem;
          }
        }
      }
    }
  }
}
</style>

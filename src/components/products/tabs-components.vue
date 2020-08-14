<template>
  <div class="tabs-components-container">
    <birthDayCollection
      class="mb-4"
      @itemsLength="resultLength"
      v-if="result.length !== 0 && this.$route.params.params == 'all-Birthday'"
    />
    <sameDayBirthDayFlower
      class="mb-4"
      @itemsLength="resultLength"
      v-if="
        result.length !== 0 &&
          this.$route.params.params == 'same-day-birthday-flower'
      "
    />
    <birthdayFlowers
      class="mb-4"
      @itemsLength="resultLength"
      v-if="
        result.length !== 0 && this.$route.params.params == 'birthday-flowers'
      "
    />
    <birthday-roses
      class="mb-4"
      @itemsLength="resultLength"
      v-if="
        result.length !== 0 && this.$route.params.params == 'birthday-roses'
      "
    />
    <birthday-plants
      class="mb-4"
      @itemsLength="resultLength"
      v-if="
        result.length !== 0 && this.$route.params.params == 'birthday-plants'
      "
    />
    <birthday-delivery
      class="mb-4"
      @itemsLength="resultLength"
      v-if="
        result.length !== 0 && this.$route.params.params == 'birthday-delivery'
      "
    />
    <birthday-for-mom
      class="mb-4"
      @itemsLength="resultLength"
      v-if="
        result.length !== 0 && this.$route.params.params == 'birthday-for-mom'
      "
    />
    <birthday-for-friend
      class="mb-4"
      @itemsLength="resultLength"
      v-if="
        result.length !== 0 &&
          this.$route.params.params == 'birthday-for-friend'
      "
    />
    <birthday-for-wife
      class="mb-4"
      @itemsLength="resultLength"
      v-if="
        result.length !== 0 && this.$route.params.params == 'birthday-for-wife'
      "
    />
    <birthday-for-daughter
      class="mb-4"
      @itemsLength="resultLength"
      v-if="
        result.length !== 0 &&
          this.$route.params.params == 'birthday-for-daughter'
      "
    />
    <birthday-for-him
      class="mb-4"
      @itemsLength="resultLength"
      v-if="
        result.length !== 0 && this.$route.params.params == 'birthday-for-him'
      "
    />
    <anniversary-flowers
      class="mb-4"
      @itemsLength="resultLength"
      v-if="
        result.length !== 0 &&
          this.$route.params.params == 'anniversary-flowers'
      "
    />
    <new-baby-flowers
      class="my-4"
      @itemsLength="resultLength"
      v-if="
        result.length !== 0 && this.$route.params.params == 'new-baby-flowers'
      "
    />
    <just-because-gifts
      class="my-4"
      @itemsLength="resultLength"
      v-if="
        result.length !== 0 && this.$route.params.params == 'just-because-gifts'
      "
    />
    <get-well-flowers
      class="my-4"
      @itemsLength="resultLength"
      v-if="
        result.length !== 0 && this.$route.params.params == 'get-well-flowers'
      "
    />
    <romantic-flowers
      class="my-4"
      @itemsLength="resultLength"
      v-if="
        result.length !== 0 && this.$route.params.params == 'romantic-flowers'
      "
    />
    <thinking-of-you-flowers
      class="my-4"
      @itemsLength="resultLength"
      v-if="
        result.length !== 0 &&
          this.$route.params.params == 'thinking-of-you-flowers'
      "
    />
    <congratulation-flowers
      class="my-4"
      @itemsLength="resultLength"
      v-if="
        result.length !== 0 &&
          this.$route.params.params == 'congratulation-flowers'
      "
    />
    <thank-you-flowers
      class="my-4"
      @itemsLength="resultLength"
      v-if="
        result.length !== 0 && this.$route.params.params == 'thank-you-flowers'
      "
    />
    <engagement-flowers
      class="my-4"
      @itemsLength="resultLength"
      v-if="
        result.length !== 0 && this.$route.params.params == 'engagement-flowers'
      "
    />
    <sorry-flowers
      class="my-4"
      @itemsLength="resultLength"
      v-if="result.length !== 0 && this.$route.params.params == 'sorry-flowers'"
    />
    <wedding-flowers
      class="my-4"
      @itemsLength="resultLength"
      v-if="
        result.length !== 0 && this.$route.params.params == 'wedding-flowers'
      "
    />
    <retirement-flowers
      class="my-4"
      @itemsLength="resultLength"
      v-if="
        result.length !== 0 && this.$route.params.params == 'retirement-flowers'
      "
    />
    <housewarning-flowers
      class="my-4"
      @itemsLength="resultLength"
      v-if="
        result.length !== 0 &&
          this.$route.params.params == 'housewarning-flowers'
      "
    />
    <corporate-gift-flowers
      class="my-4"
      @itemsLength="resultLength"
      v-if="
        result.length !== 0 &&
          this.$route.params.params == 'corporate-gift-flowers'
      "
    />
    <gift-for-parent
      class="my-4"
      @itemsLength="resultLength"
      v-if="
        result.length !== 0 && this.$route.params.params == 'gift-for-parent'
      "
    />
    <friend-gift-flower
      class="my-4"
      @itemsLength="resultLength"
      v-if="
        result.length !== 0 && this.$route.params.params == 'friend-gift-flower'
      "
    />
    <sister-flowers
      class="my-4"
      @itemsLength="resultLength"
      v-if="
        result.length !== 0 && this.$route.params.params == 'sister-flowers'
      "
    />
    <sympathy-flowers
      class="my-4"
      @itemsLength="resultLength"
      v-if="
        result.length !== 0 && this.$route.params.params == 'sympathy-flowers'
      "
    />
    <same-day-sympathy-flowers
      class="my-4"
      @itemsLength="resultLength"
      v-if="
        result.length !== 0 &&
          this.$route.params.params == 'same-day-sympathy-flowers'
      "
    />
    <sympathy-plants
      class="my-4"
      @itemsLength="resultLength"
      v-if="
        result.length !== 0 && this.$route.params.params == 'sympathy-plants'
      "
    />
    <sympathy-flowers-gifts
      class="my-4"
      @itemsLength="resultLength"
      v-if="
        result.length !== 0 &&
          this.$route.params.params == 'sympathy-flowers-gifts'
      "
    />
    <funeral-flowers
      class="my-4"
      @itemsLength="resultLength"
      v-if="
        result.length !== 0 && this.$route.params.params == 'funeral-flowers'
      "
    />
    <funeral-sprays
      class="my-4"
      @itemsLength="resultLength"
      v-if="
        result.length !== 0 &&
          this.$route.params.params == 'funeral-standing-flowers'
      "
    />
    <summer-flowers
      class="my-4"
      @itemsLength="resultLength"
      v-if="
        result.length !== 0 && this.$route.params.params == 'summer-flowers'
      "
    />
    <best-selling-flowers
      class="my-4"
      @itemsLength="resultLength"
      v-if="
        result.length !== 0 &&
          this.$route.params.params == 'best-selling-flowers'
      "
    />
    <new-flowers-limited
      class="my-4"
      @itemsLength="resultLength"
      v-if="result.length !== 0 && this.$route.params.params == 'new-flowers'"
    />
    <limited-edition-collection
      class="my-4"
      @itemsLength="resultLength"
      v-if="
        result.length !== 0 &&
          this.$route.params.params == 'limited-edition-collection'
      "
    />
    <same-day-flowers-gifts-delivery
      class="my-4"
      @itemsLength="resultLength"
      v-if="
        result.length !== 0 &&
          this.$route.params.params == 'same-day-flowers-gifts'
      "
    />
    <flowers-by-mail
        class="my-4"
        @itemsLength="resultLength"
        v-if="
        result.length !== 0 &&
          this.$route.params.params == 'flowers-by-mail'
      "/>
    <best-selling-plants
      class="my-4"
      @itemsLength="resultLength"
      v-if="
        result.length !== 0 &&
          this.$route.params.params == 'best-selling-plants'
      "
    />
    <new-plants
      class="my-4"
      @itemsLength="resultLength"
      v-if="result.length !== 0 && this.$route.params.params == 'new-plants'"
    />
    <same-day-plant-delivery
      class="my-4"
      @itemsLength="resultLength"
      v-if="
        result.length !== 0 &&
          this.$route.params.params == 'same-day-plant-delivery'
      "
    />
  </div>
</template>

<script>
import birthDayCollection from "@/components/products/tabs-componets/birthDays/birth-day-collection";
import sameDayBirthDayFlower from "@/components/products/tabs-componets/birthDays/same-day-birthday";
import birthdayFlowers from "@/components/products/tabs-componets/birthDays/birthday-flowers";
import BirthdayRoses from "@/components/products/tabs-componets/birthDays/birthday-roses";
import BirthdayPlants from "@/components/products/tabs-componets/birthDays/birthday-plants";
import BirthdayDelivery from "@/components/products/tabs-componets/birthDays/birthday-delivery";
import BirthdayForMom from "@/components/products/tabs-componets/birthDays/birthday-for-mom";
import BirthdayForFriend from "@/components/products/tabs-componets/birthDays/birthday-for-friend";
import AnniversaryFlowers from "@/components/products/tabs-componets/occasions/anniversary-flowers";
import NewBabyFlowers from "@/components/products/tabs-componets/occasions/new-baby-flowers";
import JustBecauseGifts from "@/components/products/tabs-componets/occasions/just-because-gifts";
import GetWellFlowers from "@/components/products/tabs-componets/occasions/get-well-flowers";
import RomanticFlowers from "@/components/products/tabs-componets/occasions/romantic-flowers";
import SympathyFlowers from "@/components/products/tabs-componets/sympathy/sympathy-flowers";
import SameDaySympathyFlowers from "@/components/products/tabs-componets/sympathy/same-day-sympathy-flowers";
import SympathyPlants from "@/components/products/tabs-componets/sympathy/sympathy-plants";
import SympathyFlowersGifts from "@/components/products/tabs-componets/sympathy/sympathy-flowers-gifts";
import SummerFlowers from "@/components/products/tabs-componets/flowers/summer-flowers";
import BestSellingFlowers from "@/components/products/tabs-componets/flowers/best-selling-flowers";
import NewFlowersLimited from "@/components/products/tabs-componets/flowers/new-flowers-limited";
import LimitedEditionCollection from "@/components/products/tabs-componets/flowers/limited-edition-collection";
import BestSellingPlants from "@/components/products/tabs-componets/gift-plants/best-selling-plants";
import NewPlants from "@/components/products/tabs-componets/gift-plants/new-plants";
import SameDayPlantDelivery from "@/components/products/tabs-componets/gift-plants/same-day-plant-delivery";
import BirthdayForWife from "@/components/products/tabs-componets/birthDays/birthday-for-wife";
import BirthdayForDaughter from "@/components/products/tabs-componets/birthDays/birthday-for-daughter";
import BirthdayForHim from "@/components/products/tabs-componets/birthDays/birthday-for-him";
import FuneralFlowers from "@/components/products/tabs-componets/sympathy/funeral-flowers";
import FuneralSprays from "@/components/products/tabs-componets/sympathy/funeral-sprays";
import ThinkingOfYouFlowers from "@/components/products/tabs-componets/occasions/thinking-of-you-flowers";
import CongratulationFlowers from "@/components/products/tabs-componets/occasions/congratulation-flowers";
import ThankYouFlowers from "@/components/products/tabs-componets/occasions/thank-you-flowers";
import EngagementFlowers from "@/components/products/tabs-componets/occasions/engagement-flowers";
import SorryFlowers from "@/components/products/tabs-componets/occasions/sorry-flowers";
import WeddingFlowers from "@/components/products/tabs-componets/occasions/wedding-flowers";
import RetirementFlowers from "@/components/products/tabs-componets/occasions/retirement-flowers";
import HousewarningFlowers from "@/components/products/tabs-componets/occasions/housewarning-flowers";
import CorporateGiftFlowers from "@/components/products/tabs-componets/occasions/corporate-gift-flowers";
import GiftForParent from "@/components/products/tabs-componets/occasions/gift-for-parent";
import FriendGiftFlower from "@/components/products/tabs-componets/occasions/friend-gift-flower";
import SisterFlowers from "@/components/products/tabs-componets/occasions/sister-flowers";
import SameDayFlowersGiftsDelivery from "@/components/products/tabs-componets/flowers/same-day-flowers-gifts-delivery";
import FlowersByMail from "@/components/products/tabs-componets/flowers/flowers-by-mail";

export default {
  name: "tabs-components",
  components: {
    FlowersByMail,
    SameDayFlowersGiftsDelivery,
    SisterFlowers,
    FriendGiftFlower,
    GiftForParent,
    CorporateGiftFlowers,
    HousewarningFlowers,
    RetirementFlowers,
    WeddingFlowers,
    SorryFlowers,
    EngagementFlowers,
    ThankYouFlowers,
    CongratulationFlowers,
    ThinkingOfYouFlowers,
    FuneralSprays,
    FuneralFlowers,
    BirthdayForHim,
    BirthdayForDaughter,
    BirthdayForWife,
    SameDayPlantDelivery,
    NewPlants,
    BestSellingPlants,
    LimitedEditionCollection,
    NewFlowersLimited,
    BestSellingFlowers,
    SummerFlowers,
    SympathyFlowersGifts,
    SympathyPlants,
    SameDaySympathyFlowers,
    SympathyFlowers,
    RomanticFlowers,
    GetWellFlowers,
    JustBecauseGifts,
    NewBabyFlowers,
    AnniversaryFlowers,
    BirthdayDelivery,
    BirthdayForMom,
    BirthdayPlants,
    BirthdayRoses,
    birthDayCollection,
    sameDayBirthDayFlower,
    birthdayFlowers,
    BirthdayForFriend
  },
  data() {
    return {
      result: "0"
    };
  },
  methods: {
    resultLength(length) {
      this.result = length;
      this.$emit("itemsLength", length);
    }
  }
};
</script>

<style scoped lang="scss">
@media screen and( max-width: 768px) {
  .tabs-components-container {
    .same-day-birthday {
      padding: 1rem !important;
    }
    .birth-day-collection {
      padding: 1rem !important;
    }
    .birthday-gifts {
      padding: 1rem !important;
    }
    .birthday-flowers {
      padding: 1rem !important;
    }
    .birthday-plants {
      padding: 1rem !important;
    }
    .birthday-roses {
      padding: 1rem !important;
    }
    .best-selling-flowers {
      padding: 1rem !important;
    }
    .limited-edition-collection {
      padding: 1rem !important;
    }
    .new-flowers-limited {
      padding: 1rem !important;
    }
    .summer-flowers {
      padding: 1rem !important;
    }
    .best-selling-plants {
      padding: 1rem !important;
    }
    .new-plants {
      padding: 1rem !important;
    }
    .same-day-plant-delivery {
      padding: 1rem !important;
    }
    .anniversary-flowers {
      padding: 1rem !important;
    }
    .get-well-flowers {
      padding: 1rem !important;
    }
    .just-because-gifts {
      padding: 1rem !important;
    }
    .new-baby-flowers {
      padding: 1rem !important;
    }
    .romantic-flowers {
      padding: 1rem !important;
    }
    .same-day-sympathy-flowers {
      padding: 1rem !important;
    }
    .sympathy-flowers {
      padding: 1rem !important;
    }
    .sympathy-flowers-gifts {
      padding: 1rem !important;
    }
    .sympathy-plants {
      padding: 1rem !important;
    }
  }
}
@media screen and( max-width: 425px) {
  .tabs-components-container {
    .same-day-birthday {
      padding: 1rem !important;
    }
    .birth-day-collection {
      padding: 1rem !important;
    }
    .birthday-gifts {
      padding: 1rem !important;
    }
    .birthday-flowers {
      padding: 1rem !important;
    }
    .birthday-plants {
      padding: 1rem !important;
    }
    .birthday-roses {
      padding: 1rem !important;
    }
    .best-selling-flowers {
      padding: 1rem !important;
    }
    .limited-edition-collection {
      padding: 1rem !important;
    }
    .new-flowers-limited {
      padding: 1rem !important;
    }
    .summer-flowers {
      padding: 1rem !important;
    }
    .best-selling-plants {
      padding: 1rem !important;
    }
    .new-plants {
      padding: 1rem !important;
    }
    .same-day-plant-delivery {
      padding: 1rem !important;
    }
    .anniversary-flowers {
      padding: 1rem !important;
    }
    .get-well-flowers {
      padding: 1rem !important;
    }
    .just-because-gifts {
      padding: 1rem !important;
    }
    .new-baby-flowers {
      padding: 1rem !important;
    }
    .romantic-flowers {
      padding: 1rem !important;
    }
    .same-day-sympathy-flowers {
      padding: 1rem !important;
    }
    .sympathy-flowers {
      padding: 1rem !important;
    }
    .sympathy-flowers-gifts {
      padding: 1rem !important;
    }
    .sympathy-plants {
      padding: 1rem !important;
    }
  }
}
@media screen and( max-width: 375px) {
  .tabs-components-container {
    .same-day-birthday {
      padding: 1rem !important;
    }
    .birth-day-collection {
      padding: 1rem !important;
    }
    .birthday-gifts {
      padding: 1rem !important;
    }
    .birthday-flowers {
      padding: 1rem !important;
    }
    .birthday-plants {
      padding: 1rem !important;
    }
    .birthday-roses {
      padding: 1rem !important;
    }
    .best-selling-flowers {
      padding: 1rem !important;
    }
    .limited-edition-collection {
      padding: 1rem !important;
    }
    .new-flowers-limited {
      padding: 1rem !important;
    }
    .summer-flowers {
      padding: 1rem !important;
    }
    .best-selling-plants {
      padding: 1rem !important;
    }
    .new-plants {
      padding: 1rem !important;
    }
    .same-day-plant-delivery {
      padding: 1rem !important;
    }
    .anniversary-flowers {
      padding: 1rem !important;
    }
    .get-well-flowers {
      padding: 1rem !important;
    }
    .just-because-gifts {
      padding: 1rem !important;
    }
    .new-baby-flowers {
      padding: 1rem !important;
    }
    .romantic-flowers {
      padding: 1rem !important;
    }
    .same-day-sympathy-flowers {
      padding: 1rem !important;
    }
    .sympathy-flowers {
      padding: 1rem !important;
    }
    .sympathy-flowers-gifts {
      padding: 1rem !important;
    }
    .sympathy-plants {
      padding: 1rem !important;
    }
  }
}
@media screen and( max-width: 320px) {
  .tabs-components-container {
    .same-day-birthday {
      padding: 1rem !important;
    }
    .birth-day-collection {
      padding: 1rem !important;
    }
    .birthday-gifts {
      padding: 1rem !important;
    }
    .birthday-flowers {
      padding: 1rem !important;
    }
    .birthday-plants {
      padding: 1rem !important;
    }
    .birthday-roses {
      padding: 1rem !important;
    }
    .best-selling-flowers {
      padding: 1rem !important;
    }
    .limited-edition-collection {
      padding: 1rem !important;
    }
    .new-flowers-limited {
      padding: 1rem !important;
    }
    .summer-flowers {
      padding: 1rem !important;
    }
    .best-selling-plants {
      padding: 1rem !important;
    }
    .new-plants {
      padding: 1rem !important;
    }
    .same-day-plant-delivery {
      padding: 1rem !important;
    }
    .anniversary-flowers {
      padding: 1rem !important;
    }
    .get-well-flowers {
      padding: 1rem !important;
    }
    .just-because-gifts {
      padding: 1rem !important;
    }
    .new-baby-flowers {
      padding: 1rem !important;
    }
    .romantic-flowers {
      padding: 1rem !important;
    }
    .same-day-sympathy-flowers {
      padding: 1rem !important;
    }
    .sympathy-flowers {
      padding: 1rem !important;
    }
    .sympathy-flowers-gifts {
      padding: 1rem !important;
    }
    .sympathy-plants {
      padding: 1rem !important;
    }
  }
}
</style>

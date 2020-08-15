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
        result.length !== 0 && this.$route.params.params == 'flowers-by-mail'
      "
    />
    <all-flowers
      class="my-4"
      @itemsLength="resultLength"
      v-if="result.length !== 0 && this.$route.params.params == 'all-flowers'"
    />
    <alstroemerias
      class="my-4"
      @itemsLength="resultLength"
      v-if="result.length !== 0 && this.$route.params.params == 'alstroemerias'"
    />
    <carnations
      class="my-4"
      @itemsLength="resultLength"
      v-if="result.length !== 0 && this.$route.params.params == 'carnations'"
    />
    <daisies
      class="my-4"
      @itemsLength="resultLength"
      v-if="result.length !== 0 && this.$route.params.params == 'daisies'"
    />
    <gerbera-daisies
      class="my-4"
      @itemsLength="resultLength"
      v-if="result.length !== 0 && this.$route.params.params == 'gerberas'"
    />
    <hydrangeas
      class="my-4"
      @itemsLength="resultLength"
      v-if="result.length !== 0 && this.$route.params.params == 'hydrangeas'"
    />
    <irises
      class="my-4"
      @itemsLength="resultLength"
      v-if="result.length !== 0 && this.$route.params.params == 'irises'"
    />
    <lilies
      class="my-4"
      @itemsLength="resultLength"
      v-if="result.length !== 0 && this.$route.params.params == 'lilies'"
    />
    <mixed-flower-bouquets
      class="my-4"
      @itemsLength="resultLength"
      v-if="
        result.length !== 0 &&
          this.$route.params.params == 'mixed-flower-bouquets'
      "
    />
    <orchids
      class="my-4"
      @itemsLength="resultLength"
      v-if="result.length !== 0 && this.$route.params.params == 'orchids'"
    />
    <roses
      class="my-4"
      @itemsLength="resultLength"
      v-if="
        (result.length !== 0 && this.$route.params.params == 'roses') ||
          (result.length !== 0 && this.$route.params.params == 'all-roses')
      "
    />
    <snapdragons
      class="my-4"
      @itemsLength="resultLength"
      v-if="result.length !== 0 && this.$route.params.params == 'snapdragons'"
    />
    <sunflowers
      class="my-4"
      @itemsLength="resultLength"
      v-if="result.length !== 0 && this.$route.params.params == 'sunflowers'"
    />
    <tulips
      class="my-4"
      @itemsLength="resultLength"
      v-if="result.length !== 0 && this.$route.params.params == 'tulips'"
    />
    <blue-bouquets
      class="my-4"
      @itemsLength="resultLength"
      v-if="result.length !== 0 && this.$route.params.params == 'blue-flowers'"
    />
    <green-flowers
      class="my-4"
      @itemsLength="resultLength"
      v-if="result.length !== 0 && this.$route.params.params == 'green-flowers'"
    />
    <lavender-flowers
      class="my-4"
      @itemsLength="resultLength"
      v-if="
        result.length !== 0 && this.$route.params.params == 'lavender-flowers'
      "
    />
    <multi-color-flowers
      class="my-4"
      @itemsLength="resultLength"
      v-if="
        result.length !== 0 &&
          this.$route.params.params == 'multi-color-flowers'
      "
    />
    <orange-flowers
      class="my-4"
      @itemsLength="resultLength"
      v-if="
        result.length !== 0 && this.$route.params.params == 'orange-flowers'
      "
    />
    <pink-flowers
      class="my-4"
      @itemsLength="resultLength"
      v-if="result.length !== 0 && this.$route.params.params == 'pink-flowers'"
    />
    <purple-flowers
      class="my-4"
      @itemsLength="resultLength"
      v-if="
        result.length !== 0 && this.$route.params.params == 'purple-flowers'
      "
    />
    <red-flowers
      class="my-4"
      @itemsLength="resultLength"
      v-if="result.length !== 0 && this.$route.params.params == 'red-flowers'"
    />
    <white-flowers
      class="my-4"
      @itemsLength="resultLength"
      v-if="result.length !== 0 && this.$route.params.params == 'white-flowers'"
    />
    <yellow-flowers
      class="my-4"
      @itemsLength="resultLength"
      v-if="
        result.length !== 0 && this.$route.params.params == 'yellow-flowers'
      "
    />
    <blue-roses
      class="my-4"
      @itemsLength="resultLength"
      v-if="result.length !== 0 && this.$route.params.params == 'blue-roses'"
    />
    <multi-color-roses
      class="my-4"
      @itemsLength="resultLength"
      v-if="
        result.length !== 0 && this.$route.params.params == 'multi-color-roses'
      "
    />
    <orange-roses
      class="my-4"
      @itemsLength="resultLength"
      v-if="result.length !== 0 && this.$route.params.params == 'orange-roses'"
    />
    <pink-roses
      class="my-4"
      @itemsLength="resultLength"
      v-if="result.length !== 0 && this.$route.params.params == 'pink-roses'"
    />
    <rainbow-roses
      class="my-4"
      @itemsLength="resultLength"
      v-if="result.length !== 0 && this.$route.params.params == 'rainbow-roses'"
    />
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
    <all-plants
      class="my-4"
      @itemsLength="resultLength"
      v-if="result.length !== 0 && this.$route.params.params == 'all-plants'"
    />
    <bonsai-and-bamboo
      class="my-4"
      @itemsLength="resultLength"
      v-if="
        result.length !== 0 && this.$route.params.params == 'bonsai-&-bamboo'
      "
    />
    <green-plants
      class="my-4"
      @itemsLength="resultLength"
      v-if="result.length !== 0 && this.$route.params.params == 'green-plants'"
    />
    <office-plants
      class="my-4"
      @itemsLength="resultLength"
      v-if="result.length !== 0 && this.$route.params.params == 'office-plants'"
    />
    <succulents-suc
      class="my-4"
      @itemsLength="resultLength"
      v-if="
        result.length !== 0 && this.$route.params.params == 'succulents-&-cacti'
      "
    />
    <all-flowering-plants
      class="my-4"
      @itemsLength="resultLength"
      v-if="
        result.length !== 0 &&
          this.$route.params.params == 'all-flowering-plants'
      "
    />
    <azalea-plants
      class="my-4"
      @itemsLength="resultLength"
      v-if="result.length !== 0 && this.$route.params.params == 'azalea-plants'"
    />
    <bulbs-indoor-gardens
      class="my-4"
      @itemsLength="resultLength"
      v-if="
        result.length !== 0 &&
          this.$route.params.params == 'bulbs-&-indoor-gardens'
      "
    />
    <calla-lilies
      class="my-4"
      @itemsLength="resultLength"
      v-if="result.length !== 0 && this.$route.params.params == 'calla-lilies'"
    />
    <peace-lily-plants
      class="my-4"
      @itemsLength="resultLength"
      v-if="
        result.length !== 0 && this.$route.params.params == 'peace-lily-plants'
      "
    />
    <potted-rose-plants
      class="my-4"
      @itemsLength="resultLength"
      v-if="
        result.length !== 0 && this.$route.params.params == 'potted-rose-plants'
      "
    />
    <best-selling-gifts
      class="my-4"
      @itemsLength="resultLength"
      v-if="
        result.length !== 0 && this.$route.params.params == 'best-selling-gifts'
      "
    />
    <flowers-gifts-bundles
      class="my-4"
      @itemsLength="resultLength"
      v-if="result.length !== 0 && this.$route.params.params == 'bundles-bun'"
    />
    <all-gift-baskets
      class="my-4"
      @itemsLength="resultLength"
      v-if="
        result.length !== 0 && this.$route.params.params == 'all-gift-baskets'
      "
    />
    <fruit-gift-baskets
      class="my-4"
      @itemsLength="resultLength"
      v-if="
        result.length !== 0 && this.$route.params.params == 'fruit-gift-baskets'
      "
    />
    <meat-cheese-baskets
      class="my-4"
      @itemsLength="resultLength"
      v-if="
        result.length !== 0 &&
          this.$route.params.params == 'meat-&-cheese-baskets'
      "
    />
    <span-gift-baskets
      class="my-4"
      @itemsLength="resultLength"
      v-if="
        result.length !== 0 && this.$route.params.params == 'span-gift-baskets'
      "
    />
    <starbucks-gift-baskets
      class="my-4"
      @itemsLength="resultLength"
      v-if="
        result.length !== 0 &&
          this.$route.params.params == 'starbucks-gift-baskets'
      "
    />
    <all-gourmet-food-gifts
      class="my-4"
      @itemsLength="resultLength"
      v-if="
        result.length !== 0 &&
          this.$route.params.params == 'all-gourmet-food-gifts'
      "
    />
    <candy-gifts
      class="my-4"
      @itemsLength="resultLength"
      v-if="result.length !== 0 && this.$route.params.params == 'candy-gifts'"
    />
    <chocolate-covered-strawberry
      class="my-4"
      @itemsLength="resultLength"
      v-if="
        result.length !== 0 &&
          this.$route.params.params == 'chocolate-covered-strawberries'
      "
    />
    <chocolate-gifts
      class="my-4"
      @itemsLength="resultLength"
      v-if="
        result.length !== 0 && this.$route.params.params == 'chocolate-gifts'
      "
    />
    <desserts-baked-goods
      class="my-4"
      @itemsLength="resultLength"
      v-if="
        result.length !== 0 &&
          this.$route.params.params == 'desserts-&-baked-goods'
      "
    />
    <godiva-chocolates
      class="my-4"
      @itemsLength="resultLength"
      v-if="
        result.length !== 0 && this.$route.params.params == 'godiva-chocolates'
      "
    />
    <mrs-fields-cookies
      class="my-4"
      @itemsLength="resultLength"
      v-if="
        result.length !== 0 && this.$route.params.params == 'mrs-fields-cookies'
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
import AllFlowers from "@/components/products/tabs-componets/flowers/all-flowers";
import Alstroemerias from "@/components/products/tabs-componets/flowers/alstroemerias";
import Carnations from "@/components/products/tabs-componets/flowers/carnations";
import Daisies from "@/components/products/tabs-componets/flowers/daisies";
import GerberaDaisies from "@/components/products/tabs-componets/flowers/gerbera-daisies";
import Hydrangeas from "@/components/products/tabs-componets/flowers/hydrangeas";
import Irises from "@/components/products/tabs-componets/flowers/irises";
import Lilies from "@/components/products/tabs-componets/flowers/lilies";
import MixedFlowerBouquets from "@/components/products/tabs-componets/flowers/mixed-flower-bouquets";
import Orchids from "@/components/products/tabs-componets/flowers/orchids";
import Roses from "@/components/products/tabs-componets/flowers/roses";
import Snapdragons from "@/components/products/tabs-componets/flowers/snapdragons";
import Sunflowers from "@/components/products/tabs-componets/flowers/sunflowers";
import Tulips from "@/components/products/tabs-componets/flowers/tulips";
import BlueBouquets from "@/components/products/tabs-componets/flowers/blue-bouquets";
import GreenFlowers from "@/components/products/tabs-componets/flowers/green-flowers";
import LavenderFlowers from "@/components/products/tabs-componets/flowers/lavender-flowers";
import MultiColorFlowers from "@/components/products/tabs-componets/flowers/multi-color-flowers";
import OrangeFlowers from "@/components/products/tabs-componets/flowers/orange-flowers";
import PinkFlowers from "@/components/products/tabs-componets/flowers/pink-flowers";
import PurpleFlowers from "@/components/products/tabs-componets/flowers/purple-flowers";
import RedFlowers from "@/components/products/tabs-componets/flowers/red-flowers";
import WhiteFlowers from "@/components/products/tabs-componets/flowers/white-flowers";
import YellowFlowers from "@/components/products/tabs-componets/flowers/yellow-flowers";
import BlueRoses from "@/components/products/tabs-componets/flowers/blue-roses";
import MultiColorRoses from "@/components/products/tabs-componets/flowers/multi-color-roses";
import OrangeRoses from "@/components/products/tabs-componets/flowers/orange-roses";
import PinkRoses from "@/components/products/tabs-componets/flowers/pink-roses";
import RainbowRoses from "@/components/products/tabs-componets/flowers/rainbow-roses";
import AllPlants from "@/components/products/tabs-componets/gift-plants/all-plants";
import BonsaiAndBamboo from "@/components/products/tabs-componets/gift-plants/bonsai-and-bamboo";
import GreenPlants from "@/components/products/tabs-componets/gift-plants/green-plants";
import OfficePlants from "@/components/products/tabs-componets/gift-plants/office-plants";
import SucculentsSuc from "@/components/products/tabs-componets/gift-plants/succulents-suc";
import AllFloweringPlants from "@/components/products/tabs-componets/gift-plants/all-flowering-plants";
import AzaleaPlants from "@/components/products/tabs-componets/gift-plants/azalea-plants";
import BulbsIndoorGardens from "@/components/products/tabs-componets/gift-plants/bulbs-indoor-gardens";
import CallaLilies from "@/components/products/tabs-componets/gift-plants/calla-lilies";
import PeaceLilyPlants from "@/components/products/tabs-componets/gift-plants/peace-lily-plants";
import PottedRosePlants from "@/components/products/tabs-componets/gift-plants/potted-rose-plants";
import BestSellingGifts from "@/components/products/tabs-componets/gift-plants/best-selling-gifts";
import FlowersGiftsBundles from "@/components/products/tabs-componets/gift-plants/flowers-gifts-bundles";
import AllGiftBaskets from "@/components/products/tabs-componets/gift-plants/all-gift-baskets";
import FruitGiftBaskets from "@/components/products/tabs-componets/gift-plants/fruit-gift-baskets";
import MeatCheeseBaskets from "@/components/products/tabs-componets/gift-plants/meat-cheese-baskets";
import SpanGiftBaskets from "@/components/products/tabs-componets/gift-plants/span-gift-baskets";
import StarbucksGiftBaskets from "@/components/products/tabs-componets/gift-plants/starbucks-gift-baskets";
import AllGourmetFoodGifts from "@/components/products/tabs-componets/gift-plants/all-gourmet-food-gifts";
import CandyGifts from "@/components/products/tabs-componets/gift-plants/candy-gifts";
import ChocolateCoveredStrawberry from "@/components/products/tabs-componets/gift-plants/chocolate-covered-strawberry";
import ChocolateGifts from "@/components/products/tabs-componets/gift-plants/chocolate-gifts";
import DessertsBakedGoods from "@/components/products/tabs-componets/gift-plants/desserts-baked-goods";
import GodivaChocolates from "@/components/products/tabs-componets/gift-plants/godiva-chocolates";
import MrsFieldsCookies from "@/components/products/tabs-componets/gift-plants/mrs-fields-cookies";

export default {
  name: "tabs-components",
  components: {
    MrsFieldsCookies,
    GodivaChocolates,
    DessertsBakedGoods,
    ChocolateGifts,
    ChocolateCoveredStrawberry,
    CandyGifts,
    AllGourmetFoodGifts,
    StarbucksGiftBaskets,
    SpanGiftBaskets,
    MeatCheeseBaskets,
    FruitGiftBaskets,
    AllGiftBaskets,
    FlowersGiftsBundles,
    BestSellingGifts,
    PottedRosePlants,
    PeaceLilyPlants,
    CallaLilies,
    BulbsIndoorGardens,
    AzaleaPlants,
    AllFloweringPlants,
    SucculentsSuc,
    OfficePlants,
    GreenPlants,
    BonsaiAndBamboo,
    AllPlants,
    RainbowRoses,
    PinkRoses,
    OrangeRoses,
    MultiColorRoses,
    BlueRoses,
    YellowFlowers,
    WhiteFlowers,
    RedFlowers,
    PurpleFlowers,
    PinkFlowers,
    OrangeFlowers,
    MultiColorFlowers,
    LavenderFlowers,
    GreenFlowers,
    BlueBouquets,
    Tulips,
    Sunflowers,
    Snapdragons,
    Roses,
    Orchids,
    MixedFlowerBouquets,
    Lilies,
    Irises,
    Hydrangeas,
    GerberaDaisies,
    Daisies,
    Carnations,
    Alstroemerias,
    AllFlowers,
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

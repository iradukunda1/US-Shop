<template>
  <div class="roses w-100 position-relative pt-2 pl-5 pr-5">
    <div class="header-content">
      <p class="pb-2 h2">Roses Delivery</p>
      <p class="text-justify fa-14 pb-4">
        Roses are the quintessential flower of romance — but they’re not
        restricted to it! Whether you’re sending a bouquet of anniversary
        flowers to the special someone in your life, reminding your mom how
        important she is to you, or saying congratulations to that new graduate,
        roses are the perfect way to send your love. Browse our collection of
        stunning blooms, from passionate crimson to playful yellow and even
        mysterious dark blue.
      </p>
    </div>
    <div class="birth-product-container row justify-content-around w-100 mx-0">
      <div
        class="my-2 mx-2"
        v-for="(product, index) in products"
        :key="index"
        style="height: 20rem"
      >
        <card-template :item="product" :showOptions="false" />
      </div>
    </div>
    <empty-results v-if="!products.length" />
    <div class="row mx-0 w-100 button-collection justify-content-center">
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Flower Online
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Flower Same Day Delivery
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Send Flower Cheap
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Flower Delivery RW
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Flower And Chocolate
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Flower Bouquet
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Preserved Roses
      </a>
    </div>
    <div class="footer-content mt-4">
      <p class="fa-14 py-4 font-weight-bold">
        What do roses symbolize?
      </p>
      <p class="text-justify fa-13 pb-2">
        Roses are often considered symbols of love, adoration, and passion.
        While that’s certainly true of red roses, S.U-Bouquets offers numerous
        colors to choose from, each symbolizing their own unique message. Some
        colors with special meanings include:
      </p>
      <ul>
        <li class="fa-13 pb-3">
          Yellow roses: Yellow roses signify cheer, joy, and excitement, making
          them perfect for graduations and flowers for mom’s birthday.
        </li>
        <li class="fa-13 pb-3">
          Orange roses: Orange roses symbolize energy, vitality, friendship, or
          passion, and are great for friends and lovers alike.
        </li>
        <li class="fa-13 pb-3">
          Blue roses: Blue roses mean mystery and the unattainable, which is
          ideal for a complicated romance.
        </li>
        <li class="fa-13 pb-3">
          White roses: White roses symbolize youth, purity, and rebirth, making
          them an excellent choice for weddings and new moms.
        </li>
        <li class="fa-13 pb-3">
          Multicolored roses: Multicolored roses signify cheer, fun, passion,
          and enjoyment of life — perfect for all occasions!
        </li>
      </ul>
      <p class="font-weight-bold fa-13 pb-2 mb-0">
        What is special about roses?
      </p>
      <p class=" fa-13 py-2">
        Roses have been a prized flower for millennia. It’s easy to see why:
        their gorgeous concentric petals that spiral out in a mesmerizing
        Fibonacci pattern and their delicate perfumed scent that brings thoughts
        of love and peace are enough to make them a beloved favorite. However,
        that’s not all.
      </p>
      <p class="font-weight-bold fa-13 pb-2 mb-0">
        Orchids Will Not Only Liven Rooms, They Will Liven You!
      </p>
      <p class="fa-13 pb-2">
        Today, orchids are commonly sent as thoughtful gifts or purchased for
        home and office décor. However, history shows that the orchid flower is
        thought to be a very powerful plant. Dating back to the ancient Greeks,
        many cultures across the world believed that orchids have healing and
        disease-fighting properties. If you’re suffering from a cough or even
        lung disease, traditional Chinese medicine suggests a treatment of
        herbal remedies including orchids. The Greeks were even known to use
        orchids to fuel their power and strength (probably to fight the
        Romans)—and even as an aphrodisiac! If you want to encapsulate the aura
        of the Victorian era, send flowers that are known to be proven
        treasures. The mystified beauty of orchids is not only irresistibly
        charming, they’re the perfect plant to keep you healthy. Decorating your
        rooms with plants improves air quality, reduces stress, and will help
        you sleep better at night. So… what’s the wait!
      </p>
      <p class="fa-13 pb-2">
        Roses are especially favored due to their evocation of love. When you’re
        trying to woo someone, show your significant other how important they
        are to you, or make amends after a fight, a bouquet of a dozen roses is
        always a sure bet. With so many options to choose from, S.U-Bouquets makes
        rose delivery easy. Simply pick the color and style of bouquet that you
        think best fits the occasion, then click to send roses to whoever the
        lucky recipient is.
      </p>
      <p class="font-weight-bold fa-14 py-3">How do you care for roses?</p>
      <p class="fa-13 pb-2">
        Caring for a bouquet of roses is simple if you follow these
        instructions:
      </p>
      <ul class="list-unstyled">
        <li class="fa-13 pb-3">
         1.  First, cut the stems of your roses to fit the size of your vase. Be
          sure to cut the stems at a diagonal.
        </li>
        <li class="fa-13 pb-3">
          2. Then, fill your vase with fresh water at about room temperature.
        </li>
        <li class="fa-13 pb-3">3. Stir in a packet of flower food.</li>
        <li class="fa-13 pb-3">
          4. Place the roses in the water and arrange them to your liking.
        </li>
        <li class="fa-13 pb-3">
         5.  Place your vase and bouquet in a spot that gets plenty of indirect
          sunlight, but doesn’t get too overheated.
        </li>
        <li class="fa-13 pb-3">
         6. Repeat this process every 2 to 3 days to ensure that your roses last
          as long as possible.
        </li>
      </ul>
      <p class="fa-13 text-justify pt-3">
        With the right care and attention, your rose bouquet can last up to a
        week or even a little longer. Plus, with S.U-Bouquets, you can rest
        assured that you will receive only the freshest, loveliest roses from
        our local growers around the country.
      </p>
    </div>
  </div>
</template>

<script>
import EmptyResults from "@/components/products/tabs-componets/empty-results";
import cardTemplate from "@/components/shared/CardTemplate";
import products from "@/components/products/controllers/products";

export default {
  name: "roses",
  components: { EmptyResults, cardTemplate },
  data() {
    return {
      products: products.products
    };
  },
  mounted() {
    this.$emit("itemsLength", this.products.length);
  }
};
</script>

<style scoped></style>

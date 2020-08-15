<template>
  <div class="orchids w-100 position-relative pt-2 pl-5 pr-5">
    <div class="header-content">
      <p class="pb-2 h2">Orchid Flowers</p>
      <p class="text-justify fa-14 pb-4">
        Send Orchids - One of the most elegant flowers, the orchid is strikingly
        exotic and instantly takes any tabletop in the home from boring to chic.
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
      Potted Plant Delivery
    </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Irises
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Daisies
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Carnation Bouquets
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Mum Bouquets
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Azalea Bouquets
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        Tulip Bouquet
      </a>
      <a
        class="fa-14 my-4 text-center font-weight-bold rounded-0 mx-2 btn py-2 px-4"
        href="javascript:;;"
      >
        sunFlower
      </a>
    </div>
    <div class="footer-content mt-4">
      <p class=" h3 py-4 font-weight-bold">
        Orchid Flower Delivery
      </p>
      <p class="text-justify fa-13 pb-2">
        Orchid delivery has never been easier! With S.U-Bouquets, you can send one
        of the most elegant flowers, the orchid, to a loved one and instantly
        take any tabletop in their home from boring to chic. Whether you’re
        looking to surprise your mom on Mother’s Day or spruce up your office,
        an exotic orchid will breathe life into any room it’s placed!
      </p>
      <p class="font-weight-bold fa-13 pb-2 mb-0">
        Make Any Room Blossom When You Send Orchids
      </p>
      <p class=" fa-13 py-2">
        Classic, exotic and gorgeous; these words beautifully describe the
        unparalleled variety of exotic flowers and plants available for delivery
        from S.U-Bouquets. Send orchids online with S.U-Bouquets, delivering some of
        the classiest and most historic plants treasured from around the world.
        Choose from the glorious deluxe purple dendrobium orchid, flaunting
        petals in bright hues of purple and white, to a breathtaking
        double-stemmed kaleidoscope phalaenopsis orchid that will make any
        guest’s mouth drop. Want to surprise a loved one with something more
        than a bouquet? We offer potted plant delivery services for dozens of
        unique flowers that will stand the test of time. With the right tender,
        love, and care, our timeless flowers will bring beauty and grace for
        years to come. Over 25,000 different orchid species exist across all 6
        habitable continents (sorry Antarctica!). This leaves choosing the
        perfect orchid somewhat difficult. Well, we made that decision a little
        easier by cultivating the most beautiful selection of orchids for you to
        pick from. Our orchids online will bring a splash of color that will
        make you gasp and say “wow!” every time you walk by. Any variety of
        orchid flowers makes great gifts for birthdays, housewarming
        celebrations, Easter, and more!
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
      <p class="font-weight-bold fa-13 pb-2 mb-0">
        Can I Get Same-Day Orchid Delivery?
      </p>
      <p class="fa-13 pb-2">
        Did you drop the ball on a special occasion and completely forgot to
        order a gift? Whether it’s for a retirement celebration or your
        grandma’s birthday, choose to send flowers same-day delivery for any
        occasion. You can get same-day orchid flower delivery by selecting a
        simple, yet stylish FTD White Orchid Planter. Or, you can pick from over
        a hundred unique flowers with same-day delivery. Mourning the loss of a
        vet who served our country? Our Remembrance Wreaths will preserve their
        memory and service in beauty. Or, send your long-distance partner a rose
        bouquet for your anniversary! If you’re ready to send your same-day
        flowers, order before 2 PM Monday-Friday and 1 PM Saturday and Sunday in
        the respective time zone to ensure you roll up to the occasion with a
        gift at hand! Worried your orchid gift may be difficult to handle? The
        true beauty of these colorful plants is that with just a little bit of
        care, your loved ones will enjoy a bounty of blooms for many years to
        come. Each plant from S.U-Bouquets comes with easy care instructions and a
        100% satisfaction guarantee. Send orchids online from S.U-Bouquets and
        delight someone you love today.
      </p>
    </div>
  </div>
</template>

<script>
import EmptyResults from "@/components/products/tabs-componets/empty-results";
import cardTemplate from "@/components/shared/CardTemplate";
import products from "@/components/products/controllers/products";

export default {
  name: "orchids",
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

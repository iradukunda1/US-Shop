<template>
  <div class="products mb-2">
    <div class="row mr-auto">
      <div class="col-md-3 order-md-1 mb-4 pl-4">
        <product-filter :categories="categories" :price="price" />
      </div>
      <div class="col-md-9 order-md-2 list-2">
        <div class="ft-container">
          <div class="feat">
            <span class="txt-ft" aria-current="page">PRODUCTS</span>
          </div>
          <card-loader :loopCount="8" v-if="loading" />
          <modal @reloadProduct="updateProducts()" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  /* eslint-disable */
import CardLoader from "@/components/shared/CardLoader";
import ProductFilter from "@/components/products/filters/ProductFilter";
import modal from "@/components/shared/Modal";
import { mapGetters } from "vuex";
import _ from "lodash";

export default {
  name: "allProducts",
  components: {
    CardLoader,
    ProductFilter,
    modal,
  },
  data() {
    return {
      categories: ["new products", "best products", "popular products"],
      price: ["High", "low"],
      fabric: ["tissue", "hard", "leather"],
      loading: false,
    };
  },
  methods: {
    updateProducts() {
      this.fetchAllProducts();
    },
    fetchAllProducts() {
      this.loading = true;
      this.loader(true, {
        context: "fetching all products....",
        area: "app",
      }),
        this.$store
          .dispatch("fetchProducts")
          .then((res) => {
            this.loading = false
            this.loader(false);
          })
          .catch((err) => {
            this.loading = false
            this.loader(false);
            errorToaster(
              "Error while fetching",
              "sorry you seems to be offline"
            );
          });
    },
  },

  computed: {
    ...mapGetters(["resources"]),
    products() {
      return this.resources.products;
    },
    products_list() {
      return this.products;
    },
    product_duplicate() {
      return this.products.products;
    },
    filteredProducts() {
      return this.products.products.filter((product) => {
        return product;
      });
    },
  },

  mounted() {
    this.fetchAllProducts();
    console.log(this.products);
  },
  created() {
    // this.categories = _.uniqBy(
    //   _.map(this.products_list, function(object) {
    //     return _.pick(object, ["categories"]);
    //   }),
    //   "categories"
    // );
    // this.categories.unshift({ categories: "All" });
    // this.sellers = _.uniqBy(
    //   _.map(this.products_list, function(object) {
    //     return _.pick(object, ["productSeller"]);
    //   }),
    //   "productSeller"
    // );
    // this.sellers.unshift({ productSeller: "All" });
  },
};
</script>

<style lang="scss">
.products {
  margin-top: 40px;
  .list-2 {
    background-color: white;
    border: 1px solid gainsboro;
  }
}

.ft-container {
  padding: 1em;

  .feat {
    border: 1px solid gainsboro;
    height: 30px;
    padding-top: 2px;

    .txt-ft {
      font-weight: bold;
      color: #aba8a8;
      font-family: "roboto";
      font-size: 18px;
      float: left;
      margin-left: 1em;
    }
  }
}
</style>

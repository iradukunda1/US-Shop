<template>
  <div class="products">
    <div class="row justify-content-around h-100">
      <div
        class="d-inline mx-1"
        v-for="item in products_list.products"
        :key="item.id"
      >
        <card-template :item="item" width="100%" v-if="!loading" />
      </div>
      <div
        class="ml-auto mt-auto mr-2"
        v-if="products_list.products && products_list.products.length == 10"
      >
        <div class="col-md-12">
          <nav aria-label="...">
            <ul class="pagination">
              <li class="page-item disabled">
                <a class="page-link" href="#" tabindex="-1">Previous</a>
              </li>
              <li class="page-item  active">
                <a class="page-link" href="#">
                  <span class="sr-only">(current)</span>1</a
                >
              </li>
              <li class="page-item">
                <a class="page-link" href="#">2</a>
              </li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
              <li class="page-item">
                <a class="page-link" href="#">Next</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div
        v-if="products_list.products && !products_list.products.length"
        class="text-danger error-template "
      >
        <h1 class="px-5">Oops!</h1>
        <h2>No Products Found</h2>
      </div>
      <card-loader :loopCount="8" v-if="loading" />
    </div>
  </div>
</template>
<script>
  /* eslint-disable */
import axios from "axios";
import CardTemplate from "../shared/CardTemplate";
import CardLoader from "../shared/CardLoader";

export default {
  name: "productslist",
  props: ["products_list", "loading"],
  components: { CardTemplate, CardLoader },
  data() {
    return {
      selectedProduct: Object,
      edit: {},
    };
  },
  methods: {},
  mounted() {
  },
};
</script>

<style>
.footerIcons {
  font-size: 95%;
}

.card {
  height: 490px;
}

.card-text {
  height: 70px;
  overflow: hidden;
}
</style>

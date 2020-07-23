<template>
  <div class="productFilter">
    <div id="prdfilter">
      <ul class="list-group cat">
        <li class="list-group-item cat-title">Shop By Category</li>
        <li
          class="list-group-item"
          v-for="val in categories"
          :key="val"
          @click="event => updateFilter(event, val)"
        >
          {{ val }}
        </li>
      </ul>
      <ul class="list-group cat">
        <li class="list-group-item cat-title">Shop By Price</li>
        <li
          class="list-group-item"
          v-for="val in price"
          :key="val"
          @click="event => updateFilter(event, val)"
        >
          {{ val }}
        </li>
      </ul>
      <ul class="list-group cat">
        <li class="list-group-item cat-title">Shop By Fabric</li>
        <li
          class="list-group-item"
          v-for="val in fabric"
          :key="val"
          @click="event => updateFilter(event, val)"
        >
          {{ val }}
        </li>
      </ul>
    </div>
    <create-product ref="createProduct" />
  </div>
</template>
<script>
/* eslint-disable */
import CreateProduct from "../actions/CreateProduct";
import { mapState } from "vuex";

export default {
  name: "productFilter",
  props: ["categories", "price", "fabric"],
  components: { CreateProduct },
  computed: mapState(["loggedUser"]),
  data() {
    return {
      selectedCategory: "All",
      selectedSeller: "All",
      showCreateProductModal: false
    };
  },
  methods: {
    updateFilter(event, productFilterID) {
      this.$parent.filterProductBy(event, productFilterID);
    },
    openCreateModal() {
      this.$refs.createProduct.showModalForm();
    }
  }
};
</script>

<style lang="scss">
.productFilter {
  #prdfilter {
    text-align: start !important;
  }

  .cat {
    margin-bottom: 2rem;
    box-shadow: 0px 0px 5px #c7c4c4;

    li {
      text-transform: uppercase;
      font-size: 12px;
      font-family: roboto;
      background: #f9f9f9;
      cursor: pointer;

      &:hover {
        background: #e4e2e6;
      }
    }

    .cat-title {
      background: #333358;
      color: white;
      text-transform: uppercase;
      font-size: 13px;
      cursor: default;
      font-weight: bold;

      &:hover {
        background: #333358;
      }
    }
  }
}
</style>

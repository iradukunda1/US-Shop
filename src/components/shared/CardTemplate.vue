<template>
  <div class="cardTemplate h-100 w-100">
    <div class="card mb-4 shadow-sm h-100" id="img-card">
      <div class="set-data">
        <div class="img-set-data">
          <img :src="item.images_urls[0]" />
        </div>
        <ul class="options" v-if="showOptions !== 'currency' && showOptions">
          <li>
            <a href="javascript:;;" @click="navigateProductDetail(item)"
              ><i class="fa fa-eye"></i
            ></a>
          </li>
          <li data-target="#editProduct" data-toggle="modal">
            <a href="javascript:;;" @click="createComment(item)"
              ><i class="fa fa-pen"></i
            ></a>
          </li>
          <li>
            <a href="javascript:;;" @click="addToCart(item)"
              ><i class="fa fa-shopping-cart"></i
            ></a>
          </li>
        </ul>
      </div>
      <div class="card-body">
        <div class="d-flex justify-content-between align-items-center">
          <p class="productName">{{ item.name }}</p>
          <span style="display: inline-flex">
            <p class="product-offer-price" :class="{'d-none':showOptions}">
              {{ item.price + " " + item.currency }}
            </p>
          </span>
        </div>
      </div>
      <commentModalForm
        v-if="showCommentModal"
        :comment="productComment"
        @close="handleCloseComment"
        :show="show"
      />
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import { mapState, mapMutations } from "vuex";
import { infoToaster, successToaster } from "./service/ErrorHandler";
import commentModalForm from "./Modal";
import _ from "lodash";

export default {
  name: "cardTemplate",
  props: ["item", "showOptions"],
  components: { commentModalForm },
  data() {
    return {
      showCommentModal: false,
      productComment: null,
      show: false
    };
  },
  computed: mapState(["loggedUser"]),
  methods: {
    navigateProductDetail(product) {
      this.$router.push("products/" + product.id);
      this.$store.dispatch("setResources", ["product", product]);
    },

    ...mapMutations(["ADD_CART_LOCAL"]),

    addToCart(item) {
      const data = _.find(this.$store.getters.cartProducts, item);
      if (data) {
        infoToaster(
          "Already Added",
          `Your Product <b> ${item.name} </b> is Already Added`
        );
      } else {
        successToaster(
          "Added Successfully",
          `The Product <b> ${item.name} </b> was Added Successfully`
        );
        this.ADD_CART_LOCAL(item);
      }
    },
    handleCloseComment() {
      this.show = false;
      this.showCommentModal = false;
    },
    createComment(item) {
      this.show = true;
      this.showCommentModal = true;
      this.productComment = item;
    }
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
$mainColor: #e7257c;
#img-card {
  min-width: 250px;
}

.productName {
  font-size: 0.9em;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
}

.product-offer-price {
  font-size: 0.8em;
  color: $mainColor;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
}

.product-actual-price {
  font-size: 0.8em;
  color: $mainColor;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  margin-right: 1rem;
}

.set-data {
  position: relative;
  height: 500px;
  width: 100%;
  overflow: hidden;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
  transition: box-shadow 0.3s ease-out;
}

.set-data:hover {
  box-shadow: 1px 2px 10px rgba(0, 0, 0, 0.5);
}

.img-set-data {
  background-color: #000;
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  transition: transform 0.3s ease-out;
  z-index: 2;
}

.img-set-data:hover {
  cursor: pointer;
}

.set-data:hover .img-set-data {
  transform: scale(1.5);
}

.img-set-data > img {
  height: 100%;
  width: 100%;
  transition: opacity 0.3s ease-out;
}

.set-data:hover > .img-set-data > img {
  opacity: 0.5;
}

.options {
  display: flex;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  margin: 0;
  padding: 0;
}

.options > li {
  list-style: none;
}

.options > li > a {
  display: block;
  height: 50px;
  width: 50px;
  background-color: #fff;
  text-align: center;
  color: #262626;
  margin: 0 5px;
  border-radius: 50%;
  opacity: 0;
  transform: translateY(200px);
  transition: all 0.3s ease-out;
}

.set-data:hover > .options > li > a {
  transform: translateY(0);
  opacity: 1;
}

.options > li > a > .fa {
  font-size: 24px;
  line-height: 50px;
  transition: transform 0.3s ease-out;
}

.options > li > a:hover > .fa {
  transform: rotateY(360deg);
}

.set-data:hover .options li:nth-child(1) a {
  transition-delay: 0s;
}

.set-data:hover .options li:nth-child(2) a {
  transition-delay: 0.1s;
}

.set-data:hover .options li:nth-child(3) a {
  transition-delay: 0.2s;
}

.set-data:hover .options li:nth-child(4) a {
  transition-delay: 0.3s;
}

.set-data:hover .options li:nth-child(5) a {
  transition-delay: 0.4s;
}
</style>

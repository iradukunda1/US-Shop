<template>
  <div class="product-details w-100 position-relative" v-if="product.id && !processing">
    <div class="container ">
      <div class="row py-3">
        <div class="preview col-md-6">
          <div class="preview-pic tab-content">
            <div class="tab-pane active" id="pic-1">
              <img src="/img/tsapal3.jpg" />
            </div>
            <div class="tab-pane" id="pic-2"><img src="/img/2.jpg" /></div>
            <div class="tab-pane" id="pic-3"><img src="/img/3.jpg" /></div>
            <div class="tab-pane" id="pic-4"><img src="/img/4.jpg" /></div>
            <div class="tab-pane" id="pic-5"><img src="/img/2.jpg" /></div>
          </div>
          <ul class="preview-thumbnail nav nav-tabs">
            <li class="active">
              <a data-target="#pic-1" data-toggle="tab"
                ><img src="/img/tsapal3.jpg" class="w-100 h-50"
              /></a>
            </li>
            <li>
              <a data-target="#pic-2" data-toggle="tab"
                ><img src="/img/2.jpg" class="w-100 h-50"
              /></a>
            </li>
            <li>
              <a data-target="#pic-3" data-toggle="tab"
                ><img src="/img/3.jpg" class="w-100 h-50"
              /></a>
            </li>
            <li>
              <a data-target="#pic-4" data-toggle="tab"
                ><img src="/img/4.jpg" class="w-100 h-50"
              /></a>
            </li>
            <li>
              <a data-target="#pic-5" data-toggle="tab"
                ><img src="/img/2.jpg"
              /></a>
            </li>
          </ul>
        </div>
        <div class=" col-md-6">
          <h3 class="product-title">{{ product.name }}</h3>
          <div class="rating d-inline-block mb-0">
            <div
              class="total-stars"
              :style="{ '--rating': productRatings }"
            ></div>
            <p class="review-no">
              {{ product.comments && product.comments.length || "0" }} review{{
               product.comments && product.comments.length > 1 ? "s" : ""
              }}
            </p>
          </div>
          <p class="product-description">{{ product.description }}</p>
          <h4 class="price">
            current price:
            <span>{{ product.price + "" + product.currency }}</span>
          </h4>
          <p class="vote">
            <strong>{{ productRatings * 100 || "10" }}%</strong> of buyers
            enjoyed this product!
            <strong>(87 votes)</strong>
          </p>
          <h6 class="sizes">
            Quantity Available:
            <span class="pl-1" data-toggle="tooltip" title="small">{{
              product.stock
            }}</span>
          </h6>
          <h5 class="colors">
            colors:
            <span
              class="color orange not-available"
              data-toggle="tooltip"
              title="Not In store"
            ></span>
            <span class="color green"></span>
            <span class="color blue"></span>
          </h5>
          <div class="action">
            <button
              class="add-to-cart btn btn-primary mr-1"
              type="button"
              @click="addToCart(product)"
            >
              add to cart <i class="fas fa-cart-plus"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="ft-container mx-2">
      <div class="feat">
        <span class="txt-ft" aria-current="page">SIMILAR PRODUCTS</span>
      </div>
      <card-loader :loopCount="4" v-if="loading" />
    </div>
    <div class="row justify-content-around h-100 m-2">
      <div
        class="d-inline-block m-1"
        v-for="(item, index) in similarProduct"
        :key="index"
      >
        <card-template :item="item" />
      </div>
    </div>
    <div class="comments mx-3 px-2" v-if="product.comments && product.comments.length">
      <div class="ft-container mx-2">
        <div class="feat">
          <span class="txt-ft" aria-current="page">COMMENTS</span>
        </div>
      </div>
      <div
        class="row border-bottom mx-5 py-2"
        id="products_comments"
        v-for="(comment, index) in product.comments"
        :key="index"
      >
        <div class="left-side">
          <div class="d-flex ratings-stars">
            <p class="fa mb-0 pb-2">Rating:</p>
            <div
              class="stars-icons"
              :style="{ '--rating': comment.rating }"
            ></div>
          </div>
          <p class="comment-content">{{ comment.content }}</p>
        </div>
        <div class="right-side ml-auto mt-auto d-flex">
          Created by:
          <p class="text-muted text-capitalize">{{ comment.user.username }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  /* eslint-disable */
import { mapGetters, mapActions, mapMutations } from "vuex";
import CardTemplate from "../shared/CardTemplate";
import {
  infoToaster,
  successToaster,
  errorToaster,
} from "../../components/shared/service/ErrorHandler.js";
import _ from "lodash";

export default {
  name: "productDetail",
  components: {
    CardTemplate,
  },
  data() {
    return {
      loading: false,
      similarProduct: [
        {
          image: "/img/1.jpg",
          id: "12893276",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo velit blanditiis voluptate doloremque nihil fuga.",
          name: "Kamambiri",
          price: "100",
          stock: "12",
          currency: "Frw",
        },
        {
          image: "/img/2.jpg",
          id: "0978436",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo velit blanditiis voluptate doloremque nihil fuga.",
          name: "Sandal",
          price: "600",
          stock: "12",
          currency: "Frw",
        },
        {
          image: "/img/3.jpg",
          id: "8732576491",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo velit blanditiis voluptate doloremque nihil fuga.",
          name: "Umoja",
          price: "400",
          stock: "12",
          currency: "Frw",
        },
        {
          id: "423r7202bhj",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo velit blanditiis voluptate doloremque nihil fuga.",
          name: "Slippers",
          price: "150",
          stock: "12",
          currency: "Frw",
        },
      ],
    };
  },
  methods: {
    fetchProduct() {
      const productId = this.$route.params.id;
      this.loader(true, {
        context: "fetching  product detailes....",
        area: "app",
      }),
        this.$store
          .dispatch("fetchProduct", productId)
          .then((res) => {
            this.loader(false);
          })
          .catch((err) => {
            this.loader(false);
            errorToaster(
              "Error while fetching",
              "sorry you seems to be offline"
            );
          });
    },

    getSimilarProduct(productSeller) {
      axios
        .get(`${process.env.VUE_APP_BASE_URL}/products/similarProduct`, {
          params: { productSeller: productSeller },
        })
        .then((response) => {
          this.similarProduct = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    ...mapMutations(["ADD_CART_LOCAL"]),

    addToCart(product) {
      const data = _.find(this.$store.getters.cartProducts, product);
      if (data) {
        infoToaster(
          "Already Added",
          `Your Product <b> ${product.name} </b> is Already Added`
        );
      } else {
        successToaster(
          "Added Successfully",
          `The Product <b> ${product.name} </b> was Added Successfully`
        );
        this.ADD_CART_LOCAL(product);
      }
    },
  },
  computed: {
    ...mapGetters(["resources"]),

    product() {
      return this.resources.product;
    },
    productRatings() {
      var totalRating = 0.0;
      var commentsLength = this.product.comments.length * 5;
      this.product.comments.forEach((comment) => {
        totalRating += parseFloat(comment.rating);
      });
      var divisionOFComments = totalRating / commentsLength;
      return divisionOFComments;
    },
  },
  mounted() {
    this.fetchProduct();
  },
  created() {
    // this.$axios
    //     .get(/products/${this.$route.params.id})
    //     .then(response => {
    //         this.product = response.data;
    //         const starTotal = 5;
    //         const starPercentage =
    //             (Number(this.product.productRating) / starTotal) * 100;
    //         const starPercentageRounded = `${Math.round(starPercentage / 10) *
    //         10}%`;
    //         document.querySelector(
    //             `.stars-inner`
    //         ).style.width = starPercentageRounded;
    //
    //         this.getSimilarProduct(this.product.productSeller);
    //     })
    //     .catch(error => {
    //         console.log(error);
    //         errorToaster("Error while fetching similar products", "");
    //     });
  },
};
</script>

<style lang="scss" scoped>
.product-details {
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
  .stars-icons {
    --percent: calc(var(--rating) / 5 * 100%);
    display: inline-block;
    font-size: 20px;
    font-family: Times;
    line-height: 1;
    &::before {
      content: "★★★★★";
      letter-spacing: 3px;
      background: linear-gradient(
        90deg,
        yellow var(--percent),
        black var(--percent)
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
  .product-details {
    background-color: white;
    border: 1px solid gainsboro;
  }

  .preview {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
  }

  .total-stars {
    --percent: calc(var(--rating) * 100%);
    display: inline-block;
    font-size: 40px;
    font-family: Times;
    line-height: 1;
    &::before {
      content: "★★★★★";
      letter-spacing: 3px;
      background: linear-gradient(
        90deg,
        yellow var(--percent),
        black var(--percent)
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
  @media screen and (max-width: 996px) {
    .preview {
      margin-bottom: 20px;
    }
  }

  .preview-pic {
    -webkit-box-flex: 1;
    -webkit-flex-grow: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
  }

  .preview-thumbnail.nav-tabs {
    border: none;
    margin-top: 15px;
  }

  .preview-thumbnail.nav-tabs li {
    width: 18%;
    margin-right: 2.5%;
  }

  .preview-thumbnail.nav-tabs li img {
    max-width: 100%;
    display: block;
  }

  .preview-thumbnail.nav-tabs li a {
    padding: 0;
    margin: 0;
  }

  .preview-thumbnail.nav-tabs li:last-of-type {
    margin-right: 0;
  }

  .tab-content {
    overflow: hidden;
  }

  .tab-content img {
    max-height: 370px;
    width: 100%;
    -webkit-animation-name: opacity;
    animation-name: opacity;
    -webkit-animation-duration: 0.3s;
    animation-duration: 0.3s;
  }

  .card {
    padding: 3em;
    line-height: 1.5em;
    border: none;
    font-family: "Roboto", sans-serif;
  }

  @media screen and (min-width: 997px) {
    .wrapper {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
    }
  }

  .details {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
  }
  .colors {
    -webkit-box-flex: 1;
    -webkit-flex-grow: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
  }

  .product-title,
  .price,
  .sizes,
  .colors {
    text-transform: UPPERCASE;
    font-weight: bold;
  }

  .checked,
  .price span {
    color: #ff9f1a;
  }

  .product-title,
  .rating,
  .product-description,
  .price,
  .vote,
  .sizes {
    margin-bottom: 15px;
  }

  .product-title {
    margin-top: 0;
  }

  .size {
    margin-right: 4px;
  }

  .size:first-of-type {
    margin-left: 40px;
  }

  .color {
    display: inline-block;
    vertical-align: middle;
    margin-right: 10px;
    height: 2em;
    width: 2em;
    border-radius: 2px;
  }

  .color:first-of-type {
    margin-left: 20px;
  }

  .add-to-cart,
  .like {
    border: none;
    text-transform: UPPERCASE;
    font-weight: bold;
    font-size: 0.8em;
    color: #fff;
    -webkit-transition: background 0.3s ease;
    transition: background 0.3s ease;
  }

  .add-to-cart:hover,
  .like:hover {
    background: #b36800;
    color: #fff;
  }

  .not-available {
    text-align: center;
    line-height: 2em;
  }

  .not-available:before {
    font-size: 13px;
    font-family: fontawesome;
    content: "\f00d";
    color: #fff;
  }

  .orange {
    background: #ff9f1a;
  }

  .green {
    background: #85ad00;
  }

  .blue {
    background: #0076ad;
  }

  .tooltip-inner {
    padding: 1.3em;
  }

  @-webkit-keyframes opacity {
    0% {
      opacity: 0;
      -webkit-transform: scale(3);
      transform: scale(3);
    }
    100% {
      opacity: 1;
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }

  @keyframes opacity {
    0% {
      opacity: 0;
      -webkit-transform: scale(3);
      transform: scale(3);
    }
    100% {
      opacity: 1;
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
}
</style>

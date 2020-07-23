<template>
  <div class="create-product py-4">
    <div class="container-fluid px-5 pb-3">
      <div class="row">
        <div class="col-md-12">
          <div class="page-title-box">
            <h4 class="page-title">Create Product</h4>
          </div>
        </div>
      </div>
      <div class="row" @submit.prevent>
        <div class="col-lg-6">
          <div class="card-box">
            <h5 class="text-uppercase bg-light p-2 mt-0 mb-3">General</h5>
            <div class="form-group mb-3">
              <label for="product-name"
                >Product Name <span class="text-danger">*</span></label
              >
              <input
                type="text"
                id="product-name"
                class="form-control"
                placeholder="e.g : Masayi"
                v-model="product.name"
                required
              />
              <div v-if="error.name">
                <p class="text-danger mb-0 pb-1">{{ error.name }}</p>
              </div>
            </div>
            <div class="form-group mb-3">
              <label for="product-description"
                >Product Description <span class="text-danger">*</span></label
              >
              <textarea
                class="form-control"
                id="product-description"
                rows="5"
                placeholder="Please enter description "
                required
                v-model="product.description"
              ></textarea>
              <div v-if="error.description">
                <p class="text-danger mb-0 pb-1">{{ error.description }}</p>
              </div>
            </div>
            <div class="form-group mb-3">
              <label for="product-price"
                >Product Price<span class="text-danger">*</span></label
              >
              <div class="d-inline-flex">
              <input
                type="number"
                class="form-control w-75"
                v-model="product.price"
                required
                placeholder="Enter amount eg:25"
              />
              <input
                type="text"
                class="form-control small w-25"
                v-model="product.currency"
                required
                placeholder="FRW, $"
              /></div>
              <div v-if="error.price || error.currency">
                <p class="text-danger mb-0 pb-1">
                  {{ error.price || error.currency }}
                </p>
              </div>
            </div>
            <div class="form-group mb-3">
              <label for="quantity">Product Quantity</label>
              <input
                class="form-control"
                placeholder="enter quantity"
                type="text"
                id="quantity"
                v-model="product.stock"
                required
              />
              <div v-if="error.stock">
                <p class="text-danger mb-0 pb-1">{{ error.stock }}</p>
              </div>
            </div>
            <div class="form-group mb-3">
              <label for="product-category"
                >Categories <span class="text-danger">*</span></label
              >
              <input
                class="form-control"
                id="product-category"
                placeholder="enter categories"
                v-model="product.categories"
                required
              />
              <div v-if="error.categories">
                <p class="text-danger mb-0 pb-1">{{ error.categories }}</p>
              </div>
            </div>
            <div class="form-group mb-3">
              <label for="sub category">sub-category</label>
              <input
                class="form-control"
                id="sub category"
                placeholder="e.g:Footwear"
                required
                v-model="product.tags"
              />
              <div v-if="error.tags">
                <p class="text-danger mb-0 pb-1">{{ error.tags }}</p>
              </div>
            </div>
            <div class="form-group mb-3">
              <label for="product-code">
                Product Code <span class="text-danger">*</span></label
              >
              <input
                class="form-control"
                id="product-code"
                placeholder="enter product code"
                type="text"
                v-model="product.code"
                required
              />
              <div v-if="error.code">
                <p class="text-danger mb-0 pb-1">{{ error.code }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="card-box">
            <h5 class="text-uppercase mt-0 mb-3 bg-light p-2">
              Product Images
            </h5>
            <div class="p-1">
              <div class="p-2" v-if="!product.image">
                <h3>Please Upload product image</h3>
              </div>
              <div class="ml-5 pl-3">
                <input
                  type="file"
                  ref="file"
                  class="bg-light rounded border"
                  @change="imageUpload()"
                  multiple
                  required
                />
              </div>
              <div
                class="border shadow rounded mt-4 p-2 w-75 mx-auto"
                style="height:30vh"
                v-if="product.image"
              >
                <span
                  class="d-block product-image m-auto border rounded"
                  :style="{
                    backgroundImage:
                      'url(' +
                      (product.image || '/img/profile/avatar_user.png') +
                      ')'
                  }"
                ></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="justify-content-center align-items-center d-flex">
      <div
        class="p-2 btn text-white bg-primary border rounded justify-content-center"
        @click="createProduct()"
      >
        <i class="fa fa-spinner fa-spin mr-1" v-if="showLoader"></i>create
      </div>
      <div
        class="p-2 btn text-white bg-danger border rounded justify-content-center ml-5"
      >
        Clear
      </div>
    </div>
  </div>
</template>
<script>
  /* eslint-disable */
import axios from "axios";
import {
  errorToaster,
  successToaster
} from "../../../shared/service/ErrorHandler";
export default {
  data() {
    return {
      showLoader: false,
      image: null,
      product: {
        image: null,
        currency: "FRW"
      },
      error: {},
      errorMessage: []
    };
  },
  methods: {
    imageUpload() {
      var target = this.$refs.file.files[0];
      if (!target.type.includes("image/")) {
      } else {
        this.image = target;
        this.product.image = URL.createObjectURL(target);
      }
    },
    createProduct() {
      const product = {};
      product.name = this.product.name;
      product.currency = this.product.currency;
      product.description = this.product.description;
      product.price = this.product.price.replace(/[^0-9\.]+/g, "");
      product.stock = this.product.stock;
      product.categories[this.product.categories] = this.product.categories
      product.tags[this.product.tags] = this.product.tags;
      product.code = this.product.code;
      this.loader(true, {
        context: "Creating Product...",
        area: "app"
      });
      const image = this.image;
      if (image) delete this.image;
      this.showLoader = true;
      this.$store
        .dispatch("createProduct", product)
        .then(async res => {
          console.log(res);
          if (image) {
            const productImage = await this.uploadImage(
              image,
              "product-profile, profile"
            );
            if (productImage) {
              console.log(productImage);
              await this.$store.dispatch("UpdateProduct", {
                image_urls: { productImage },
                id: res.id
              });
            }
          }
          await this.loader(false);
          this.showLoader = false;
          await this.$store.dispatch("fetchProducts");
          await successToaster(
            "Product created",
            "Product created Successfully"
          );
        })
        .catch(err => {
          console.log(err);
          this.loader(false);
          this.showLoader = false;
          this.error = err;
          // errorToaster(
          //   "Product created Failed",
          //   err.message || "Please try again after sometime"
          // );
        });
    }
  }
};
</script>
<style lang="scss" scoped>
.create-product {
  .product-image {
    background-size: cover;
    height: 100%;
    width: 75%;
  }
}
</style>

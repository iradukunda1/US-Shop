<template>
  <div class="product-list-manage" v-if="!processing">
    <div class="container-fluid px-4 py-5">
      <div class="row mb-3">
        <div class="col-12">
          <div class="page-title-box">
            <h4 class="page-title">Manage Product</h4>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-body">
              <div class="mb-2 d-flex">
                <div class="d-block p-1">
                  <i class="fa fa-bell"></i>
                  <span class="pl-2">Product</span>
                </div>
                <div class="ml-auto">
                  <button
                    type="button"
                    @click="addProduct()"
                    class="btn btn-danger mb-2 mr-2"
                  >
                    <i class="fa  fa-plus mr-1"></i> Add New Product
                  </button>
                </div>
              </div>
              <div class="table-responsive">
                <table class="table table-centered  table-hover mb-0">
                  <thead class="thead-light">
                    <tr style="width:max-content">
                      <th><i class="fa fa-briefcase pr-2"></i>S.no</th>
                      <th><i class="fa fa-user pr-2"></i>Name</th>
                      <th><i class="fa fa-user pr-2"></i>Category</th>
                      <th><i class="fa fa-user pr-2"></i>SubCategory</th>
                      <th><i class="fa fa-user pr-2"></i>Actual Price</th>
                      <th><i class="fa fa-user pr-2"></i>Quantity</th>
                      <th><i class="fa fa-user pr-2"></i>Code</th>
                      <th>Option</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="(product, index) in filteredProducts"
                      :key="index"
                    >
                      <td>
                        <a class="text-body font-weight-bold"></a
                        >{{ index + 1 }}.
                      </td>
                      <td width="auto">{{ product.name }}</td>
                      <td>
                        <span
                          v-for="category in product.categories"
                          :key="category.id"
                          :class="{
                            'text-danger': !product.categories.length,
                          }"
                          class="text-muted"
                          >{{
                            category.name +
                              (product.categories.length > 0 ? "" : ",") ||
                              "No category"
                          }}</span
                        >
                      </td>
                      <td>
                        <span
                          v-for="subCategory in product.tags"
                          :key="subCategory.id"
                          :class="{
                            'text-danger': !product.tags.length,
                          }"
                          class="text-muted"
                          >{{
                            subCategory.name +
                              (product.tags.length > 0 ? "" : ",") ||
                              "No sub category"
                          }}</span
                        >
                      </td>
                      <td>{{ product.price + " " + product.currency }}</td>
                      <td>{{ product.stock }}</td>
                      <td>{{ product.code || "83274" }}</td>
                      <td>
                        <span title="view" style="cursor: pointer"
                          ><i class="fa fa-eye"></i
                        ></span>
                        <span style="cursor: pointer" class="mx-2" title="Edit"
                          ><i class="fa fa-edit "></i
                        ></span>
                        <span
                          style="cursor: pointer"
                          title="delete"
                          @click.stop="deleteProduct(product)"
                        >
                          <i class="fa fa-trash-alt"></i
                        ></span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div v-if="!filteredProducts.length" class="mx-auto">
              <h1 class="text-danger px-5">Oops!</h1>
              <h2 class="text-danger">No Products Found</h2>
              <div class="error-actions">
                <a class="btn text-white">
                  <span class="glyphicon glyphicon-envelope"></span>
                  <router-link to="add-product"
                    >Take me to Create Products Page</router-link
                  >
                </a>
              </div>
            </div>
            <div class="px-3 pb-2 d-flex" v-if="filteredProducts.length">
              <p class="mb-0 ml-auto">
                <span class="text-info">
                  showing 1 to
                  {{ products.page_meta.requested_page_size }} products of
                  <b>{{ products.page_meta.number_of_pages }} </b> pages
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  /* eslint-disable */
import { errorToaster } from "../../../shared/service/ErrorHandler";
import { mapGetters } from "vuex";
export default {
  name: "product-list-management",
  data() {
    return {
      filter: null,
    };
  },
  methods: {
    addProduct() {
      this.$router.push("add-product");
    },
   async fetchAllProducts() {
      this.loader(true, {
        context: "fetching all products....",
        area: "app",
      }),
       await this.$store
          .dispatch("fetchProducts")
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
    deleteProduct(product){
      this.modalAlert(true,{
        title:"Deleting Product",
        message:`Do you really want to delete <b>${product.name}</b> from products list?`,
        actionName:"Delete",
        action: () =>{
          this.modalAlert(false),
          this.loader(true,{
            context:`Deleting ${product.name} ...`,
            area:"app",
            textColor:"white",
            bg:"black"
          })
          this.$store.dispatch("deleteProduct",product.id)
          .then(() =>{
            this.$store.dispatch("fetchProducts")
            this.loader(false)
          })
          .catch(err =>{
            this.loader(false)
            console.log(err)
          })
        }
      })
    }
  },
  computed: {
    ...mapGetters(["resources"]),
    products() {
      return this.resources.products;
    },
    filteredProducts() {
      return this.products.products.filter((product) => {
        return product;
      });
    },
  },
  mounted() {
    // setTimeout(()=>
    //   this.fetchAllProducts()
    // ,1000)
  },
};
</script>

<style scoped>
.table {
  width: 100vw;
}
</style>

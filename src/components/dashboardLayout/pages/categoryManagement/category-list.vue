<template>
  <div class="category">
    <div class="container-fluid px-4 py-5">
      <div class="row mb-3">
        <div class="col-12">
          <div class="page-title-box">
            <h4 class="page-title">Category Management</h4>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-body">
              <div class="d-flex mb-2">
                <div class="p-1">
                  <i class="fa fa-bell"></i>
                  <span class="pl-2">Category</span>
                </div>
                <div class="ml-auto" style="margin-left: 130px">
                  <button
                    type="submit"
                    @click="addCategory()"
                    class="btn-success mb-2 mr-2"
                  >
                    <i class="fa fa-plus mr-1"></i>Add Category
                  </button>
                </div>
              </div>

              <div class="table-responsive">
                <table class="table table-centered mb-0">
                  <thead class="thead-light">
                    <tr>
                      <th><i class="fa fa-briefcase pr-2"></i>Select</th>
                      <th><i class="fa fa-briefcase pr-2"></i>S.no</th>
                      <th><i class="fa fa-user pr-2"></i>Category</th>
                      <th><i class="fa fa-user pr-2"></i>Description</th>
                      <th>Option</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(category, index) in categories" :key="index">
                      <td><input width="20px" type="checkbox" /></td>
                      <td>
                        <a class="text-body font-weight-bold"></a
                        >{{ index + 1 }}
                      </td>
                      <td>
                        <small class="text-muted">{{
                          category.category
                        }}</small>
                      </td>
                      <td>{{ category.description }}</td>
                      <td>
                        <span
                          title="edit"
                          style="cursor: pointer"
                          class="mr-2"
                          data-target="#EditCategoryModal"
                          data-toggle="modal"
                          @click="edit(category)"
                          ><i class="fa fa-edit"></i
                        ></span>
                        <span
                          data-toggle="modal"
                          data-target="#DeleteCategoryModal"
                          @click="del(category)"
                          title="delete"
                          style="cursor: pointer"
                        >
                          <i class="fa fa-trash-alt"></i
                        ></span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="px-3 pb-2 d-flex">
              <button class="btn-danger">
                delete
              </button>
              <p class="mb-0 ml-auto">
                <span>
                  showing 1 to 3 of {{ categories.length }} categories
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <delete-category @deleteCategory="deleteCat()" :del="category" />
      <edit-category :edit="category" />
    </div>
  </div>
</template>
<script>
  /* eslint-disable */
import axios from 'axios'
import deleteCategory from './notification/delete-category'
import editCategory from './notification/edit-category'

export default {
  name: 'product-list-management',
  components: {
    deleteCategory,
    editCategory
  },
  data () {
    return {
      category: {},
      categories: [
        {
          category: 'Men',
          description: 'All men'
        },
        {
          category: 'Women',
          description: 'All women'
        },
        {
          category: 'Kid',
          description: 'All children'
        }
      ]
    }
  },
  methods: {
    addCategory () {
      this.$router.push('category')
    },
    getAllCategory () {
      // axios
      // .get(`${process.env.VUE_APP_BASE_URL}/categories`)
      // .then(response => {
      //     this.category = response.data
      // })
      // .catch(error => {
      //     console.log(error)
      // })
    },
    del (category) {
      this.category = category
    },
    edit (category) {
      this.category = category
    },
    deleteCat () {
      this.getAllCategory()
    }
  },
  created () {
    this.getAllCategory()
  }
}
</script>

<style scoped></style>

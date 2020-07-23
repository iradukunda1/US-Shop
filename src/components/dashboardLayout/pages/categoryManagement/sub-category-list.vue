<template>
  <div class="sub-category">
    <div class="container-fluid px-4 py-5">
      <div class="row mb-3">
        <div class="col-12">
          <div class="page-title-box">
            <h4 class="page-title">Manage Sub Category</h4>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-body">
              <div class="d-flex mb-2">
                <div class="d-block p-1">
                  <i class="fa fa-bell"></i>
                  <span class="pl-2">Sub Category</span>
                </div>
                <div class="ml-auto">
                  <button
                    type="submit"
                    @click="addSubCategory()"
                    class="btn-success mb-2 mr-2"
                  >
                    <i class="fa fa-plus mr-1"></i>Add Sub-Category
                  </button>
                </div>
              </div>
              <div class="table-responsive">
                <table class="table table-centered mb-0">
                  <thead class="thead-light">
                    <tr>
                      <th><i class="fa fa-briefcase pr-2"></i>Select</th>
                      <th><i class="fa fa-briefcase pr-2"></i>S.no</th>
                      <th><i class="fa fa-user pr-2"></i>SubCategory</th>
                      <th><i class="fa fa-user pr-2"></i>Description</th>
                      <th>Option</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(subCat, index) in SubCategories" :key="index">
                      <td><input width="20px" type="checkbox" /></td>
                      <td>
                        <a class="text-body font-weight-bold"></a
                        >{{ index + 1 }}
                      </td>
                      <td>{{ subCat.subCategory }}</td>
                      <td>{{ subCat.description }}</td>
                      <td>
                        <span
                          title="edit"
                          style="cursor: pointer"
                          class="pl-2 mr-3"
                          data-target="#EditSubCategoryModal"
                          data-toggle="modal"
                          @click="edit(subCat)"
                          ><i class="fa fa-edit"></i
                        ></span>
                        <span
                          data-toggle="modal"
                          data-target="#DeleteSubCategoryModal"
                          @click="del(subCat)"
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
                <span class="text-info">
                  showing 1 to 6 of
                  <b>{{ SubCategories.length }}</b> sub-category per page
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <delete-category @deleteTags="deleteSub()" :del="subCat" />
      <edit-category :edit="subCat" />
    </div>
  </div>
</template>
<script>
  /* eslint-disable */
import axios from 'axios'
import deleteCategory from './notification/delete-sub-category'
import editCategory from './notification/edit-sub-category'
export default {
  name: 'sub-category-list',
  components: {
    deleteCategory,
    editCategory
  },
  data () {
    return {
      subCat: {},
      SubCategories: [
        {
          subCategory: 'footwear',
          description: 'iza abagabo'
        },
        {
          subCategory: 'Watches',
          description: 'za abagore'
        },
        {
          subCategory: 'Masayi',
          description: "z' abana"
        },
        {
          subCategory: 'slipper',
          description: 'za abakobwa'
        },
        {
          subCategory: 'T-shirt',
          description: 'za abasore'
        },
        {
          subCategory: 'umoja',
          description: 'za aba bose'
        }
      ]
    }
  },
  methods: {
    addSubCategory () {
      this.$router.push('sub-category')
    },
    getAllSubCategory () {
      // axios
      //     .get(`${process.env.VUE_APP_BASE_URL}/tags`)
      //     .then(response => {
      //         this.SubCategories = response.data
      //     })
      //     .catch(error => {
      //         console.log(error)
      //     })
    },
    del (subCat) {
      this.subCat = subCat
    },
    edit (subCat) {
      this.subCat = subCat
    },
    deleteSub () {
      this.getAllSubCategory()
    }
  },
  created () {
    this.getAllSubCategory()
  }
}
</script>

<style scoped></style>

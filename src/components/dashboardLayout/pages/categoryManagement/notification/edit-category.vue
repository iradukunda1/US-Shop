<template>
  <div
    ref="modal"
    class="modal fade"
    id="EditCategoryModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalCenterTitle"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title mx-auto">Edit Category</h4>
          <button
            style="outline: none"
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body mx-3">
          <h5>Are you sure you want to update {{ edit.category }} ?</h5>
          <form>
            <div class="col-lg-12 mt-2">
              <label for="name" class="col-lg-2">Name</label>
              <div class="col-lg-8">
                <input
                  id="name"
                  v-model="category.name"
                  class="form-control"
                  type="text"
                  placeholder="sub category eg:'inkweto'"
                  required
                />
              </div>
            </div>
            <div class="mt-3 col-lg-12">
              <label for="description" class="col-lg-2">Description</label>
              <div class="w-100 ml-3">
                <textarea
                  id="description"
                  v-model="category.description"
                  class="form-control"
                  required
                ></textarea>
              </div>
            </div>
          </form>
        </div>
        <div class="modal-footer justify-content-between px-5">
          <button
            type="submit"
            class="btn btn-primary"
            @click="updateSubCategory()"
            :data-dismiss="close"
          >
            Update
          </button>
          <button type="button" class="btn btn-danger" data-dismiss="modal">
            Cancel
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  /* eslint-disable */
import axios from 'axios'

export default {
  name: 'editCategory',
  props: ['edit'],
  data () {
    return {
      close: null,
      category: {
        name: '',
        description: ''
      }
    }
  },
  methods: {
    updateSubCategory () {
      // axios
      //     .put(`${process.env.VUE_APP_BASE_URL}/categories/`+ this.edit.id, this.category)
      //     .then(response => {
      //         alert("tags updated succefully")
      //         this.close = "modal"
      //     })
      //     .catch(error => {
      //         console.log(error)
      //     })
    }
  },
  mounted () {
    $(this.$refs.modal).on('hidden.bs.modal', () => {
      this.category.name = ''
      this.category.description = ''
    })
  }
}
</script>

<style scoped>
form {
}
</style>

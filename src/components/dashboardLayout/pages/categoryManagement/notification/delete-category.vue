<template>
    <div class="modal fade" id="DeleteCategoryModal" tabindex="-1" role="dialog"
         aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">Delete Category</h4>
                    <button style="outline: none" type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <h5>Are you sure you want to delete this category of {{ del.category }} ?</h5>
                </div>
                <div class="modal-footer justify-content-between">
                    <button type="button" class="btn btn-danger" data-dismiss="modal">Cancel</button>
                    <button type="button" class="btn btn-primary" :data-dismiss="close" @click="deleteSub()">Delete
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
  name: 'deleteCategory',
  props: ['del'],
  data () {
    return {
      close: null
    }
  },
  methods: {
    deleteSub () {
      // axios
      // .delete(`${process.env.VUE_APP_BASE_URL}/categories/` + this.del.id)
      // .then(response => {
      //     this.close = "modal"
      // })
      // .catch(error => {
      //     console.log(error)
      // })
    }
  }
}
</script>

<style scoped>

</style>

<template>
  <div
    class="modal fade"
    id="DeleteOrderModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="orderModalCenterTitle"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Delete Order</h4>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <h5>
            Are you sure you want to delete this order of {{ del.firstName }} ?
          </h5>
        </div>
        <div class="modal-footer justify-content-between">
          <button type="button" class="btn btn-danger" data-dismiss="modal">
            Cancel
          </button>
          <button
            type="button"
            class="btn btn-primary"
            :data-dismiss="close"
            @click="deleteOrder()"
          >
            Delete
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
  name: 'delete-order',
  props: ['del'],
  data () {
    return {
      close: null
    }
  },
  methods: {
    deleteOrder () {
      // axios
      // .post(`${process.env.APP__VUE_BASE_URL}/orders`+this.del.id)
      // .then(response =>{
      //     this.$emit('deletedOrder')
      //     this.close = "modal"
      // })
      // .catch(error => {
      //     console.log(error)
      // })
    }
  }
}
</script>

<style scoped></style>

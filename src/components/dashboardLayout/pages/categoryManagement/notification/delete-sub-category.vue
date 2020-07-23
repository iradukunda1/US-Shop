<template>
  <div
    class="modal fade"
    id="DeleteSubCategoryModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalCenterTitle"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title" id="exampleModalLongTitle">
            Delete Sub-Category
          </h4>
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
        <div class="modal-body">
          <h5>
            Are you sure you want to delete this sub-category of
            {{ del.subCategory }} ?
          </h5>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" data-dismiss="modal">
            Cancel
          </button>
          <button
            type="button"
            class="btn btn-primary"
            :data-dismiss="close"
            @click="deleteSub()"
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

export default {
  name: "delete-sub-category",
  props: ["del"],
  data() {
    return {
      close: null
    };
  },
  methods: {
    deleteSub() {}
  }
};
</script>

<style scoped></style>

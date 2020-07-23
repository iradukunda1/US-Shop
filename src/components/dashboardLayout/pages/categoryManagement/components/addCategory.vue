<template>
    <div class="container">
        <form @submit.prevent="addCategory()">
            <div class="page-title-box">
                <h4 class="page-title">Create Category</h4>
            </div>
            <div class="col-lg-12 marginTop">
                <label class="col-lg-2">Name</label>
                <div class="col-lg-4">
                    <input
                            class="form-control"
                            type="text"
                            placeholder="enter category eg:women"
                            v-model="category.name"
                    /></div>
            </div>
            <div class="marginTop col-lg-12">
                <label class="col-lg-2">Description</label>
                <div class=" col-lg-8">
                <textarea
                        class="form-control"
                        v-model="category.description"
                ></textarea>
                </div>
            </div>
            <div class="marginTop col-lg-12 col-lg-offset-6">
                <input type="submit" value="cancel" @click="$router.go(-1)" class="btn btn-danger"/>
                <input type="submit" value="submit" class="btn btn-primary" style="margin-left:10px"/>
            </div>
        </form>
    </div>
</template>
<script>
    /* eslint-disable */
import axios from 'axios'
export default {
  name: 'addCategory',
  data () {
    return {
      category: {
        name: '',
        description: ''
      }
    }
  },
  methods: {
    addCategory () {
      axios
        .post(`${process.env.VUE_APP_BASE_URL}/categories`, this.category)
        .then(response => {
          alert('Category created')
        })
        .catch(error => {
          console.log(error)
          alert('create failed')
        })
    }
  }
}
</script>

<style scoped>
    .marginTop {
        margin-top: 20px;
    }

    form {
        margin-top: 70px;
        margin-left: 130px;
    }
</style>

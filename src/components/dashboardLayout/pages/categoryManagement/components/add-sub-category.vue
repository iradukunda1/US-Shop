<template>
    <div class="container">
        <form @submit.prevent="createSubCategory()">
            <div class="page-title-box">
                <h4 class="page-title">Create Sub-Category</h4>
            </div>
            <div class="col-lg-12 marginTop">
                <label for="name" class="col-lg-2">Name</label>
                <div class="col-lg-4">
                    <input id="name" v-model="tags.name" class="form-control" type="text"
                           placeholder="sub category eg:'inkweto'"/></div>
            </div>
            <div class="marginTop col-lg-12">
                <label for="description" class="col-lg-2">Description</label>
                <div class=" col-lg-8">
                    <textarea id="description" v-model="tags.description" class="form-control"></textarea>
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
  name: 'add-sub-category',
  data () {
    return {
      tags: {
        name: '',
        description: ''
      }
    }
  },
  methods: {
    createSubCategory () {
      axios
        .post(`${process.env.VUE_APP_BASE_URL}/tags`, this.tags)
        .then(response => {
          alert('tags create succefully')
        })
        .catch(error => {
          console.log(error)
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

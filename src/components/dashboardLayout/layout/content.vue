<template>
    <div class="content-page">
        <router-view/>
    </div>
</template>

<script>
    /* eslint-disable */
export default {
  name: 'dashboard-content',
  data () {
    return {
    }
  },
  computed: {
    pro () {
      this.$store.getters.views
    }
  },
  methods: {

  }
}
</script>

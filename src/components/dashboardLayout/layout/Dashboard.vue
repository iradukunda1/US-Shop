<template>
  <div id="wrapper" class="dashboard-content">
    <navbar />
    <sidebar />
    <content-view />
  </div>
</template>
<script>
import navbar from './navbar.vue'
import sidebar from './sidebar.vue'
import contentView from './content.vue'
export default {
  components: {
    navbar,
    sidebar,
    contentView
  }
}
</script>
<style lang="scss">
  .dashboard-content{
      display: grid;
      width: 100vw;
      padding: 0;
      height: 100vh;
      grid-template-columns: auto 1fr;
      grid-template-rows:80px auto;
      grid-template-areas: "navbar navbar"
                            "sidebar content";
      overflow-x: hidden;
      font-family: "Roboto",sans-serif;
  
  .admin-navbar{
      box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.25);
      border-bottom: 1px #d7d9de70 solid;
      grid-area: navbar;
      overflow: visible;
  }  
  .right-side-menu-sidebar{
      background-color: white;
      grid-area: sidebar;
      width: 252px;
      height: auto;
      transition: all 1s !important;
  }
  .content-page{
      grid-area: content;
      overflow: auto;
      background: white;
  }
.dropdown-toggle::after {
  display: none !important;
 }
}
</style>

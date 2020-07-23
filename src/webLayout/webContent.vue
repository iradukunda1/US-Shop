<template>
  <div class="web-content">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "webContent"
};
</script>
<style>
.slide-enter-active {
  transition: all 1s ease;
}
.slide-leave-active {
  transition: all 1s ease;
}
.slide-enter {
  transform: translateX(500px);
}
.slide-leave-to {
  transform: translateX(500px);
}
.loader,
.loader:after {
  border-radius: 50%;
  width: 4em;
  height: 4em;
}
.loader {
  margin: 60px auto;
  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  border-top: 1.1em solid #fab72a;
  border-right: 1.1em solid #fab72a;
  border-bottom: 1.1em solid #fab72a;
  border-left: 1.1em solid #e74c3c;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation: load8 1.1s infinite linear;
  animation: load8 1.1s infinite linear;
}
@-webkit-keyframes load8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes load8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>

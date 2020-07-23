<template>
  <div
    class="loading-screen"
    :style="{ backgroundColor: loadProgress.bg || 'white' }"
  >
    <div class="loading-circle"></div>
    <p
      class="loading-text"
      :style="{ color: loadProgress.textColor || 'black' }"
    >
      {{ loadProgress.context || "Loading..." }}
    </p>
  </div>
</template>
<script>
export default {
  computed: {
    loadProgress() {
      return this.$store.getters["loading"];
    },
  },
};
</script>
<style lang="css">
.loading-screen {
  bottom: 0;
  height: 100%;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
  background: #fff;
  overflow-x: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100000;
  flex-direction: column;
  user-select: none;
  opacity: 0.7;
}
.loading-circle {
  width: 50px;
  height: 50px;
  border-radius: 100%;
  border: 2px solid rgba(255, 235, 0, 0.99);
  border-left-color: #ababab;
  animation: circleanimation 0.45s linear infinite;
}
.loading-text {
  margin-top: 15px;
  font-size: 13px;
  text-align: center;
}
@keyframes circleanimation {
  from {
    transform: rotateZ(0deg);
  }
  to {
    transform: rotateZ(360deg);
  }
}
</style>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  components: {
    Navbar,
  },
};
</script>

<template>
  <Navbar />
  <div class="container mt-5">
    <router-view></router-view>
  </div>
</template>

<style lang="scss" scoped></style>

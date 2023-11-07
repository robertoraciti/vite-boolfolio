<script>
import { RouterView } from "vue-router";
import ProjectList from "./components/ProjectList.vue";

export default {
  components: {
    ProjectList,
    RouterView,
  },
};
</script>

<template>
  <div class="container mt-5">
    <ProjectList />
    <RouterView></RouterView>
  </div>
</template>

<style lang="scss" scoped></style>

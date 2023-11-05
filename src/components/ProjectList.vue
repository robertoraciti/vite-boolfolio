<script>
import ProjectCard from "./ProjectCard.vue";
import axios from "axios";

export default {
  data() {
    return {
      projects: [],

      api: {
        baseUrl: "http://127.0.0.1:8000/api/",
      },
    };
  },

  components: {
    ProjectCard,
  },

  methods: {
    fetchProjects(uri = this.api.baseUrl + "projects") {
      axios.get(uri).then((response) => {
        this.projects = response.data.data;
      });
    },
  },

  created() {
    this.fetchProjects();
  },
};
</script>

<template>
  <h2>Lista progetti</h2>
  <div class="row row-cols-3 g-4">
    <ProjectCard v-for="project in projects" :project="project" />
  </div>
</template>

<style lang="scss" scoped></style>

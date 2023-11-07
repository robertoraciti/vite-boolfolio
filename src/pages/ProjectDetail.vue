<script>
import ProjectCard from "../components/ProjectCard.vue";
import axios from "axios";

export default {
  data() {
    return {
      project: null,

      api: {
        baseUrl: "http://127.0.0.1:8000/api/",
      },
    };
  },

  components: {
    ProjectCard,
  },

  methods: {
    fetchProjectsDetails(
      uri = this.api.baseUrl + "projects/" + this.$route.params.id
    ) {
      axios.get(uri).then((response) => {
        this.project = response.data;
      });
    },
  },

  created() {
    this.fetchProjectsDetails();
  },
};
</script>

<template>
  <div class="container">
    <h2 class="mb-5">Progetto</h2>
    <ProjectCard :project="project" :isDetail="true" v-if="project" />
  </div>
</template>

<style lang="scss" scoped></style>

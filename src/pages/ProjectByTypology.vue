<script>
import axios from "axios";
import ProjectTypologyList from "../components/ProjectTypologyList.vue";

export default {
  data() {
    return {
      project: [],

      api: {
        baseUrl: "http://127.0.0.1:8000/api/",
      },
    };
  },

  components: {
    ProjectTypologyList,
  },

  // created() {
  //   console.log(this.$route.params.id);
  //   axios
  //     .get(this.api.baseUrl + "projects/" + this.$route.params.id)
  //     .then((response) => {
  //       console.log(response);
  //       this.typology = response.data;
  //     });
  // },
};
</script>

<template>
  <div class="container">
    <h2 class="mb-5">Progetti per tipologia</h2>
    <ProjectTypologyList :typology_id="typology_id" v-if="typology" />
  </div>
</template>

<style lang="scss" scoped></style>

<script>
export default {
  props: { project: Object, isDetail: Boolean },
};
</script>

<template>
  <div class="col">
    <div class="card h-100">
      <div class="card-body">
        <h4>Progetto n° {{ project.id }}</h4>
        <hr />
        <p>Nome: {{ project.name }}</p>
        <p>Link repo: {{ project.repo }}</p>
        <p>Collaboratori: {{ project.collaborators }}</p>
        <p>Data di Pubblicazione: {{ project.publishing_date }}</p>
      </div>
      <div class="card-footer" v-if="!isDetail">
        <router-link
          :to="{
            name: 'project-detail',
            params: {
              id: project.id,
            },
          }"
          class="btn btn-primary"
        >
          Vedi
        </router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>

<script>
export default {
  props: { project: Object, isDetail: Boolean },
};
</script>

<template>
  <div class="col">
    <div class="card h-100">
      <div class="card-body">
        <div class="d-flex justify-content-between">
          <h4>Progetto n° {{ project.id }}</h4>
          <router-link
            :to="{
              name: 'projects-by-typology',
              params: {
                id: project.typology.id,
              },
            }"
            ><span
              class="badge"
              :style="{ backgroundColor: project.typology.color }"
            >
              {{ project.typology.name }}
            </span>
          </router-link>
        </div>

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

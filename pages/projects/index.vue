<template>
  <div class="container-base">
    <nuxt-link
      v-for="project in projects"
      :key="project.id"
      :to="{ name: 'project-id', params: { id: project.id } }"
    >
      <v-card>
        <v-card-title>{{ project.title }}</v-card-title>
      </v-card>
    </nuxt-link>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters('interestMap', ['projects'])
  }
}
</script>

<style></style>

<template>
  <div>
    <project-map class="project-map" :location="location" />

    <v-card>
      <v-simple-table class="table">
        <tr v-for="(row, idx) in rows" :key="idx">
          <td>
            {{ row.title }}
          </td>
          <td>
            {{ row.value }}
          </td>
        </tr>
      </v-simple-table>
    </v-card>
  </div>
</template>

<script>
import ProjectMap from '@/components/project/ProjectMap'

export default {
  components: {
    ProjectMap
  },

  props: {
    location: { type: Object, required: true }
  },

  data() {
    return {
      rows: [
        {
          title: 'Hakametsän päiväkoti',
          value: '600m'
        },
        {
          title: 'Pohitullin koulu',
          value: '1km'
        },
        {
          title: 'Viikaisten koulu',
          value: '1km'
        },
        {
          title: 'K-market Pikkuherkku',
          value: '500m'
        },
        {
          title: 'K-supermarket Itäpoiju',
          value: '600m'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.project-map {
  min-height: 600px;
  width: 100%;
  margin-bottom: $u8;
}
</style>

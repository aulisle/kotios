<template>
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
</template>

<script>
export default {
  data() {
    return {
      rows: [
        {
          title: 'Tontin omistaja',
          value: 'Varpe Oy'
        },
        {
          title: 'Tontin pinta-ala',
          value: '3 559m²'
        },
        {
          title: 'Tontin rakennusoikeus',
          value: '2 800k-m² 2-3 kerroksella'
        }
      ]
    }
  }
}
</script>

<style></style>

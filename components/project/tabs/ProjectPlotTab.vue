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
  props: {
    plot: {
      type: Object,
      required: true
    }
  },

  computed: {
    rows() {
      const res = []
      if (this.plot.owner) {
        res.push({
          title: 'Tontin omistaja',
          value: 'Varpe Oy'
        })
      }

      if (this.plot.area) {
        res.push({
          title: 'Tontin pinta-ala',
          value: `${this.plot.area}m²`
        })
      }

      if (this.plot.buildable) {
        res.push({
          title: 'Tontin rakennusoikeus',
          value: `${this.plot.buildable}m²`
        })
      }

      return res
    }
  }
}
</script>

<style></style>

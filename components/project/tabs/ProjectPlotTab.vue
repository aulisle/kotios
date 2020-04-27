<template>
  <div>
    <v-card>
      <v-simple-table class="table">
        <tr v-for="(row, idx) in rows" :key="idx">
          <td>
            {{ row.title }}
          </td>
          <td>
            <base-external-link v-if="row.link" :href="row.link">
              {{ row.value }}
            </base-external-link>
            <template v-else>
              {{ row.value }}
            </template>
          </td>
        </tr>
      </v-simple-table>
    </v-card>
  </div>
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
          value: this.plot.owner,
          link: this.plot.ownerUrl
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

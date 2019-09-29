<template>
  <div v-if="rows && rows.length > 0">
    <h2 class="heading">Lisätiedot</h2>
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
export default {
  props: {
    project: { type: Object, required: true }
  },

  computed: {
    rows() {
      const res = []

      if (typeof this.project.numberOfApartments !== 'undefined') {
        res.push({
          title: 'Asuntojen määrä (suunniteltu/toteutunut)',
          value: this.project.numberOfApartments
        })
      }

      if (typeof this.project.moveInDate !== 'undefined') {
        res.push({
          title: 'Muuttoajankohta (suunniteltu/toteutunut)',
          value: this.project.moveInDate
        })
      }

      if (typeof this.project.creationDate !== 'undefined') {
        res.push({
          title: 'Projektin luontiajankohta',
          value: this.project.creationDate
        })
      }

      if (typeof this.project.socialLiving !== 'undefined') {
        res.push({
          title: 'Yhteisöllinen asuminen',
          value: this.project.socialLiving
        })
      }

      if (typeof this.project.housingAssociation !== 'undefined') {
        res.push({
          title: 'Yhdistys',
          value: this.project.housingAssociation
        })
      }

      return res
    }
  }
}
</script>

<style lang="scss" scoped>
.heading {
  padding-bottom: 20px;
}

.table {
  font-size: 1.1rem;
}

.v-data-table td {
  font-size: 1.1rem;
  padding: 15px;
}
</style>

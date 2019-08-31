<template>
  <div>
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
  data() {
    return {
      project: {
        numberOfApartments: 100,
        moveInDate: '2022',
        creationDate: '2019',
        socialLiving: 0,
        housingAssociation: 'Koti kaupungissa ry'
      }
    }
  },

  computed: {
    rows() {
      return [
        {
          title: 'Asuntojen määrä (suunniteltu/toteutunut)',
          value: this.project.numberOfApartments
        },
        {
          title: 'Muuttoajankohta (suunniteltu/toteutunut)',
          value: this.project.moveInDate
        },
        {
          title: 'Projektin luontiajankohta',
          value: this.project.creationDate
        },
        {
          title: 'Yhteisöllinen asuminen',
          value: this.project.socialLiving
        },
        {
          title: 'Yhdistys',
          value: this.project.housingAssociation
        }
      ]
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

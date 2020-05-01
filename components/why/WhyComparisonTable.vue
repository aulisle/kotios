<template>
  <comparison-table title="">
    <comparison-table-heading
      :headings="[
        'Valta-asuntotuotanto',
        { title: 'Osallistaminen', highlight: true }
      ]"
    />
    <comparison-table-row title="Sinun roolisi kodin hankinnassa">
      <comparison-table-cell>
        Passiivinen markkinaobjekti
      </comparison-table-cell>
      <comparison-table-cell highlight>
        Aktiivinen toimija
      </comparison-table-cell>
    </comparison-table-row>

    <comparison-table-row title="Kenellä on valta">
      <comparison-table-cell>
        Myyjällä
      </comparison-table-cell>
      <comparison-table-cell highlight>
        Sinulla
      </comparison-table-cell>
    </comparison-table-row>

    <comparison-table-row
      title="Kodin suunnittelu ja toteutus asukkaiden ehdoilla"
    >
      <comparison-table-cell>
        Ei
      </comparison-table-cell>
      <comparison-table-cell highlight>
        Kyllä
      </comparison-table-cell>
    </comparison-table-row>

    <comparison-table-row title="Kodin yksilöintimahdollisuudet">
      <comparison-table-cell>
        Asunnon pintamateriaalit yms.
      </comparison-table-cell>
      <comparison-table-cell highlight>
        Julkisivu, Yhteistilat, Pintamateriaalit, jne.
      </comparison-table-cell>
    </comparison-table-row>

    <comparison-table-row title="Mahdollisuus ottaa enemmän vastuuta">
      <comparison-table-cell>
        Ei
      </comparison-table-cell>
      <comparison-table-cell highlight>
        Kyllä
      </comparison-table-cell>
    </comparison-table-row>

    <comparison-table-row
      title="Asumismenot suunniteltu sinulle sopiviksi pitkällä aikavälillä"
    >
      <comparison-table-cell>
        Ei
      </comparison-table-cell>
      <comparison-table-cell highlight>
        Kyllä
      </comparison-table-cell>
    </comparison-table-row>

    <comparison-table-row title="Maksat vain oleellisesta">
      <comparison-table-cell>
        Ei
      </comparison-table-cell>
      <comparison-table-cell highlight>
        Kyllä
      </comparison-table-cell>
    </comparison-table-row>

    <comparison-table-row title="Yhteisöllisyys sisäänrakennettuna">
      <comparison-table-cell>
        Ei
      </comparison-table-cell>
      <comparison-table-cell highlight>
        Kyllä
      </comparison-table-cell>
    </comparison-table-row>
  </comparison-table>
</template>

<script>
import ComparisonTable from '@/components/common/comparisonTable/ComparisonTable'
import ComparisonTableHeading from '@/components/common/comparisonTable/ComparisonTableHeading'
import ComparisonTableRow from '@/components/common/comparisonTable/ComparisonTableRow'
import ComparisonTableCell from '@/components/common/comparisonTable/ComparisonTableCell'

export default {
  components: {
    ComparisonTable,
    ComparisonTableHeading,
    ComparisonTableRow,
    ComparisonTableCell
  }
}
</script>

<style></style>

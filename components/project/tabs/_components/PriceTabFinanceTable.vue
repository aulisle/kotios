<template>
  <comparison-table
    title="Asunto-osuuskunnalla otat vähemmän henkilökohtaista lainaa"
  >
    <comparison-table-heading
      :headings="[
        'Omistusasuminen',
        { title: 'Asunto-osuuskunta', highlight: true },
        'Vuokra-asuminen'
      ]"
    />
    <comparison-table-row title="Asuntolaina">
      <comparison-table-cell>
        Asunto-yhtiöllä
      </comparison-table-cell>
      <comparison-table-cell highlight>Osuuskunnalla</comparison-table-cell>
      <comparison-table-cell>
        Vuokranantajalla
      </comparison-table-cell>
    </comparison-table-row>
    <comparison-table-row title="Henkilökohtainen vastuu velasta">
      <comparison-table-cell>
        <base-icon>mdi-minus</base-icon>
      </comparison-table-cell>
      <comparison-table-cell highlight>
        <base-icon color="white">mdi-minus</base-icon>
      </comparison-table-cell>
      <comparison-table-cell>
        <base-icon>mdi-minus</base-icon>
      </comparison-table-cell>
    </comparison-table-row>

    <comparison-table-row title="Lunastusoikeus">
      <comparison-table-cell>
        Jo lunastettu
      </comparison-table-cell>
      <comparison-table-cell highlight>Olemassa </comparison-table-cell>
      <comparison-table-cell>
        Ei mahdollista
      </comparison-table-cell>
    </comparison-table-row>

    <comparison-table-row title="Kotisi kerryttää pääomaa">
      <comparison-table-cell>
        <base-icon>mdi-check</base-icon>
      </comparison-table-cell>
      <comparison-table-cell highlight>
        <base-icon color="white">mdi-check</base-icon>
      </comparison-table-cell>
      <comparison-table-cell>
        <base-icon>mdi-minus</base-icon>
      </comparison-table-cell>
    </comparison-table-row>

    <comparison-table-row title="Omistus">
      <comparison-table-cell>
        <base-icon>mdi-check</base-icon>
        <!--Asunto-osake-->
      </comparison-table-cell>
      <comparison-table-cell highlight>
        <base-icon color="white">mdi-check</base-icon>
        <!--Osuuskunnan jäsenyys, kunnes asunto on lunastettu. Sen jälkeen
          asunto-osake.-->
      </comparison-table-cell>
      <comparison-table-cell>
        <base-icon>mdi-minus</base-icon>
        <!--Ei omistusta-->
      </comparison-table-cell>
    </comparison-table-row>

    <comparison-table-row title="Vaadittu alkupääoma">
      <comparison-table-cell>
        ~30% markkinahinnasta
      </comparison-table-cell>
      <comparison-table-cell highlight
        >~5% tuotantohinnasta</comparison-table-cell
      >
      <comparison-table-cell>
        ~2kk vuokra
      </comparison-table-cell>
    </comparison-table-row>

    <comparison-table-row title="Maksettava">
      <comparison-table-cell>
        Yhtiövastike + Grynderin velkajärjestely
      </comparison-table-cell>
      <comparison-table-cell highlight
        >Vuokra + Lunastusosuus</comparison-table-cell
      >
      <comparison-table-cell>
        Vuokra
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

<template>
  <comparison-table title="Kotioksella et maksa turhasta">
    <comparison-table-heading
      :headings="[
        'Lisää hintaa valtatuotannossa',
        { title: 'Lisää hintaa Kotios-kodissa', highlight: true }
      ]"
    />
    <comparison-table-row
      title="Grynderin voittotavoite"
      help="Grynderillä tarkoitetaan valta-asuntotuotannossa rakennuttavaa yritystä. Tyypillisesti grynderi on rakennusliike."
    >
      <comparison-table-cell>
        <base-icon>mdi-close</base-icon>
      </comparison-table-cell>
      <comparison-table-cell highlight>
        <base-icon color="white">mdi-minus</base-icon>
      </comparison-table-cell>
    </comparison-table-row>

    <comparison-table-row title="Grynderin riskikate">
      <comparison-table-cell>
        <base-icon>mdi-close</base-icon>
      </comparison-table-cell>
      <comparison-table-cell highlight>
        <base-icon color="white">mdi-minus</base-icon>
      </comparison-table-cell>
    </comparison-table-row>

    <comparison-table-row title="Asunnonvälittäjän komissio">
      <comparison-table-cell>
        <base-icon>mdi-close</base-icon>
      </comparison-table-cell>
      <comparison-table-cell highlight>
        <base-icon color="white">mdi-minus</base-icon>
      </comparison-table-cell>
    </comparison-table-row>

    <comparison-table-row title="Tontti">
      <comparison-table-cell>
        <base-icon>mdi-close</base-icon>
      </comparison-table-cell>
      <comparison-table-cell highlight>
        <base-icon color="white">mdi-close</base-icon>
      </comparison-table-cell>
    </comparison-table-row>

    <comparison-table-row title="Rahoitus">
      <comparison-table-cell>
        <base-icon>mdi-close</base-icon>
      </comparison-table-cell>
      <comparison-table-cell highlight>
        <base-icon color="white">mdi-close</base-icon>
      </comparison-table-cell>
    </comparison-table-row>

    <comparison-table-row title="Markkinointi">
      <comparison-table-cell>
        <base-icon>mdi-close</base-icon>
      </comparison-table-cell>
      <comparison-table-cell highlight>
        <base-icon color="white">mdi-close</base-icon>
      </comparison-table-cell>
    </comparison-table-row>

    <comparison-table-row title="Suunnittelu">
      <comparison-table-cell>
        <base-icon>mdi-close</base-icon>
      </comparison-table-cell>
      <comparison-table-cell highlight>
        <base-icon color="white">mdi-close</base-icon>
      </comparison-table-cell>
    </comparison-table-row>

    <comparison-table-row title="Rakennutus">
      <comparison-table-cell>
        <base-icon>mdi-close</base-icon>
      </comparison-table-cell>
      <comparison-table-cell highlight>
        <base-icon color="white">mdi-close</base-icon>
      </comparison-table-cell>
    </comparison-table-row>

    <comparison-table-row
      title="KOTIOS-palvelu"
      help="KOTIOS-palvelun hinnoittelu perustuu sen kautta tilattujen palveluntarjoajien välityspalkkioon. Tarkka palvelun hinta riippuu tekemistänne hankinnoista ja niiden suuruuksista. Esimerkiksi ryhmäytyminen on hankkeellenne ilmaista. Käytännössä palvelun kokonaishinta on noin 0,5%-3% välillä kotisi hankintakustannuksista."
    >
      <comparison-table-cell>
        <base-icon>mdi-minus</base-icon>
      </comparison-table-cell>
      <comparison-table-cell highlight>
        <base-icon color="white">mdi-close</base-icon>
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

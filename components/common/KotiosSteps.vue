<template>
  <div class="steps-container">
    <div>
      <kotios-step
        v-for="(step, idx) in steps"
        :key="step.title"
        :step="step"
        :idx="idx"
        :show-length="showLengths"
        :phase-length="step.length"
        :large="large"
      />
    </div>
  </div>
</template>

<script>
import KotiosStep from './KotiosStep'

export default {
  components: {
    KotiosStep
  },
  props: {
    showLengths: { type: Boolean, default: false },
    large: { type: Boolean, default: false }
  },
  data() {
    return {
      steps: [
        {
          title: 'Unelmointi',
          description: [
            'Unelmointivaiheessa tutkaillaan ja selvitellään, mistä asuntorakentamisessa on kyse ja luodaan unelmia oman kodin ominaisuuksista.',
            'Autamme sinua hahmottamaan oman unelmakotisi. Kuuntelemme sinua, määritämme tarpeesi ja ohjeistamme sinut unelmiesi toteuttamisen polulle. Palvelustamme löydät helposti kaiken tarvitsemasi tiedon osallistavaan asuntohankkeeseen liittyen.',
            'Ymmärrämme, että osallistaminen ei sovi kaikille ja autammekin sinua tekemään tietoisen valinnan, onko se sinun ratkaisusi vai ei.'
          ]
        },
        {
          title: 'Ryhmäytyminen',
          description: [
            'Ryhmäytymisessä tapaat mahdollisia tulevia naapureitasi ja löydät sopivia kohteita kodillesi.',
            'Kaikki muut osallistavaa kotia etsivät ovat kätevästi palvelussamme yhdellä verkkosivulla. Voit keskustella heidän kanssaan ja muodostaa alustavia ryhmiä. Voit myös etsiä sinulle sopivia alkavia hankkeita ja tontteja.'
          ],
          length: '~6kk-2v'
        },
        {
          title: 'Suunnittelu',
          description: [
            'Suunnittelussa sitoudut yhdelle paikalle, ns. hankkelle. Palvelumme pitää sinua kädestä ja varmistaa, ettet sitoudu hankkeeseen, joka ei sovi sinulle. Pyrimme siis välttämään, että hukkaisit aikaa sekä rahaa ja joutuisit jättämään hankkeen kesken.',
            'Kun olet sitoutunut hankkeeseen, pääset osallistumaan kotisi suunnitteluun ammattilaisten avustuksella yhdessä tulevien naapureidesi kanssa.',
            'Sinulta tai naapureiltasi ei vaadita ammattiosaamista. Palvelumme tarjoaa teille arkkitehdin ja suunnitteluohjaajan, joiden avulla kotinne suunnitelmien tekeminen etenee sujuvasti ja mukavasti.',
            'Sitoutumisen yhteydessä maksetaan liittymismaksu, jolla aloitetaan kotisi hankintahinnan maksaminen. Joudut maksamaan hankkeelle kuitenkin vain sen verran kuin hankintoihin kuluu sillä hetkellä. Koko hankintahintaa ei siis makseta kerralla. Suunnitteluvaiheessa investoinnit ovat vielä pieniä kotisi koko hankintahintaan nähden.'
          ],
          length: '~6kk-1v'
        },
        {
          title: 'Rakentaminen',
          description: [
            'Suunnittelun jälkeen siirrytään itse rakentamiseen. Kotisi rakennetaan ammattitaidolla ja huolellisesti.',
            'Hankkeenne voi valita, ottavatko asukkaat enemmän vai vähämmän vastuuta rakentamisesta. Asukkaat voivat kantaa rakentamisessa enemmän vastuuta olemalla rakennuttajan roolissa. Vaihtoehtona on olla "avaimet käteen"-ratkaisun tilaajia.',
            'Kerromme hankkeellenne vielä ennen päätöstänne, mitä hyötyjä ja riskejä rakennuttajan sekä ostajan rooliin kuuluu, jotta voitte perustaa päätöksenne faktoihin ja omaan tahtotilaanne.',
            'Tässäkään vaiheessa sinulta ei vaadita ammattitaitoa. Palvelustamme löydät teitä auttavan rakennuttajakonsultin ja tarvittavan hankintaverkoston tai rakennnusliikkeen.'
          ],
          length: '~6kk-1v'
        },
        {
          title: 'Asuminen',
          description: [
            'Jes, pääset muuttamaan uuteen upeaan kotiisi ja aloittamaan asumisen!',
            'Halutessanne saatte palvelustamme taloyhtiöstrategian, joka antaa eväät sujuvaan kiinteistönhallintaan.'
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.steps-container {
  display: flex;
  flex-direction: column;
  margin-top: $u4;
  margin-bottom: $u4;
}
</style>

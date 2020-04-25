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
    showLengths: { type: Boolean, default: false }
  },
  data() {
    return {
      steps: [
        {
          title: 'Unelmointi',
          description: [
            'Unelmointivaiheessa tutkaillaan ja selvitellään, mistä asuntorakentamisessa on kyse ja luodaan unelmia oman kodin ominaisuuksista.',
            'Autamme sinua hahmottamaan oman unelmakotisi. Kuuntelemme sinua ja ohjeistamme sinut unelmiesi toteuttamisen polulle.'
          ]
        },
        {
          title: 'Ryhmäytyminen',
          description: [
            'Ryhmäytymisessä tapaat mahdollisia tulevia naapureitasi ja löydät itsellesi sopivia paikkoja. Samalla päätät mille hankkeelle haluat lähteä mukaan.',
            'Löydät ne kaikki palvelustamme.'
          ],
          length: '~6kk-2v'
        },
        {
          title: 'Suunnittelu',
          description: [
            'Suunnittelussa sitoudut yhdelle paikalle ja ns. hankkelle. Siinä osallistut kotisi suunnitteluun ammattilaisten avustuksella yhdessä tulevien naapureidesi kanssa.',
            'Hankkeenne saa palvelustamme ohjausta ja ammattilaisten kirjon.'
          ],
          length: '~6kk-1v'
        },
        {
          title: 'Rakentaminen',
          description: [
            'Kotisi rakennetaan ammattitaidolla ja huolellisesti.',
            'Asukkaat voivat kantaa rakentamisessa enemmän vastuuta olemalla rakennuttajan roolissa. Vaihtoehtona on olla "avaimet käteen"-ratkaisun tilaajia.',
            'Mikä ikinä onkaan valintanne, autamme teitä.'
          ],
          length: '~6kk-1v'
        },
        {
          title: 'Muutto',
          description: [
            'Jee, muutto!',
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
  align-items: center;
  margin-top: $u4;
  margin-bottom: $u4;
}
</style>

<template>
  <div>
    <h2>Kyläyhteisö keskellä kaupunkia!</h2>
    <project-p>
      Blasienholmankadulle rakennetaan idyllinen puukerrostalo, jonka asunnot
      suunnitellaan asukkaiden toiveet toteuttaen. Kodikkaat ja viihtyisät
      yhteistilat ja merinäköalat tarjoava kattoterassi takaavat ihastuttavan
      kyläyhteisön kaupungin keskellä. Ja kuten aidot Uusikaupunkilaiset
      sanoisivat: "Onhan meil meri iha rannas!"
    </project-p>

    <h2>
      Uusikaupunki – Idyllinen merenrantakaupunki, jossa kaikki on lähellä
    </h2>
    <project-p>
      Tämän lähemmäksi et Uudenkaupungin palveluja pääse! Uusikaupunki on
      idyllinen pikkukaupunki, joka tarjoaa monipuoliset palvelut, hyvät
      liikuntamahdollisuudet ja mielenkiintoista kulttuuritarjontaa.
      Pikkukaupungin kiireetön, mutta aktiivinen elämänmeno tempaa mukaansa.
      Blasienholmankadun puukerrostalossa kaikki on vain lyhyen kävelymatkan
      päässä. Itäpuiston kuntoradalle on matkaa vain pari korttelia ja
      Ruokolanjärven ja Käätyjärven maisemia pääset ihailemaan 5 minuutin
      kävelymatkan päässä. Juna-asema on vieressä ja sairaala on tien toisella
      puolella.
    </project-p>

    <h2>Omistusamusta vuokrakohteen hinnalla</h2>
    <project-p>
      Asunto-osuuskunta mahdollistaa omistusasumisen ilman mittavaa
      pankkilainaa. KotiOS-kohteet rahoitetaan asunto-osuuskuntamallin
      mukaisesti. Rahoitus rakentuu ARAn takauslainasta ja asumisosuuskunnan
      liittymismaksuista. Asukkaille muodostuu vuokrasuhde osuuskuntaan ja
      osuuskunnan jäsenyyden kautta asukkaat pääsevät vaikuttamaan aivan kuten
      omistusasumisessa. Asukas maksaa osuuskunnalle 5-10 % liittymismaksun,
      joka oikeuttaa hallinnoimaan asuntoa. Vuokratuloilla osuuskunta kattaa
      rakennuslainan lyhennykset ja kaikki kiinteistön hoitokulut. Kun
      osuuskunnan velka on maksettu, on asunto sinun!
    </project-p>

    <h2>Edulliset rakennus- ja asumiskustannukset</h2>
    <project-p>
      Perinteinen rakennuttaminen tähtää korkeisiin katteisiin, eikä rakennuksen
      energiaratkaisuja välttämättä mietitä edullisten asumiskustannusten
      näkökulmasta. KotiOS rakennuttaa asukaslähtöisiä koteja niin, että
      asuminen on edullista ja ekologista ja asunto on suunniteltu juuri sinun
      unelmasi huomioon ottaen. Markkinahintoja edullisemmat
      rakennuskustannuksemme perustuvat yhteistyöhön asiakkaan kanssa. Kun
      turhat välikädet jätetään prosessista pois, on lopputuloksena edullinen ja
      yksilöity unelmiesi koti!
    </project-p>

    <!-- <project-p>
      <b>
        Kohde on ennakkomarkkinoinnissa ja kuvat ovat alustavia luonnoskuvia
        kohteesta. Yksityiskohdat tarkentuvat suunnitelmien edetessä ja
        rakentaminen aloitetaan heti, kun asukasryhmä on koottu. Liity sinäkin
        mukaan postituslistalle!
      </b>

      <base-button color="accent" @click="$emit('addDream')">
        Lisää kohde postituslistalle
      </base-button>
    </project-p> -->
  </div>
</template>

<script>
import ProjectP from '../common/ProjectP'
export default {
  components: {
    ProjectP
  }
}
</script>

<style></style>

<template>
  <div class="container-base privacy-page">
    <h2>Rekisteri- ja tietosuojaseloste</h2>
    <h3>Laatimispäivä</h3>
    <p>25.4.2020</p>
    <h3>Rekisterinpitäjä</h3>
    <p>KotiOS</p>
    <p>R&amp;T Rakennustuotepalvelut Oy (y-tunnus 2608465-2)</p>
    <p>Keijunkatu 1, 20540 Turku</p>
    <p>Puh. 040 744 7460, v-p.rajala@rakennustuotepalvelut.fi</p>

    <h3>Yhteyshenkilö rekisteriä koskevissa asioissa</h3>
    <p>V-P Rajala</p>
    <p>Keijunkatu 1, 20540 Turku</p>
    <p>Puh. 040 744 7460, v-p.rajala@rakennustuotepalvelut.fi</p>

    <h3>Rekisterin nimi</h3>
    <p>Asiakas- ja markkinointirekisteri</p>
    <h3>Henkilötietojen käsittelyn tarkoitus</h3>
    <p>Henkilötietojen käsittelyn tarkoitus on</p>
    <ul>
      <li>asiakas- ja markkinointiviestinnän toteuttaminen</li>
      <li>asiakkaiden palvelutuotannon kehittäminen.</li>
    </ul>

    <h3>Rekisterin tietosisältö</h3>
    <p>Sekä asiakkaiden että markkinoinnin osalta rekisterin tietosisältö on</p>
    <ul>
      <li>asiakkaan nimi, puhelinnumero, sähköpostiosoite ja asuinalue</li>
      <li>
        erilaiset asumisen kiinnostuksen kohteisiin liittyvät tiedot, jotka
        asiakas on itse antanut meille vastaamalla tekemiimme kyselyihin.
      </li>
    </ul>
    <p>
      Rekisteröidystä voi olla tallennettu tietoja sekä asiakas- että
      markkinointirekisterin näkökulmasta.
    </p>

    <h3>Säännönmukaiset tietolähteet</h3>
    <ul>
      <li>Rekisteröidyltä itseltään kyselyiden kautta saadut tiedot</li>
      <li>
        Rekisteröidyn kotios.fi-internetsivustolla käynneistä tallentuvat tiedot
      </li>
    </ul>

    <h3>Tietojen säännönmukaiset luovutukset</h3>
    <p>
      Tietoja ei luovuteta markkinointitarkoituksiin yrityksen ulkopuolelle.
    </p>

    <h3>Tietojen siirto EU:n tai ETA:n ulkopuolelle</h3>
    <p>
      Henkilötietoja ei siirretä EU:n tai ETA:n ulkopuolelle, mutta osa
      henkilötietojen automaattisesta käsittelystä markkinointiviestintään
      liittyen voi tapahtua EU:n tai ETA:n ulkopuolella olevista
      tietojärjestelmistä. Tällaisissa tapauksissa käytettävät järjestelmät
      noudattavat EU:n ja Yhdysvaltojen välistä Privacy Shield -sopimusta.
    </p>

    <h3>Rekisterin suojauksen periaatteet</h3>
    <h4>Manuaalinen aineisto</h4>
    <p>
      Manuaalinen aineisto säilytetään rekisterinpitäjän toimitiloissa
      lukittuna.
    </p>
    <h4>ATK:lla käsiteltävät tiedot</h4>
    <p>
      ATK:lla käsiteltävät tiedot säilytetään tietoturvakäytäntöjä noudattaen
      rekisterinpitäjän tietojärjestelmässä, johon tallennettuihin tietoihin
      pääsevät ja niitä ovat oikeutettuja käyttämään vain tietyt, ennalta
      määritellyt rekisterinpitäjän työntekijät. Henkilötietojen käsittely
      voidaan myös ulkoistaa osittain kolmannelle osapuolelle, kuten
      markkinointitoimistolle. Tällöin taataan sopimusjärjestelyin, että
      henkilötietoja käsitellään voimassa olevan tietosuojalainsäädännön
      mukaisesti ja muutoin asianmukaisesti.
    </p>

    <h3>Tarkastusoikeus</h3>
    <p>
      Pääsääntöisesti jokaisella on oikeus tarkistaa henkilörekisteriin
      talletetut tietonsa. Pyyntö tulee tehdä sähköpostitse osoitteella
      v-p.rajala@rakennustuotepalvelut.fi sekä liittää mukaan kuvallinen
      todistus omasta henkilöllisyydestään. Pyyntöihin pyritään vastaamaan
      seitsemän (7) vuorokauden kuluessa.
    </p>

    <h3>Oikeus vaatia tiedon korjaamista</h3>
    <p>
      Jokaisella on oikeus vaatia henkilörekisterissä olevan virheellisen tiedon
      korjaamista. Vaatimus tulee tehdä sähköpostitse osoitteella
      v-p.rajala@rakennustuotepalvelut.fi.
    </p>

    <h3>Muut henkilötietojen käsittelyyn liittyvät oikeudet</h3>
    <p>
      Jokaisella on oikeus kieltää itseään koskevien tietojen käyttö
      suoramainontaan, etämyyntiin ja muuhun suoramarkkinointiin sekä markkina-
      ja mielipidetutkimuksiin. Kielto tulee tehdä sähköpostitse osoitteella
      v-p.rajala@rakennustuotepalvelut.fi.
    </p>

    <h3>Asetukset, joihin tietosuoja- ja rekisteriseloste perustuu</h3>
    <p>
      Euroopan parlamentin ja neuvoston asetus (EU) 2016/679, annettu 27.
      päivänä huhtikuuta 2016, luonnollisten henkilöiden suojelusta
      henkilötietojen käsittelyssä sekä näiden tietojen vapaasta liikkuvuudesta
      ja direktiivin 95/46/EY kumoamisesta (yleinen tietosuoja-asetus) sekä
      Henkilötietolain (523/1999) 10 §:n ja 24 §:n mukainen tietosuoja- ja
      rekisteriseloste.
    </p>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: this.$t('routes.data-privacy')
    }
  },
  auth: false
}
</script>

<style lang="scss" scoped>
.privacy-page {
  margin-top: $u8;
  margin-bottom: $u8;
}
h3 {
  text-transform: none;
  margin-top: $u4;
}
</style>

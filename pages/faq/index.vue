<template>
  <div>
    <div class="hero">
      <div class="container-base">
        <h1 class="hero-title">
          Usein kysyttyä
        </h1>
      </div>
    </div>
    <div class="container-base questions">
      <v-expansion-panels>
        <v-expansion-panel v-for="(item, i) in questions" :key="item.title">
          <v-expansion-panel-header>
            {{ i + 1 }}. {{ item.title }}
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            {{ item.answer }}
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      questions: [
        {
          title: 'Onko osallistava asuntohanke uusi keksintö?',
          answer:
            'Ensimmäinen laki, joka palveli osallistamisen tarpeita, säädettiin Suomessa jo vuonna 1897. Ennen toista maailmansotaa ryhmärakennuttamista harjoitettiin paljon, ja suuri osa esimerkiksi Helsingin jugend-taloista on rakennettu ryhmärakennuttamisperiaatteilla. 1960-luvulta lähtien teollinen asuntotuotanto alkoi lisääntyä ja ryhmärakennuttaminen jäi toistaiseksi taka-alalle. Nyt ryhmärakennuttaminen on nousemassa uudelleen suosituksi tavaksi oman kodin hankintaan.'
        },
        {
          title:
            'Missä vaiheessa osallistavaan asuntohankkeeseen voi tulla mukaan?',
          answer:
            'Osallistavaan asuntohankkeeseen voi tulla mukaan missä vaiheessa tahansa. Hankkeessa ei välttämättä tarvitse olla mukana alusta asti ja osallistua itse ryhmän muodostamiseen, vaan käynnissä olevaankin hankkeeseen voi liittyä niin kauan kuin talossa on asuntoja vapaana. Mitä aikaisemmin olet mukana, sitä enemmän sinulla on vaikuttamismahdollisuuksia.'
        },
        {
          title:
            'Miksi osallistava asuntohanke tulee halvemmaksi kuin valmiin asunnon ostaminen vastaavanlaisesta grynderin rakennuttamasta talosta?',
          answer:
            'Niissä osallistavissa asuntohankkeissa, joissa asukkaat toimivat rakennuttajina, asukkaat säästyvät maksamasta grynderin riskikatetta, joka on aina sisällytetty valmistuvien asuntojen hintoihin. Tämä raha voidaan osallistavassa asuntohankkeessa hyödyntää parannettuna laatuna tai säästönä. Rakennuttamistehtäviin luonnollisesti kuluu enemmän aikaa kuin perinteisissä hankkeissa, mutta kustannukset jäävät yleensä silti pienemmiksi kuin grynderin kanssa toimittaessa.'
        },
        {
          title: 'Mitä jos osallistava asuntohanke epäonnistuu?',
          answer:
            'Jos hankkeessa ei ole mukana riittävää asiantuntijuutta, on epäonnistumisen riski toki olemassa. Osaamattoman projektinjohdon takia hankkeen aikataulu voi venyä tai rahoituksen saaminen voi muodostua ongelmaksi. Kun asioihin perehtyy huolellisesti etukäteen ja hyödyntää ammattilaisten apua, hankkeella on erittäin hyvät onnistumisen mahdollisuudet. RENTO-palvelun kautta tarvittavat asiantuntijat on helppo löytää.'
        },
        {
          title:
            'Miten voidaan välttää osallistamisprosessissa syntyvät konfliktit ryhmän sisällä?',
          answer:
            'Tärkeintä on luoda asukasläheiset pelisäännöt heti hankkeeseen ryhdyttäessä. On selvää, että konflikteja voi yhteisiä taloudellisia asioita hoidettaessa syntyä, mutta niihin kannattaa suhtautua asioita eteenpäin vievinä tilanteina. Jokaisella hankkeessa mukana olevalla on osaltaan vastuu konfliktien hallintaan panostamisesta. Päätöstentekotavasta on myös hyvä sopia jo alussa.'
        },
        {
          title: 'Sopiiko osallistava asuntohanke vain omistusasumiseen?',
          answer:
            'Useimmin osallistavaa asuntohanketta käytetään omistusasuntojen rakennuttamiseen, mutta sen periaatteita hyödyntäen voidaan toteuttaa myös asunto-osuuskuntia ja asumisoikeus- tai vuokra-asuntoja.'
        },
        {
          title:
            'Pitääkö kaikkien osallistavaan asuntohankkeeseen lähtevien olla sosiaalisia ja yhteisöllisiä?',
          answer:
            'Joustavuus ja yhteistyötaidot korostuvat osallistissa asuntohankkeissa, mutta asumisen aikaiselle käyttäytymiselle se ei aseta vaatimuksia. Yhteisöllisyyttä ei tuputeta kenellekään, vaan tavoitteena on asukkaiden näköinen asuminen ja parempi asumisen laatu. Jos ryhmä koostuu enemmän omaa rauhaa arvostavista asukkaista, voidaan keskittyä yhteisten tilojen sijaan omiin asuntoihin panostamiseen.'
        },
        {
          title:
            'Voiko osallistavalla asuntohankkeella hankkia sijoitusasunnon?',
          answer:
            'Kyllä. Ryhmä yksityisiä sijoittajia voi ryhtyä osallistavaan asuntohankkeeseen tai yksittäiset sijoittajat voivat lähteä mukaan osaksi hanketta, jossa muut mukana olijat ovat rakennuttamassa asuntoja omaan käyttöönsä.'
        },
        {
          title:
            'Miten osallistavalla asuntohankkeella voidaan luoda parempaa maailmaa?',
          answer:
            'Osallistava asuntohanke tarjoaa ihmisille tavan vaikuttaa ympäristönsä kehittämiseen kaupungissakin. Valittavissa ovat kestävät ratkaisut tilojen, energian ja materiaalien suhteen. Suuremmassa mittakaavassa ajateltuna tällä tavalla voisi tulevaisuudessa luoda kokonaisen unelmakaupungin.'
        },
        {
          title: 'Mikä on Rennon ansaintamalli?',
          answer: 'Kotios alustaliiketoiminnan periaatteisiin.' // TODO: Tähän lisää
        },
        {
          title: 'Kuinka voin aloittaa hankkeen?',
          answer:
            'Ennen hankkeen aloittamista on hyvä selvittää, onko alueellasi jo olemassa olevaa hanketta. ' +
            'Hankkeen aloittamista varten tarvitset ydinryhmän. ' +
            'Ydinryhmän muodostamiseksi voit ottaa yhteyttä hankeneuvojaamme ja aloitamme selvityksen ydinryhmän löytämiseksi.'
        },
        {
          title:
            'Kuinka nopeasti pääsen asumaan uuteen kotiini, jos se on toteutettu osallistavasti?',
          answer:
            'Osallistavat asuntohankkeet, erityisesti ryhmä- ja asunto-osuuskuntahankkeet voivat kestää pidempään, kuin normaali asuntotuotanto. Kotioss-polulla toteutetut hankkeet vievät keskimäärin 2-3 vuotta. IlmanKotiosos-polkua hankkeet vievät noin 4-7 vuotta.'
        },
        {
          title: 'Ketkä muut toimijat tukevat osallistavia asuntohankkeita?',
          answer:
            'Osallistavia asuntohankkeita tukevat esimerkiksi Ryhmärakennuttajat RY ja ARA. Konsulttivetoisia hankkeita järjestävät muun muassa Saraco D&M Oy sekä Fira.'
        },
        {
          title: 'Onko Kotioss rakennuttajakonsulttipalvelua?',
          answer:
            'Kotioss ei ole rakennuttajakonsultti.Kotiosos välittää osallistavien asuntohankkeiden tarpeisiin oman alansa ammattilaisia. Ammattilaiset ovat itsenäisiä yrittäjiä, mutta jotka täyttäväKotiosios-vaatimukset.'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.hero {
  margin-bottom: 20px;
  background-image: url('/what-is/hero-2.jpg');
  background-size: cover;
  background-position: 50% 50%;
}

.questions {
  margin-bottom: 20px;
}
</style>

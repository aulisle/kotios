<template>
  <div>
    <v-card :elevation="3" class="card">
      <img
        class="card-img"
        src="https://hoodsstorage.blob.core.windows.net/pictures/492913.jpg"
      />
      <v-card-title>
        Torppala
      </v-card-title>
      <v-card-text>
        <p class="desc">
          Torppala sijaitsee melko lähellä keskustaa ja samalla maalaismaisemien
          äärellä Aurajoen varrella. Asukkaat saavuttavat luonnonrauhan ja
          lenkkipolut omalta kotiovelta.
        </p>
        <p>
          <md-icon class="kotios">nature</md-icon>joen varrella, metsän
          reunalla, pellon laidalla
        </p>
        <p>
          <md-icon class="kotios">location_city</md-icon>lähiöelämää,
          pientaloasumista
        </p>
        <p><md-icon class="kotios">timeline</md-icon>5km Kauppatorilta</p>
        <p><md-icon class="kotios">timeline</md-icon>2km Torppalan koulu</p>
        <div class="blogs">
          <h3>Kirjoituksia</h3>
          <a v-for="(blog, idx) in blogs" :key="idx" :href="blog.url">
            <v-card :elevation="0" class="blog-card">
              <img class="blog-img" :src="blog.thumbnail" />
              <v-card-text>
                {{ blog.title }}
              </v-card-text>
            </v-card>
          </a>
        </div>
        <div class="footer">
          <a href="https://hoods.fi/hood/turku/halinen">
            <base-button class="md-primary read-more"
              >Lue lisää alueesta Torppala</base-button
            >
          </a>

          <div class="powered-by-hoods">
            Powered by Hoods
          </div>
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blogs: [
        {
          url: 'https://hoods.fi/blog/article/164',
          title: 'Turun Kärsämäen punainen tupa ja aarteiden puutarha',
          thumbnail:
            'https://blog.hoods.fi/wp-content/uploads/2019/08/turku_kärsämäki_sormus_CYF-768x512.jpg'
        },
        {
          url: 'https://hoods.fi/blog/article/261',
          title:
            'Kaupunginosaviikoilla musiikki soi, lapset leikkii ja yhteisöllisy...',
          thumbnail:
            'https://blog.hoods.fi/wp-content/uploads/2019/09/turku_uittamo_Ispoisten-kartano_cyf-768x328.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.powered-by-hoods {
  text-align: right;
}

.desc {
  text-align: justify;
}

.kotios {
  color: $color-primary !important;
  margin-right: 10px;
}

.card {
  position: relative;
  .card-img {
    width: 100%;
    max-height: 220px;
    object-fit: cover;
  }
}

.read-more {
  margin: 0px;
}

.blog-card {
  display: flex;
  overflow: hidden;
  border: 1px solid #eee;
  margin-top: 5px;
  margin-bottom: 5px;

  .blog-img {
    max-width: 100px;
    object-fit: cover;
    border-radius: 0 !important;
  }
}

.blogs {
  margin-top: 20px;
  margin-bottom: 20px;
  h3 {
    padding-bottom: 10px;
  }
}

.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>

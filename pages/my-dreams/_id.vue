<template>
  <div class="container-base dream-places">
    <h2>Unelmakohteesi</h2>
    <p>
      Olet ilmoittanut alustavan kiinnostuksesi seuraavista kohteista. Saat
      uutisia sähköpostilla niihin liittyen.
    </p>
    <div class="cards">
      <div
        v-for="(dream, idx) in filteredDreams"
        :key="idx"
        class="card-container"
      >
        <v-card class="card">
          <v-card-title>
            {{ dream.data.title }} -
            <template v-if="dream.data.type === 0">Alue</template>
            <template v-else>Hanke</template>
          </v-card-title>
          <v-card-text>
            <template v-if="dream.data.type === 0">
              <h4>Koordinaatit: {{ dream.data.location | toLocation }}</h4>
            </template>
            <h4 v-if="dream.data.importantAspects.length !== 0">
              Asumisessa tärkeät tekijät
            </h4>
            <p v-if="dream.data.importantAspects.length !== 0">
              <template v-for="aspect in dream.data.importantAspects">
                {{ $t(`dreams.importantOptions.${aspect}`) }}
              </template>
            </p>
            <div
              v-if="dream.data.type === 1 && dream.project"
              class="image-conatainer"
            >
              <div
                v-if="dream.project.video && dream.project.video !== ''"
                class="video-container"
              >
                <video autoplay muted loop>
                  <source :src="dream.project.video" />
                </video>
              </div>
              <img
                v-else
                class="project-image"
                :src="dream.project.images[0]"
              />
            </div>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <base-button
              v-if="dream.data.projectId"
              :to="{ name: 'project-id', params: { id: dream.data.projectId } }"
              color="accent"
            >
              Avaa kohde
            </base-button>
          </v-card-actions>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: this.$t('routes.my-dreams')
    }
  },

  filters: {
    toLocation(val) {
      if (val != null && val.lat && val.lng) {
        return `${val.lat.toFixed(3)}, ${val.lng.toFixed(3)}`
      }
      return ''
    }
  },
  data() {
    return {
      dreams: []
    }
  },

  computed: {
    filteredDreams() {
      return this.dreams
        .filter(el => el.data.title != null && el.data.title !== '')
        .map(el => {
          if (el.data.type === 1) {
            return { ...el, project: this.getProject(el.data.projectId) }
          }
          return el
        })
    }
  },

  async asyncData({ $axios, params, error }) {
    return $axios
      .get(`/api/dreams/my-dreams/${params.id}`)
      .then(({ data }) => {
        return {
          dreams: data
        }
      })
      .catch(e => {
        error(e)
      })
  },

  methods: {
    getProject(id) {
      return this.$store.getters['interestMap/project'](id)
    }
  }
}
</script>

<style lang="scss" scoped>
.dream-places {
  margin-top: $u10;
  margin-bottom: $u10;
}

.image-conatainer {
  margin-top: $u2;
  margin-bottom: $u2;
}

.video-container video,
.project-image,
.image-container {
  max-height: $u40;
  object-fit: cover;
  width: 100%;
}

.card-container {
  margin-top: $u10;
}

@include media-breakpoint-up(lg) {
  .cards {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax($u50, 1fr));
    grid-gap: $u4;
  }
}
</style>

<template>
  <div>
    <project-images :images="project.images" />
    <div class="container-base page-content">
      <h1 class="project-heading">
        {{ project.title }}
      </h1>
      <div class="heading-row">
        <div>
          <p v-if="project.address">
            {{ project.address.line1 }}, {{ project.address.postCode }}
            {{ project.address.city }}
          </p>
        </div>
        <project-social-share :project="project" />
      </div>
    </div>
    <v-tabs v-model="tab">
      <v-tab>
        Kohde-info
      </v-tab>
      <v-tab>
        Miksi Kotios?
      </v-tab>
      <v-tab>
        Sijainti ja palvelut
      </v-tab>
      <v-tab>
        Hankkeen eteneminen
      </v-tab>
      <v-tab>
        Hintatieto
      </v-tab>
      <v-tab>
        Tontin tiedot
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <h2>Uudenlainen asunnonhankinta</h2>
            <p>
              Tälle upealle tontille rakennetaan koteja Kotios-palvelun avulla.
              Sen avulla sinä tulevana asukkaana pääset suurempaan rooliin
              kotisi hankinnassa. Kotios-menetelmät tarjoavat myös joustavat
              rahoitusmallit kuten asunto-osuuskunta-asumisen.
            </p>

            <p>
              Keräämme hankkeelle jäseniä. Hankkeen suunnittelu käynnistyy, kun
              ihmiset on koottu yhteen. Helpoin tapa ilmoittaa kiinnostuksesi
              kohteesta on lisätä se omalle unelmalistallesi.
            </p>
            <base-button @click="addDream">
              Ota ensiaskel kotisi hankintaan ja lisää kohde unelmalistallesi
            </base-button>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <div class="container-base"></div>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <div class="container-base">
              <project-map class="project-map" :location="project.location" />
            </div>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <div class="container-base"><kotios-steps show-lengths /></div>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <div class="container-base">
              Mistä hinta muodostuu?
            </div>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <div class="container-base">
              Tänne tontin tietoja
            </div>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>

    <div class="container-base">
      <project-contact class="project-contact" :contacts="project.contacts" />
      <project-extra-table class="project-extra-table" :project="project" />
    </div>
    <div class="container-base"></div>
  </div>
</template>

<script>
import ProjectImages from '@/components/project/ProjectImages'
import ProjectSocialShare from '@/components/project/ProjectSocialShare'
import ProjectMap from '@/components/project/ProjectMap'
import ProjectContact from '@/components/project/ProjectContact'
import ProjectExtraTable from '@/components/project/ProjectExtraTable'
import projectTypeMixin from '@/components/project/projectTypeMixin'
import { TYPES } from '@/store/defineDream'
import KotiosSteps from '@/components/common/KotiosSteps'

export default {
  components: {
    ProjectImages,
    ProjectSocialShare,
    // ProjectPhases,
    ProjectMap,
    ProjectContact,
    // ProjectEvents,
    // ProjectValues,
    // ProjectNeighbourhood,
    // ProjectInterestedFab,
    // ProjectHouseholds,
    ProjectExtraTable,
    KotiosSteps
  },

  mixins: [projectTypeMixin],

  data() {
    return {
      popup: true,
      showLikeReason: false,
      project: {
        images: ['/blobs/blue.svg'],
        phases: {}
      },
      tab: 0
    }
  },

  head() {
    return {
      title: this.$createTitle(this.project.title),
      meta: [
        ...this.$createSocialMeta({
          title: this.project.title,
          description: this.project.tagline,
          image: this.project.images[0],
          url: process.env.publicUrl + this.$route.path.substring(1)
        })
      ]
    }
  },

  async fetch() {
    const getProject = this.$store.getters['interestMap/project']

    this.project = getProject(this.$route.params.id)

    if (!this.project) {
      this.error('Projektia ei löytynyt')
    }
  },

  methods: {
    addDream() {
      this.$store.commit('defineDream/initType', TYPES.PLOT)
      this.$store.commit('defineDream/setValue', {
        field: 'projectId',
        value: this.project.id
      })

      this.$store.dispatch('defineDream/saveNew').then(() => {
        this.$router.push({ name: 'dream-step-2' })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.project-heading {
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: $tracking-wide;
  font-size: 2rem;
}

.project-tagline {
  font-weight: 800;
  font-size: 1.8rem;
  padding-top: 40px;
  padding-bottom: 40px;
}

.page-content {
  padding-top: 30px;
}

.heading-row {
  display: flex;
  flex-direction: column;
}

.project-type {
  display: flex;
  align-items: center;
  .text {
    margin-left: 10px;
    flex-grow: 1;
    flex-shrink: 0;
  }
}

.project-values {
  margin-top: 25px;
}

.project-phases {
  margin-top: 50px;
  margin-bottom: 30px;
}

.project-map {
  min-height: 600px;
  width: 100%;
  margin-bottom: 60px;
}

.project-events {
  margin-bottom: 30px;
  margin-top: 30px;
  flex-grow: 1;
  flex-shrink: 1;
}

.description-paragraph {
  text-align: justify;
}

.columns {
  display: flex;
  flex-direction: column;
}

.project-households,
.project-contact,
.project-extra-table {
  margin-top: 40px;
  margin-bottom: 50px;
}

.fab {
  position: fixed;
  bottom: 20px;
  right: 20px;
  left: auto;
}

.like-button {
  margin-left: 0px;
  &.md-button.md-theme-default.md-raised:not([disabled]).md-primary
    .md-icon-font {
    color: white;
    margin-right: 10px;
  }
}

@include media-breakpoint-up(lg) {
  .heading-row {
    justify-content: space-between;
    flex-direction: row;
  }

  .long-description {
    width: 500px;
    flex-shrink: 0;
  }

  .columns {
    flex-direction: row;
  }

  .project-events {
    margin-top: 0px;
    margin-left: 30px;
  }
}

@include media-breakpoint-up(xxl) {
  .long-description {
    width: 600px;
  }
}
</style>

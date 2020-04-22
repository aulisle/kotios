<template>
  <div>
    <project-images :images="project.images" />
    <div class="container-base">
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

    <div class="projct-tab-selector container-base">
      <v-tabs v-model="tab" class=" desktop-tab-bar">
        <v-tab v-for="tabItem in tabs" :key="tabItem.value">
          {{ tabItem.text }}
        </v-tab>
      </v-tabs>
      <v-select
        v-model="tab"
        :items="tabs"
        class="mobile-tab-selector"
        attach
        flat
        filled
      />
    </div>

    <v-tabs-items v-model="tab">
      <v-tab-item>
        <project-info-tab
          class="container-base  project-tab-item"
          @addDream="addDream"
        />
      </v-tab-item>
      <v-tab-item>
        <project-why-tab class="container-base project-tab-item" />
      </v-tab-item>
      <v-tab-item>
        <div class="container-base project-tab-item">
          <project-map class="project-map" :location="project.location" />
        </div>
      </v-tab-item>
      <v-tab-item>
        <div class="container-base project-tab-item">
          <kotios-steps show-lengths />
        </div>
      </v-tab-item>
      <v-tab-item>
        <div class="container-base project-tab-item">
          Mistä hinta muodostuu?
        </div>
      </v-tab-item>
      <v-tab-item>
        <div class="container-base project-tab-item">
          Tänne tontin tietoja
        </div>
      </v-tab-item>
    </v-tabs-items>

    <div class="container-base">
      <project-contact class="project-contact" :contacts="project.contacts" />
    </div>
    <div class="container-base"></div>
  </div>
</template>

<script>
import ProjectImages from '@/components/project/ProjectImages'
import ProjectSocialShare from '@/components/project/ProjectSocialShare'
import ProjectMap from '@/components/project/ProjectMap'
import ProjectContact from '@/components/project/ProjectContact'
import projectTypeMixin from '@/components/project/projectTypeMixin'
import { TYPES } from '@/store/defineDream'
import KotiosSteps from '@/components/common/KotiosSteps'
import ProjectInfoTab from '@/components/project/tabs/ProjectInfoTab'
import ProjectWhyTab from '@/components/project/tabs/ProjectWhyTab'

export default {
  components: {
    ProjectImages,
    ProjectSocialShare,
    ProjectMap,
    ProjectContact,
    KotiosSteps,
    ProjectInfoTab,
    ProjectWhyTab
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
      tab: 0,
      tabs: [
        {
          value: 0,
          text: 'Kohde-info'
        },
        {
          value: 1,
          text: 'Miksi kotios?'
        },
        {
          value: 2,
          text: 'Sijainti ja palvelut'
        },
        {
          value: 3,
          text: 'Hankkeen eteneminen'
        },
        {
          value: 4,
          text: 'Hintatieto'
        },
        {
          value: 5,
          text: 'Tontin tiedot'
        }
      ],
      tabTexts: ['kohde-info', 'meh']
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
  margin-top: $u10;
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

.project-tab-item {
  padding-top: $u4;
}

.projct-tab-selector {
  margin-top: $u3;
}

.desktop-tab-bar {
  display: none;
}

.mobile-tab-selector {
  position: relative;
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

  .desktop-tab-bar {
    display: block;
  }

  .mobile-tab-selector {
    display: none;
  }
}

@include media-breakpoint-up(xxl) {
  .long-description {
    width: 600px;
  }
}
</style>

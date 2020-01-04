<template>
  <div>
    <project-images :images="project.images" />
    <div class="container-base page-content">
      <div class="heading-row">
        <div>
          <h1 class="project-heading">
            {{ project.title }}
          </h1>
          <div>
            <md-button
              class="md-primary md-raised like-button"
              @click="showLikeReason = true"
            >
              <md-icon class="text-white">thumb_up</md-icon> Tykkää 1.2k
            </md-button>
            <v-dialog v-model="showLikeReason" max-width="400">
              <v-card>
                <v-card-title>Miksi pidät kohteesta?</v-card-title>
                <v-card-text></v-card-text>
                <v-card-actions>
                  <v-btn @click="showLikeReason = false">Sulje</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </div>
          <h2 class="project-type">
            <md-icon>{{ projectTypeIcon }}</md-icon>
            <span class="text">{{ projectType }}</span>
          </h2>
          <p v-if="project.address">
            {{ project.address }}
          </p>

          <project-values
            v-if="project.values"
            class="project-values"
            :values="project.values"
          />
        </div>
        <project-social-share :project="project" />
      </div>

      <project-phases class="project-phases" :phases="project.phases" />
    </div>
    <md-content>
      <div class="container-base">
        <h2 class="project-tagline">{{ project.tagline }}</h2>
        <project-map class="project-map" :location="project.location" />
        <div class="columns">
          <div class="long-description">
            <template v-if="project.description">
              <p
                v-for="(paragraph, idx) in project.description"
                :key="idx"
                class="description-paragraph"
              >
                {{ paragraph }}
              </p>
            </template>
          </div>
          <div>
            <project-neighbourhood
              v-if="project.neighbourhood"
              class="project-events"
            />
            <project-events class="project-events" :events="project.events" />
          </div>
        </div>
      </div>
    </md-content>

    <div class="container-base">
      <!-- <project-households class="project-households" /> -->
      <project-contact class="project-contact" :contacts="project.contacts" />
      <project-extra-table class="project-extra-table" :project="project" />
    </div>

    <div class="fab">
      <project-interested-fab :title="project.title" />
    </div>
  </div>
</template>

<script>
import ProjectImages from '@/components/project/ProjectImages'
import ProjectSocialShare from '@/components/project/ProjectSocialShare'
import ProjectPhases from '@/components/project/ProjectPhases'
import ProjectMap from '@/components/project/ProjectMap'
import ProjectContact from '@/components/project/ProjectContact'
import ProjectEvents from '@/components/project/ProjectEvents'
import ProjectValues from '@/components/project/ProjectValues'
import ProjectNeighbourhood from '@/components/project/ProjectNeighbourhood'
import ProjectInterestedFab from '@/components/project/ProjectInterestedFab'
// import ProjectHouseholds from '@/components/project/ProjectHouseholds'
import ProjectExtraTable from '@/components/project/ProjectExtraTable'
import projectTypeMixin from '@/components/project/projectTypeMixin'

export default {
  components: {
    ProjectImages,
    ProjectSocialShare,
    ProjectPhases,
    ProjectMap,
    ProjectContact,
    ProjectEvents,
    ProjectValues,
    ProjectNeighbourhood,
    ProjectInterestedFab,
    // ProjectHouseholds,
    ProjectExtraTable
  },

  mixins: [projectTypeMixin],

  data() {
    return {
      showLikeReason: false
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

  asyncData({ $axios, params }) {
    return $axios.get(`/api/projects/${params.id}`).then(({ data }) => {
      // eslint-disable-next-line
      console.log('DATA', data)
      return {
        project: data
      }
    })
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

@media (min-width: 992px) {
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

@media (min-width: 1200px) {
  .long-description {
    width: 600px;
  }
}
</style>

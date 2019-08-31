<template>
  <div>
    <project-images :images="project.images" />
    <div class="container-base page-content">
      <div class="heading-row">
        <div>
          <h1 class="project-heading">{{ project.title }}</h1>
          <h2 class="project-type">
            <md-icon>{{ projectTypeIcon }}</md-icon>
            <span class="text">{{ projectType }}</span>
          </h2>

          <project-values class="project-values" />
        </div>
        <project-social-share :project="project" />
      </div>

      <project-phases class="project-phases" />
    </div>
    <md-content>
      <div class="container-base">
        <h2 class="project-tagline">{{ project.tagline }}</h2>
        <project-map class="project-map" />
        <div class="columns">
          <div class="long-description">
            <p
              v-for="(paragraph, idx) in project.description"
              :key="idx"
              class="description-paragraph"
            >
              {{ paragraph }}
            </p>
          </div>
          <div>
            <project-neighbourhood class="project-events" />
            <project-events class="project-events" />
          </div>
        </div>
      </div>
    </md-content>

    <div class="container-base">
      <project-households class="project-households" />
      <project-contact class="project-contact" />
      <project-extra-table class="project-extra-table" />
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
import ProjectHouseholds from '@/components/project/ProjectHouseholds'
import ProjectExtraTable from '@/components/project/ProjectExtraTable'

const lorem =
  'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.\n'
const randomIntFromInterval = (min, max) => {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min)
}
const createLoremIpsum = paragraphs => {
  let strs = []
  for (let i = 0; i < paragraphs; i++) {
    strs.push(lorem.substring(0, randomIntFromInterval(100, lorem.length - 1)))
  }

  return strs
}

export default {
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
    ProjectHouseholds,
    ProjectExtraTable
  },

  data() {
    return {
      project: {
        projectType: 0, // Ryhmärakennus
        title: 'Torppala',
        tagline:
          'Torppala Kaarinan ja Turun rajalla, ekologinen kylä Itämeren rannalla, Ihmisen hyvä asua ja olla.',
        description: createLoremIpsum(5),
        images: [
          '/torppala/header.png',
          '/torppala/torppala0.jpg',
          '/torppala/torppala1.jpg',
          '/torppala/torppala2.jpg'
        ]
      }
    }
  },

  computed: {
    projectType() {
      if (!this.project || typeof this.project.projectType === 'undefined') {
        return ''
      }

      const projectTypes = ['Ryhmärakennushanke', 'Tontin luovutus']
      return projectTypes[this.project.projectType]
    },

    projectTypeIcon() {
      if (!this.project || typeof this.project.projectType === 'undefined') {
        return ''
      }

      const icons = ['home_work', 'layers']
      return icons[this.project.projectType]
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

@media (min-width: 992px) {
  .heading-row {
    justify-content: space-between;
    flex-direction: row;
  }

  .long-description {
    max-width: 500px;
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
    max-width: 600px;
  }
}
</style>

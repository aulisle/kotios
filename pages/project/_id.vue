<template>
  <div>
    <project-images />
    <div class="container-base page-content">
      <div class="heading-row">
        <div>
          <h1 class="project-heading">{{ project.title }}</h1>
          <h2 class="project-type">
            <md-icon>{{ projectTypeIcon }}</md-icon>
            <span class="text">{{ projectType }}</span>
          </h2>
        </div>
        Haluatko projektin menestyvän? Jaa se kavereillesi
        <project-social-share />
      </div>

      <project-phases class="project-phases" />

      <project-events class="project-events" />
    </div>
    <md-content>
      <div class="container-base">
        <h2 class="project-tagline">{{ project.tagline }}</h2>
        <project-map class="project-map" />
        <p v-for="(paragraph, idx) in project.description" :key="idx">
          {{ paragraph }}
        </p>
      </div>
    </md-content>

    <div class="container-base">
      <project-contact />
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

const createLoremIpsum = paragraphs => {
  let strs = []
  for (let i = 0; i < paragraphs; i++) {
    strs.push(
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.\n'
    )
  }

  return strs
}

export default {
  components: {
    ProjectImages,
    ProjectSocialShare,
    ProjectPhases,
    ProjectMap,
    ProjectContact,
    ProjectEvents
  },

  data() {
    return {
      project: {
        projectType: 1, // Ryhmärakennus
        title: 'Torppala',
        tagline:
          'Torppala Kaarinan ja Turun rajalla, ekologinen kylä Itämeren rannalla, Ihmisen hyvä asua ja olla.',
        description: createLoremIpsum(3)
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
  justify-content: space-between;
}

.project-type {
  display: flex;
  align-items: center;
  .text {
    margin-left: 10px;
  }
}

.project-phases {
  margin-top: 30px;
  margin-bottom: 30px;
}

.project-map {
  min-height: 600px;
  width: 100%;
  margin-bottom: 60px;
}
</style>

export const getProjectType = project => {
  if (!project || typeof project.projectType === 'undefined') {
    return ''
  }

  const projectTypes = [
    'Ryhmärakennushanke',
    'Tontin luovutus',
    'Konsulttivetoinen hanke',
    'Asunto-osuuskunta',
    'Osallistava asuntohanke'
  ]
  return projectTypes[project.projectType]
}

export const getProjectTypeIcon = project => {
  if (!project || typeof project.projectType === 'undefined') {
    return ''
  }

  const icons = ['home_work', 'layers', 'build', 'home_work', 'home_work']
  return icons[project.projectType]
}

const mixin = {
  computed: {
    projectType() {
      return getProjectType(this.project)
    },

    projectTypeIcon() {
      return getProjectTypeIcon(this.project)
    }
  }
}

export default mixin

export const getPhaseTypes = phases => {
  const res = []

  if (typeof phases.project !== 'undefined') {
    res.push({
      name: 'project',
      icon: 'account_tree',
      phase: phases.project
    })
  }

  if (typeof phases.plot !== 'undefined') {
    res.push({
      name: 'plot',
      icon: 'layers',
      phase: phases.plot
    })
  }

  if (typeof phases.group !== 'undefined') {
    res.push({
      name: 'group',
      icon: 'group',
      phase: phases.group
    })
  }

  return res
}

const mixin = {
  computed: {
    phaseTypes() {
      return getPhaseTypes(this.phases)
    }
  },

  methods: {
    calcPercentage(curPhase, totalPhases) {
      return (curPhase + 0.05) / (totalPhases - 1 + 0.05)
    },

    progress(phaseType) {
      let percentage = 0
      if (phaseType.name === 'project') {
        percentage = this.calcPercentage(phaseType.phase, 4)
      } else if (phaseType.name === 'plot') {
        percentage = this.calcPercentage(phaseType.phase, 2)
      } else if (phaseType.name === 'group') {
        percentage = this.calcPercentage(phaseType.phase, 3)
      }

      return `${percentage * 100}%`
    }
  }
}

export default mixin

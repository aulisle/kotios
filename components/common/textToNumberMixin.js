const mixin = {
  methods: {
    textToNumber(val) {
      if (val === '') {
        val = 0
      } else if (typeof val === 'string') {
        val = parseInt(val)
      } else {
        val = 0
      }

      if (val < 0) {
        // Clamp zero
        val = 0
      }

      return val
    }
  }
}

export default mixin

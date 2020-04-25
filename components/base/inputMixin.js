const mixin = {
  props: {
    label: {
      type: String,
      default: ''
    },
    required: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    labelComp() {
      if (this.required) {
        return `${this.label} *`
      }
      return this.label
    }
  }
}

export default mixin

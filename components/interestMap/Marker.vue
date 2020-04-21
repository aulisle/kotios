<template>
  <interest-indicator
    v-if="data.type === 0"
    v-show="mode === 'browse'"
    :interest="data.interest"
  />
  <project-indicator
    v-else-if="data.type === 1"
    v-show="mode === 'browse'"
    :project-id="data.id"
  />
</template>

<script>
import InterestIndicator from './InterestIndicator'
import ProjectIndicator from './ProjectIndicator'
import { mapState } from 'vuex'

export default {
  components: {
    InterestIndicator,
    ProjectIndicator
  },
  props: {
    data: { type: Object, required: true }
  },

  computed: {
    ...mapState('interestMap', ['mode'])
  }
}
</script>

<style></style>

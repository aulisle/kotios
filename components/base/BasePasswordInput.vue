<template>
  <div class="wrapper">
    <base-input
      :value="value"
      :label="label"
      type="password"
      :errors="errors"
      @input="input"
    />

    <div class="privStrength-indicator">
      <div
        v-for="val in privStrength"
        :key="val"
        class="bar"
        :class="`privStrength-${privStrength}`"
      />
      <div
        v-for="(val, idx) in 4 - privStrength"
        :key="`fill-${idx}`"
        class="bar empty"
      />
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import zxcvbn from 'zxcvbn'

export default {
  props: {
    label: { type: String, default: '' },
    value: { type: String, required: true },
    errors: { type: Array, required: false, default: () => [] },
    strength: { type: Number, required: false, default: 0 }
  },

  computed: {
    privStrength() {
      return zxcvbn(this.value).score
    }
  },

  watch: {
    privStrength(newStrength) {
      this.$emit('update:strength', newStrength)
    }
  },

  methods: {
    input(value) {
      this.$emit('input', value)
      Vue.nextTick(() => {
        this.$forceUpdate()
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  position: relative;
}

.privStrength-indicator {
  width: 100%;
  height: 5px;
  display: flex;
  align-items: stretch;
}

.bar {
  border-radius: 20px;
  width: 25%;
  background-color: $color-accent;

  &.privStrength-2,
  &.privStrength-3,
  &.privStrength-4 {
    background-color: $color-primary;
  }

  &.empty {
    background-color: $color-hr;
  }
}
</style>

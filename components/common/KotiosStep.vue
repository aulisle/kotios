<template>
  <v-dialog v-model="dialog" max-width="640">
    <template v-slot:activator="{ on }">
      <button class="step" v-on="on">
        <div class="blob-container">
          <img :src="getBlob(idx)" class="blob" />
          <h2 class="blob-number">{{ idx + 1 }}</h2>
        </div>
        <h3 class="step-title">{{ step.title }}</h3>
        <base-icon class="info-icon" color="text-secondary">
          mdi-information
        </base-icon>
      </button>
    </template>
    <v-card class="info-card">
      <v-card-title>{{ step.title }}</v-card-title>
      <v-card-text>
        <p v-for="(p, pIdx) in step.description" :key="pIdx">{{ p }}</p>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <base-button @click="dialog = false">
          Sulje
        </base-button>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    step: { type: Object, required: true },
    idx: { type: Number, required: true }
  },
  data() {
    return {
      dialog: false
    }
  },
  methods: {
    getBlob(idx) {
      const dots = ['base-1', 'base-2', 'base-3', 'base-4', 'base-5']

      const pos = idx % dots.length

      return `/blobs/${dots[pos]}.svg`
    }
  }
}
</script>

<style lang="scss" scoped>
.step {
  display: flex;
  align-items: center;
}

.blob-container {
  position: relative;
  flex-shrink: 0;
}

.blob {
  height: $u10;
  width: $u10;
  fill: $color-accent;
  flex-shrink: 0;
}

.dialog {
  max-width: $u80;
}

.step-title {
  margin-bottom: 0;
  margin-left: $u3;
  text-transform: none;
  text-align: left;
}

.blob-number {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: $color-text-alt;
}

.info-icon {
  margin-left: $u2;
  opacity: 0.4;
  color: $color-primary !important;
}
</style>

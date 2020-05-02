<template>
  <v-dialog v-if="!large" v-model="dialog" max-width="640">
    <template v-slot:activator="{ on }">
      <button class="step" v-on="on">
        <div class="blob-container">
          <img :src="getBlob(idx)" class="blob" :alt="`Vaiheen ${idx} pallo`" />
          <h2 class="blob-number">{{ idx + 1 }}</h2>
        </div>
        <h3 class="step-title">{{ step.title }}</h3>
        <base-icon class="info-icon" color="text-secondary">
          mdi-information
        </base-icon>
        <h4 v-if="showLength && phaseLength" class="duration">
          Kesto {{ phaseLength }}
        </h4>
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
  <div v-else class="large">
    <div class="large-blob">
      <div class="blob-container">
        <img :src="getBlob(idx)" class="blob" :alt="`Vaiheen ${idx} pallo`" />
        <h2 class="blob-number">{{ idx + 1 }}</h2>
      </div>
    </div>
    <div class="large-text">
      <div class="large-title">
        <div class="large-title-text">
          <h3 class="step-title">{{ step.title }}</h3>
          <h4 v-if="phaseLength" class="duration">Kesto {{ phaseLength }}</h4>
        </div>
      </div>

      <p v-for="(p, pIdx) in step.description" :key="pIdx">{{ p }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    step: { type: Object, required: true },
    idx: { type: Number, required: true },
    showLength: { type: Boolean, default: false },
    phaseLength: { type: String, default: '' },
    large: { type: Boolean, default: false }
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
  font-size: $font-m;
}

.duration {
  font-size: $font-xs;
}

.blob-number {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: $color-text-alt;
}

.info-icon {
  margin-left: $u1;
  opacity: 0.4;
  color: $color-primary !important;
}

.duration {
  margin-left: $u2;
}

.large {
  display: flex;
  align-items: flex-start;
  margin-bottom: $u5;

  .large-title {
    display: flex;
    align-items: center;
  }

  .large-text {
    margin-left: $u4;
  }

  .large-title-text {
    margin-bottom: $u3;
  }

  .step-title,
  .duration {
    margin-left: 0;
  }

  .blob-container {
    position: relative;
    flex-shrink: 0;
  }

  .large-blob {
    flex-shrink: 0;
  }

  .blob {
    height: $u15;
    width: $u15;
    fill: $color-accent;
    flex-shrink: 0;
  }
}

@include media-breakpoint-up(lg) {
  .step-title {
    font-size: $font-l;
  }
  .duration {
    font-size: $font-m;
    margin-left: $u4;
  }
}
</style>

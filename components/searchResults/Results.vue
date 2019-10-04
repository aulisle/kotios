<template>
  <div class="results">
    <h2 class="results-header">Kohteita {{ resultsTotal }}</h2>

    <nuxt-link
      v-for="result in results"
      :key="result.id"
      :to="{ name: 'project-id', params: { id: result.id } }"
      class="result-link"
    >
      <v-card
        class="result-card elevation-0"
        @mouseover="setHover(result.id)"
        @mouseleave="setHover(null)"
      >
        <img :src="result.thumbnail" class="thumbnail" />

        <div class="result-content">
          <v-card-text class="result-type">
            <span>
              {{ getProjectType(result) }}
            </span>

            <div
              v-if="result.phases && result.phases.group < 3"
              class="notice positive"
            >
              Etsitään kiinnostuneita
            </div>
            <div
              v-else-if="result.phases && result.phases.project === 4"
              class="notice complete"
            >
              Hanke valmistunut
            </div>
          </v-card-text>
          <v-card-title class="result-title">
            {{ result.title }}
          </v-card-title>
          <v-card-text>
            <p class="result-address">{{ result.address }}</p>

            <!--<p class="result-phases">
              <span
                v-for="phase in getPhases(result.phases)"
                :key="phase.name"
                class="phase-display"
              >
                <md-icon>{{ phase.icon }}</md-icon>
                {{ $t(`project.${phase.name}.${phase.phase}`) }}
              </span>
            </p>-->
            <p class="result-tagline">{{ result.tagline }}</p>
          </v-card-text>
        </div>
      </v-card>
    </nuxt-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { getPhaseTypes } from '../project/projectPhaseMixin'
import { getProjectType } from '../project/projectTypeMixin'

export default {
  computed: {
    ...mapState('search', ['results', 'resultsTotal', 'searchQuery'])
  },

  beforeDestroy() {
    this.$store.commit('search/setHoveredId', null)
  },

  methods: {
    setHover(id) {
      this.$store.commit('search/setHoveredId', id)
    },

    getPhases(phases) {
      return getPhaseTypes(phases)
    },

    getProjectType(project) {
      return getProjectType(project)
    }
  }
}
</script>

<style lang="scss">
.results-header {
  padding-top: 20px;
  padding-bottom: 40px;
  font-weight: 700;
}

.results {
  padding: 35px 17px 35px 35px;
}

$result-border: 1px solid $color-hr;

.result-card {
  margin-bottom: 20px;
  display: flex;
  transition: transform 0.2s ease-in-out;
  border: $result-border !important;
  flex-direction: column;

  &:hover {
    transform: scale(1.02);
  }
}

.thumbnail {
  width: 100%;
  flex-shrink: 0;
  flex-grow: 0;
  height: 200px !important;
  object-fit: cover;
}

.result-link:hover {
  text-decoration: none !important;
}

.notice {
  padding: 2px 6px;
  border-radius: 2px;
  font-size: $font-xs;
  opacity: 0.8;

  &.positive {
    background-color: #22bf22;
    color: $color-text-alt;
    border: 1px solid #22bf22;
  }

  &.complete {
    color: $color-text-primary;
    border: 1px solid #{$color-text-primary};
  }
}

.result-content {
  width: 100%;
}

.results {
  .result-type {
    text-transform: uppercase;
    letter-spacing: $tracking-mid;
    font-size: $font-s;
    color: $color-text-secondary;
    margin-top: 0px;
    margin-bottom: 0px;
    padding-bottom: 0px;
    display: flex;

    justify-content: space-between;
    align-items: center;
  }

  .result-title {
    margin-bottom: 0px;
    padding-bottom: 0px;
    font-weight: 800;
    margin-top: 5px;
    padding-top: 0px;
  }

  .result-address {
    color: $color-text-secondary;
    font-size: $font-s;
    margin-bottom: 0px;
  }

  .result-tagline {
    font-size: $font-s;
    color: $color-text-secondary;
    margin-top: 5px;
  }
}

$margin-result-x: 5px;
.result-phases {
  display: flex;
  margin-left: -$margin-result-x;
  margin-right: -$margin-result-x;
}

.phase-display {
  display: flex;
  align-items: center;
  margin-left: $margin-result-x;
  margin-right: $margin-result-x;
  font-size: $font-s;
  color: $color-text-secondary;
  line-height: 1;

  i {
    margin-right: 5px;
    color: $color-text-faint !important;
  }
}

@media screen and (min-width: #{$search-breakpoint-sm}) {
  .thumbnail {
    width: 100%;
  }
}

@media screen and (min-width: #{$search-breakpoint-xl}) {
  .result-card {
    height: 200px;
    flex-direction: row;
  }

  .thumbnail {
    width: 40%;
  }
}
</style>

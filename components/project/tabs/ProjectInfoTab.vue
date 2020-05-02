<template>
  <div class="tabs-wrapper">
    <div class="tabs-left">
      <template v-for="(section, idx) in description">
        <div v-if="section.type === 1" :key="idx" class="type-1">
          <div class="type-1-imgs">
            <img
              v-for="img in section.imgs"
              :key="img.url"
              :src="img.url"
              :alt="img.alt"
            />
          </div>
          <div class="type-1-text">
            <h2>{{ section.title }}</h2>
            <project-p
              v-for="(paragraph, pIdx) in section.paragraphs"
              :key="pIdx"
            >
              {{ paragraph }}
            </project-p>
          </div>
        </div>

        <div v-if="section.type === 2" :key="idx" class="type-2">
          <div class="type-2-text">
            <h2>{{ section.title }}</h2>
            <project-p
              v-for="(paragraph, pIdx) in section.paragraphs"
              :key="pIdx"
            >
              {{ paragraph }}
            </project-p>
          </div>
          <div class="type-2-imgs">
            <img
              v-for="img in section.imgs"
              :key="img.url"
              :src="img.url"
              :alt="img.alt"
            />
          </div>
        </div>

        <div v-if="section.type === 3" :key="idx" class="type-3">
          <h2 class="type-3-heading">{{ section.title }}</h2>
          <div class="type-3-imgs">
            <img
              v-for="img in section.imgs"
              :key="img.url"
              :src="img.url"
              :alt="img.alt"
            />
          </div>
          <project-p
            v-for="(paragraph, pIdx) in section.paragraphs"
            :key="pIdx"
            class="type-3-paragraph"
          >
            {{ paragraph }}
          </project-p>
        </div>

        <div v-if="section.type === 4" :key="idx" class="type-4">
          <div class="type-4-imgs">
            <img
              v-for="img in section.imgs"
              :key="img.url"
              :src="img.url"
              :alt="img.alt"
            />
          </div>
          <div class="type-4-text">
            <h2>{{ section.title }}</h2>
            <project-p
              v-for="(paragraph, pIdx) in section.paragraphs"
              :key="pIdx"
            >
              {{ paragraph }}
            </project-p>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import ProjectP from '../common/ProjectP'
export default {
  components: {
    ProjectP
  },

  props: {
    description: { type: Array, required: true }
  }
}
</script>

<style lang="scss" scoped>
h2:not(:first-child) {
  margin-top: $u8;
}

.type-1-text,
.type-3-text,
.type-4-text {
  margin-top: $u3;
}

.type-1,
.type-2,
.type-3 {
  margin-bottom: $u10;
}

@include media-breakpoint-up(lg) {
  .tabs-wrapper {
    display: flex;
  }

  .tabs-left {
    flex-grow: 1;
    flex-shrink: 1;
    width: $u100;
  }

  .tabs-right {
    width: $u40;
    margin-left: $u3;
  }

  .tabs-right-content {
    position: sticky;
    top: $u20;
  }

  .description-element {
    max-width: $u60;
  }

  .type-1 {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .type-1-imgs {
    max-width: $u60;
    margin: $u10;
    margin-left: 0;

    img + img {
      margin-top: $u5;
    }
  }

  .type-1-text {
    max-width: $u60;
  }

  .type-2 {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .type-2-imgs {
    max-width: $u70;
    margin: $u10;
    margin-right: 0;

    img + img {
      margin-top: $u5;
    }
  }

  .type-2-text {
    max-width: $u50;
  }

  .type-3 {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: $u20;
    margin-bottom: $u20;
    background-color: $color-bg-1;
    padding-top: $u15;
    padding-bottom: $u8;
  }

  .type-3-paragraph {
    max-width: $u70;
    text-align: center;
  }

  .type-3-heading {
    margin-bottom: $u6;
  }

  .type-4 {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .type-4-imgs {
    max-width: $u80;
    margin: $u10;
    margin-left: 0;

    img + img {
      margin-top: $u5;
    }
  }

  .type-4-text {
    max-width: $u50;
  }
}
</style>

<template>
  <section>
    <div class="error-container">
      <div class="container-base error-layout">
        <div class="mobile-icon-container">
          <base-icon color="accent" class="mobile-icon">
            <template v-if="error.statusCode === 404">
              mdi-cancel
            </template>
            <template v-else>
              mdi-emoticon-dead-outline
            </template>
          </base-icon>
        </div>
        <div class="text-container">
          <h1 class="error-title">Virhe {{ error.statusCode }}</h1>
          <template v-if="error.statusCode === 404">
            <h2 class="error-info">
              Hups! Tätä sivua ei löytynyt.
            </h2>
            <p>Sivu saattaa olla poistettu tai siirretty muualle.</p>
            <base-button
              class="button"
              active-class="ignore"
              :to="{ name: 'index' }"
              color="accent"
            >
              Palaa etusivulle
            </base-button>
          </template>
          <template v-else>
            <h2 class="error-info">
              Oho! Tapahtui odottamaton virhe.
            </h2>
            <p>
              {{ error.message }}
            </p>
            <base-button
              class="button"
              active-class="ignore"
              :to="{ name: 'index' }"
              color="accent"
            >
              Palaa etusivulle
            </base-button>
          </template>
        </div>
        <div class="desktop-icon-container">
          <base-icon color="accent" class="desktop-icon">
            <template v-if="error.statusCode === 404">
              mdi-cancel
            </template>
            <template v-else>
              mdi-emoticon-dead-outline
            </template>
          </base-icon>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    error: { type: [Error, Object], default: null }
  }
}
</script>

<style scoped lang="scss">
.error-container {
  min-height: 85vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.error-title {
  margin-top: 15px;
  font-size: $font-xxl;
}

.error-info {
  font-weight: 300;
  padding-top: $u3;
  margin-top: $u3;
}

.button {
  margin-top: 50px;
}

.logo-container {
  display: flex;
  justify-content: center;
}

.mobile-icon {
  font-size: $u30 !important;
}

.mobile-icon-container {
  display: flex;
  justify-content: center;
}

.desktop-icon-container {
  display: none;
}

.desktop-icon {
  font-size: $u40 !important;
}

@include media-breakpoint-up(lg) {
  .mobile-icon-container {
    display: none;
  }
  .desktop-icon-container {
    display: block;
  }

  .error-layout {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>

<template>
  <div>
    <h2 class="heading">Hankkeeseen liittyneet kotitaloudet</h2>

    <template v-if="!loggedIn">
      <md-empty-state
        md-icon="group"
        md-label="Kirjaudu sisään"
        md-description="Sisään kirjautuneena voit tutustua hankkeen kotitalouksiin."
      >
        <nuxt-link :to="{ name: 'login' }">
          <base-button class="md-raised md-primary">
            Kirjaudu sisään
          </base-button>
        </nuxt-link>
      </md-empty-state>
    </template>
    <template v-else>
      <div class="households">
        <v-avatar
          v-for="(household, idx) in households"
          :key="idx"
          color="indigo"
          class="household-avatar"
        >
          <span class="white--text headline">
            {{ household.initials }}
          </span>
        </v-avatar>
      </div>
    </template>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      households: [{ initials: 'Le' }, { initials: 'Ga' }, { initials: 'Lu' }]
    }
  },
  computed: {
    ...mapState({
      user: state => state.auth.user
    }),

    loggedIn() {
      return !!this.user
    }
  }
}
</script>

<style lang="scss" scoped>
.households {
  display: flex;
  margin-left: -5px;
}

.heading {
  margin-bottom: 10px;
}

.household-avatar {
  margin-left: 5px;
  margin-top: 5px;
}
</style>

<template>
  <v-menu offset-y>
    <template v-slot:activator="{ on }">
      <button v-on="on">
        <v-avatar color="blue" size="36">
          <span class="white--text headline">
            {{ user.initials }}
          </span>
        </v-avatar>
      </button>
    </template>
    <v-list>
      <nuxt-link
        v-for="route in routes"
        :key="route.name"
        :to="{ name: route.name }"
        :class="{ exact: route.exact }"
      >
        <v-list-item>
          <v-list-item-title>
            {{ $t(`routes.${route.name}`) }}
          </v-list-item-title>
        </v-list-item>
      </nuxt-link>
      <v-list-item @click.prevent.stop="$emit('logout')">
        <v-list-item-title>{{ $t('logout') }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  props: {
    user: { type: Object, required: true },
    routes: { type: Array, required: true }
  }
}
</script>

<style lang="scss" scoped>
.headline {
  font-size: 1.2rem !important;
}

a:hover {
  text-decoration: none !important;
}
</style>

<template>
  <footer>
    © Rento 2019 – rentopaikka.fi
    <nuxt-link :to="{ name: 'data-privacy' }" class="link">{{
      $t('routes.data-privacy')
    }}</nuxt-link>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  padding: 20px;
  background-color: #333;
  color: $color-text-alt;
  display: flex;
  justify-content: space-between;
}

.link,
.link:visited {
  color: white !important;
}
</style>

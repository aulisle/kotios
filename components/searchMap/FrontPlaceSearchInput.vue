<template>
  <div class="front-search">
    <base-autocomplete
      class="search-input"
      label="Sinua kiinnostava alue"
      :value="mSearchQuery"
      :options="placeSuggestions"
      @input="updateSearchQuery"
      @select="selectSearch"
    >
      <template slot-scope="scope">
        <div>{{ scope.item.description }}</div>
      </template>
    </base-autocomplete>

    <base-button
      class="md-primary md-raised search-button"
      @click="launchSearch"
      >Hae</base-button
    >
  </div>
</template>

<script>
import PlaceSearchInputMixin from './PlaceSearchInputMixin'

export default {
  mixins: [PlaceSearchInputMixin]
}
</script>

<style lang="scss" scoped>
.front-search {
  display: flex;
  width: 100%;
  align-items: center;
}

.search-button {
  margin-left: 30px;
}
</style>

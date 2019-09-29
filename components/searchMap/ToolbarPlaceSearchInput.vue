<template>
  <v-card
    class="place-search-wrapper"
    elevation="1"
    @keydown.native.enter="launchSearch"
  >
    <button class="search-button">
      <md-icon>search</md-icon>
    </button>
    <base-autocomplete
      class="search-input"
      label=""
      :value="mSearchQuery"
      :options="placeSuggestions"
      placeholder="Haku"
      @input="updateSearchQuery"
      @select="selectSearch"
    >
      <template slot-scope="scope">
        <div>{{ scope.item.description }}</div>
      </template>
    </base-autocomplete>
  </v-card>
</template>

<script>
import { mapState } from 'vuex'
import PlaceSearchInputMixin from './PlaceSearchInputMixin'

export default {
  mixins: [PlaceSearchInputMixin],
  computed: {
    ...mapState('search', ['searchQuery'])
  },
  watch: {
    searchQuery(newQuery) {
      this.mSearchQuery = newQuery
    }
  },

  created() {
    this.mSearchQuery = this.searchQuery
  }
}
</script>

<style lang="scss" scoped>
.place-search-wrapper {
  display: flex;
  justify-content: center;
  padding: 0px 10px 0px 5px;
}

.search-button {
  padding: 0px 10px 0px 10px;
  flex-shrink: 0;
}

.search-input.md-field {
  flex-grow: 1;
  margin-top: 0px;
  padding-top: 7px;
  margin-bottom: 0px;
  padding-bottom: 5px;

  &:after,
  &:before {
    display: none;
  }
}
</style>

<style lang="scss">
.place-search-wrapper .search-input.md-field .md-button.md-icon-button {
  margin-top: -7px;
}
</style>

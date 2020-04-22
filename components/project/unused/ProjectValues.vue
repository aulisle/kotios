<template>
  <div>
    <div class="values">
      <v-chip v-for="value in values" :key="value" class="value">
        {{ $t(`project.values.${value}`) }}
      </v-chip>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    values: { type: Array, required: true }
  }
}
</script>

<style lang="scss" scoped>
.values {
  display: flex;
  margin-left: -5px;
  flex-wrap: wrap;

  .value {
    margin-left: 5px;
    margin-top: 5px;
  }

  .theme--light.v-chip:hover::before {
    opacity: 0;
  }
}
</style>

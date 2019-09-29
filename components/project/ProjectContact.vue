<template>
  <div class="contact-form">
    <h2>Avainhenkilöt</h2>
    <div class="cards">
      <v-card v-for="(contact, idx) in contacts" :key="idx">
        <div class="card-content">
          <v-avatar class="indigo" :size="60">
            <span class="white--text headline">
              {{ contact.initials }}
            </span>
          </v-avatar>
          <h3>{{ contact.name }}</h3>
          <p>{{ $t(`project.role.${contact.role}`) }}</p>
          <p>{{ contact.email }}</p>
          <p>{{ contact.phone }}</p>
          <div class="content-right">
            <base-button class="md-primary md-raised">Ota yhteyttä</base-button>
          </div>
        </div>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    contacts: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.card-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(370px, 1fr));
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  margin-top: 20px;
}
</style>

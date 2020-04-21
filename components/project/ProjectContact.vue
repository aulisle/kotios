<template>
  <div class="contact-form">
    <h2>Yhteyshenkilöt</h2>
    <div class="cards">
      <v-card v-for="(contact, idx) in contacts" :key="idx">
        <div class="card-content">
          <v-avatar class="indigo" :size="60">
            <span class="white--text headline">
              {{ contact.initials }}
            </span>
          </v-avatar>
          <h3 class="name">{{ contact.name }}</h3>
          <p class="field">{{ $t(`project.role.${contact.role}`) }}</p>
          <p class="field">{{ contact.email }}</p>
          <p class="field">{{ contact.phone }}</p>
          <div class="contact-button">
            <base-button @click="openMail(contact.email)">
              Ota yhteyttä
            </base-button>
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
  },

  methods: {
    openMail(email) {
      var win = window.open(`mailto:${email}`, '_blank')
      win.focus()
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

.name {
  margin-top: $u1;
}

.field {
  margin-top: 0;
  margin-bottom: 0;
}

.contact-button {
  margin-top: $u3;
}
</style>

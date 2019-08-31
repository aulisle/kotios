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
  data() {
    return {
      contacts: [
        {
          name: 'Maija Meikäläinen',
          role: 'consultant',
          email: 'email@email.com',
          phone: '040 1234567',
          initials: 'MM'
        },
        {
          name: 'V-P Rajala',
          role: 'facilitator',
          email: 'email@email.com',
          phone: '040 1234567',
          initials: 'VR'
        }
      ]
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

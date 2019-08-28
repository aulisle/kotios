<template>
  <div class="contact-form">
    <h2>Yhteyshenkilöt</h2>
    <v-card v-for="(contact, idx) in contacts" :key="idx">
      <v-card-title>
        <v-avatar class="indigo">
          <span class="white--text headline">
            {{ contact.initials }}
          </span>
        </v-avatar>
        <h3>{{ contact.name }}</h3>
        <p>{{ contact.role }}</p>
      </v-card-title>
    </v-card>
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
        }
      ]
    }
  }
}
</script>

<style lang="scss"></style>

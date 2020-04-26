<template>
  <div class="container-base step-5-layout">
    <success-tick variant="front-bottom" />
    <h2>Hienoa, budjettisi on tallennettu!</h2>
    <p>
      Voimme nyt ehdottaa sinulle tarkemmin sopivia kohteita.
    </p>

    <h2 class="new-section">Mitä seuraavaksi?</h2>
    <h3>Jaa sivu</h3>
    <p>
      Tunnetko jonkun joka voisi olla kiinnostunut osallistamisesta tai kodin
      rakentamisesta? Jaa sivu sosiaalisessa mediassa.
    </p>
    <social-sharing :url="path()" inline-template class="social">
      <div class="network-icons">
        <network network="email">
          <button class="social-btn email">
            <md-icon class="icon">email</md-icon>
          </button>
        </network>

        <network network="facebook">
          <button class="social-btn facebook">
            <i class="fab fa-facebook-f icon" />
          </button>
        </network>

        <network network="twitter">
          <button class="social-btn twitter">
            <i class="fab fa-twitter icon" />
          </button>
        </network>

        <network network="whatsapp">
          <button class="social-btn whatsapp" v-on="on">
            <i class="fab fa-whatsapp icon"></i>
          </button>
        </network>
      </div>
    </social-sharing>

    <h3 class="new-section">Ota meihin yhteyttä</h3>
    <p>
      Jos jotain jäi epäselväksi tai haluat keskustella lisää KotiOS-palvelusta
      kanssamme, voit
      <base-link :to="{ name: 'contact' }">ottaa meihin yhteyttä</base-link>.
    </p>

    <div class="full-width bottom new-section">
      <base-button
        block
        :to="{ name: 'interest-map-add' }"
        color="accent"
        x-large
        class="bottom-button"
      >
        Lisää toinen kohde
      </base-button>
      <base-button
        block
        x-large
        outlined
        :to="{ name: 'interest-map' }"
        class="bottom-button"
      >
        Palaa kartalle
      </base-button>
    </div>
  </div>
</template>

<script>
import SuccessTick from '@/components/dreams/SuccessTick'
export default {
  components: { SuccessTick },
  fetch({ store, redirect }) {
    if (
      store.state.defineDream.type == null ||
      store.state.defineDream.finishedSteps < 3
    ) {
      redirect({ name: 'interest-map' })
    }
  },

  methods: {
    path() {
      if (process.client) {
        return window.location.origin
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.step-5-layout {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: $u4;
  margin-bottom: $u10;

  p {
    max-width: $u50;
    text-align: center;
  }

  .new-section {
    margin-top: $u10;
  }

  .social {
    margin-top: $u5;
  }
}

.bottom-button {
  margin-top: $u1;
}

@include media-breakpoint-up(md) {
  .bottom {
    width: $u80;
    max-width: $u80;
  }
}
</style>

<style lang="scss" global>
.step-5-layout {
  flex-shrink: 0;

  .network-icons {
    display: flex;
    margin-left: -5px;
  }

  .social-btn {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-left: 5px;

    &.email {
      background-color: #333;
    }

    &.facebook {
      background-color: $color-facebook;
    }

    &.twitter {
      background-color: $color-twitter;
    }

    &.whatsapp {
      background-color: $color-whatsapp;
    }

    .icon {
      color: white !important;
      font-size: 20px;
      line-height: 50px;
    }
  }
}
</style>

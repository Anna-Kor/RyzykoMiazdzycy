<template>
  <form @submit.prevent="sendMessage">
    <ion-page>
      <ion-content :fullscreen="true">
        <h1>AAAAAAAAAAAAAAAAA</h1>
      </ion-content>
    </ion-page>
  </form>
</template>

<script lang="ts">

import {
  IonContent,
  IonPage
} from "@ionic/vue";
import { defineComponent } from "vue";
import router from '../router';

export default defineComponent({
  name: "Home",
  components: {
    IonContent,
    IonPage
  }
});

</script>

<style scoped>

</style>
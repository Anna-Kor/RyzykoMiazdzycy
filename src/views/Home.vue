<template>
  <form @submit.prevent="sendMessage">
    <ion-page>
      <ion-content :fullscreen="true">
        <ion-item>
          <ion-label>Wiek:</ion-label>
          <ion-input
            id="age"
            type="number"
            v-model="wiek"
            min="40"
            max="70"
            required="true"
          ></ion-input>
        </ion-item>
        <ion-radio-group value="plec">
          <ion-list-header>
            <ion-label>Płeć</ion-label>
          </ion-list-header>

          <ion-item>
            <ion-label>Kobieta</ion-label>
            <ion-radio
              required="required"
              slot="start"
              value="kobieta"
            ></ion-radio>
          </ion-item>

          <ion-item>
            <ion-label>Mężczyzna</ion-label>
            <ion-radio
              required="required"
              slot="start"
              value="mezczyzna"
            ></ion-radio>
          </ion-item>
        </ion-radio-group>
        <ion-radio-group value="papierosy">
          <ion-list-header>
            <ion-label>Czy palisz papierosy?</ion-label>
          </ion-list-header>

          <ion-item>
            <ion-label>Tak</ion-label>
            <ion-radio slot="start" value="palacy"></ion-radio>
          </ion-item>

          <ion-item>
            <ion-label>Nie</ion-label>
            <ion-radio slot="start" value="niepalacy"></ion-radio>
          </ion-item>
        </ion-radio-group>
        <ion-item>
          <ion-label>Ciśnienie tętnicze:</ion-label>
          <ion-input
            type="number"
            min="120"
            max="180"
            placeholder="Podaj ciśnienie"
            required="true"
          ></ion-input>
        </ion-item>
        <ion-radio-group id="cholesterol">
          <ion-list-header>
            <ion-label>Cholesterol</ion-label>
          </ion-list-header>

          <ion-item>
            <ion-label>[mmol/l]</ion-label>
            <ion-radio
              id="mmol"
              slot="start"
              value="mmol"
              v-on:click="updateMmol"
            ></ion-radio>
          </ion-item>
          <ion-input
            id="mmol_input"
            type="number"
            min="4"
            max="8"
            placeholder="Podaj cholesterol"
            disabled="true"
          ></ion-input>

          <ion-item>
            <ion-label>[mg/dl]</ion-label>
            <ion-radio
              id="mg"
              slot="start"
              value="mg"
              v-on:click="updateMg"
            ></ion-radio>
          </ion-item>
          <ion-input
            id="mg_input"
            type="number"
            min="150"
            max="310"
            placeholder="Podaj cholesterol"
            disabled="true"
          ></ion-input>
        </ion-radio-group>
        <ion-button type="submit" v-on:click="oblicz">Oblicz</ion-button>
        <ion-text>
          <p>{{ result }}</p>
        </ion-text>
      </ion-content>
    </ion-page>
  </form>
</template>

<script lang="ts">
import {
  IonButton,
  IonContent,
  IonInput,
  IonLabel,
  IonPage,
  IonRadio,
  IonRadioGroup,
} from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
  components: {
    IonButton,
    IonContent,
    IonInput,
    IonLabel,
    IonPage,
    IonRadio,
    IonRadioGroup,
  },
  data() {
    return {
      result: "aaa",
      wiek: ''
    };
  },
  methods: {
    updateMmol() {
      document.getElementById("mmol_input")?.setAttribute("disabled", "false");
      document.getElementById("mg_input")?.setAttribute("disabled", "true");
      document.getElementById("cholesterol")?.setAttribute("value", "mmol");
    },
    updateMg() {
      document.getElementById("mg_input")?.setAttribute("disabled", "false");
      document.getElementById("mmol_input")?.setAttribute("disabled", "true");
      document.getElementById("cholesterol")?.setAttribute("value", "mg");
    },
    oblicz () {
      this.result = String(this.wiek);
    },
  },
});

</script>

<style scoped>
</style>
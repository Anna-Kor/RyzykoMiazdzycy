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
        <ion-radio-group value="plec" v-model="plec">
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
        <ion-radio-group value="papierosy" v-model="papierosy">
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
            v-model="cisnienie"
            placeholder="Podaj ciśnienie"
            required="true"
          ></ion-input>
        </ion-item>
        <ion-radio-group id="cholesterol" v-model="jednostka">
          <ion-list-header>
            <ion-label>Cholesterol</ion-label>
          </ion-list-header>

          <ion-item>
            <ion-label>[mmol/l]</ion-label>
            <ion-radio
              id="mmol"
              slot="start"
              value="mmol"
            ></ion-radio>
          </ion-item>
          <ion-item>
            <ion-label>[mg/dl]</ion-label>
            <ion-radio
              id="mg"
              slot="start"
              value="mg"
            ></ion-radio>
          </ion-item>
        </ion-radio-group>
        <ion-input
            id="mg_input"
            type="number"
            min="150"
            max="310"
            v-if="jednostka=='mg'"
            v-model="cholesterol"
            placeholder="Podaj cholesterol"
            required="true"
          ></ion-input>
           <ion-input
            id="mmol_input"
            type="number"
            min="4"
            max="8"
            v-else-if="jednostka=='mmol'"
            v-model="cholesterol"
            placeholder="Podaj cholesterol"
            required="true"
          ></ion-input>
        <ion-button type="submit" v-on:click="oblicz">Oblicz</ion-button>
        <ion-button type="submit" v-on:click="nextPage">Zobacz tabelę ryzyka</ion-button>
        <ion-text>
          <p class="result">{{ result }}</p>
        </ion-text>
      </ion-content>
    </ion-page>
  </form>
</template>

<script lang="ts">
import router from "@/router";
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
      result: '',
      wiek: '',
      plec: '',
      papierosy: '',
      cholesterol: '',
      jednostka: '',
      cisnienie: '',
      person: [
        {
          wiekDoTabeli: '',
          plecDoTabeli: '',
          papierosyDotabeli: '',
          cholesterolDoTabeli: '',
          jednostkaDoTabeli: '',
          cisnienieDoTabeli: ''
        }
      ]
    };
  },
  methods: {
    check(){
      if(this.plec == '') {
        alert('Wybierz płeć');
      }
      else if(this.papierosy == '') {
        alert('Zaznacz, czy palisz papierosy');
      }
      else if(this.papierosy == '') {
        alert('Wybierz jednostkę, w jakiej chcesz podać wartość cholesterolu');
      }
    },
    oblicz () {
      if(this.plec == '') {
        alert('Wybierz płeć');
      }
      else if(this.papierosy == '') {
        alert('Zaznacz, czy palisz papierosy');
      }
      else if(this.papierosy == '') {
        alert('Wybierz jednostkę, w jakiej chcesz podać wartość cholesterolu');
      }
      if (this.plec == 'kobieta') {
        if (this.papierosy == 'palacy') {
          if (Number(this.wiek) >= 40 && Number(this.wiek) < 50) {
            if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 4 && Number(this.cholesterol) < 5) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 150 && Number(this.cholesterol) < 190)) {
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.result = '0%';
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.result = '1%';
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.result = '1%';
              }
              else if (Number(this.cisnienie) >= 180) {
                this.result = '1%';
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 5 && Number(this.cholesterol) < 6) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 190 && Number(this.cholesterol) < 230)) {
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.result = '1%';
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.result = '1%';
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.result = '1%';
              }
              else if (Number(this.cisnienie) >= 180) {
                this.result = '2%';
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 6 && Number(this.cholesterol) < 7) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 230 && Number(this.cholesterol) < 270)) {
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.result = '1%';
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.result = '1%';
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.result = '1%';
              }
              else if (Number(this.cisnienie) >= 180) {
                this.result = '2%';
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 7 && Number(this.cholesterol) < 8) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 270 && Number(this.cholesterol) < 310)) {
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.result = '1%';
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.result = '1%';
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.result = '2%';
              }
              else if (Number(this.cisnienie) >= 180) {
                this.result = '2%';
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 8) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 310)) {
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.result = '1%';
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.result = '1%';
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.result = '2%';
              }
              else if (Number(this.cisnienie) >= 180) {
                this.result = '3%';
              }
            }
          }
          else if (Number(this.wiek) >= 50 && Number(this.wiek) < 55) {
            if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 4 && Number(this.cholesterol) < 5) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 150 && Number(this.cholesterol) < 190)) {
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.result = '1%';
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.result = '2%';
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.result = '2%';
              }
              else if (Number(this.cisnienie) >= 180) {
                this.result = '3%';
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 5 && Number(this.cholesterol) < 6) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 190 && Number(this.cholesterol) < 230)) {
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.result = '1%';
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.result = '2%';
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.result = '3%';
              }
              else if (Number(this.cisnienie) >= 180) {
                this.result = '4%';
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 6 && Number(this.cholesterol) < 7) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 230 && Number(this.cholesterol) < 270)) {
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.result = '2%';
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.result = '2%';
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.result = '3%';
              }
              else if (Number(this.cisnienie) >= 180) {
                this.result = '5%';
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 7 && Number(this.cholesterol) < 8) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 270 && Number(this.cholesterol) < 310)) {
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.result = '2%';
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.result = '3%';
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.result = '4%';
              }
              else if (Number(this.cisnienie) >= 180) {
                this.result = '5%';
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 8) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 310)) {
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.result = '2%';
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.result = '3%';
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.result = '5%';
              }
              else if (Number(this.cisnienie) >= 180) {
                this.result = '7%';
              }
            }
          }
          else if (Number(this.wiek) >= 55 && Number(this.wiek) < 60) {
            if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 4 && Number(this.cholesterol) < 5) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 150 && Number(this.cholesterol) < 190)) {
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.result = '2%';
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.result = '3%';
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.result = '4%';
              }
              else if (Number(this.cisnienie) >= 180) {
                this.result = '5%';
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 5 && Number(this.cholesterol) < 6) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 190 && Number(this.cholesterol) < 230)) {
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.result = '2%';
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.result = '3%';
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.result = '4%';
              }
              else if (Number(this.cisnienie) >= 180) {
                this.result = '6%';
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 6 && Number(this.cholesterol) < 7) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 230 && Number(this.cholesterol) < 270)) {
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.result = '3%';
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.result = '4%';
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.result = '5%';
              }
              else if (Number(this.cisnienie) >= 180) {
                this.result = '8%';
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 7 && Number(this.cholesterol) < 8) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 270 && Number(this.cholesterol) < 310)) {
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.result = '3%';
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.result = '4%';
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.result = '6%';
              }
              else if (Number(this.cisnienie) >= 180) {
                this.result = '9%';
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 8) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 310)) {
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.result = '4%';
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.result = '5%';
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.result = '7%';
              }
              else if (Number(this.cisnienie) >= 180) {
                this.result = '11%';
              }
            }
          }
          else if (Number(this.wiek) >= 60 && Number(this.wiek) < 65) {
            if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 4 && Number(this.cholesterol) < 5) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 150 && Number(this.cholesterol) < 190)) {
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.result = '3%';
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.result = '5%';
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.result = '6%';
              }
              else if (Number(this.cisnienie) >= 180) {
                this.result = '9%';
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 5 && Number(this.cholesterol) < 6) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 190 && Number(this.cholesterol) < 230)) {
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.result = '4%';
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.result = '5%';
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.result = '8%';
              }
              else if (Number(this.cisnienie) >= 180) {
                this.result = '11%';
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 6 && Number(this.cholesterol) < 7) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 230 && Number(this.cholesterol) < 270)) {
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.result = '4%';
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.result = '6%';
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.result = '9%';
              }
              else if (Number(this.cisnienie) >= 180) {
                this.result = '13%';
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 7 && Number(this.cholesterol) < 8) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 270 && Number(this.cholesterol) < 310)) {
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.result = '5%';
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.result = '8%';
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.result = '11%';
              }
              else if (Number(this.cisnienie) >= 180) {
                this.result = '15%';
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 8) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 310)) {
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.result = '6%';
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.result = '9%';
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.result = '13%';
              }
              else if (Number(this.cisnienie) >= 180) {
                this.result = '18%';
              }
            }
          }
          else if (Number(this.wiek) >= 65 && Number(this.wiek) < 70) {
            if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 4 && Number(this.cholesterol) < 5) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 150 && Number(this.cholesterol) < 190)) {
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.result = '6%';
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.result = '8%';
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.result = '12%';
              }
              else if (Number(this.cisnienie) >= 180) {
                this.result = '17%';
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 5 && Number(this.cholesterol) < 6) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 190 && Number(this.cholesterol) < 230)) {
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.result = '7%';
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.result = '10%';
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.result = '14%';
              }
              else if (Number(this.cisnienie) >= 180) {
                this.result = '20%';
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 6 && Number(this.cholesterol) < 7) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 230 && Number(this.cholesterol) < 270)) {
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.result = '8%';
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.result = '12%';
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.result = '17%';
              }
              else if (Number(this.cisnienie) >= 180) {
                this.result = '24%';
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 7 && Number(this.cholesterol) < 8) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 270 && Number(this.cholesterol) < 310)) {
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.result = '10%';
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.result = '14%';
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.result = '20%';
              }
              else if (Number(this.cisnienie) >= 180) {
                this.result = '28%';
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 8) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 310)) {
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.result = '12%';
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.result = '17%';
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.result = '23%';
              }
              else if (Number(this.cisnienie) >= 180) {
                this.result = '32%';
              }
            }
          }
          else if (Number(this.wiek) >= 70) {
            if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 4 && Number(this.cholesterol) < 5) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 150 && Number(this.cholesterol) < 190)) {
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.result = '12%';
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.result = '17%';
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.result = '23%';
              }
              else if (Number(this.cisnienie) >= 180) {
                this.result = '32%';
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 5 && Number(this.cholesterol) < 6) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 190 && Number(this.cholesterol) < 230)) {
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.result = '14%';
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.result = '20%';
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.result = '27%';
              }
              else if (Number(this.cisnienie) >= 180) {
                this.result = '37%';
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 6 && Number(this.cholesterol) < 7) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 230 && Number(this.cholesterol) < 270)) {
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.result = '17%';
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.result = '23%';
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.result = '32%';
              }
              else if (Number(this.cisnienie) >= 180) {
                this.result = '43%';
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 7 && Number(this.cholesterol) < 8) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 270 && Number(this.cholesterol) < 310)) {
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.result = '20%';
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.result = '27%';
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.result = '37%';
              }
              else if (Number(this.cisnienie) >= 180) {
                this.result = '49%';
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 8) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 310)) {
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.result = '23%';
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.result = '32%';
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.result = '42%';
              }
              else if (Number(this.cisnienie) >= 180) {
                this.result = '55%';
              }
            }
          }
        }
        else {
          if (Number(this.wiek) >= 40 && Number(this.wiek) < 50) {
            if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 4 && Number(this.cholesterol) < 5) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 150 && Number(this.cholesterol) < 190)) {
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.result = '0%';
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.result = '0%';
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.result = '0%';
              }
              else if (Number(this.cisnienie) >= 180) {
                this.result = '1%';
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 5 && Number(this.cholesterol) < 6) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 190 && Number(this.cholesterol) < 230)) {
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.result = '0%';
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.result = '0%';
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.result = '1%';
              }
              else if (Number(this.cisnienie) >= 180) {
                this.result = '1%';
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 6 && Number(this.cholesterol) < 7) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 230 && Number(this.cholesterol) < 270)) {
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.result = '0%';
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.result = '0%';
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.result = '1%';
              }
              else if (Number(this.cisnienie) >= 180) {
                this.result = '1%';
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 7 && Number(this.cholesterol) < 8) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 270 && Number(this.cholesterol) < 310)) {
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.result = '0%';
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.result = '1%';
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.result = '1%';
              }
              else if (Number(this.cisnienie) >= 180) {
                this.result = '1%';
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 8) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 310)) {
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.result = '0%';
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.result = '1%';
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.result = '1%';
              }
              else if (Number(this.cisnienie) >= 180) {
                this.result = '1%';
              }
            }
          }
          else if (Number(this.wiek) >= 50 && Number(this.wiek) < 55) {
            if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 4 && Number(this.cholesterol) < 5) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 150 && Number(this.cholesterol) < 190)) {
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.result = '1%';
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.result = '1%';
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.result = '1%';
              }
              else if (Number(this.cisnienie) >= 180) {
                this.result = '2%';
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 5 && Number(this.cholesterol) < 6) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 190 && Number(this.cholesterol) < 230)) {
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.result = '1%';
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.result = '1%';
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.result = '1%';
              }
              else if (Number(this.cisnienie) >= 180) {
                this.result = '2%';
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 6 && Number(this.cholesterol) < 7) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 230 && Number(this.cholesterol) < 270)) {
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.result = '1%';
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.result = '1%';
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.result = '2%';
              }
              else if (Number(this.cisnienie) >= 180) {
                this.result = '2%';
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 7 && Number(this.cholesterol) < 8) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 270 && Number(this.cholesterol) < 310)) {
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.result = '1%';
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.result = '1%';
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.result = '2%';
              }
              else if (Number(this.cisnienie) >= 180) {
                this.result = '3%';
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 8) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 310)) {
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.result = '1%';
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.result = '2%';
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.result = '2%';
              }
              else if (Number(this.cisnienie) >= 180) {
                this.result = '3%';
              }
            }
          }
          else if (Number(this.wiek) >= 55 && Number(this.wiek) < 60) {
            if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 4 && Number(this.cholesterol) < 5) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 150 && Number(this.cholesterol) < 190)) {
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.result = '1%';
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.result = '1%';
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.result = '2%';
              }
              else if (Number(this.cisnienie) >= 180) {
                this.result = '3%';
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 5 && Number(this.cholesterol) < 6) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 190 && Number(this.cholesterol) < 230)) {
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.result = '1%';
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.result = '1%';
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.result = '2%';
              }
              else if (Number(this.cisnienie) >= 180) {
                this.result = '3%';
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 6 && Number(this.cholesterol) < 7) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 230 && Number(this.cholesterol) < 270)) {
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.result = '1%';
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.result = '2%';
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.result = '3%';
              }
              else if (Number(this.cisnienie) >= 180) {
                this.result = '4%';
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 7 && Number(this.cholesterol) < 8) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 270 && Number(this.cholesterol) < 310)) {
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.result = '1%';
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.result = '2%';
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.result = '3%';
              }
              else if (Number(this.cisnienie) >= 180) {
                this.result = '4%';
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 8) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 310)) {
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.result = '2%';
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.result = '3%';
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.result = '4%';
              }
              else if (Number(this.cisnienie) >= 180) {
                this.result = '5%';
              }
            }
          }
          else if (Number(this.wiek) >= 60 && Number(this.wiek) < 65) {
            if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 4 && Number(this.cholesterol) < 5) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 150 && Number(this.cholesterol) < 190)) {
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.result = '2%';
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.result = '2%';
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.result = '3%';
              }
              else if (Number(this.cisnienie) >= 180) {
                this.result = '5%';
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 5 && Number(this.cholesterol) < 6) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 190 && Number(this.cholesterol) < 230)) {
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.result = '2%';
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.result = '3%';
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.result = '4%';
              }
              else if (Number(this.cisnienie) >= 180) {
                this.result = '6%';
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 6 && Number(this.cholesterol) < 7) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 230 && Number(this.cholesterol) < 270)) {
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.result = '2%';
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.result = '3%';
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.result = '5%';
              }
              else if (Number(this.cisnienie) >= 180) {
                this.result = '7%';
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 7 && Number(this.cholesterol) < 8) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 270 && Number(this.cholesterol) < 310)) {
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.result = '3%';
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.result = '4%';
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.result = '5%';
              }
              else if (Number(this.cisnienie) >= 180) {
                this.result = '8%';
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 8) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 310)) {
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.result = '3%';
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.result = '5%';
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.result = '7%';
              }
              else if (Number(this.cisnienie) >= 180) {
                this.result = '9%';
              }
            }
          }
          else if (Number(this.wiek) >= 65 && Number(this.wiek) < 70) {
            if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 4 && Number(this.cholesterol) < 5) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 150 && Number(this.cholesterol) < 190)) {
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.result = '3%';
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.result = '4%';
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.result = '6%';
              }
              else if (Number(this.cisnienie) >= 180) {
                this.result = '9%';
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 5 && Number(this.cholesterol) < 6) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 190 && Number(this.cholesterol) < 230)) {
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.result = '3%';
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.result = '5%';
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.result = '7%';
              }
              else if (Number(this.cisnienie) >= 180) {
                this.result = '10%';
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 6 && Number(this.cholesterol) < 7) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 230 && Number(this.cholesterol) < 270)) {
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.result = '4%';
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.result = '6%';
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.result = '9%';
              }
              else if (Number(this.cisnienie) >= 180) {
                this.result = '12%';
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 7 && Number(this.cholesterol) < 8) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 270 && Number(this.cholesterol) < 310)) {
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.result = '5%';
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.result = '7%';
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.result = '10%';
              }
              else if (Number(this.cisnienie) >= 180) {
                this.result = '15%';
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 8) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 310)) {
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.result = '6%';
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.result = '9%';
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.result = '12%';
              }
              else if (Number(this.cisnienie) >= 180) {
                this.result = '17%';
              }
            }
          }
          else if (Number(this.wiek) >= 70) {
            if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 4 && Number(this.cholesterol) < 5) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 150 && Number(this.cholesterol) < 190)) {
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.result = '6%';
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.result = '8%';
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.result = '12%';
              }
              else if (Number(this.cisnienie) >= 180) {
                this.result = '17%';
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 5 && Number(this.cholesterol) < 6) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 190 && Number(this.cholesterol) < 230)) {
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.result = '7%';
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.result = '10%';
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.result = '14%';
              }
              else if (Number(this.cisnienie) >= 180) {
                this.result = '20%';
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 6 && Number(this.cholesterol) < 7) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 230 && Number(this.cholesterol) < 270)) {
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.result = '8%';
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.result = '12%';
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.result = '17%';
              }
              else if (Number(this.cisnienie) >= 180) {
                this.result = '24%';
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 7 && Number(this.cholesterol) < 8) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 270 && Number(this.cholesterol) < 310)) {
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.result = '10%';
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.result = '14%';
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.result = '20%';
              }
              else if (Number(this.cisnienie) >= 180) {
                this.result = '28%';
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 8) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 310)) {
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.result = '12%';
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.result = '17%';
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.result = '24%';
              }
              else if (Number(this.cisnienie) >= 180) {
                this.result = '32%';
              }
            }
          }
        }
      }
      else {
        if (this.papierosy == 'palacy') {
          if (Number(this.wiek) >= 40 && Number(this.wiek) < 50) {
            if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 4 && Number(this.cholesterol) < 5) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 150 && Number(this.cholesterol) < 190)) {
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.result = '1%';
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.result = '2%';
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.result = '3%';
              }
              else if (Number(this.cisnienie) >= 180) {
                this.result = '4%';
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 5 && Number(this.cholesterol) < 6) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 190 && Number(this.cholesterol) < 230)) {
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.result = '1%';
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.result = '2%';
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.result = '3%';
              }
              else if (Number(this.cisnienie) >= 180) {
                this.result = '4%';
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 6 && Number(this.cholesterol) < 7) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 230 && Number(this.cholesterol) < 270)) {
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.result = '2%';
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.result = '3%';
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.result = '4%';
              }
              else if (Number(this.cisnienie) >= 180) {
                this.result = '5%';
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 7 && Number(this.cholesterol) < 8) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 270 && Number(this.cholesterol) < 310)) {
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.result = '2%';
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.result = '3%';
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.result = '4%';
              }
              else if (Number(this.cisnienie) >= 180) {
                this.result = '6%';
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 8) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 310)) {
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.result = '3%';
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.result = '4%';
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.result = '5%';
              }
              else if (Number(this.cisnienie) >= 180) {
                this.result = '8%';
              }
            }
          }
          else if (Number(this.wiek) >= 50 && Number(this.wiek) < 55) {
            if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 4 && Number(this.cholesterol) < 5) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 150 && Number(this.cholesterol) < 190)) {
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.result = '3%';
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.result = '5%';
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.result = '6%';
              }
              else if (Number(this.cisnienie) >= 180) {
                this.result = '9%';
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 5 && Number(this.cholesterol) < 6) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 190 && Number(this.cholesterol) < 230)) {
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.result = '4%';
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.result = '5%';
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.result = '8%';
              }
              else if (Number(this.cisnienie) >= 180) {
                this.result = '11%';
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 6 && Number(this.cholesterol) < 7) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 230 && Number(this.cholesterol) < 270)) {
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.result = '5%';
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.result = '6%';
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.result = '9%';
              }
              else if (Number(this.cisnienie) >= 180) {
                this.result = '13%';
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 7 && Number(this.cholesterol) < 8) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 270 && Number(this.cholesterol) < 310)) {
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.result = '5%';
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.result = '8%';
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.result = '11%';
              }
              else if (Number(this.cisnienie) >= 180) {
                this.result = '16%';
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 8) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 310)) {
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.result = '6%';
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.result = '9%';
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.result = '13%';
              }
              else if (Number(this.cisnienie) >= 180) {
                this.result = '18%';
              }
            }
          }
          else if (Number(this.wiek) >= 55 && Number(this.wiek) < 60) {
            if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 4 && Number(this.cholesterol) < 5) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 150 && Number(this.cholesterol) < 190)) {
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.result = '5%';
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.result = '7%';
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.result = '10%';
              }
              else if (Number(this.cisnienie) >= 180) {
                this.result = '14%';
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 5 && Number(this.cholesterol) < 6) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 190 && Number(this.cholesterol) < 230)) {
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.result = '6%';
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.result = '8%';
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.result = '12%';
              }
              else if (Number(this.cisnienie) >= 180) {
                this.result = '17%';
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 6 && Number(this.cholesterol) < 7) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 230 && Number(this.cholesterol) < 270)) {
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.result = '7%';
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.result = '10%';
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.result = '14%';
              }
              else if (Number(this.cisnienie) >= 180) {
                this.result = '20%';
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 7 && Number(this.cholesterol) < 8) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 270 && Number(this.cholesterol) < 310)) {
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.result = '8%';
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.result = '12%';
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.result = '17%';
              }
              else if (Number(this.cisnienie) >= 180) {
                this.result = '23%';
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 8) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 310)) {
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.result = '10%';
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.result = '14%';
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.result = '20%';
              }
              else if (Number(this.cisnienie) >= 180) {
                this.result = '27%';
              }
            }
          }
          else if (Number(this.wiek) >= 60 && Number(this.wiek) < 65) {
            if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 4 && Number(this.cholesterol) < 5) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 150 && Number(this.cholesterol) < 190)) {
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.result = '7%';
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.result = '11%';
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.result = '15%';
              }
              else if (Number(this.cisnienie) >= 180) {
                this.result = '21%';
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 5 && Number(this.cholesterol) < 6) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 190 && Number(this.cholesterol) < 230)) {
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.result = '9%';
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.result = '13%';
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.result = '18%';
              }
              else if (Number(this.cisnienie) >= 180) {
                this.result = '25%';
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 6 && Number(this.cholesterol) < 7) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 230 && Number(this.cholesterol) < 270)) {
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.result = '11%';
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.result = '15%';
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.result = '21%';
              }
              else if (Number(this.cisnienie) >= 180) {
                this.result = '29%';
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 7 && Number(this.cholesterol) < 8) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 270 && Number(this.cholesterol) < 310)) {
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.result = '13%';
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.result = '18%';
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.result = '25%';
              }
              else if (Number(this.cisnienie) >= 180) {
                this.result = '34%';
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 8) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 310)) {
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.result = '15%';
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.result = '21%';
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.result = '29%';
              }
              else if (Number(this.cisnienie) >= 180) {
                this.result = '39%';
              }
            }
          }
          else if (Number(this.wiek) >= 65 && Number(this.wiek) < 70) {
            if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 4 && Number(this.cholesterol) < 5) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 150 && Number(this.cholesterol) < 190)) {
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.result = '12%';
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.result = '17%';
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.result = '23%';
              }
              else if (Number(this.cisnienie) >= 180) {
                this.result = '32%';
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 5 && Number(this.cholesterol) < 6) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 190 && Number(this.cholesterol) < 230)) {
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.result = '14%';
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.result = '20%';
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.result = '27%';
              }
              else if (Number(this.cisnienie) >= 180) {
                this.result = '37%';
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 6 && Number(this.cholesterol) < 7) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 230 && Number(this.cholesterol) < 270)) {
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.result = '17%';
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.result = '23%';
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.result = '32%';
              }
              else if (Number(this.cisnienie) >= 180) {
                this.result = '43%';
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 7 && Number(this.cholesterol) < 8) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 270 && Number(this.cholesterol) < 310)) {
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.result = '20%';
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.result = '27%';
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.result = '37%';
              }
              else if (Number(this.cisnienie) >= 180) {
                this.result = '49%';
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 8) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 310)) {
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.result = '23%';
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.result = '32%';
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.result = '43%';
              }
              else if (Number(this.cisnienie) >= 180) {
                this.result = '55%';
              }
            }
          }
          else if (Number(this.wiek) >= 70) {
            if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 4 && Number(this.cholesterol) < 5) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 150 && Number(this.cholesterol) < 190)) {
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.result = '20%';
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.result = '27%';
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.result = '37%';
              }
              else if (Number(this.cisnienie) >= 180) {
                this.result = '49%';
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 5 && Number(this.cholesterol) < 6) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 190 && Number(this.cholesterol) < 230)) {
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.result = '23%';
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.result = '32%';
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.result = '43%';
              }
              else if (Number(this.cisnienie) >= 180) {
                this.result = '56%';
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 6 && Number(this.cholesterol) < 7) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 230 && Number(this.cholesterol) < 270)) {
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.result = '27%';
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.result = '37%';
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.result = '49%';
              }
              else if (Number(this.cisnienie) >= 180) {
                this.result = '62%';
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 7 && Number(this.cholesterol) < 8) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 270 && Number(this.cholesterol) < 310)) {
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.result = '32%';
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.result = '43%';
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.result = '55%';
              }
              else if (Number(this.cisnienie) >= 180) {
                this.result = '69%';
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 8) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 310)) {
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.result = '37%';
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.result = '49%';
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.result = '62%';
              }
              else if (Number(this.cisnienie) >= 180) {
                this.result = '76%';
              }
            }
          }
        }
        else {
          if (Number(this.wiek) >= 40 && Number(this.wiek) < 50) {
            if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 4 && Number(this.cholesterol) < 5) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 150 && Number(this.cholesterol) < 190)) {
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.result = '1%';
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.result = '1%';
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.result = '1%';
              }
              else if (Number(this.cisnienie) >= 180) {
                this.result = '2%';
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 5 && Number(this.cholesterol) < 6) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 190 && Number(this.cholesterol) < 230)) {
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.result = '1%';
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.result = '1%';
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.result = '2%';
              }
              else if (Number(this.cisnienie) >= 180) {
                this.result = '2%';
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 6 && Number(this.cholesterol) < 7) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 230 && Number(this.cholesterol) < 270)) {
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.result = '1%';
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.result = '1%';
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.result = '2%';
              }
              else if (Number(this.cisnienie) >= 180) {
                this.result = '3%';
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 7 && Number(this.cholesterol) < 8) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 270 && Number(this.cholesterol) < 310)) {
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.result = '1%';
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.result = '2%';
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.result = '2%';
              }
              else if (Number(this.cisnienie) >= 180) {
                this.result = '3%';
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 8) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 310)) {
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.result = '1%';
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.result = '2%';
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.result = '3%';
              }
              else if (Number(this.cisnienie) >= 180) {
                this.result = '4%';
              }
            }
          }
          else if (Number(this.wiek) >= 50 && Number(this.wiek) < 55) {
            if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 4 && Number(this.cholesterol) < 5) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 150 && Number(this.cholesterol) < 190)) {
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.result = '2%' + parseInt(this.cisnienie);
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.result = '2%';
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.result = '3%';
              }
              else if (Number(this.cisnienie) >= 180) {
                this.result = '5%';
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 5 && Number(this.cholesterol) < 6) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 190 && Number(this.cholesterol) < 230)) {
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.result = '2%';
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.result = '3%';
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.result = '4%';
              }
              else if (Number(this.cisnienie) >= 180) {
                this.result = '6%';
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 6 && Number(this.cholesterol) < 7) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 230 && Number(this.cholesterol) < 270)) {
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.result = '2%';
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.result = '3%';
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.result = '5%';
              }
              else if (Number(this.cisnienie) >= 180) {
                this.result = '7%';
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 7 && Number(this.cholesterol) < 8) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 270 && Number(this.cholesterol) < 310)) {
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.result = '3%';
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.result = '4%';
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.result = '6%';
              }
              else if (Number(this.cisnienie) >= 180) {
                this.result = '8%';
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 8) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 310)) {
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.result = '3%';
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.result = '5%';
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.result = '7%';
              }
              else if (Number(this.cisnienie) >= 180) {
                this.result = '9%';
              }
            }
          }
          else if (Number(this.wiek) >= 55 && Number(this.wiek) < 60) {
            if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 4 && Number(this.cholesterol) < 5) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 150 && Number(this.cholesterol) < 190)) {
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.result = '2%';
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.result = '3%';
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.result = '5%';
              }
              else if (Number(this.cisnienie) >= 180) {
                this.result = '7%';
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 5 && Number(this.cholesterol) < 6) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 190 && Number(this.cholesterol) < 230)) {
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.result = '3%';
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.result = '4%';
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.result = '6%';
              }
              else if (Number(this.cisnienie) >= 180) {
                this.result = '8%';
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 6 && Number(this.cholesterol) < 7) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 230 && Number(this.cholesterol) < 270)) {
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.result = '3%';
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.result = '5%';
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.result = '7%';
              }
              else if (Number(this.cisnienie) >= 180) {
                this.result = '10%';
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 7 && Number(this.cholesterol) < 8) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 270 && Number(this.cholesterol) < 310)) {
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.result = '4%';
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.result = '6%';
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.result = '8%';
              }
              else if (Number(this.cisnienie) >= 180) {
                this.result = '12%';
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 8) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 310)) {
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.result = '5%';
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.result = '7%';
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.result = '10%';
              }
              else if (Number(this.cisnienie) >= 180) {
                this.result = '14%';
              }
            }
          }
          else if (Number(this.wiek) >= 60 && Number(this.wiek) < 65) {
            if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 4 && Number(this.cholesterol) < 5) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 150 && Number(this.cholesterol) < 190)) {
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.result = '4%';
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.result = '5%';
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.result = '8%';
              }
              else if (Number(this.cisnienie) >= 180) {
                this.result = '11%';
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 5 && Number(this.cholesterol) < 6) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 190 && Number(this.cholesterol) < 230)) {
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.result = '4%';
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.result = '6%';
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.result = '9%';
              }
              else if (Number(this.cisnienie) >= 180) {
                this.result = '13';
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 6 && Number(this.cholesterol) < 7) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 230 && Number(this.cholesterol) < 270)) {
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.result = '5%';
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.result = '8%';
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.result = '11%';
              }
              else if (Number(this.cisnienie) >= 180) {
                this.result = '15%';
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 7 && Number(this.cholesterol) < 8) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 270 && Number(this.cholesterol) < 310)) {
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.result = '6%';
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.result = '9%';
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.result = '13%';
              }
              else if (Number(this.cisnienie) >= 180) {
                this.result = '18%';
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 8) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 310)) {
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.result = '8%';
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.result = '11%';
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.result = '15%';
              }
              else if (Number(this.cisnienie) >= 180) {
                this.result = '21%';
              }
            }
          }
          else if (Number(this.wiek) >= 65 && Number(this.wiek) < 70) {
            if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 4 && Number(this.cholesterol) < 5) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 150 && Number(this.cholesterol) < 190)) {
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.result = '6%';
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.result = '9%';
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.result = '12%';
              }
              else if (Number(this.cisnienie) >= 180) {
                this.result = '17%';
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 5 && Number(this.cholesterol) < 6) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 190 && Number(this.cholesterol) < 230)) {
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.result = '7%';
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.result = '10%';
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.result = '14%';
              }
              else if (Number(this.cisnienie) >= 180) {
                this.result = '20%';
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 6 && Number(this.cholesterol) < 7) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 230 && Number(this.cholesterol) < 270)) {
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.result = '9%';
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.result = '12%';
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.result = '17%';
              }
              else if (Number(this.cisnienie) >= 180) {
                this.result = '24%';
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 7 && Number(this.cholesterol) < 8) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 270 && Number(this.cholesterol) < 310)) {
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.result = '10%';
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.result = '14%';
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.result = '20%';
              }
              else if (Number(this.cisnienie) >= 180) {
                this.result = '28%';
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 8) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 310)) {
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.result = '12%';
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.result = '17%';
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.result = '24%';
              }
              else if (Number(this.cisnienie) >= 180) {
                this.result = '32%';
              }
            }
          }
          else if (Number(this.wiek) >= 70) {
            if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 4 && Number(this.cholesterol) < 5) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 150 && Number(this.cholesterol) < 190)) {
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.result = '10%';
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.result = '14%';
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.result = '20%';
              }
              else if (Number(this.cisnienie) >= 180) {
                this.result = '28%';
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 5 && Number(this.cholesterol) < 6) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 190 && Number(this.cholesterol) < 230)) {
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.result = '12%';
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.result = '17%';
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.result = '24%';
              }
              else if (Number(this.cisnienie) >= 180) {
                this.result = '33%';
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 6 && Number(this.cholesterol) < 7) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 230 && Number(this.cholesterol) < 270)) {
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.result = '14%';
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.result = '20%';
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.result = '28%';
              }
              else if (Number(this.cisnienie) >= 180) {
                this.result = '38%';
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 7 && Number(this.cholesterol) < 8) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 270 && Number(this.cholesterol) < 310)) {
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.result = '17%';
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.result = '24%';
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.result = '32%';
              }
              else if (Number(this.cisnienie) >= 180) {
                this.result = '43%';
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 8) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 310)) {
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.result = '20%';
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.result = '28%';
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.result = '38%';
              }
              else if (Number(this.cisnienie) >= 180) {
                this.result = '50%';
              }
            }
          }
        }
      }
    }
  },
  nextPage () {
    this.person[0].wiekDoTabeli = this.wiek;
    this.person[0].plecDoTabeli = this.plec;
    this.person[0].papierosyDotabeli = this.papierosy;
    this.person[0].cholesterolDoTabeli = this.cholesterol;
    this.person[0].jednostkaDoTabeli = this.jednostka;
    this.person[0].cisnienieDoTabeli = this.cisnienie;
    router.push({ name: 'TabelaRyzyka', path: '/tabelaRyzyka' });
  }
});

</script>

<style scoped>
  .result {
    border: rgb(0, 102, 255) solid;
    border-radius: 5px;
    width: 100%;
    max-width: 150px;
    height: 28px;
  }
  .next-page-link {
    color: white;
    text-decoration: none;
  }
</style>
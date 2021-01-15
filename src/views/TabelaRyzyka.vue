<template>
  <form @submit.prevent="sendMessage">
    <ion-page>
      <ion-content :fullscreen="true">
        <h1 class="header">Tabela ryzyka</h1>
        <div class="dane">
          <p>Wiek: {{ wiek }}</p>
          <p>Płeć: {{ plec }}</p>
          <p>Papierosy: {{ papierosy }}</p>
          <p>Ciśnienie: {{ cisnienie }}</p>
          <p>Cholesterol: {{ cholesterol }}{{ jednostka }}</p>
        </div>
        <ion-radio-group value="cholCis" v-model="zaleznosc">

          <ion-item>
            <ion-label>cholesterol i ciśnienie</ion-label>
            <ion-radio slot="start" value="cholCis"></ion-radio>
          </ion-item>

          <ion-item>
            <ion-label>cholesterol i wiek</ion-label>
            <ion-radio slot="start" value="cholWiek"></ion-radio>
          </ion-item>

          <ion-item>
            <ion-label>ciśnienie i wiek</ion-label>
            <ion-radio slot="start" value="cisWiek"></ion-radio>
          </ion-item>

        </ion-radio-group>
        <table class="table-style" >
          <tbody v-if="zaleznosc == 'cholCis'">
            <tr v-for="(row, rowindex) in tabelaCholCis" :key="row.id">
              <td class="table-cell" v-for="value in row" :key="value.id">
                <p class="dark-maroon" v-if="value >= 15 && value < 100 && rowindex!=4">{{ value }}</p>
                <p class="maroon" v-else-if="value >= 10 && value <= 14 && rowindex!=4">{{ value }}</p>
                <p class="red" v-else-if="value >= 5 && value <= 9 && rowindex!=4">{{ value }}</p>
                <p class="orange" v-else-if="value >= 3 && value <= 4 && rowindex!=4">{{ value }}</p>
                <p class="yellow" v-else-if="value == 2 && rowindex!=4">{{ value }}</p>
                <p class="green" v-else-if="value == 1 && rowindex!=4">{{ value }}</p>
                <p class="dark-green" v-else-if="value < 1 && rowindex!=4">{{ value }}</p>
                <p class="white" v-else>{{ value }}</p>
              </td>
            </tr>
          </tbody>
          <tbody v-else-if="zaleznosc == 'cholWiek'">
            <tr v-for="(row, rowindex) in tabelaCholWiek" :key="row.id">
              <td class="table-cell" v-for="value in row" :key="value.id">
                <p class="dark-maroon" v-if="value >= 15 && value < 100 && rowindex!=6">{{ value }}</p>
                <p class="maroon" v-else-if="value >= 10 && value <= 14 && rowindex!=6">{{ value }}</p>
                <p class="red" v-else-if="value >= 5 && value <= 9 && rowindex!=6">{{ value }}</p>
                <p class="orange" v-else-if="value >= 3 && value <= 4 && rowindex!=6">{{ value }}</p>
                <p class="yellow" v-else-if="value == 2 && rowindex!=6">{{ value }}</p>
                <p class="green" v-else-if="value == 1 && rowindex!=6">{{ value }}</p>
                <p class="dark-green" v-else-if="value < 1 && rowindex!=6">{{ value }}</p>
                <p class="white" v-else>{{ value }}</p>
              </td>
            </tr>
          </tbody>
          <tbody v-else-if="zaleznosc == 'cisWiek'">
            <tr v-for="(row, rowindex) in tabelaCisWiek" :key="row.id">
              <td class="table-cell" v-for="value in row" :key="value.id">
                <p class="dark-maroon" v-if="value >= 15 && value < 100 && rowindex!=4">{{ value }}</p>
                <p class="maroon" v-else-if="value >= 10 && value <= 14 && rowindex!=4">{{ value }}</p>
                <p class="red" v-else-if="value >= 5 && value <= 9 && rowindex!=4">{{ value }}</p>
                <p class="orange" v-else-if="value >= 3 && value <= 4 && rowindex!=4">{{ value }}</p>
                <p class="yellow" v-else-if="value == 2 && rowindex!=4">{{ value }}</p>
                <p class="green" v-else-if="value == 1 && rowindex!=4">{{ value }}</p>
                <p class="dark-green" v-else-if="value < 1 && rowindex!=4">{{ value }}</p>
                <p class="white" v-else>{{ value }}</p>
              </td>
            </tr>
          </tbody>
        </table>
      </ion-content>
    </ion-page>
  </form>
</template>

<script lang="ts">

import {
  IonContent,
  IonItem,
  IonLabel,
  IonPage,
  IonRadio,
  IonRadioGroup
} from "@ionic/vue";
import { defineComponent } from "vue";
import router from '../router';
import {useRoute, useRouter} from "vue-router";

export default defineComponent({
  name: "Home",
  components: {
    IonContent,
    IonItem,
    IonLabel,
    IonPage,
    IonRadio,
    IonRadioGroup
  },
  setup() {
    const route = useRoute();
    const wiek = route.params.wiek;
    const plec = route.params.plec;
    const papierosy = route.params.papierosy;
    const cholesterol = route.params.cholesterol;
    const cisnienie = route.params.cisnienie;
    const jednostka = route.params.jednostka;
    return { route, wiek, plec, papierosy, cholesterol, cisnienie, jednostka };
  },
  data() {
    return {
      zaleznosc: 'cholCis',
      tabelaCholCis: [[ 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0 ], [ 'mmol/l', 0, 0, 0, 0, 0 ], [ 'mg/dl', 0, 0, 0, 0, 0 ]],
      tabelaCholWiek: [[ 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0 ], [ 'mmol/l', 0, 0, 0, 0, 0 ], [ 'mg/dl', 0, 0, 0, 0, 0 ]],
      tabelaCisWiek: [[ 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0 ], [ 'mmol/l', 0, 0, 0, 0, 0 ], [ 'mg/dl', 0, 0, 0, 0, 0 ]],

      tabCholCisMnP70: [[ 180, 28, 33, 38, 43, 50 ], [ 160, 20, 24, 28, 32, 38 ], [ 140, 14, 17, 20, 24, 28 ], [ 120, 10, 12, 14, 17, 20 ], [ 'mmol/l', 4, 5, 6, 7, 8 ], [ 'mg/dl', 150, 190, 230, 270, 310 ]],
      tabCholCisMnP65: [[ 180, 17, 20, 24, 28, 32 ], [ 160, 12, 14, 17, 20, 24 ], [ 140, 9, 10, 12, 14, 17 ], [ 120, 6, 7, 9, 10, 12 ], [ 'mmol/l', 4, 5, 6, 7, 8 ], [ 'mg/dl', 150, 190, 230, 270, 310 ]],
      tabCholCisMnP60: [[ 180, 11, 13, 15, 18, 21 ], [ 160, 8, 9, 11, 13, 15 ], [ 140, 5, 6, 8, 9, 11 ], [ 120, 4, 4, 5, 6, 8 ], [ 'mmol/l', 4, 5, 6, 7, 8 ], [ 'mg/dl', 150, 190, 230, 270, 310 ]],
      tabCholCisMnP55: [[ 180, 7, 8, 10, 12, 14 ], [ 160, 5, 6, 7, 8, 10 ], [ 140, 3, 4, 5, 6, 7 ], [ 120, 2, 3, 3, 4, 5 ], [ 'mmol/l', 4, 5, 6, 7, 8 ], [ 'mg/dl', 150, 190, 230, 270, 310 ]],
      tabCholCisMnP50: [[ 180, 5, 6, 7, 8, 9 ], [ 160, 3, 4, 5, 6, 7 ], [ 140, 2, 3, 3, 4, 5 ], [ 120, 2, 2, 2, 3, 3 ], [ 'mmol/l', 4, 5, 6, 7, 8 ], [ 'mg/dl', 150, 190, 230, 270, 310 ]],
      tabCholCisMnP40: [[ 180, 2, 2, 3, 3, 4 ], [ 160, 1, 2, 2, 2, 3 ], [ 140, 1, 1, 1, 2, 2 ], [ 120, 1, 1, 1, 1, 1 ], [ 'mmol/l', 4, 5, 6, 7, 8 ], [ 'mg/dl', 150, 190, 230, 270, 310 ]],
      
      tabCholCisMP70: [[ 180, 49, 56, 62, 69, 76 ], [ 160, 37, 43, 49, 55, 62 ], [ 140, 27, 32, 37, 43, 49 ], [ 120, 20, 23, 27, 32, 37 ], [ 'mmol/l', 4, 5, 6, 7, 8 ], [ 'mg/dl', 150, 190, 230, 270, 310 ]],
      tabCholCisMP65: [[ 180, 32, 37, 43, 49, 55 ], [ 160, 23, 27, 32, 37, 43 ], [ 140, 17, 20, 23, 27, 32 ], [ 120, 12, 14, 17, 20, 23 ], [ 'mmol/l', 4, 5, 6, 7, 8 ], [ 'mg/dl', 150, 190, 230, 270, 310 ]],
      tabCholCisMP60: [[ 180, 21, 25, 29, 34, 39 ], [ 160, 15, 18, 21, 25, 29 ], [ 140, 11, 13, 15, 18, 21 ], [ 120, 7, 9, 11, 13, 15 ], [ 'mmol/l', 4, 5, 6, 7, 8 ], [ 'mg/dl', 150, 190, 230, 270, 310 ]],
      tabCholCisMP55: [[ 180, 14, 17, 20, 23, 27 ], [ 160, 10, 12, 14, 17, 20 ], [ 140, 7, 8, 10, 12, 14 ], [ 120, 5, 6, 7, 8, 10 ], [ 'mmol/l', 4, 5, 6, 7, 8 ], [ 'mg/dl', 150, 190, 230, 270, 310 ]],
      tabCholCisMP50: [[ 180, 9, 11, 13, 16, 18 ], [ 160, 6, 8, 9, 11, 13 ], [ 140, 5, 5, 6, 8, 9 ], [ 120, 3, 4, 5, 5, 6 ], [ 'mmol/l', 4, 5, 6, 7, 8 ], [ 'mg/dl', 150, 190, 230, 270, 310 ]],
      tabCholCisMP40: [[ 180, 4, 4, 5, 6, 8 ], [ 160, 3, 3, 4, 4, 5 ], [ 140, 2, 2, 3, 3, 4 ], [ 120, 1, 1, 2, 2, 3 ], [ 'mmol/l', 4, 5, 6, 7, 8 ], [ 'mg/dl', 150, 190, 230, 270, 310 ]],
      
      tabCholCisKnP70: [[ 180, 17, 20, 24, 28, 32 ], [ 160, 12, 14, 17, 20, 24 ], [ 140, 8, 10, 12, 14, 17 ], [ 120, 6, 7, 8, 10, 12 ], [ 'mmol/l', 4, 5, 6, 7, 8 ], [ 'mg/dl', 150, 190, 230, 270, 310 ]],
      tabCholCisKnP65: [[ 180, 9, 10, 12, 15, 17 ], [ 160, 6, 7, 9, 10, 12 ], [ 140, 4, 5, 6, 7, 9 ], [ 120, 3, 3, 4, 5, 6 ], [ 'mmol/l', 4, 5, 6, 7, 8 ], [ 'mg/dl', 150, 190, 230, 270, 310 ]],
      tabCholCisKnP60: [[ 180, 5, 6, 7, 8, 9 ], [ 160, 3, 4, 5, 5, 7 ], [ 140, 2, 3, 3, 4, 5 ], [ 120, 2, 2, 2, 3, 3 ], [ 'mmol/l', 4, 5, 6, 7, 8 ], [ 'mg/dl', 150, 190, 230, 270, 310 ]],
      tabCholCisKnP55: [[ 180, 3, 3, 4, 4, 5 ], [ 160, 2, 2, 3, 3, 4 ], [ 140, 1, 1, 2, 2, 3 ], [ 120, 1, 1, 1, 1, 2 ], [ 'mmol/l', 4, 5, 6, 7, 8 ], [ 'mg/dl', 150, 190, 230, 270, 310 ]],
      tabCholCisKnP50: [[ 180, 2, 2, 2, 3, 3 ], [ 160, 1, 1, 2, 2, 2 ], [ 140, 1, 1, 1, 1, 2 ], [ 120, 1, 1, 1, 1, 1 ], [ 'mmol/l', 4, 5, 6, 7, 8 ], [ 'mg/dl', 150, 190, 230, 270, 310 ]],
      tabCholCisKnP40: [[ 180, 1, 1, 1, 1, 1 ], [ 160, 0, 1, 1, 1, 1 ], [ 140, 0, 0, 0, 1, 1 ], [ 120, 0, 0, 0, 0, 0 ], [ 'mmol/l', 4, 5, 6, 7, 8 ], [ 'mg/dl', 150, 190, 230, 270, 310 ]],
      
      tabCholCisKP70: [[ 180, 32, 37, 43, 49, 55 ], [ 160, 23, 27, 32, 37, 42 ], [ 140, 17, 20, 23, 27, 32 ], [ 120, 12, 14, 17, 20, 23 ], [ 'mmol/l', 4, 5, 6, 7, 8 ], [ 'mg/dl', 150, 190, 230, 270, 310 ]],
      tabCholCisKP65: [[ 180, 17, 20, 24, 28, 32 ], [ 160, 12, 14, 17, 20, 23 ], [ 140, 8, 10, 12, 14, 17 ], [ 120, 6, 7, 8, 10, 12 ], [ 'mmol/l', 4, 5, 6, 7, 8 ], [ 'mg/dl', 150, 190, 230, 270, 310 ]],
      tabCholCisKP60: [[ 180, 9, 11, 13, 15, 18 ], [ 160, 6, 8, 9, 11, 13 ], [ 140, 5, 5, 6, 8, 9 ], [ 120, 3, 4, 4, 5, 6 ], [ 'mmol/l', 4, 5, 6, 7, 8 ], [ 'mg/dl', 150, 190, 230, 270, 310 ]],
      tabCholCisKP55: [[ 180, 5, 6, 8, 9, 11 ], [ 160, 4, 4, 5, 6, 7 ], [ 140, 3, 3, 4, 4, 5 ], [ 120, 2, 2, 3, 3, 4 ], [ 'mmol/l', 4, 5, 6, 7, 8 ], [ 'mg/dl', 150, 190, 230, 270, 310 ]],
      tabCholCisKP50: [[ 180, 3, 4, 5, 5, 7 ], [ 160, 2, 3, 3, 4, 5 ], [ 140, 2, 2, 2, 3, 3 ], [ 120, 1, 1, 2, 2, 2 ], [ 'mmol/l', 4, 5, 6, 7, 8 ], [ 'mg/dl', 150, 190, 230, 270, 310 ]],
      tabCholCisKP40: [[ 180, 1, 2, 2, 2, 3 ], [ 160, 1, 1, 1, 2, 2 ], [ 140, 1, 1, 1, 1, 1 ], [ 120, 0, 1, 1, 1, 1 ], [ 'mmol/l', 4, 5, 6, 7, 8 ], [ 'mg/dl', 150, 190, 230, 270, 310 ]],
    
      tabCholWiekMnP180: [[ 70, 28, 33, 38, 43, 50 ], [ 65, 17, 20, 24, 28, 32 ], [ 60, 11, 13, 15, 18, 21 ], [ 55, 7, 8, 10, 12, 14 ], [ 50, 5, 6, 7, 8, 9 ], [ 40, 2, 2, 3, 3, 4 ], [ 'mmol/l', 4, 5, 6, 7, 8 ], [ 'mg/dl', 150, 190, 230, 270, 310 ]],
      tabCholWiekMnP160: [[ 70, 20, 24, 28, 32, 38 ], [ 65, 12, 14, 17, 20, 24 ], [ 60, 8, 9, 11, 13, 15 ], [ 55, 5, 6, 7, 8, 10 ], [ 50, 3, 4, 5, 6, 7 ], [ 40, 1, 2, 2, 2, 3 ], [ 'mmol/l', 4, 5, 6, 7, 8 ], [ 'mg/dl', 150, 190, 230, 270, 310 ]],
      tabCholWiekMnP140: [[ 70, 14, 17, 20, 24, 28 ], [ 65, 9, 10, 12, 14, 17 ], [ 60, 5, 6, 8, 9, 11 ], [ 55, 3, 4, 5, 6, 7 ], [ 50, 2, 3, 3, 4, 5 ], [ 40, 1, 1, 1, 2, 2 ], [ 'mmol/l', 4, 5, 6, 7, 8 ], [ 'mg/dl', 150, 190, 230, 270, 310 ]],
      tabCholWiekMnP120: [[ 70, 10, 12, 14, 17, 20 ], [ 65, 6, 7, 9, 10, 12 ], [ 60, 4, 4, 5, 6, 8 ], [ 55, 2, 3, 3, 4, 5 ], [ 50, 2, 2, 2, 3, 3 ], [ 40, 1, 1, 1, 1, 1 ], [ 'mmol/l', 4, 5, 6, 7, 8 ], [ 'mg/dl', 150, 190, 230, 270, 310 ]],
           
      tabCholWiekMP180: [[ 70, 49, 56, 62, 69, 76 ], [ 65, 32, 37, 43, 49, 55 ], [ 60, 21, 25, 29, 34, 39 ], [ 55, 14, 17, 20, 23, 27 ], [ 50, 9, 11, 13, 16, 18 ], [ 40, 4, 4, 5, 6, 8 ], [ 'mmol/l', 4, 5, 6, 7, 8 ], [ 'mg/dl', 150, 190, 230, 270, 310 ]],
      tabCholWiekMP160: [[ 70, 37, 43, 49, 55, 62 ], [ 65, 23, 27, 32, 37, 43 ], [ 60, 15, 18, 21, 25, 29 ], [ 55, 10, 12, 14, 17, 20 ], [ 50, 6, 8, 9, 11, 13 ], [ 40, 3, 3, 4, 4, 5 ], [ 'mmol/l', 4, 5, 6, 7, 8 ], [ 'mg/dl', 150, 190, 230, 270, 310 ]],
      tabCholWiekMP140: [[ 70, 27, 32, 37, 43, 49 ], [ 65, 17, 20, 23, 27, 32 ], [ 60, 11, 13, 15, 18, 21 ], [ 55, 7, 8, 10, 12, 14 ], [ 50, 5, 5, 6, 8, 9 ], [ 40, 2, 2, 3, 3, 4 ], [ 'mmol/l', 4, 5, 6, 7, 8 ], [ 'mg/dl', 150, 190, 230, 270, 310 ]],
      tabCholWiekMP120: [[ 70, 20, 23, 27, 32, 37 ], [ 65, 12, 14, 17, 20, 23 ], [ 60, 7, 9, 11, 13, 15 ], [ 55, 5, 6, 7, 8, 10 ], [ 50, 3, 4, 5, 5, 6 ], [ 40, 1, 1, 2, 2, 3 ], [ 'mmol/l', 4, 5, 6, 7, 8 ], [ 'mg/dl', 150, 190, 230, 270, 310 ]],
    
      tabCholWiekKnP180: [[ 70, 17, 20, 24, 28, 32 ], [ 65, 9, 10, 12, 15, 17 ], [ 60, 5, 6, 7, 8, 9 ], [ 55, 3, 3, 4, 4, 5 ], [ 50, 2, 2, 2, 3, 3 ], [ 40, 1, 1, 1, 1, 1 ], [ 'mmol/l', 4, 5, 6, 7, 8 ], [ 'mg/dl', 150, 190, 230, 270, 310 ]],
      tabCholWiekKnP160: [[ 70, 12, 14, 17, 20, 24 ], [ 65, 6, 7, 9, 10, 12 ], [ 60, 3, 4, 5, 5, 7 ], [ 55, 2, 2, 3, 3, 4 ], [ 50, 1, 1, 2, 2, 2 ], [ 40, 0, 1, 1, 1, 1 ], [ 'mmol/l', 4, 5, 6, 7, 8 ], [ 'mg/dl', 150, 190, 230, 270, 310 ]],
      tabCholWiekKnP140: [[ 70, 8, 10, 12, 14, 17 ], [ 65, 4, 5, 6, 7, 9 ], [ 60, 2, 3, 3, 4, 5 ], [ 55, 1, 1, 2, 2, 3 ], [ 50, 1, 1, 1, 1, 2 ], [ 40, 0, 0, 0, 1, 1 ], [ 'mmol/l', 4, 5, 6, 7, 8 ], [ 'mg/dl', 150, 190, 230, 270, 310 ]],
      tabCholWiekKnP120: [[ 70, 6, 7, 8, 10, 12 ], [ 65, 3, 3, 4, 5, 6 ], [ 60, 2, 2, 2, 3, 3 ], [ 55, 1, 1, 1, 1, 2 ], [ 50, 1, 1, 1, 1, 1 ], [ 40, 0, 0, 0, 0, 0 ], [ 'mmol/l', 4, 5, 6, 7, 8 ], [ 'mg/dl', 150, 190, 230, 270, 310 ]],
          
      tabCholWiekKP180: [[ 70, 32, 37, 43, 49, 55 ], [ 65, 17, 20, 24, 28, 32 ], [ 60, 9, 11, 13, 15, 18 ], [ 55, 5, 6, 8, 9, 11 ], [ 50, 3, 4, 5, 5, 7 ], [ 40, 1, 2, 2, 2, 3 ], [ 'mmol/l', 4, 5, 6, 7, 8 ], [ 'mg/dl', 150, 190, 230, 270, 310 ]],
      tabCholWiekKP160: [[ 70, 23, 27, 32, 37, 42 ], [ 65, 12, 14, 17, 20, 23 ], [ 60, 6, 8, 9, 11, 13 ], [ 55, 4, 4, 5, 6, 7 ], [ 50, 2, 3, 3, 4, 5 ], [ 40, 1, 1, 1, 2, 2 ], [ 'mmol/l', 4, 5, 6, 7, 8 ], [ 'mg/dl', 150, 190, 230, 270, 310 ]],
      tabCholWiekKP140: [[ 70, 17, 20, 23, 27, 32 ], [ 65, 8, 10, 12, 14, 17 ], [ 60, 5, 5, 6, 8, 9 ], [ 55, 3, 3, 4, 4, 5 ], [ 50, 2, 2, 2, 3, 3 ], [ 40, 1, 1, 1, 1, 1 ], [ 'mmol/l', 4, 5, 6, 7, 8 ], [ 'mg/dl', 150, 190, 230, 270, 310 ]],
      tabCholWiekKP120: [[ 70, 12, 14, 17, 20, 23 ], [ 65, 6, 7, 8, 10, 12 ], [ 60, 3, 4, 4, 5, 6 ], [ 55, 2, 2, 3, 3, 4 ], [ 50, 1, 1, 2, 2, 2 ], [ 40, 0, 1, 1, 1, 1 ], [ 'mmol/l', 4, 5, 6, 7, 8 ], [ 'mg/dl', 150, 190, 230, 270, 310 ]],
    
      tabCisWiekMnP4: [[ 180, 2, 5, 7, 11, 17, 28 ], [ 160, 1, 3, 5, 8, 12, 20 ], [ 140, 1, 2, 3, 5, 9, 14 ], [ 120, 1, 2, 2, 4, 6, 10 ], [ '', 40, 50, 55, 60, 65, 70 ]],
      tabCisWiekMnP5: [[ 180, 2, 6, 8, 13, 20, 33 ], [ 160, 2, 4, 6, 9, 14, 24 ], [ 140, 1, 3, 4, 6, 10, 17 ], [ 120, 1, 2, 3, 4, 7, 12 ], [ '', 40, 50, 55, 60, 65, 70 ]],
      tabCisWiekMnP6: [[ 180, 3, 7, 10, 15, 24, 38 ], [ 160, 2, 5, 7, 11, 17, 28 ], [ 140, 1, 3, 5, 8, 12, 20 ], [ 120, 1, 2, 3, 5, 9, 14 ], [ '', 40, 50, 55, 60, 65, 70 ]],
      tabCisWiekMnP7: [[ 180, 3, 8, 12, 18, 28, 43 ], [ 160, 2, 6, 8, 13, 20, 32 ], [ 140, 2, 4, 6, 9, 14, 24 ], [ 120, 1, 3, 4, 6, 10, 17 ], [ '', 40, 50, 55, 60, 65, 70 ]],
      tabCisWiekMnP8: [[ 180, 4, 9, 14, 21, 32, 50 ], [ 160, 3, 7, 10, 15, 24, 38 ], [ 140, 2, 5, 7, 11, 17, 28 ], [ 120, 1, 3, 5, 8, 12, 20 ], [ '', 40, 50, 55, 60, 65, 70 ]],
      
      tabCisWiekMP4: [[ 180, 4, 9, 14, 21, 32, 49 ], [ 160, 3, 6, 10, 15, 23, 37 ], [ 140, 2, 5, 7, 11, 17, 27 ], [ 120, 1, 3, 5, 7, 12, 20 ], [ '', 40, 50, 55, 60, 65, 70 ]],
      tabCisWiekMP5: [[ 180, 4, 11, 17, 25, 37, 56 ], [ 160, 3, 8, 12, 18, 27, 43 ], [ 140, 2, 5, 8, 13, 20, 32 ], [ 120, 1, 4, 6, 9, 14, 23 ], [ '', 40, 50, 55, 60, 65, 70 ]],
      tabCisWiekMP6: [[ 180, 5, 13, 20, 29, 43, 62 ], [ 160, 4, 9, 14, 21, 32, 49 ], [ 140, 3, 6, 10, 15, 23, 37 ], [ 120, 2, 5, 7, 11, 17, 27 ], [ '', 40, 50, 55, 60, 65, 70 ]],
      tabCisWiekMP7: [[ 180, 6, 16, 23, 34, 49, 69 ], [ 160, 4, 11, 17, 25, 37, 55 ], [ 140, 3, 8, 12, 18, 27, 43 ], [ 120, 2, 5, 8, 13, 20, 32 ], [ '', 40, 50, 55, 60, 65, 70 ]],
      tabCisWiekMP8: [[ 180, 8, 18, 27, 39, 55, 76 ], [ 160, 5, 13, 20, 29, 43, 62 ], [ 140, 4, 9, 14, 21, 32, 49 ], [ 120, 3, 6, 10, 15, 23, 37 ], [ '', 40, 50, 55, 60, 65, 70 ]],

      tabCisWiekKnP4: [[ 180, 1, 2, 3, 5, 9, 17 ], [ 160, 0, 1, 2, 3, 6, 12 ], [ 140, 0, 1, 1, 2, 4, 8 ], [ 120, 0, 1, 1, 2, 3, 6 ], [ '', 40, 50, 55, 60, 65, 70 ]],
      tabCisWiekKnP5: [[ 180, 1, 2, 3, 6, 10, 20 ], [ 160, 1, 1, 2, 4, 7, 14 ], [ 140, 0, 1, 1, 3, 5, 10 ], [ 120, 0, 1, 1, 2, 3, 7 ], [ '', 40, 50, 55, 60, 65, 70 ]],
      tabCisWiekKnP6: [[ 180, 1, 2, 4, 7, 12, 24 ], [ 160, 1, 2, 3, 5, 9, 17 ], [ 140, 0, 1, 2, 3, 6, 12 ], [ 120, 0, 1, 1, 2, 4, 8 ], [ '', 40, 50, 55, 60, 65, 70 ]],
      tabCisWiekKnP7: [[ 180, 1, 3, 4, 8, 15, 28 ], [ 160, 1, 2, 3, 5, 10, 20 ], [ 140, 1, 1, 2, 4, 7, 14 ], [ 120, 0, 1, 1, 3, 5, 10 ], [ '', 40, 50, 55, 60, 65, 70 ]],
      tabCisWiekKnP8: [[ 180, 1, 3, 5, 9, 17, 32 ], [ 160, 1, 2, 4, 7, 12, 24 ], [ 140, 1, 2, 3, 5, 9, 17 ], [ 120, 0, 1, 2, 3, 6, 12 ], [ '', 40, 50, 55, 60, 65, 70 ]],

      tabCisWiekKP4: [[ 180, 1, 3, 5, 9, 17, 32 ], [ 160, 1, 2, 4, 6, 12, 23 ], [ 140, 1, 2, 3, 5, 8, 17 ], [ 120, 0, 1, 2, 3, 6, 12 ], [ '', 40, 50, 55, 60, 65, 70 ]],
      tabCisWiekKP5: [[ 180, 2, 4, 6, 11, 20, 37 ], [ 160, 1, 3, 4, 8, 14, 27 ], [ 140, 1, 2, 3, 5, 10, 20 ], [ 120, 1, 1, 2, 4, 7, 14 ], [ '', 40, 50, 55, 60, 65, 70 ]],
      tabCisWiekKP6: [[ 180, 2, 5, 8, 13, 24, 43 ], [ 160, 1, 3, 5, 9, 17, 32 ], [ 140, 1, 2, 4, 6, 12, 23 ], [ 120, 1, 2, 3, 4, 8, 17 ], [ '', 40, 50, 55, 60, 65, 70 ]],
      tabCisWiekKP7: [[ 180, 2, 5, 9, 15, 28, 49 ], [ 160, 2, 4, 6, 11, 20, 37 ], [ 140, 1, 3, 4, 8, 14, 27 ], [ 120, 1, 2, 3, 5, 10, 20 ], [ '', 40, 50, 55, 60, 65, 70 ]],
      tabCisWiekKP8: [[ 180, 3, 7, 11, 18, 32, 55 ], [ 160, 2, 5, 7, 13, 23, 42 ], [ 140, 1, 3, 5, 9, 17, 32 ], [ 120, 1, 2, 4, 6, 12, 23 ], [ '', 40, 50, 55, 60, 65, 70 ]]
    }
  },
  methods: {
    dispTable(){
      if (this.plec == 'kobieta') {
        if (this.papierosy == 'palacy') {
          if (Number(this.wiek) >= 40 && Number(this.wiek) < 50) {
            this.tabelaCholCis = this.tabCholCisKP40;
            if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 4 && Number(this.cholesterol) < 5) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 150 && Number(this.cholesterol) < 190)) {
              this.tabelaCisWiek = this.tabCisWiekKP4;
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.tabelaCholWiek = this.tabCholWiekKP120;
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.tabelaCholWiek = this.tabCholWiekKP140;
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.tabelaCholWiek = this.tabCholWiekKP160;
              }
              else if (Number(this.cisnienie) >= 180) {
                this.tabelaCholWiek = this.tabCholWiekKP180;
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 5 && Number(this.cholesterol) < 6) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 190 && Number(this.cholesterol) < 230)) {
              this.tabelaCisWiek = this.tabCisWiekKP5;
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.tabelaCholWiek = this.tabCholWiekKP120;
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.tabelaCholWiek = this.tabCholWiekKP140;
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.tabelaCholWiek = this.tabCholWiekKP160;
              }
              else if (Number(this.cisnienie) >= 180) {
                this.tabelaCholWiek = this.tabCholWiekKP180;
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 6 && Number(this.cholesterol) < 7) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 230 && Number(this.cholesterol) < 270)) {
              this.tabelaCisWiek = this.tabCisWiekKP6;
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.tabelaCholWiek = this.tabCholWiekKP120;
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.tabelaCholWiek = this.tabCholWiekKP140;
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.tabelaCholWiek = this.tabCholWiekKP160;
              }
              else if (Number(this.cisnienie) >= 180) {
                this.tabelaCholWiek = this.tabCholWiekKP180;
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 7 && Number(this.cholesterol) < 8) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 270 && Number(this.cholesterol) < 310)) {
              this.tabelaCisWiek = this.tabCisWiekKP7;
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.tabelaCholWiek = this.tabCholWiekKP120;
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.tabelaCholWiek = this.tabCholWiekKP140;
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.tabelaCholWiek = this.tabCholWiekKP160;
              }
              else if (Number(this.cisnienie) >= 180) {
                this.tabelaCholWiek = this.tabCholWiekKP180;
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 8) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 310)) {
              this.tabelaCisWiek = this.tabCisWiekKP8;
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.tabelaCholWiek = this.tabCholWiekKP120;
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.tabelaCholWiek = this.tabCholWiekKP140;
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.tabelaCholWiek = this.tabCholWiekKP160;
              }
              else if (Number(this.cisnienie) >= 180) {
                this.tabelaCholWiek = this.tabCholWiekKP180;
              }
            }
          }
          else if (Number(this.wiek) >= 50 && Number(this.wiek) < 55) {
            this.tabelaCholCis = this.tabCholCisKP50;
            if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 4 && Number(this.cholesterol) < 5) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 150 && Number(this.cholesterol) < 190)) {
              this.tabelaCisWiek = this.tabCisWiekKP4;
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.tabelaCholWiek = this.tabCholWiekKP120;
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.tabelaCholWiek = this.tabCholWiekKP140;
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.tabelaCholWiek = this.tabCholWiekKP160;
              }
              else if (Number(this.cisnienie) >= 180) {
                this.tabelaCholWiek = this.tabCholWiekKP180;
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 5 && Number(this.cholesterol) < 6) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 190 && Number(this.cholesterol) < 230)) {
              this.tabelaCisWiek = this.tabCisWiekKP5;
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.tabelaCholWiek = this.tabCholWiekKP120;
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.tabelaCholWiek = this.tabCholWiekKP140;
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.tabelaCholWiek = this.tabCholWiekKP160;
              }
              else if (Number(this.cisnienie) >= 180) {
                this.tabelaCholWiek = this.tabCholWiekKP180;
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 6 && Number(this.cholesterol) < 7) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 230 && Number(this.cholesterol) < 270)) {
              this.tabelaCisWiek = this.tabCisWiekKP6;
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.tabelaCholWiek = this.tabCholWiekKP120;
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.tabelaCholWiek = this.tabCholWiekKP140;
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.tabelaCholWiek = this.tabCholWiekKP160;
              }
              else if (Number(this.cisnienie) >= 180) {
                this.tabelaCholWiek = this.tabCholWiekKP180;
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 7 && Number(this.cholesterol) < 8) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 270 && Number(this.cholesterol) < 310)) {
              this.tabelaCisWiek = this.tabCisWiekKP7;
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.tabelaCholWiek = this.tabCholWiekKP120;
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.tabelaCholWiek = this.tabCholWiekKP140;
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.tabelaCholWiek = this.tabCholWiekKP160;
              }
              else if (Number(this.cisnienie) >= 180) {
                this.tabelaCholWiek = this.tabCholWiekKP180;
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 8) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 310)) {
              this.tabelaCisWiek = this.tabCisWiekKP8;
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.tabelaCholWiek = this.tabCholWiekKP120;
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.tabelaCholWiek = this.tabCholWiekKP140;
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.tabelaCholWiek = this.tabCholWiekKP160;
              }
              else if (Number(this.cisnienie) >= 180) {
                this.tabelaCholWiek = this.tabCholWiekKP180;
              }
            }
          }
          else if (Number(this.wiek) >= 55 && Number(this.wiek) < 60) {
            this.tabelaCholCis = this.tabCholCisKP55;
            if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 4 && Number(this.cholesterol) < 5) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 150 && Number(this.cholesterol) < 190)) {
              this.tabelaCisWiek = this.tabCisWiekKP4;
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.tabelaCholWiek = this.tabCholWiekKP120;
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.tabelaCholWiek = this.tabCholWiekKP140;
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.tabelaCholWiek = this.tabCholWiekKP160;
              }
              else if (Number(this.cisnienie) >= 180) {
                this.tabelaCholWiek = this.tabCholWiekKP180;
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 5 && Number(this.cholesterol) < 6) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 190 && Number(this.cholesterol) < 230)) {
              this.tabelaCisWiek = this.tabCisWiekKP5;
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.tabelaCholWiek = this.tabCholWiekKP120;
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.tabelaCholWiek = this.tabCholWiekKP140;
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.tabelaCholWiek = this.tabCholWiekKP160;
              }
              else if (Number(this.cisnienie) >= 180) {
                this.tabelaCholWiek = this.tabCholWiekKP180;
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 6 && Number(this.cholesterol) < 7) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 230 && Number(this.cholesterol) < 270)) {
              this.tabelaCisWiek = this.tabCisWiekKP6;
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.tabelaCholWiek = this.tabCholWiekKP120;
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.tabelaCholWiek = this.tabCholWiekKP140;
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.tabelaCholWiek = this.tabCholWiekKP160;
              }
              else if (Number(this.cisnienie) >= 180) {
                this.tabelaCholWiek = this.tabCholWiekKP180;
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 7 && Number(this.cholesterol) < 8) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 270 && Number(this.cholesterol) < 310)) {
              this.tabelaCisWiek = this.tabCisWiekKP7;
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.tabelaCholWiek = this.tabCholWiekKP120;
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.tabelaCholWiek = this.tabCholWiekKP140;
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.tabelaCholWiek = this.tabCholWiekKP160;
              }
              else if (Number(this.cisnienie) >= 180) {
                this.tabelaCholWiek = this.tabCholWiekKP180;
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 8) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 310)) {
              this.tabelaCisWiek = this.tabCisWiekKP8;
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.tabelaCholWiek = this.tabCholWiekKP120;
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.tabelaCholWiek = this.tabCholWiekKP140;
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.tabelaCholWiek = this.tabCholWiekKP160;
              }
              else if (Number(this.cisnienie) >= 180) {
                this.tabelaCholWiek = this.tabCholWiekKP180;
              }
            }
          }
          else if (Number(this.wiek) >= 60 && Number(this.wiek) < 65) {
            this.tabelaCholCis = this.tabCholCisKP60;
            if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 4 && Number(this.cholesterol) < 5) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 150 && Number(this.cholesterol) < 190)) {
              this.tabelaCisWiek = this.tabCisWiekKP4;
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.tabelaCholWiek = this.tabCholWiekKP120;
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.tabelaCholWiek = this.tabCholWiekKP140;
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.tabelaCholWiek = this.tabCholWiekKP160;
              }
              else if (Number(this.cisnienie) >= 180) {
                this.tabelaCholWiek = this.tabCholWiekKP180;
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 5 && Number(this.cholesterol) < 6) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 190 && Number(this.cholesterol) < 230)) {
              this.tabelaCisWiek = this.tabCisWiekKP5;
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.tabelaCholWiek = this.tabCholWiekKP120;
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.tabelaCholWiek = this.tabCholWiekKP140;
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.tabelaCholWiek = this.tabCholWiekKP160;
              }
              else if (Number(this.cisnienie) >= 180) {
                this.tabelaCholWiek = this.tabCholWiekKP180;
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 6 && Number(this.cholesterol) < 7) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 230 && Number(this.cholesterol) < 270)) {
              this.tabelaCisWiek = this.tabCisWiekKP6;
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.tabelaCholWiek = this.tabCholWiekKP120;
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.tabelaCholWiek = this.tabCholWiekKP140;
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.tabelaCholWiek = this.tabCholWiekKP160;
              }
              else if (Number(this.cisnienie) >= 180) {
                this.tabelaCholWiek = this.tabCholWiekKP180;
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 7 && Number(this.cholesterol) < 8) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 270 && Number(this.cholesterol) < 310)) {
              this.tabelaCisWiek = this.tabCisWiekKP7;
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.tabelaCholWiek = this.tabCholWiekKP120;
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.tabelaCholWiek = this.tabCholWiekKP140;
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.tabelaCholWiek = this.tabCholWiekKP160;
              }
              else if (Number(this.cisnienie) >= 180) {
                this.tabelaCholWiek = this.tabCholWiekKP180;
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 8) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 310)) {
              this.tabelaCisWiek = this.tabCisWiekKP8;
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.tabelaCholWiek = this.tabCholWiekKP120;
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.tabelaCholWiek = this.tabCholWiekKP140;
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.tabelaCholWiek = this.tabCholWiekKP160;
              }
              else if (Number(this.cisnienie) >= 180) {
                this.tabelaCholWiek = this.tabCholWiekKP180;
              }
            }
          }
          else if (Number(this.wiek) >= 65 && Number(this.wiek) < 70) {
            this.tabelaCholCis = this.tabCholCisKP65;
            if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 4 && Number(this.cholesterol) < 5) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 150 && Number(this.cholesterol) < 190)) {
              this.tabelaCisWiek = this.tabCisWiekKP4;
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.tabelaCholWiek = this.tabCholWiekKP120;
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.tabelaCholWiek = this.tabCholWiekKP140;
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.tabelaCholWiek = this.tabCholWiekKP160;
              }
              else if (Number(this.cisnienie) >= 180) {
                this.tabelaCholWiek = this.tabCholWiekKP180;
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 5 && Number(this.cholesterol) < 6) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 190 && Number(this.cholesterol) < 230)) {
              this.tabelaCisWiek = this.tabCisWiekKP5;
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.tabelaCholWiek = this.tabCholWiekKP120;
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.tabelaCholWiek = this.tabCholWiekKP140;
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.tabelaCholWiek = this.tabCholWiekKP160;
              }
              else if (Number(this.cisnienie) >= 180) {
                this.tabelaCholWiek = this.tabCholWiekKP180;
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 6 && Number(this.cholesterol) < 7) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 230 && Number(this.cholesterol) < 270)) {
              this.tabelaCisWiek = this.tabCisWiekKP6;
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.tabelaCholWiek = this.tabCholWiekKP120;
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.tabelaCholWiek = this.tabCholWiekKP140;
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.tabelaCholWiek = this.tabCholWiekKP160;
              }
              else if (Number(this.cisnienie) >= 180) {
                this.tabelaCholWiek = this.tabCholWiekKP180;
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 7 && Number(this.cholesterol) < 8) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 270 && Number(this.cholesterol) < 310)) {
              this.tabelaCisWiek = this.tabCisWiekKP7;
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.tabelaCholWiek = this.tabCholWiekKP120;
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.tabelaCholWiek = this.tabCholWiekKP140;
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.tabelaCholWiek = this.tabCholWiekKP160;
              }
              else if (Number(this.cisnienie) >= 180) {
                this.tabelaCholWiek = this.tabCholWiekKP180;
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 8) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 310)) {
              this.tabelaCisWiek = this.tabCisWiekKP8;
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.tabelaCholWiek = this.tabCholWiekKP120;
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.tabelaCholWiek = this.tabCholWiekKP140;
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.tabelaCholWiek = this.tabCholWiekKP160;
              }
              else if (Number(this.cisnienie) >= 180) {
                this.tabelaCholWiek = this.tabCholWiekKP180;
              }
            }
          }
          else if (Number(this.wiek) >= 70) {
            this.tabelaCholCis = this.tabCholCisKP70;
            if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 4 && Number(this.cholesterol) < 5) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 150 && Number(this.cholesterol) < 190)) {
              this.tabelaCisWiek = this.tabCisWiekKP4;
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.tabelaCholWiek = this.tabCholWiekKP120;
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.tabelaCholWiek = this.tabCholWiekKP140;
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.tabelaCholWiek = this.tabCholWiekKP160;
              }
              else if (Number(this.cisnienie) >= 180) {
                this.tabelaCholWiek = this.tabCholWiekKP180;
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 5 && Number(this.cholesterol) < 6) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 190 && Number(this.cholesterol) < 230)) {
              this.tabelaCisWiek = this.tabCisWiekKP5;
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.tabelaCholWiek = this.tabCholWiekKP120;
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.tabelaCholWiek = this.tabCholWiekKP140;
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.tabelaCholWiek = this.tabCholWiekKP160;
              }
              else if (Number(this.cisnienie) >= 180) {
                this.tabelaCholWiek = this.tabCholWiekKP180;
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 6 && Number(this.cholesterol) < 7) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 230 && Number(this.cholesterol) < 270)) {
              this.tabelaCisWiek = this.tabCisWiekKP6;
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.tabelaCholWiek = this.tabCholWiekKP120;
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.tabelaCholWiek = this.tabCholWiekKP140;
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.tabelaCholWiek = this.tabCholWiekKP160;
              }
              else if (Number(this.cisnienie) >= 180) {
                this.tabelaCholWiek = this.tabCholWiekKP180;
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 7 && Number(this.cholesterol) < 8) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 270 && Number(this.cholesterol) < 310)) {
              this.tabelaCisWiek = this.tabCisWiekKP7;
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.tabelaCholWiek = this.tabCholWiekKP120;
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.tabelaCholWiek = this.tabCholWiekKP140;
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.tabelaCholWiek = this.tabCholWiekKP160;
              }
              else if (Number(this.cisnienie) >= 180) {
                this.tabelaCholWiek = this.tabCholWiekKP180;
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 8) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 310)) {
              this.tabelaCisWiek = this.tabCisWiekKP8;
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.tabelaCholWiek = this.tabCholWiekKP120;
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.tabelaCholWiek = this.tabCholWiekKP140;
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.tabelaCholWiek = this.tabCholWiekKP160;
              }
              else if (Number(this.cisnienie) >= 180) {
                this.tabelaCholWiek = this.tabCholWiekKP180;
              }
            }
          }
        }
        else {
          if (Number(this.wiek) >= 40 && Number(this.wiek) < 50) {
            this.tabelaCholCis = this.tabCholCisKnP40;
            if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 4 && Number(this.cholesterol) < 5) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 150 && Number(this.cholesterol) < 190)) {
              this.tabelaCisWiek = this.tabCisWiekKnP4;
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.tabelaCholWiek = this.tabCholWiekKnP120;
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.tabelaCholWiek = this.tabCholWiekKnP140;
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.tabelaCholWiek = this.tabCholWiekKnP160;
              }
              else if (Number(this.cisnienie) >= 180) {
                this.tabelaCholWiek = this.tabCholWiekKnP180;
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 5 && Number(this.cholesterol) < 6) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 190 && Number(this.cholesterol) < 230)) {
              this.tabelaCisWiek = this.tabCisWiekKnP5;
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.tabelaCholWiek = this.tabCholWiekKnP120;
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.tabelaCholWiek = this.tabCholWiekKnP140;
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.tabelaCholWiek = this.tabCholWiekKnP160;
              }
              else if (Number(this.cisnienie) >= 180) {
                this.tabelaCholWiek = this.tabCholWiekKnP180;
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 6 && Number(this.cholesterol) < 7) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 230 && Number(this.cholesterol) < 270)) {
              this.tabelaCisWiek = this.tabCisWiekKnP6;
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.tabelaCholWiek = this.tabCholWiekKnP120;
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.tabelaCholWiek = this.tabCholWiekKnP140;
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.tabelaCholWiek = this.tabCholWiekKnP160;
              }
              else if (Number(this.cisnienie) >= 180) {
                this.tabelaCholWiek = this.tabCholWiekKnP180;
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 7 && Number(this.cholesterol) < 8) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 270 && Number(this.cholesterol) < 310)) {
              this.tabelaCisWiek = this.tabCisWiekKnP7;
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.tabelaCholWiek = this.tabCholWiekKnP120;
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.tabelaCholWiek = this.tabCholWiekKnP140;
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.tabelaCholWiek = this.tabCholWiekKnP160;
              }
              else if (Number(this.cisnienie) >= 180) {
                this.tabelaCholWiek = this.tabCholWiekKnP180;
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 8) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 310)) {
              this.tabelaCisWiek = this.tabCisWiekKnP8;
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.tabelaCholWiek = this.tabCholWiekKnP120;
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.tabelaCholWiek = this.tabCholWiekKnP140;
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.tabelaCholWiek = this.tabCholWiekKnP160;
              }
              else if (Number(this.cisnienie) >= 180) {
                this.tabelaCholWiek = this.tabCholWiekKnP180;
              }
            }
          }
          else if (Number(this.wiek) >= 50 && Number(this.wiek) < 55) {
            this.tabelaCholCis = this.tabCholCisKnP50;
            if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 4 && Number(this.cholesterol) < 5) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 150 && Number(this.cholesterol) < 190)) {
              this.tabelaCisWiek = this.tabCisWiekKnP4;
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.tabelaCholWiek = this.tabCholWiekKnP120;
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.tabelaCholWiek = this.tabCholWiekKnP140;
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.tabelaCholWiek = this.tabCholWiekKnP160;
              }
              else if (Number(this.cisnienie) >= 180) {
                this.tabelaCholWiek = this.tabCholWiekKnP180;
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 5 && Number(this.cholesterol) < 6) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 190 && Number(this.cholesterol) < 230)) {
              this.tabelaCisWiek = this.tabCisWiekKnP5;
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.tabelaCholWiek = this.tabCholWiekKnP120;
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.tabelaCholWiek = this.tabCholWiekKnP140;
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.tabelaCholWiek = this.tabCholWiekKnP160;
              }
              else if (Number(this.cisnienie) >= 180) {
                this.tabelaCholWiek = this.tabCholWiekKnP180;
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 6 && Number(this.cholesterol) < 7) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 230 && Number(this.cholesterol) < 270)) {
              this.tabelaCisWiek = this.tabCisWiekKnP6;
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.tabelaCholWiek = this.tabCholWiekKnP120;
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.tabelaCholWiek = this.tabCholWiekKnP140;
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.tabelaCholWiek = this.tabCholWiekKnP160;
              }
              else if (Number(this.cisnienie) >= 180) {
                this.tabelaCholWiek = this.tabCholWiekKnP180;
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 7 && Number(this.cholesterol) < 8) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 270 && Number(this.cholesterol) < 310)) {
              this.tabelaCisWiek = this.tabCisWiekKnP7;
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.tabelaCholWiek = this.tabCholWiekKnP120;
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.tabelaCholWiek = this.tabCholWiekKnP140;
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.tabelaCholWiek = this.tabCholWiekKnP160;
              }
              else if (Number(this.cisnienie) >= 180) {
                this.tabelaCholWiek = this.tabCholWiekKnP180;
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 8) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 310)) {
              this.tabelaCisWiek = this.tabCisWiekKnP8;
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.tabelaCholWiek = this.tabCholWiekKnP120;
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.tabelaCholWiek = this.tabCholWiekKnP140;
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.tabelaCholWiek = this.tabCholWiekKnP160;
              }
              else if (Number(this.cisnienie) >= 180) {
                this.tabelaCholWiek = this.tabCholWiekKnP180;
              }
            }
          }
          else if (Number(this.wiek) >= 55 && Number(this.wiek) < 60) {
            this.tabelaCholCis = this.tabCholCisKnP55;
            if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 4 && Number(this.cholesterol) < 5) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 150 && Number(this.cholesterol) < 190)) {
              this.tabelaCisWiek = this.tabCisWiekKnP4;
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.tabelaCholWiek = this.tabCholWiekKnP120;
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.tabelaCholWiek = this.tabCholWiekKnP140;
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.tabelaCholWiek = this.tabCholWiekKnP160;
              }
              else if (Number(this.cisnienie) >= 180) {
                this.tabelaCholWiek = this.tabCholWiekKnP180;
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 5 && Number(this.cholesterol) < 6) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 190 && Number(this.cholesterol) < 230)) {
              this.tabelaCisWiek = this.tabCisWiekKnP5;
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.tabelaCholWiek = this.tabCholWiekKnP120;
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.tabelaCholWiek = this.tabCholWiekKnP140;
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.tabelaCholWiek = this.tabCholWiekKnP160;
              }
              else if (Number(this.cisnienie) >= 180) {
                this.tabelaCholWiek = this.tabCholWiekKnP180;
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 6 && Number(this.cholesterol) < 7) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 230 && Number(this.cholesterol) < 270)) {
              this.tabelaCisWiek = this.tabCisWiekKnP6;
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.tabelaCholWiek = this.tabCholWiekKnP120;
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.tabelaCholWiek = this.tabCholWiekKnP140;
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.tabelaCholWiek = this.tabCholWiekKnP160;
              }
              else if (Number(this.cisnienie) >= 180) {
                this.tabelaCholWiek = this.tabCholWiekKnP180;
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 7 && Number(this.cholesterol) < 8) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 270 && Number(this.cholesterol) < 310)) {
              this.tabelaCisWiek = this.tabCisWiekKnP7;
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.tabelaCholWiek = this.tabCholWiekKnP120;
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.tabelaCholWiek = this.tabCholWiekKnP140;
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.tabelaCholWiek = this.tabCholWiekKnP160;
              }
              else if (Number(this.cisnienie) >= 180) {
                this.tabelaCholWiek = this.tabCholWiekKnP180;
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 8) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 310)) {
              this.tabelaCisWiek = this.tabCisWiekKnP8;
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.tabelaCholWiek = this.tabCholWiekKnP120;
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.tabelaCholWiek = this.tabCholWiekKnP140;
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.tabelaCholWiek = this.tabCholWiekKnP160;
              }
              else if (Number(this.cisnienie) >= 180) {
                this.tabelaCholWiek = this.tabCholWiekKnP180;
              }
            }
          }
          else if (Number(this.wiek) >= 60 && Number(this.wiek) < 65) {
            this.tabelaCholCis = this.tabCholCisKnP60;
            if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 4 && Number(this.cholesterol) < 5) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 150 && Number(this.cholesterol) < 190)) {
              this.tabelaCisWiek = this.tabCisWiekKnP4;
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.tabelaCholWiek = this.tabCholWiekKnP120;
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.tabelaCholWiek = this.tabCholWiekKnP140;
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.tabelaCholWiek = this.tabCholWiekKnP160;
              }
              else if (Number(this.cisnienie) >= 180) {
                this.tabelaCholWiek = this.tabCholWiekKnP180;
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 5 && Number(this.cholesterol) < 6) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 190 && Number(this.cholesterol) < 230)) {
              this.tabelaCisWiek = this.tabCisWiekKnP5;
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.tabelaCholWiek = this.tabCholWiekKnP120;
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.tabelaCholWiek = this.tabCholWiekKnP140;
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.tabelaCholWiek = this.tabCholWiekKnP160;
              }
              else if (Number(this.cisnienie) >= 180) {
                this.tabelaCholWiek = this.tabCholWiekKnP180;
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 6 && Number(this.cholesterol) < 7) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 230 && Number(this.cholesterol) < 270)) {
              this.tabelaCisWiek = this.tabCisWiekKnP6;
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.tabelaCholWiek = this.tabCholWiekKnP120;
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.tabelaCholWiek = this.tabCholWiekKnP140;
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.tabelaCholWiek = this.tabCholWiekKnP160;
              }
              else if (Number(this.cisnienie) >= 180) {
                this.tabelaCholWiek = this.tabCholWiekKnP180;
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 7 && Number(this.cholesterol) < 8) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 270 && Number(this.cholesterol) < 310)) {
              this.tabelaCisWiek = this.tabCisWiekKnP7;
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.tabelaCholWiek = this.tabCholWiekKnP120;
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.tabelaCholWiek = this.tabCholWiekKnP140;
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.tabelaCholWiek = this.tabCholWiekKnP160;
              }
              else if (Number(this.cisnienie) >= 180) {
                this.tabelaCholWiek = this.tabCholWiekKnP180;
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 8) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 310)) {
              this.tabelaCisWiek = this.tabCisWiekKnP8;
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.tabelaCholWiek = this.tabCholWiekKnP120;
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.tabelaCholWiek = this.tabCholWiekKnP140;
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.tabelaCholWiek = this.tabCholWiekKnP160;
              }
              else if (Number(this.cisnienie) >= 180) {
                this.tabelaCholWiek = this.tabCholWiekKnP180;
              }
            }
          }
          else if (Number(this.wiek) >= 65 && Number(this.wiek) < 70) {
            this.tabelaCholCis = this.tabCholCisKnP65;
            if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 4 && Number(this.cholesterol) < 5) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 150 && Number(this.cholesterol) < 190)) {
              this.tabelaCisWiek = this.tabCisWiekKnP4;
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.tabelaCholWiek = this.tabCholWiekKnP120;
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.tabelaCholWiek = this.tabCholWiekKnP140;
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.tabelaCholWiek = this.tabCholWiekKnP160;
              }
              else if (Number(this.cisnienie) >= 180) {
                this.tabelaCholWiek = this.tabCholWiekKnP180;
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 5 && Number(this.cholesterol) < 6) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 190 && Number(this.cholesterol) < 230)) {
              this.tabelaCisWiek = this.tabCisWiekKnP5;
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.tabelaCholWiek = this.tabCholWiekKnP120;
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.tabelaCholWiek = this.tabCholWiekKnP140;
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.tabelaCholWiek = this.tabCholWiekKnP160;
              }
              else if (Number(this.cisnienie) >= 180) {
                this.tabelaCholWiek = this.tabCholWiekKnP180;
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 6 && Number(this.cholesterol) < 7) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 230 && Number(this.cholesterol) < 270)) {
              this.tabelaCisWiek = this.tabCisWiekKnP6;
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.tabelaCholWiek = this.tabCholWiekKnP120;
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.tabelaCholWiek = this.tabCholWiekKnP140;
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.tabelaCholWiek = this.tabCholWiekKnP160;
              }
              else if (Number(this.cisnienie) >= 180) {
                this.tabelaCholWiek = this.tabCholWiekKnP180;
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 7 && Number(this.cholesterol) < 8) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 270 && Number(this.cholesterol) < 310)) {
              this.tabelaCisWiek = this.tabCisWiekKnP7;
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.tabelaCholWiek = this.tabCholWiekKnP120;
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.tabelaCholWiek = this.tabCholWiekKnP140;
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.tabelaCholWiek = this.tabCholWiekKnP160;
              }
              else if (Number(this.cisnienie) >= 180) {
                this.tabelaCholWiek = this.tabCholWiekKnP180;
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 8) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 310)) {
              this.tabelaCisWiek = this.tabCisWiekKnP8;
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.tabelaCholWiek = this.tabCholWiekKnP120;
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.tabelaCholWiek = this.tabCholWiekKnP140;
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.tabelaCholWiek = this.tabCholWiekKnP160;
              }
              else if (Number(this.cisnienie) >= 180) {
                this.tabelaCholWiek = this.tabCholWiekKnP180;
              }
            }
          }
          else if (Number(this.wiek) >= 70) {
            this.tabelaCholCis = this.tabCholCisKnP70;
            if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 4 && Number(this.cholesterol) < 5) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 150 && Number(this.cholesterol) < 190)) {
              this.tabelaCisWiek = this.tabCisWiekKnP4;
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.tabelaCholWiek = this.tabCholWiekKnP120;
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.tabelaCholWiek = this.tabCholWiekKnP140;
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.tabelaCholWiek = this.tabCholWiekKnP160;
              }
              else if (Number(this.cisnienie) >= 180) {
                this.tabelaCholWiek = this.tabCholWiekKnP180;
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 5 && Number(this.cholesterol) < 6) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 190 && Number(this.cholesterol) < 230)) {
              this.tabelaCisWiek = this.tabCisWiekKnP5;
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.tabelaCholWiek = this.tabCholWiekKnP120;
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.tabelaCholWiek = this.tabCholWiekKnP140;
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.tabelaCholWiek = this.tabCholWiekKnP160;
              }
              else if (Number(this.cisnienie) >= 180) {
                this.tabelaCholWiek = this.tabCholWiekKnP180;
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 6 && Number(this.cholesterol) < 7) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 230 && Number(this.cholesterol) < 270)) {
              this.tabelaCisWiek = this.tabCisWiekKnP6;
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.tabelaCholWiek = this.tabCholWiekKnP120;
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.tabelaCholWiek = this.tabCholWiekKnP140;
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.tabelaCholWiek = this.tabCholWiekKnP160;
              }
              else if (Number(this.cisnienie) >= 180) {
                this.tabelaCholWiek = this.tabCholWiekKnP180;
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 7 && Number(this.cholesterol) < 8) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 270 && Number(this.cholesterol) < 310)) {
              this.tabelaCisWiek = this.tabCisWiekKnP7;
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.tabelaCholWiek = this.tabCholWiekKnP120;
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.tabelaCholWiek = this.tabCholWiekKnP140;
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.tabelaCholWiek = this.tabCholWiekKnP160;
              }
              else if (Number(this.cisnienie) >= 180) {
                this.tabelaCholWiek = this.tabCholWiekKnP180;
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 8) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 310)) {
              this.tabelaCisWiek = this.tabCisWiekKnP8;
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.tabelaCholWiek = this.tabCholWiekKnP120;
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.tabelaCholWiek = this.tabCholWiekKnP140;
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.tabelaCholWiek = this.tabCholWiekKnP160;
              }
              else if (Number(this.cisnienie) >= 180) {
                this.tabelaCholWiek = this.tabCholWiekKnP180;
              }
            }
          }
        }
      }
      else {
        if (this.papierosy == 'palacy') {
          if (Number(this.wiek) >= 40 && Number(this.wiek) < 50) {
            this.tabelaCholCis = this.tabCholCisMP40;
            if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 4 && Number(this.cholesterol) < 5) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 150 && Number(this.cholesterol) < 190)) {
              this.tabelaCisWiek = this.tabCisWiekMP4;
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.tabelaCholWiek = this.tabCholWiekMP120;
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.tabelaCholWiek = this.tabCholWiekMP140;
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.tabelaCholWiek = this.tabCholWiekMP160;
              }
              else if (Number(this.cisnienie) >= 180) {
                this.tabelaCholWiek = this.tabCholWiekMP180;
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 5 && Number(this.cholesterol) < 6) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 190 && Number(this.cholesterol) < 230)) {
              this.tabelaCisWiek = this.tabCisWiekMP5;
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.tabelaCholWiek = this.tabCholWiekMP120;
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.tabelaCholWiek = this.tabCholWiekMP140;
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.tabelaCholWiek = this.tabCholWiekMP160;
              }
              else if (Number(this.cisnienie) >= 180) {
                this.tabelaCholWiek = this.tabCholWiekMP180;
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 6 && Number(this.cholesterol) < 7) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 230 && Number(this.cholesterol) < 270)) {
              this.tabelaCisWiek = this.tabCisWiekMP6;
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.tabelaCholWiek = this.tabCholWiekMP120;
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.tabelaCholWiek = this.tabCholWiekMP140;
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.tabelaCholWiek = this.tabCholWiekMP160;
              }
              else if (Number(this.cisnienie) >= 180) {
                this.tabelaCholWiek = this.tabCholWiekMP180;
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 7 && Number(this.cholesterol) < 8) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 270 && Number(this.cholesterol) < 310)) {
              this.tabelaCisWiek = this.tabCisWiekMP7;
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.tabelaCholWiek = this.tabCholWiekMP120;
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.tabelaCholWiek = this.tabCholWiekMP140;
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.tabelaCholWiek = this.tabCholWiekMP160;
              }
              else if (Number(this.cisnienie) >= 180) {
                this.tabelaCholWiek = this.tabCholWiekMP180;
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 8) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 310)) {
              this.tabelaCisWiek = this.tabCisWiekMP8;
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.tabelaCholWiek = this.tabCholWiekMP120;
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.tabelaCholWiek = this.tabCholWiekMP140;
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.tabelaCholWiek = this.tabCholWiekMP160;
              }
              else if (Number(this.cisnienie) >= 180) {
                this.tabelaCholWiek = this.tabCholWiekMP180;
              }
            }
          }
          else if (Number(this.wiek) >= 50 && Number(this.wiek) < 55) {
            this.tabelaCholCis = this.tabCholCisMP50;
            if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 4 && Number(this.cholesterol) < 5) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 150 && Number(this.cholesterol) < 190)) {
              this.tabelaCisWiek = this.tabCisWiekMP4;
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.tabelaCholWiek = this.tabCholWiekMP120;
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.tabelaCholWiek = this.tabCholWiekMP140;
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.tabelaCholWiek = this.tabCholWiekMP160;
              }
              else if (Number(this.cisnienie) >= 180) {
                this.tabelaCholWiek = this.tabCholWiekMP180;
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 5 && Number(this.cholesterol) < 6) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 190 && Number(this.cholesterol) < 230)) {
              this.tabelaCisWiek = this.tabCisWiekMP5;
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.tabelaCholWiek = this.tabCholWiekMP120;
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.tabelaCholWiek = this.tabCholWiekMP140;
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.tabelaCholWiek = this.tabCholWiekMP160;
              }
              else if (Number(this.cisnienie) >= 180) {
                this.tabelaCholWiek = this.tabCholWiekMP180;
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 6 && Number(this.cholesterol) < 7) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 230 && Number(this.cholesterol) < 270)) {
              this.tabelaCisWiek = this.tabCisWiekMP6;
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.tabelaCholWiek = this.tabCholWiekMP120;
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.tabelaCholWiek = this.tabCholWiekMP140;
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.tabelaCholWiek = this.tabCholWiekMP160;
              }
              else if (Number(this.cisnienie) >= 180) {
                this.tabelaCholWiek = this.tabCholWiekMP180;
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 7 && Number(this.cholesterol) < 8) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 270 && Number(this.cholesterol) < 310)) {
              this.tabelaCisWiek = this.tabCisWiekMP7;
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.tabelaCholWiek = this.tabCholWiekMP120;
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.tabelaCholWiek = this.tabCholWiekMP140;
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.tabelaCholWiek = this.tabCholWiekMP160;
              }
              else if (Number(this.cisnienie) >= 180) {
                this.tabelaCholWiek = this.tabCholWiekMP180;
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 8) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 310)) {
              this.tabelaCisWiek = this.tabCisWiekMP8;
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.tabelaCholWiek = this.tabCholWiekMP120;
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.tabelaCholWiek = this.tabCholWiekMP140;
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.tabelaCholWiek = this.tabCholWiekMP160;
              }
              else if (Number(this.cisnienie) >= 180) {
                this.tabelaCholWiek = this.tabCholWiekMP180;
              }
            }
          }
          else if (Number(this.wiek) >= 55 && Number(this.wiek) < 60) {
            this.tabelaCholCis = this.tabCholCisMP55;
            if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 4 && Number(this.cholesterol) < 5) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 150 && Number(this.cholesterol) < 190)) {
              this.tabelaCisWiek = this.tabCisWiekMP4;
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.tabelaCholWiek = this.tabCholWiekMP120;
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.tabelaCholWiek = this.tabCholWiekMP140;
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.tabelaCholWiek = this.tabCholWiekMP160;
              }
              else if (Number(this.cisnienie) >= 180) {
                this.tabelaCholWiek = this.tabCholWiekMP180;
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 5 && Number(this.cholesterol) < 6) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 190 && Number(this.cholesterol) < 230)) {
              this.tabelaCisWiek = this.tabCisWiekMP5;
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.tabelaCholWiek = this.tabCholWiekMP120;
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.tabelaCholWiek = this.tabCholWiekMP140;
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.tabelaCholWiek = this.tabCholWiekMP160;
              }
              else if (Number(this.cisnienie) >= 180) {
                this.tabelaCholWiek = this.tabCholWiekMP180;
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 6 && Number(this.cholesterol) < 7) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 230 && Number(this.cholesterol) < 270)) {
              this.tabelaCisWiek = this.tabCisWiekMP6;
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.tabelaCholWiek = this.tabCholWiekMP120;
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.tabelaCholWiek = this.tabCholWiekMP140;
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.tabelaCholWiek = this.tabCholWiekMP160;
              }
              else if (Number(this.cisnienie) >= 180) {
                this.tabelaCholWiek = this.tabCholWiekMP180;
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 7 && Number(this.cholesterol) < 8) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 270 && Number(this.cholesterol) < 310)) {
              this.tabelaCisWiek = this.tabCisWiekMP7;
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.tabelaCholWiek = this.tabCholWiekMP120;
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.tabelaCholWiek = this.tabCholWiekMP140;
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.tabelaCholWiek = this.tabCholWiekMP160;
              }
              else if (Number(this.cisnienie) >= 180) {
                this.tabelaCholWiek = this.tabCholWiekMP180;
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 8) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 310)) {
              this.tabelaCisWiek = this.tabCisWiekMP8;
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.tabelaCholWiek = this.tabCholWiekMP120;
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.tabelaCholWiek = this.tabCholWiekMP140;
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.tabelaCholWiek = this.tabCholWiekMP160;
              }
              else if (Number(this.cisnienie) >= 180) {
                this.tabelaCholWiek = this.tabCholWiekMP180;
              }
            }
          }
          else if (Number(this.wiek) >= 60 && Number(this.wiek) < 65) {
            this.tabelaCholCis = this.tabCholCisMP60;
            if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 4 && Number(this.cholesterol) < 5) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 150 && Number(this.cholesterol) < 190)) {
              this.tabelaCisWiek = this.tabCisWiekMP4;
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.tabelaCholWiek = this.tabCholWiekMP120;
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.tabelaCholWiek = this.tabCholWiekMP140;
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.tabelaCholWiek = this.tabCholWiekMP160;
              }
              else if (Number(this.cisnienie) >= 180) {
                this.tabelaCholWiek = this.tabCholWiekMP180;
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 5 && Number(this.cholesterol) < 6) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 190 && Number(this.cholesterol) < 230)) {
              this.tabelaCisWiek = this.tabCisWiekMP5;
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.tabelaCholWiek = this.tabCholWiekMP120;
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.tabelaCholWiek = this.tabCholWiekMP140;
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.tabelaCholWiek = this.tabCholWiekMP160;
              }
              else if (Number(this.cisnienie) >= 180) {
                this.tabelaCholWiek = this.tabCholWiekMP180;
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 6 && Number(this.cholesterol) < 7) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 230 && Number(this.cholesterol) < 270)) {
              this.tabelaCisWiek = this.tabCisWiekMP6;
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.tabelaCholWiek = this.tabCholWiekMP120;
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.tabelaCholWiek = this.tabCholWiekMP140;
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.tabelaCholWiek = this.tabCholWiekMP160;
              }
              else if (Number(this.cisnienie) >= 180) {
                this.tabelaCholWiek = this.tabCholWiekMP180;
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 7 && Number(this.cholesterol) < 8) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 270 && Number(this.cholesterol) < 310)) {
              this.tabelaCisWiek = this.tabCisWiekMP7;
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.tabelaCholWiek = this.tabCholWiekMP120;
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.tabelaCholWiek = this.tabCholWiekMP140;
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.tabelaCholWiek = this.tabCholWiekMP160;
              }
              else if (Number(this.cisnienie) >= 180) {
                this.tabelaCholWiek = this.tabCholWiekMP180;
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 8) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 310)) {
              this.tabelaCisWiek = this.tabCisWiekMP8;
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.tabelaCholWiek = this.tabCholWiekMP120;
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.tabelaCholWiek = this.tabCholWiekMP140;
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.tabelaCholWiek = this.tabCholWiekMP160;
              }
              else if (Number(this.cisnienie) >= 180) {
                this.tabelaCholWiek = this.tabCholWiekMP180;
              }
            }
          }
          else if (Number(this.wiek) >= 65 && Number(this.wiek) < 70) {
            this.tabelaCholCis = this.tabCholCisMP65
            if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 4 && Number(this.cholesterol) < 5) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 150 && Number(this.cholesterol) < 190)) {
              this.tabelaCisWiek = this.tabCisWiekMP4;
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.tabelaCholWiek = this.tabCholWiekMP120;
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.tabelaCholWiek = this.tabCholWiekMP140;
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.tabelaCholWiek = this.tabCholWiekMP160;
              }
              else if (Number(this.cisnienie) >= 180) {
                this.tabelaCholWiek = this.tabCholWiekMP180;
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 5 && Number(this.cholesterol) < 6) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 190 && Number(this.cholesterol) < 230)) {
              this.tabelaCisWiek = this.tabCisWiekMP5;
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.tabelaCholWiek = this.tabCholWiekMP120;
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.tabelaCholWiek = this.tabCholWiekMP140;
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.tabelaCholWiek = this.tabCholWiekMP160;
              }
              else if (Number(this.cisnienie) >= 180) {
                this.tabelaCholWiek = this.tabCholWiekMP180;
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 6 && Number(this.cholesterol) < 7) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 230 && Number(this.cholesterol) < 270)) {
              this.tabelaCisWiek = this.tabCisWiekMP6;
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.tabelaCholWiek = this.tabCholWiekMP120;
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.tabelaCholWiek = this.tabCholWiekMP140;
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.tabelaCholWiek = this.tabCholWiekMP160;
              }
              else if (Number(this.cisnienie) >= 180) {
                this.tabelaCholWiek = this.tabCholWiekMP180;
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 7 && Number(this.cholesterol) < 8) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 270 && Number(this.cholesterol) < 310)) {
              this.tabelaCisWiek = this.tabCisWiekMP7;
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.tabelaCholWiek = this.tabCholWiekMP120;
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.tabelaCholWiek = this.tabCholWiekMP140;
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.tabelaCholWiek = this.tabCholWiekMP160;
              }
              else if (Number(this.cisnienie) >= 180) {
                this.tabelaCholWiek = this.tabCholWiekMP180;
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 8) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 310)) {
              this.tabelaCisWiek = this.tabCisWiekMP8;
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.tabelaCholWiek = this.tabCholWiekMP120;
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.tabelaCholWiek = this.tabCholWiekMP140;
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.tabelaCholWiek = this.tabCholWiekMP160;
              }
              else if (Number(this.cisnienie) >= 180) {
                this.tabelaCholWiek = this.tabCholWiekMP180;
              }
            }
          }
          else if (Number(this.wiek) >= 70) {
            this.tabelaCholCis = this.tabCholCisMP70;
            if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 4 && Number(this.cholesterol) < 5) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 150 && Number(this.cholesterol) < 190)) {
              this.tabelaCisWiek = this.tabCisWiekMP4;
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.tabelaCholWiek = this.tabCholWiekMP120;
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.tabelaCholWiek = this.tabCholWiekMP140;
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.tabelaCholWiek = this.tabCholWiekMP160;
              }
              else if (Number(this.cisnienie) >= 180) {
                this.tabelaCholWiek = this.tabCholWiekMP180;
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 5 && Number(this.cholesterol) < 6) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 190 && Number(this.cholesterol) < 230)) {
              this.tabelaCisWiek = this.tabCisWiekMP5;
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.tabelaCholWiek = this.tabCholWiekMP120;
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.tabelaCholWiek = this.tabCholWiekMP140;
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.tabelaCholWiek = this.tabCholWiekMP160;
              }
              else if (Number(this.cisnienie) >= 180) {
                this.tabelaCholWiek = this.tabCholWiekMP180;
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 6 && Number(this.cholesterol) < 7) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 230 && Number(this.cholesterol) < 270)) {
              this.tabelaCisWiek = this.tabCisWiekMP6;
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.tabelaCholWiek = this.tabCholWiekMP120;
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.tabelaCholWiek = this.tabCholWiekMP140;
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.tabelaCholWiek = this.tabCholWiekMP160;
              }
              else if (Number(this.cisnienie) >= 180) {
                this.tabelaCholWiek = this.tabCholWiekMP180;
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 7 && Number(this.cholesterol) < 8) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 270 && Number(this.cholesterol) < 310)) {
              this.tabelaCisWiek = this.tabCisWiekMP7;
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.tabelaCholWiek = this.tabCholWiekMP120;
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.tabelaCholWiek = this.tabCholWiekMP140;
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.tabelaCholWiek = this.tabCholWiekMP160;
              }
              else if (Number(this.cisnienie) >= 180) {
                this.tabelaCholWiek = this.tabCholWiekMP180;
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 8) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 310)) {
              this.tabelaCisWiek = this.tabCisWiekMP8;
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.tabelaCholWiek = this.tabCholWiekMP120;
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.tabelaCholWiek = this.tabCholWiekMP140;
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.tabelaCholWiek = this.tabCholWiekMP160;
              }
              else if (Number(this.cisnienie) >= 180) {
                this.tabelaCholWiek = this.tabCholWiekMP180;
              }
            }
          }
        }
        else {
          if (Number(this.wiek) >= 40 && Number(this.wiek) < 50) {
            this.tabelaCholCis = this.tabCholCisMnP40;
            if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 4 && Number(this.cholesterol) < 5) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 150 && Number(this.cholesterol) < 190)) {
              this.tabelaCisWiek = this.tabCisWiekMnP4;
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.tabelaCholWiek = this.tabCholWiekMnP120;
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.tabelaCholWiek = this.tabCholWiekMnP140;
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.tabelaCholWiek = this.tabCholWiekMnP160;
              }
              else if (Number(this.cisnienie) >= 180) {
                this.tabelaCholWiek = this.tabCholWiekMnP180;
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 5 && Number(this.cholesterol) < 6) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 190 && Number(this.cholesterol) < 230)) {
              this.tabelaCisWiek = this.tabCisWiekMnP5;
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.tabelaCholWiek = this.tabCholWiekMnP120;
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.tabelaCholWiek = this.tabCholWiekMnP140;
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.tabelaCholWiek = this.tabCholWiekMnP160;
              }
              else if (Number(this.cisnienie) >= 180) {
                this.tabelaCholWiek = this.tabCholWiekMnP180;
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 6 && Number(this.cholesterol) < 7) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 230 && Number(this.cholesterol) < 270)) {
              this.tabelaCisWiek = this.tabCisWiekMnP6;
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.tabelaCholWiek = this.tabCholWiekMnP120;
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.tabelaCholWiek = this.tabCholWiekMnP140;
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.tabelaCholWiek = this.tabCholWiekMnP160;
              }
              else if (Number(this.cisnienie) >= 180) {
                this.tabelaCholWiek = this.tabCholWiekMnP180;
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 7 && Number(this.cholesterol) < 8) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 270 && Number(this.cholesterol) < 310)) {
              this.tabelaCisWiek = this.tabCisWiekMnP7;
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.tabelaCholWiek = this.tabCholWiekMnP120;
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.tabelaCholWiek = this.tabCholWiekMnP140;
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.tabelaCholWiek = this.tabCholWiekMnP160;
              }
              else if (Number(this.cisnienie) >= 180) {
                this.tabelaCholWiek = this.tabCholWiekMnP180;
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 8) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 310)) {
              this.tabelaCisWiek = this.tabCisWiekMnP8;
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.tabelaCholWiek = this.tabCholWiekMnP120;
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.tabelaCholWiek = this.tabCholWiekMnP140;
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.tabelaCholWiek = this.tabCholWiekMnP160;
              }
              else if (Number(this.cisnienie) >= 180) {
                this.tabelaCholWiek = this.tabCholWiekMnP180;
              }
            }
          }
          else if (Number(this.wiek) >= 50 && Number(this.wiek) < 55) {
            this.tabelaCholCis = this.tabCholCisMnP50;
            if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 4 && Number(this.cholesterol) < 5) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 150 && Number(this.cholesterol) < 190)) {
             this.tabelaCisWiek = this.tabCisWiekMnP4;
             if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.tabelaCholWiek = this.tabCholWiekMnP120;
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.tabelaCholWiek = this.tabCholWiekMnP140;
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.tabelaCholWiek = this.tabCholWiekMnP160;
              }
              else if (Number(this.cisnienie) >= 180) {
                this.tabelaCholWiek = this.tabCholWiekMnP180;
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 5 && Number(this.cholesterol) < 6) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 190 && Number(this.cholesterol) < 230)) {
              this.tabelaCisWiek = this.tabCisWiekMnP5;
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.tabelaCholWiek = this.tabCholWiekMnP120;
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.tabelaCholWiek = this.tabCholWiekMnP140;
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.tabelaCholWiek = this.tabCholWiekMnP160;
              }
              else if (Number(this.cisnienie) >= 180) {
                this.tabelaCholWiek = this.tabCholWiekMnP180;
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 6 && Number(this.cholesterol) < 7) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 230 && Number(this.cholesterol) < 270)) {
              this.tabelaCisWiek = this.tabCisWiekMnP6;
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.tabelaCholWiek = this.tabCholWiekMnP120;
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.tabelaCholWiek = this.tabCholWiekMnP140;
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.tabelaCholWiek = this.tabCholWiekMnP160;
              }
              else if (Number(this.cisnienie) >= 180) {
                this.tabelaCholWiek = this.tabCholWiekMnP180;
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 7 && Number(this.cholesterol) < 8) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 270 && Number(this.cholesterol) < 310)) {
              this.tabelaCisWiek = this.tabCisWiekMnP7;
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.tabelaCholWiek = this.tabCholWiekMnP120;
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.tabelaCholWiek = this.tabCholWiekMnP140;
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.tabelaCholWiek = this.tabCholWiekMnP160;
              }
              else if (Number(this.cisnienie) >= 180) {
                this.tabelaCholWiek = this.tabCholWiekMnP180;
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 8) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 310)) {
              this.tabelaCisWiek = this.tabCisWiekMnP8;
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.tabelaCholWiek = this.tabCholWiekMnP120;
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.tabelaCholWiek = this.tabCholWiekMnP140;
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.tabelaCholWiek = this.tabCholWiekMnP160;
              }
              else if (Number(this.cisnienie) >= 180) {
                this.tabelaCholWiek = this.tabCholWiekMnP180;
              }
            }
          }
          else if (Number(this.wiek) >= 55 && Number(this.wiek) < 60) {
            this.tabelaCholCis = this.tabCholCisMnP55;
            if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 4 && Number(this.cholesterol) < 5) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 150 && Number(this.cholesterol) < 190)) {
              this.tabelaCisWiek = this.tabCisWiekMnP4;
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.tabelaCholWiek = this.tabCholWiekMnP120;
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.tabelaCholWiek = this.tabCholWiekMnP140;
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.tabelaCholWiek = this.tabCholWiekMnP160;
              }
              else if (Number(this.cisnienie) >= 180) {
                this.tabelaCholWiek = this.tabCholWiekMnP180;
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 5 && Number(this.cholesterol) < 6) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 190 && Number(this.cholesterol) < 230)) {
              this.tabelaCisWiek = this.tabCisWiekMnP5;
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.tabelaCholWiek = this.tabCholWiekMnP120;
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.tabelaCholWiek = this.tabCholWiekMnP140;
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.tabelaCholWiek = this.tabCholWiekMnP160;
              }
              else if (Number(this.cisnienie) >= 180) {
                this.tabelaCholWiek = this.tabCholWiekMnP180;
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 6 && Number(this.cholesterol) < 7) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 230 && Number(this.cholesterol) < 270)) {
              this.tabelaCisWiek = this.tabCisWiekMnP6;
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.tabelaCholWiek = this.tabCholWiekMnP120;
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.tabelaCholWiek = this.tabCholWiekMnP140;
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.tabelaCholWiek = this.tabCholWiekMnP160;
              }
              else if (Number(this.cisnienie) >= 180) {
                this.tabelaCholWiek = this.tabCholWiekMnP180;
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 7 && Number(this.cholesterol) < 8) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 270 && Number(this.cholesterol) < 310)) {
              this.tabelaCisWiek = this.tabCisWiekMnP7;
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.tabelaCholWiek = this.tabCholWiekMnP120;
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.tabelaCholWiek = this.tabCholWiekMnP140;
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.tabelaCholWiek = this.tabCholWiekMnP160;
              }
              else if (Number(this.cisnienie) >= 180) {
                this.tabelaCholWiek = this.tabCholWiekMnP180;
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 8) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 310)) {
              this.tabelaCisWiek = this.tabCisWiekMnP8;
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.tabelaCholWiek = this.tabCholWiekMnP120;
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.tabelaCholWiek = this.tabCholWiekMnP140;
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.tabelaCholWiek = this.tabCholWiekMnP160;
              }
              else if (Number(this.cisnienie) >= 180) {
                this.tabelaCholWiek = this.tabCholWiekMnP180;
              }
            }
          }
          else if (Number(this.wiek) >= 60 && Number(this.wiek) < 65) {
            this.tabelaCholCis = this.tabCholCisMnP60;
            if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 4 && Number(this.cholesterol) < 5) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 150 && Number(this.cholesterol) < 190)) {
              this.tabelaCisWiek = this.tabCisWiekMnP4;
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.tabelaCholWiek = this.tabCholWiekMnP120;
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.tabelaCholWiek = this.tabCholWiekMnP140;
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.tabelaCholWiek = this.tabCholWiekMnP160;
              }
              else if (Number(this.cisnienie) >= 180) {
                this.tabelaCholWiek = this.tabCholWiekMnP180;
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 5 && Number(this.cholesterol) < 6) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 190 && Number(this.cholesterol) < 230)) {
              this.tabelaCisWiek = this.tabCisWiekMnP5;
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.tabelaCholWiek = this.tabCholWiekMnP120;
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.tabelaCholWiek = this.tabCholWiekMnP140;
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.tabelaCholWiek = this.tabCholWiekMnP160;
              }
              else if (Number(this.cisnienie) >= 180) {
                this.tabelaCholWiek = this.tabCholWiekMnP180;
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 6 && Number(this.cholesterol) < 7) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 230 && Number(this.cholesterol) < 270)) {
              this.tabelaCisWiek = this.tabCisWiekMnP6;
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.tabelaCholWiek = this.tabCholWiekMnP120;
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.tabelaCholWiek = this.tabCholWiekMnP140;
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.tabelaCholWiek = this.tabCholWiekMnP160;
              }
              else if (Number(this.cisnienie) >= 180) {
                this.tabelaCholWiek = this.tabCholWiekMnP180;
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 7 && Number(this.cholesterol) < 8) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 270 && Number(this.cholesterol) < 310)) {
              this.tabelaCisWiek = this.tabCisWiekMnP7;
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.tabelaCholWiek = this.tabCholWiekMnP120;
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.tabelaCholWiek = this.tabCholWiekMnP140;
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.tabelaCholWiek = this.tabCholWiekMnP160;
              }
              else if (Number(this.cisnienie) >= 180) {
                this.tabelaCholWiek = this.tabCholWiekMnP180;
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 8) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 310)) {
              this.tabelaCisWiek = this.tabCisWiekMnP8;
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.tabelaCholWiek = this.tabCholWiekMnP120;
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.tabelaCholWiek = this.tabCholWiekMnP140;
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.tabelaCholWiek = this.tabCholWiekMnP160;
              }
              else if (Number(this.cisnienie) >= 180) {
                this.tabelaCholWiek = this.tabCholWiekMnP180;
              }
            }
          }
          else if (Number(this.wiek) >= 65 && Number(this.wiek) < 70) {
            this.tabelaCholCis = this.tabCholCisMnP65;
            if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 4 && Number(this.cholesterol) < 5) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 150 && Number(this.cholesterol) < 190)) {
              this.tabelaCisWiek = this.tabCisWiekMnP4;
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.tabelaCholWiek = this.tabCholWiekMnP120;
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.tabelaCholWiek = this.tabCholWiekMnP140;
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.tabelaCholWiek = this.tabCholWiekMnP160;
              }
              else if (Number(this.cisnienie) >= 180) {
                this.tabelaCholWiek = this.tabCholWiekMnP180;
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 5 && Number(this.cholesterol) < 6) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 190 && Number(this.cholesterol) < 230)) {
              this.tabelaCisWiek = this.tabCisWiekMnP5;
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.tabelaCholWiek = this.tabCholWiekMnP120;
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.tabelaCholWiek = this.tabCholWiekMnP140;
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.tabelaCholWiek = this.tabCholWiekMnP160;
              }
              else if (Number(this.cisnienie) >= 180) {
                this.tabelaCholWiek = this.tabCholWiekMnP180;
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 6 && Number(this.cholesterol) < 7) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 230 && Number(this.cholesterol) < 270)) {
              this.tabelaCisWiek = this.tabCisWiekMnP6;
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.tabelaCholWiek = this.tabCholWiekMnP120;
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.tabelaCholWiek = this.tabCholWiekMnP140;
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.tabelaCholWiek = this.tabCholWiekMnP160;
              }
              else if (Number(this.cisnienie) >= 180) {
                this.tabelaCholWiek = this.tabCholWiekMnP180;
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 7 && Number(this.cholesterol) < 8) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 270 && Number(this.cholesterol) < 310)) {
              this.tabelaCisWiek = this.tabCisWiekMnP7;
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.tabelaCholWiek = this.tabCholWiekMnP120;
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.tabelaCholWiek = this.tabCholWiekMnP140;
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.tabelaCholWiek = this.tabCholWiekMnP160;
              }
              else if (Number(this.cisnienie) >= 180) {
                this.tabelaCholWiek = this.tabCholWiekMnP180;
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 8) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 310)) {
              this.tabelaCisWiek = this.tabCisWiekMnP8;
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.tabelaCholWiek = this.tabCholWiekMnP120;
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.tabelaCholWiek = this.tabCholWiekMnP140;
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.tabelaCholWiek = this.tabCholWiekMnP160;
              }
              else if (Number(this.cisnienie) >= 180) {
                this.tabelaCholWiek = this.tabCholWiekMnP180;
              }
            }
          }
          else if (Number(this.wiek) >= 70) {
            this.tabelaCholCis = this.tabCholCisMnP70;
            if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 4 && Number(this.cholesterol) < 5) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 150 && Number(this.cholesterol) < 190)) {
              this.tabelaCisWiek = this.tabCisWiekMnP4;
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.tabelaCholWiek = this.tabCholWiekMnP120;
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.tabelaCholWiek = this.tabCholWiekMnP140;
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.tabelaCholWiek = this.tabCholWiekMnP160;
              }
              else if (Number(this.cisnienie) >= 180) {
                this.tabelaCholWiek = this.tabCholWiekMnP180;
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 5 && Number(this.cholesterol) < 6) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 190 && Number(this.cholesterol) < 230)) {
              this.tabelaCisWiek = this.tabCisWiekMnP5;
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.tabelaCholWiek = this.tabCholWiekMnP120;
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.tabelaCholWiek = this.tabCholWiekMnP140;
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.tabelaCholWiek = this.tabCholWiekMnP160;
              }
              else if (Number(this.cisnienie) >= 180) {
                this.tabelaCholWiek = this.tabCholWiekMnP180;
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 6 && Number(this.cholesterol) < 7) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 230 && Number(this.cholesterol) < 270)) {
              this.tabelaCisWiek = this.tabCisWiekMnP6;
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.tabelaCholWiek = this.tabCholWiekMnP120;
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.tabelaCholWiek = this.tabCholWiekMnP140;
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.tabelaCholWiek = this.tabCholWiekMnP160;
              }
              else if (Number(this.cisnienie) >= 180) {
                this.tabelaCholWiek = this.tabCholWiekMnP180;
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 7 && Number(this.cholesterol) < 8) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 270 && Number(this.cholesterol) < 310)) {
              this.tabelaCisWiek = this.tabCisWiekMnP7;
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.tabelaCholWiek = this.tabCholWiekMnP120;
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.tabelaCholWiek = this.tabCholWiekMnP140;
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.tabelaCholWiek = this.tabCholWiekMnP160;
              }
              else if (Number(this.cisnienie) >= 180) {
                this.tabelaCholWiek = this.tabCholWiekMnP180;
              }
            }
            else if ((this.jednostka == 'mmol' && Number(this.cholesterol) >= 8) || (this.jednostka == 'mg' && Number(this.cholesterol) >= 310)) {
              this.tabelaCisWiek = this.tabCisWiekMnP8;
              if (Number(this.cisnienie) >= 120 && Number(this.cisnienie) < 140) {
                this.tabelaCholWiek = this.tabCholWiekMnP120;
              }
              else if (Number(this.cisnienie) >= 140 && Number(this.cisnienie) < 160) {
                this.tabelaCholWiek = this.tabCholWiekMnP140;
              }
              else if (Number(this.cisnienie) >= 160 && Number(this.cisnienie) < 180) {
                this.tabelaCholWiek = this.tabCholWiekMnP160;
              }
              else if (Number(this.cisnienie) >= 180) {
                this.tabelaCholWiek = this.tabCholWiekMnP180;
              }
            }
          }
        }
      }
    }
  },
  beforeMount(){
    this.dispTable()
  }
});

</script>

<style scoped>
  .header {
    text-align: center;
    font-size: 48px;
  }
  .dane {
    margin: auto 20px;
  }
  .table-style{
    border-collapse: collapse;
    margin: 20px auto;
  }
  .table-cell{
    border: solid black;
  }
  .dark-maroon {
    text-align: center;
    color: white;
    font-size: 16px;
    margin: 0;
    padding: 10px;
    background-color: rgb(87, 0, 0);
  }
  .maroon {
    text-align: center;
    color: white;
    font-size: 16px;
    margin: 0;
    padding: 10px;
    background-color: rgb(138, 1, 1);
  }
  .red {
    text-align: center;
    color: white;
    font-size: 16px;
    margin: 0;
    padding: 10px;
    background-color: rgb(230, 19, 19);
  }
  .orange {
    text-align: center;
    color: black;
    font-size: 16px;
    margin: 0;
    padding: 10px;
    background-color: rgb(255, 187, 86);
  }
  .yellow {
    text-align: center;
    color: black;
    font-size: 16px;
    margin: 0;
    padding: 10px;
    background-color: rgb(255, 230, 6);
  }
  .green {
    text-align: center;
    color: black;
    font-size: 16px;
    margin: 0;
    padding: 10px;
    background-color: rgb(164, 248, 96);
  }
  .dark-green {
    text-align: center;
    color: black;
    font-size: 16px;
    margin: 0;
    padding: 10px;
    background-color: rgb(68, 155, 56);
  }
  .white {
    text-align: center;
    color: black;
    font-size: 16px;
    margin: 0;
    padding: 10px;
    background-color: rgb(255, 255, 255);
  }
</style>
<template>
  <Form v-slot="{ values }" :id="this.$route.name" @submit="onSubmit">
    <div>
      <p class="pt-10 pb-2 font-bold text-xl">უკვე აცრილი ხარ?*</p>
      <basic-radio
        name="vaccinated"
        type="radio"
        id="yesVaccine"
        rule="required"
        label="კი"
      ></basic-radio>
      <basic-radio
        name="vaccinated"
        type="radio"
        id="noVaccine"
        label="არა"
      ></basic-radio>
      <ErrorMessage name="vaccinated" class="text-red-500" />
    </div>
    <div v-if="values.vaccinated === 'yesVaccine'">
      <p class="pt-10 pb-2 font-bold text-xl">აირჩიე რა ეტაპზე ხარ*</p>
      <basic-radio
        name="vaccinationStage"
        type="radio"
        id="oneAndPending"
        rule="required"
        label="პირველი დოზა და დარეგისტრირებული ვარ მეორეზე"
      ></basic-radio>
      <basic-radio
        name="vaccinationStage"
        type="radio"
        id="fully"
        rule="required"
        label="სრულად აცრილი ვარ"
      ></basic-radio>
      <basic-radio
        name="vaccinationStage"
        type="radio"
        id="onlyOne"
        rule="required"
        label="პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე"
      ></basic-radio>
      <ErrorMessage name="vaccinationStage" class="text-red-500" />
    </div>
    <div v-if="values.vaccinationStage === 'onlyOne'">
      <p class="pl-6 pt-9">
        რომ არ გადადო, <br />
        ბარემ ახლავე დარეგისტრირდი
        <a href="https://booking.moh.gov.ge/" class="text-blue-700 block">
          https://booking.moh.gov.ge/
        </a>
      </p>
    </div>
    <div v-if="values.vaccinated === 'noVaccine'">
      <p class="pt-10 pb-2 font-bold text-xl">რას ელოდები?*</p>
      <basic-radio
        name="whyWait"
        type="radio"
        id="registeredAndWaiting"
        rule="required"
        label="დარეგისტრირებული ვარ და ველოდები რიცხვს"
      ></basic-radio>
      <basic-radio
        name="whyWait"
        type="radio"
        id="notPlanning"
        rule="required"
        label="არ ვგეგმავ"
      ></basic-radio>
      <basic-radio
        name="whyWait"
        type="radio"
        id="hadcovidAndPlanning"
        rule="required"
        label="გადატანილი მაქვს და ვგეგმავ აცრას"
      ></basic-radio>
    </div>
    <div v-if="values.whyWait === 'notPlanning'">
      <p class="pl-6 pt-9">
        👉
        <a href="https://booking.moh.gov.ge/" class="text-blue-700">
          https://booking.moh.gov.ge/
        </a>
      </p>
    </div>
    <div v-if="values.whyWait === 'hadcovidAndPlanning'">
      <p class="pl-6 pt-9">
        ახალი პროტოკოლით კოვიდის გადატანიდან 1 თვის შემდეგ შეგიძლიათ ვაქცინის
        გაკეთება. <br /><br />
        👉 რეგისტრაციის ბმული <br />
        <a href="https://booking.moh.gov.ge/" class="text-blue-700">
          https://booking.moh.gov.ge/
        </a>
      </p>
    </div>
  </Form>
</template>
<script>
import BasicRadio from "@/components/BasicRadio.vue";
import { ErrorMessage } from "vee-validate";

import { Form } from "vee-validate";
export default {
  components: {
    Form,
    BasicRadio,
    ErrorMessage,
  },
  inject: ["nextPageName"],
  methods: {
    onSubmit(values) {
      this.$store.commit("storeData", values);
      this.$router.push(this.nextPageName());
    },
  },
  mounted() {
    console.log(this.$store.getters.getData);
  },
};
</script>

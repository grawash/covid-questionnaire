<template>
  <Form v-slot="{ values }" :id="this.$route.name" @submit="onSubmit">
    <div>
      <p class="pt-10 pb-2 font-bold text-xl">უკვე აცრილი ხარ?*</p>
      <basic-radio
        name="had_vaccine"
        type="radio"
        id="true"
        rule="required"
        label="კი"
      ></basic-radio>
      <basic-radio
        name="had_vaccine"
        type="radio"
        id="false"
        label="არა"
      ></basic-radio>
      <ErrorMessage name="had_vaccine" class="text-red-500" />
    </div>
    <div v-if="values.had_vaccine === 'true'">
      <p class="pt-10 pb-2 font-bold text-xl">აირჩიე რა ეტაპზე ხარ*</p>
      <basic-radio
        name="vaccination_stage"
        type="radio"
        id="first_dosage_and_registered_on_the_second"
        rule="required"
        label="პირველი დოზა და დარეგისტრირებული ვარ მეორეზე"
      ></basic-radio>
      <basic-radio
        name="vaccination_stage"
        type="radio"
        id="fully_vaccinated"
        rule="required"
        label="სრულად აცრილი ვარ"
      ></basic-radio>
      <basic-radio
        name="vaccination_stage"
        type="radio"
        id="first_dosage_and_not_registered_on_the_second"
        rule="required"
        label="პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე"
      ></basic-radio>
      <ErrorMessage name="vaccination_stage" class="text-red-500" />
    </div>
    <div
      v-if="
        values.vaccination_stage ===
        'first_dosage_and_not_registered_on_the_second'
      "
    >
      <p class="pl-6 pt-9">
        რომ არ გადადო, <br />
        ბარემ ახლავე დარეგისტრირდი
        <a href="https://booking.moh.gov.ge/" class="text-blue-700 block">
          https://booking.moh.gov.ge/
        </a>
      </p>
    </div>
    <div v-if="values.had_vaccine === 'false'">
      <p class="pt-10 pb-2 font-bold text-xl">რას ელოდები?*</p>
      <basic-radio
        name="why_wait"
        type="radio"
        id="registered_and_waiting"
        rule="required"
        label="დარეგისტრირებული ვარ და ველოდები რიცხვს"
      ></basic-radio>
      <basic-radio
        name="why_wait"
        type="radio"
        id="not_planning"
        rule="required"
        label="არ ვგეგმავ"
      ></basic-radio>
      <basic-radio
        name="why_wait"
        type="radio"
        id="had_covid_and_planning"
        rule="required"
        label="გადატანილი მაქვს და ვგეგმავ აცრას"
      ></basic-radio>
    </div>
    <div v-if="values.why_wait === 'not_planning'">
      <p class="pl-6 pt-9">
        👉
        <a href="https://booking.moh.gov.ge/" class="text-blue-700">
          https://booking.moh.gov.ge/
        </a>
      </p>
    </div>
    <div v-if="values.why_wait === 'had_covid_and_planning'">
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
};
</script>

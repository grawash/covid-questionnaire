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
    <div v-if="values.antibodyTest === 'noTest'">
      <p class="pt-10 pb-7 font-bold text-xl">
        მიუთითე მიახლოებითი პერიოდი (დღე/თვე/წელი) <br />როდის გქონდა Covid-19*
      </p>
      <basic-input
        class="pt-0 mt-0"
        name="covidDate"
        type="date"
        id="covidDate"
        rule="required"
      ></basic-input>
    </div>
  </Form>
</template>
<script>
import BasicInput from "@/components/BasicInput.vue";
import BasicRadio from "@/components/BasicRadio.vue";
import { ErrorMessage } from "vee-validate";

import { Form } from "vee-validate";
export default {
  components: {
    // eslint-disable-next-line vue/no-reserved-component-names
    Form,
    BasicInput,
    BasicRadio,
    ErrorMessage,
  },
  data() {
    return {
      type: "text",
      dateContent: "",
    };
  },
  inject: ["nextPageName"],
  watch: {
    dateContent(newContent) {
      if (newContent === "" || newContent === undefined) {
        this.togglePlaceholder();
      }
    },
  },
  methods: {
    onSubmit(values) {
      console.log(values);
      this.$store.commit("storeData", values);
      console.log(this.$store.getters.getData);
      this.$router.push(this.nextPageName());
    },
    togglePlaceholder() {
      console.log("hello");
      if (this.type === "text" || this.dateContent !== "") {
        this.type = "date";
      } else if (this.type === "date") {
        this.type = "text";
      }
    },
    changeDateContent(e) {
      this.dateContent = e.target.value;
    },
  },
};
</script>

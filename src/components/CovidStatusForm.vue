<template>
  <Form :id="this.$route.name" @submit="onSubmit">
    <div>
      <p class="pt-10 pb-2 font-bold text-xl">გაქვს გადატანილი Covid-19?</p>
      <basic-radio
        @choose="hadCovid = true"
        name="hadCovid"
        type="radio"
        id="yesCovid"
        rule="required"
        label="კი"
      ></basic-radio>
      <basic-radio
        @choose="hadCovid = true"
        name="hadCovid"
        type="radio"
        id="noCovid"
        label="არა"
      ></basic-radio>
      <basic-radio
        @choose="hadCovid = true"
        name="hadCovid"
        type="radio"
        id="now"
        label="ახლა მაქვს"
      ></basic-radio>
      <ErrorMessage name="hadCovid" class="text-red-500" />
    </div>
    <div v-if="hadCovid">
      <p class="pt-10 pb-2 font-bold text-xl">
        ანტისხეულების ტესტი გაქვს გაკეთებული?*
      </p>
      <basic-radio
        @choose="(val) => (hadAntigenTest = val)"
        name="antibodyTest"
        type="radio"
        id="yesTest"
        rule="required"
        label="კი"
      ></basic-radio>
      <basic-radio
        @choose="(val) => (hadAntigenTest = val)"
        name="antibodyTest"
        type="radio"
        id="noTest"
        rule="required"
        label="არა"
      ></basic-radio>
      <ErrorMessage name="antibodyTest" class="text-red-500" />
    </div>
    <div v-if="hadAntigenTest === 'yesTest'">
      <p class="pt-10 pb-7 font-bold text-xl">
        თუ გახსოვს, გთხოვ მიუთითე ტესტის მიახლოებითი <br />
        რიცხვი და ანტისხეულების რაოდენობა*
      </p>
      <basic-input
        class="pt-0 mt-0"
        name="antigenAmount"
        type="text"
        id="antigenAmount"
        rule="required|numeric"
        placeholder="რიცხვი"
      ></basic-input>
      <basic-input
        class="pt-0 mt-0"
        name="antibodyCount"
        type="text"
        id="antibodyCount"
        rule="required|numeric"
        placeholder="ანტისხეულების რაოდენობა"
      ></basic-input>
    </div>
    <div v-if="hadAntigenTest === 'noTest'">
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
    Form,
    BasicInput,
    BasicRadio,
    ErrorMessage,
  },
  data() {
    return {
      type: "text",
      hadCovid: false,
      hadAntigenTest: false,
    };
  },
  computed: {
    nextPageName() {
      const pages = this.$router.options.routes[1].children;
      let tempindex = pages.findIndex((el) => el.name === this.$route.name);
      return pages[tempindex + 1] ? pages[tempindex + 1].name : "";
    },
  },
  methods: {
    onSubmit(values) {
      console.log(values);
      this.$store.commit("storeData", values);
      console.log(this.$store.getters.getData);
      this.$router.push(this.nextPageName);
    },
    // togglePlaceholder() {
    //   console.log(this.dateInput);
    //   if (this.type === "text") {
    //     this.type = "date";
    //   } else if (this.type === "date") {
    //     this.type = "text";
    //   }
    // },
  },
};
</script>

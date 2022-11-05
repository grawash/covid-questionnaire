<template>
  <Form v-slot="{ values }" :id="this.$route.name" @submit="onSubmit">
    <div>
      <p class="pt-10 pb-2 font-bold text-xl">გაქვს გადატანილი Covid-19?</p>
      <basic-radio
        name="hadCovid"
        type="radio"
        id="yesCovid"
        rule="required"
        label="კი"
      ></basic-radio>
      <basic-radio
        name="hadCovid"
        type="radio"
        id="noCovid"
        label="არა"
      ></basic-radio>
      <basic-radio
        name="hadCovid"
        type="radio"
        id="now"
        label="ახლა მაქვს"
      ></basic-radio>
      <ErrorMessage name="hadCovid" class="text-red-500" />
    </div>
    <div v-if="values.hadCovid">
      <p class="pt-10 pb-2 font-bold text-xl">
        ანტისხეულების ტესტი გაქვს გაკეთებული?*
      </p>
      <basic-radio
        name="antibodyTest"
        type="radio"
        id="yesTest"
        rule="required"
        label="კი"
      ></basic-radio>
      <basic-radio
        name="antibodyTest"
        type="radio"
        id="noTest"
        rule="required"
        label="არა"
      ></basic-radio>
      <ErrorMessage name="antibodyTest" class="text-red-500" />
    </div>
    <div v-if="values.antibodyTest === 'yesTest'">
      <p class="pt-10 pb-7 font-bold text-xl">
        თუ გახსოვს, გთხოვ მიუთითე ტესტის მიახლოებითი <br />
        რიცხვი და ანტისხეულების რაოდენობა*
      </p>
      <basic-input
        class="pt-0 mt-0"
        name="antigenAmount"
        @inputFocus="togglePlaceholder"
        @inputBlur="togglePlaceholder"
        @input="changeDateContent"
        :type="type"
        id="antigenAmount"
        rule="required"
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
      this.$router.push(this.nextPageName);
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

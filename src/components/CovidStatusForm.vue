<template>
  <Form v-slot="{ values, meta }" :id="this.$route.name" @submit="onSubmit">
    <span v-if="meta.valid" class="hidden">{{ (this.validity = true) }}</span>
    <span v-else class="hidden"> {{ (this.validity = false) }}</span>
    <div>
      <p class="pt-10 pb-2 font-bold text-xl">გაქვს გადატანილი Covid-19?*</p>
      <basic-radio
        name="had_covid"
        type="radio"
        id="yes"
        rule="required"
        label="კი"
      ></basic-radio>
      <basic-radio
        name="had_covid"
        type="radio"
        id="no"
        label="არა"
      ></basic-radio>
      <basic-radio
        name="had_covid"
        type="radio"
        id="now"
        label="ახლა მაქვს"
      ></basic-radio>
      <ErrorMessage name="had_covid" class="text-red-500" />
    </div>
    <div v-if="values.had_covid == 'yes'">
      <p class="pt-10 pb-2 font-bold text-xl">
        ანტისხეულების ტესტი გაქვს გაკეთებული?*
      </p>
      <basic-radio
        name="had_antibody_test"
        type="radio"
        id="true"
        rule="required"
        label="კი"
      ></basic-radio>
      <basic-radio
        name="had_antibody_test"
        type="radio"
        id="false"
        rule="required"
        label="არა"
      ></basic-radio>
      <ErrorMessage name="had_antibody_test" class="text-red-500" />
    </div>
    <div v-if="values.had_antibody_test === 'true'">
      <p class="pt-10 pb-7 font-bold text-xl">
        თუ გახსოვს, გთხოვ მიუთითე ტესტის მიახლოებითი <br />
        რიცხვი და ანტისხეულების რაოდენობა*
      </p>
      <basic-input
        class="pt-0 mt-0"
        name="test_date"
        @inputFocus="togglePlaceholder"
        @inputBlur="togglePlaceholder"
        @input="changeDateContent"
        :type="type"
        id="test_date"
        rule="required"
        placeholder="რიცხვი"
      ></basic-input>
      <basic-input
        class="pt-0 mt-0"
        name="number"
        type="text"
        id="number"
        rule="required|numeric"
        placeholder="ანტისხეულების რაოდენობა"
      ></basic-input>
    </div>
    <div v-if="values.had_antibody_test === 'false'">
      <p class="pt-10 pb-7 font-bold text-xl">
        მიუთითე მიახლოებითი პერიოდი (დღე/თვე/წელი) <br />როდის გქონდა Covid-19*
      </p>
      <basic-input
        class="pt-0 mt-0"
        name="covid_date"
        type="date"
        id="covid_date"
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
  inject: ["nextPageName"],
  components: {
    Form,
    BasicInput,
    BasicRadio,
    ErrorMessage,
  },
  data() {
    return {
      type: "text",
      dateContent: "",
      date: {},
      validity: false,
    };
  },
  watch: {
    dateContent(newContent) {
      if (newContent === "" || newContent === undefined) {
        this.togglePlaceholder();
      }
    },
    validity() {
      this.$store.commit("toggleValidity", this.validity);
    },
  },
  methods: {
    onSubmit(values) {
      if (values.number) {
        values.number = Number(values.number);
      }
      values.had_antibody_test === "true"
        ? (values.had_antibody_test = true)
        : (values.had_antibody_test = false);
      if (values.test_date) {
        this.date = {
          had_covid: values.had_covid,
          had_antibody_test: values.had_antibody_test,
          antibodies: {
            test_date: values.test_date,
            number: values.number,
          },
        };
        this.$store.commit("storeData", this.date);
      } else {
        this.$store.commit("storeData", values);
      }
      this.$store.commit("toggleValidity", false);
      this.$router.push(this.nextPageName());
    },
    togglePlaceholder() {
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

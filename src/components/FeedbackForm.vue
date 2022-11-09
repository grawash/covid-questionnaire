<template>
  <Form :id="this.$route.name" @submit="onSubmit">
    <div>
      <p class="pt-10 pb-2 font-bold text-xl">
        რა სიხშირით შეიძლება გვქონდეს საერთო არაფორმალური ონლაინ შეხვედრები,
        სადაც ყველა სურვილისამებრ ჩაერთვება?*
      </p>
      <basic-radio
        name="non_formal_meetings"
        type="radio"
        id="twice_a_week"
        rule="required"
        label="კვირაში ორჯერ"
      ></basic-radio>
      <basic-radio
        name="non_formal_meetings"
        type="radio"
        id="once_a_week"
        label="კვირაში ერთხელ"
      ></basic-radio>
      <basic-radio
        name="non_formal_meetings"
        type="radio"
        id="once_a_two_week"
        label="ორ კვირაში ერთხელ"
      ></basic-radio>
      <basic-radio
        name="non_formal_meetings"
        type="radio"
        id="once_a_month"
        label="თვეში ერთხელ"
      ></basic-radio>
      <ErrorMessage name="non_formal_meetings" class="text-red-500" />
    </div>
    <div>
      <p class="pt-10 pb-2 font-bold text-xl">
        კვირაში რამდენი დღე ისურვებდი ოფისიდან მუშაობას?*
      </p>
      <basic-radio
        name="number_of_days_from_office"
        type="radio"
        id="0"
        rule="required"
        label="0"
      ></basic-radio>
      <basic-radio
        name="number_of_days_from_office"
        type="radio"
        id="1"
        rule="required"
        label="1"
      ></basic-radio>
      <basic-radio
        name="number_of_days_from_office"
        type="radio"
        id="2"
        rule="required"
        label="2"
      ></basic-radio>
      <basic-radio
        name="number_of_days_from_office"
        type="radio"
        id="3"
        rule="required"
        label="3"
      ></basic-radio>
      <basic-radio
        name="number_of_days_from_office"
        type="radio"
        id="4"
        rule="required"
        label="4"
      ></basic-radio>
      <basic-radio
        name="number_of_days_from_office"
        type="radio"
        id="5"
        rule="required"
        label="5"
      ></basic-radio>
      <ErrorMessage name="number_of_days_from_office" class="text-red-500" />
    </div>
    <basic-text-area
      name="what_about_meetings_in_live"
      id="what_about_meetings_in_live"
      label="რას ფიქრობ ფიზიკურ შეკრებებზე?"
    />
    <basic-text-area
      name="tell_us_your_opinion_about_us"
      id="tell_us_your_opinion_about_us"
      label="რას ფიქრობ არსებულ გარემოზე: 
რა მოგწონს, რას დაამატებდი, რას შეცვლიდი?"
    />
    <button
      class="bg-cyan-600 text-white p-4 pl-7 pr-7 float-right rounded-full text-lg font-bold mt-14 mb-14"
    >
      დასრულება
    </button>
  </Form>
</template>
<script>
import BasicRadio from "@/components/BasicRadio.vue";
import { ErrorMessage } from "vee-validate";
import BasicTextArea from "@/components/BasicTextArea.vue";

import { Form } from "vee-validate";
export default {
  inject: ["nextPageName"],
  components: {
    Form,
    BasicRadio,
    BasicTextArea,
    ErrorMessage,
  },
  methods: {
    onSubmit(values) {
      values.number_of_days_from_office = Number(
        values.number_of_days_from_office
      );
      this.$store.commit("storeData", values);
      this.$router.push("/thank-you");
    },
  },
};
</script>

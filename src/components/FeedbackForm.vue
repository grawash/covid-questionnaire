<template>
  <Form :id="this.$route.name" @submit="onSubmit">
    <div>
      <p class="pt-10 pb-2 font-bold text-xl">
        რა სიხშირით შეიძლება გვქონდეს საერთო არაფორმალური ონლაინ შეხვედრები,
        სადაც ყველა სურვილისამებრ ჩაერთვება?*
      </p>
      <basic-radio
        name="meetingFrequency"
        type="radio"
        id="twiceWeek"
        rule="required"
        label="კვირაში ორჯერ"
      ></basic-radio>
      <basic-radio
        name="meetingFrequency"
        type="radio"
        id="onceWeek"
        label="კვირაში ერთხელ"
      ></basic-radio>
      <basic-radio
        name="meetingFrequency"
        type="radio"
        id="onceTwoWeek"
        label="ორ კვირაში ერთხელ"
      ></basic-radio>
      <basic-radio
        name="meetingFrequency"
        type="radio"
        id="onceMonth"
        label="თვეში ერთხელ"
      ></basic-radio>
      <ErrorMessage name="meetingFrequency" class="text-red-500" />
    </div>
    <div>
      <p class="pt-10 pb-2 font-bold text-xl">
        კვირაში რამდენი დღე ისურვებდი ოფისიდან მუშაობას?*
      </p>
      <basic-radio
        name="officeWork"
        type="radio"
        id="0"
        rule="required"
        label="0"
      ></basic-radio>
      <basic-radio
        name="officeWork"
        type="radio"
        id="1"
        rule="required"
        label="1"
      ></basic-radio>
      <basic-radio
        name="officeWork"
        type="radio"
        id="2"
        rule="required"
        label="2"
      ></basic-radio>
      <basic-radio
        name="officeWork"
        type="radio"
        id="3"
        rule="required"
        label="3"
      ></basic-radio>
      <basic-radio
        name="officeWork"
        type="radio"
        id="4"
        rule="required"
        label="4"
      ></basic-radio>
      <basic-radio
        name="officeWork"
        type="radio"
        id="5"
        rule="required"
        label="5"
      ></basic-radio>
      <ErrorMessage name="officeWork" class="text-red-500" />
    </div>
    <basic-text-area
      name="officeFeedback"
      id="officeFeedback"
      label="რას ფიქრობ ფიზიკურ შეკრებებზე?"
    />
    <basic-text-area
      name="enviromentFeedback"
      id="enviromentFeedback"
      label="რას ფიქრობ არსებულ გარემოზე: 
რა მოგწონს, რას დაამატებდი, რას შეცვლიდი?"
    />
    <button class="bg-cyan-600 text-white p-4 pl-7 pr-7 float-right rounded-full text-lg font-bold mt-14 mb-14">დასრულება</button>
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
    // eslint-disable-next-line vue/no-reserved-component-names
    Form,
    BasicRadio,
    BasicTextArea,
    ErrorMessage,
  },
  data() {
    return {
      type: "text",
      dateContent: "",
    };
  },
  watch: {
    dateContent(newContent) {
      if (newContent === "" || newContent === undefined) {
        this.togglePlaceholder();
      }
    },
  },
  methods: {
    onSubmit(values) {
      this.$store.commit("storeData", values);
      console.log(this.$router.options.routes[1].children);
      console.log(this.nextPageName);
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

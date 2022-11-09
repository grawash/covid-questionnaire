<template>
  <div class="flex pb-5">
    <Field
      type="radio"
      :id="id"
      :name="name"
      :rules="rule"
      v-model="checked"
      :value="id"
      class="mr-2"
    />
    <label :for="id" class="font-normal text-xl">{{ label }}</label>
  </div>
</template>

<script>
import { Field } from "vee-validate";

export default {
  components: { Field },
  props: {
    label: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: false,
      default: "text",
    },
    id: {
      type: String,
      required: true,
    },
    rule: {
      type: String,
      required: false,
    },
  },
  computed: {
    checked() {
      if (typeof this.$store.getters.getData[this.name] !== "string") {
        return JSON.stringify(this.$store.getters.getData[this.name]);
      } else {
        return this.$store.getters.getData[this.name];
      }
    },
  },
};
</script>

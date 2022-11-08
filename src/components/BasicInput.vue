<template>
  <div class="flex flex-col pt-10">
    <label v-if="label" :for="id" class="font-bold text-xl"
      >{{ label }} *</label
    >
    <Field
      @focus="$emit('inputFocus', this.id)"
      @blur="$emit('inputBlur', this.id)"
      :type="type"
      :id="id"
      :name="name"
      :rules="rule"
      :value="this.$store.getters.getData[this.name]"
      :placeholder="placeholder"
      class="border border-black bg-transparent max-w-[70%] h-10 pl-5 pr-5 mt-2"
    />
    <ErrorMessage :name="name" class="text-red-500" />
  </div>
</template>

<script>
import { Field, ErrorMessage } from "vee-validate";

export default {
  components: { Field, ErrorMessage },
  props: {
    label: {
      type: String,
      required: false,
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
    placeholder: {
      type: String,
      required: false,
    },
    rule: {
      type: String,
      required: false,
    },
  },
};
</script>

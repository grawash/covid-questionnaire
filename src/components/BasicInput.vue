<template>
  <div class="flex flex-col pt-10">
    <label :for="inputId" class="font-bold text-xl">{{ inputLabel }} *</label>
    <Field
      :type="inputType"
      :id="inputId"
      :name="inputName"
      :rules="rule"
      :placeholder="inputPlaceholder"
      class="border border-black bg-transparent max-w-[70%] h-10 pl-5 pr-5 mt-2"
    />
    <ErrorMessage :name="inputName" class="text-red-500" />
  </div>
</template>

<script>
import { Field, ErrorMessage } from "vee-validate";

export default {
  components: { Field, ErrorMessage },
  props: {
    inputLabel: String,
    inputName: String,
    inputType: String,
    inputId: String,
    inputPlaceholder: String,
    rule: String,
  },
};
</script>

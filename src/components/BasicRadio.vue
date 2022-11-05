<template>
  <div class="flex pb-5">
    <Field
      @click="$emit('choose', this.id)"
      :type="type"
      :id="id"
      :name="name"
      :rules="rule"
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
};
</script>

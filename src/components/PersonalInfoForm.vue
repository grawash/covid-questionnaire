<template>
  <Form @submit="onSubmit">
    <basic-input
      inputName="name"
      inputType="text"
      inputId="name"
      rule="required|minLength:2"
      inputPlaceholder="იოსებ"
      inputLabel="სახელი"
    ></basic-input>
    <basic-input
      inputName="lastName"
      inputType="text"
      inputId="lastName"
      rule="required|minLength:2"
      inputPlaceholder="ჯუღაშვილი"
      inputLabel="გვარი"
    ></basic-input>
    <basic-input
      inputName="email"
      inputType="email"
      inputId="mail"
      rule="required|email"
      inputPlaceholder="fbi@redberry.ge"
      inputLabel="მეილი"
    ></basic-input>
  </Form>
</template>
<script>
import BasicInput from "./BasicInput.vue";
import { Form, defineRule } from "vee-validate";
defineRule("required", (value) => {
  if (!value || !value.length) {
    return "This field is required";
  }

  return true;
});

defineRule("email", (value) => {
  if (!value || !value.length) {
    return true;
  }

  if (!/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/i.test(value)) {
    return "This field must be a valid email";
  }
  if (!value.endsWith("@redberry.ge")) {
    return "Must be redberry email";
  }

  return true;
});
defineRule("minLength", (value, [limit]) => {
  if (!value || !value.length) {
    return true;
  }

  if (value.length < limit) {
    return `This field must be at least ${limit} characters`;
  }

  return true;
});
export default {
  components: {
    Form,
    BasicInput,
  },
  methods: {
    onSubmit(values) {
      console.log(values);
    },
  },
};
</script>

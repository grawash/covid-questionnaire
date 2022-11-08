<template>
  <Form :id="this.$route.name" @submit="onSubmit">
    <basic-input
      name="first_name"
      type="text"
      id="first_name"
      rule="required|min:2"
      placeholder="იოსებ"
      label="სახელი"
    ></basic-input>
    <basic-input
      name="last_name"
      type="text"
      id="last_name"
      rule="required|min:2"
      placeholder="ჯუღაშვილი"
      label="გვარი"
    ></basic-input>
    <basic-input
      name="email"
      type="email"
      id="email"
      rule="required|email|redberry"
      placeholder="fbi@redberry.ge"
      label="მეილი"
    ></basic-input>
  </Form>
</template>
<script>
import BasicInput from "@/components/BasicInput.vue";
import { Form } from "vee-validate";

export default {
  components: {
    Form,
    BasicInput,
  },
  inject: ["nextPageName"],
  methods: {
    onSubmit(values) {
      this.$store.commit("storeData", values);
      this.$router.push(this.nextPageName());
    },
  },
};
</script>

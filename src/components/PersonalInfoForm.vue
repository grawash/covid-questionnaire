<template>
  <Form :id="this.$route.name" @submit="onSubmit">
    <basic-input
      name="name"
      type="text"
      id="name"
      rule="required|min:2"
      placeholder="იოსებ"
      label="სახელი"
    ></basic-input>
    <basic-input
      name="lastName"
      type="text"
      id="lastName"
      rule="required|min:2"
      placeholder="ჯუღაშვილი"
      label="გვარი"
    ></basic-input>
    <basic-input
      name="email"
      type="email"
      id="mail"
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
      console.log(this.$router.options.routes[1].children);
      console.log(this.nextPageName);
      this.$router.push(this.nextPageName());
    },
  },
};
</script>

<template>
  <form action="">
    <basic-input
      inputName="name"
      inputType="text"
      inputId="name"
      inputPlaceholder="იოსებ"
      inputLabel="სახელი"
    ></basic-input>
    <basic-input
      inputName="lastName"
      inputType="text"
      inputId="lastName"
      inputPlaceholder="ჯუღაშვილი"
      inputLabel="გვარი"
    ></basic-input>
    <basic-input
      inputName="email"
      inputType="email"
      inputId="mail"
      inputPlaceholder="fbi@redberry.ge"
      inputLabel="მეილი"
    ></basic-input>
  </form>
</template>
<script>
import BasicInput from "./BasicInput.vue";
export default {
  components: { BasicInput },
};
</script>

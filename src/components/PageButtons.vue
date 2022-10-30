<template>
  <div class="ml-auto mr-auto w-36 flex justify-between">
    <router-link :to="backLink"
      ><img src="../assets/Vector 7.svg" alt=""
    /></router-link>
    <router-link :to="nextLink"
      ><img src="../assets/Vector 8.svg" alt=""
    /></router-link>
  </div>
</template>

<script>
export default {
  computed: {
    backLink() {
      const pageNames = this.$store.getters.pageNames;
      let index = pageNames.findIndex((el) => el === this.$route.name);
      return pageNames[index - 1];
    },
    nextLink() {
      const pageNames = this.$store.getters.pageNames;
      let index = pageNames.findIndex((el) => el === this.$route.name);
      return pageNames[index + 1];
    },
  },
};
</script>

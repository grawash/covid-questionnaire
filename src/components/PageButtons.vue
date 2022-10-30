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
      if (this.$route.name === "personal-info") {
        return "/";
      } else {
        return "/questionnaire/personal-info";
      }
    },
    nextLink() {
      if (this.$route.name === "personal-info") {
        return "/questionnaire/covid-status";
      } else {
        return "/questionnaire/personal-info";
      }
    },
  },
};
</script>

<template>
  <div class="ml-auto mr-auto w-36 flex justify-between">
    <router-link v-if="this.$route.name !== 'personal-info'" :to="previousPage"
      ><img src="./icons/Vector 7.svg" alt="previous page button"
    /></router-link>
    <router-link :to="nextPage" class="ml-auto"
      ><img src="./icons/Vector 8.svg" alt="next page button"
    /></router-link>
  </div>
</template>

<script>
export default {
  computed: {
    previousPage() {
      const pages = this.$router.options.routes[1].children;
      let tempindex = pages.findIndex((el) => el.name === this.$route.name);
      return pages[tempindex - 1].name;
    },
    nextPage() {
      const pages = this.$router.options.routes[1].children;
      let tempindex = pages.findIndex((el) => el.name === this.$route.name);
      return pages[tempindex + 1] ? pages[tempindex + 1].name : "";
    },
  },
};
</script>

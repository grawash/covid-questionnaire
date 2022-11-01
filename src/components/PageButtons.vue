<template>
  <div class="ml-auto mr-auto w-36 flex justify-between">
    <router-link v-if="this.$route.name !== 'personal-info'" :to="previousPage"
      ><previous-page
    /></router-link>
    <router-link :to="nextPage" class="ml-auto"><next-page /></router-link>
  </div>
</template>

<script>
import nextPage from "@/components/icons/NextPage.vue";
import PreviousPage from "@/components/icons/PreviousPage.vue";
export default {
  components: { nextPage, PreviousPage },
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

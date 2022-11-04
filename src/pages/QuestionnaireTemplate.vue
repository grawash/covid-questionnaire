<template>
  <div class="flex h-screen bg-neutral-100">
    <div
      class="flex relative flex-col h-4/5 ml-auto mr-auto mt-auto mb-auto w-3/4"
    >
      <the-header></the-header>
      <router-view class="h-[90%]"></router-view>
      <page-buttons></page-buttons>
    </div>
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import PageButtons from "@/components/PageButtons.vue";
import { setLocale } from "@vee-validate/i18n";

export default {
  components: { TheHeader, PageButtons },
  computed: {
    nextPageName() {
      const pages = this.$router.options.routes[1].children;
      let tempindex = pages.findIndex((el) => el.name === this.$route.name);
      return pages[tempindex + 1] ? pages[tempindex + 1].name : "";
    },
  },
  provide() {
    return {
      nextPageName: this.nextPageName,
    };
  },
  mounted() {
    setLocale("ka");
  },
};
</script>

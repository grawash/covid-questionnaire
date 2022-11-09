<template class="bg-neutral-100">
  <div class="flex h-screen">
    <div
      class="flex relative flex-col h-4/5 ml-auto mr-auto mt-auto mb-auto w-3/4"
    >
      <the-header></the-header>
      <div v-if="this.$route.name === 'feedback'" class="overflow-auto">
        <router-view v-if="this.$route.name === 'feedback'"></router-view>
        <page-buttons
          v-if="this.$route.name === 'feedback'"
          class=""
        ></page-buttons>
      </div>
      <router-view
        v-if="this.$route.name !== 'feedback'"
        class="h-[90%]"
      ></router-view>
      <page-buttons v-if="this.$route.name !== 'feedback'"></page-buttons>
    </div>
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import PageButtons from "@/components/PageButtons.vue";
import { setLocale } from "@vee-validate/i18n";

export default {
  components: { TheHeader, PageButtons },
  data() {
    return {
      nextPage: "",
    };
  },

  methods: {
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
<style>
.dim {
  filter: brightness(50%);
  opacity: 50%;
}
</style>

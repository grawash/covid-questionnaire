<template>
  <div class="ml-auto mr-auto w-36 flex justify-between">
    <button v-if="this.$route.name !== 'personal-info'" @click="back">
      <previous-page />
    </button>
    <button
      v-if="this.$route.name !== 'feedback'"
      :form="formId"
      type="submit"
      class="ml-auto"
    >
      <next-page :class="{ dim: isvalid }" />
    </button>
  </div>
</template>

<script>
import nextPage from "@/components/icons/NextPage.vue";
import PreviousPage from "@/components/icons/PreviousPage.vue";
export default {
  components: { nextPage, PreviousPage },
  computed: {
    isvalid() {
      if (this.$store.getters.getValidity == true) {
        return false;
      } else {
        return true;
      }
    },
    previousPageName() {
      const pages = this.$router.options.routes[1].children;
      let tempindex = pages.findIndex((el) => el.name === this.$route.name);
      return pages[tempindex - 1].name;
    },
    formId() {
      return this.$route.name;
    },
  },
  methods: {
    back() {
      this.$router.push(this.previousPageName);
    },
  },
};
</script>

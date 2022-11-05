<template>
  <div class="border-b-2 border-black flex justify-between">
    <div class="flex">
      <header-logo class="flex mt-auto mb-auto" />
    </div>
    <p class="font-anon font-bold text-[40px]">{{ currentPage }}/4</p>
  </div>
</template>
<script>
import HeaderLogo from "@/components/icons/HeaderLogo.vue";
export default {
  components: { HeaderLogo },
  computed: {
    currentPage() {
      const pages = this.$router.options.routes[1].children;
      let tempindex = pages.findIndex((el) => el.name === this.$route.name);
      return tempindex + 1;
    },
  },
};
</script>

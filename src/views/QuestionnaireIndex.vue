<template>
  <div class="flex h-screen bg-neutral-100">
    <div class="flex flex-col ml-auto mr-auto mt-auto mb-auto w-3/4">
      <the-header></the-header>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import TheHeader from "../components/TheHeader.vue";
export default {
  components: { TheHeader },
};
</script>

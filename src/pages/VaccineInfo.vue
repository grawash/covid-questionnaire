<template>
  <div class="flex flex-col">
    <div class="flex h-[100%]">
      <div class="grow-[3] shrink basis-0 flex flex-col">
        <vaccine-info-form />
      </div>
      <vaccine-doctor class="grow-[4] shrink basis-0 w-0 h-auto" />
    </div>
  </div>
</template>

<script>
import VaccineDoctor from "@/components/icons/VaccineDoctor.vue";
import VaccineInfoForm from "@/components/VaccineInfoForm.vue";
export default {
  components: { VaccineInfoForm, VaccineDoctor },
  mounted() {},
};
</script>

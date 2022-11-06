<template>
  <div class="flex flex-col">
    <div class="flex h-[100%]">
      <div class="grow-[3] shrink basis-0 flex flex-col">
        <covid-status-form />
      </div>
      <vaccinated-man class="grow-[4] shrink basis-0 w-0 h-auto" />
    </div>
  </div>
</template>

<script>
import VaccinatedMan from "@/components/icons/VaccinatedMan.vue";
import CovidStatusForm from "@/components/CovidStatusForm.vue";
export default {
  components: { VaccinatedMan, CovidStatusForm },
  mounted() {},
};
</script>

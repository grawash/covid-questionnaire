<template>
  <div class="flex flex-col">
    <div class="flex">
      <div class="grow-[4] shrink basis-auto flex flex-col">
        <personal-info-form></personal-info-form>
        <div class="w-fit">
          <div class="border mt-28 w-4/5 border-black"></div>
          <p class="pt-5 font-bold text-neutral-500 text-base">
            *-ით მონიშნული ველების შევსება <br />
            სავალდებულოა
          </p>
        </div>
      </div>
      <img
        src="../assets/scan2.svg"
        alt=""
        class="grow-[6] shrink basis-auto w-0"
      />
    </div>
  </div>
</template>

<script>
import PersonalInfoForm from "../components/PersonalInfoForm.vue";
export default {
  components: { PersonalInfoForm },
  mounted() {
    console.log(this.$route.name);
  },
};
</script>

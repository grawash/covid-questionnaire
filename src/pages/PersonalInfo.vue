<template>
  <div class="flex flex-col">
    <div class="flex h-[100%]">
      <div class="grow-[3] shrink basis-0 flex flex-col">
        <personal-info-form></personal-info-form>
        <div class="w-fit">
          <div class="border mt-28 w-4/5 border-black"></div>
          <p class="pt-5 font-bold text-neutral-500 text-base">
            *-ით მონიშნული ველების შევსება <br />
            სავალდებულოა
          </p>
        </div>
      </div>
      <boy-and-girl class="grow-[4] shrink basis-0 w-0 h-auto" />
    </div>
  </div>
</template>

<script>
import PersonalInfoForm from "@/components/PersonalInfoForm.vue";
import BoyAndGirl from "@/components/icons/BoyAndGirl.vue";
export default {
  components: { PersonalInfoForm, BoyAndGirl },
  mounted() {},
};
</script>

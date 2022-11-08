<template>
  <div class="flex flex-col">
    <div class="flex">
      <div class="grow-[3] shrink basis-0 flex flex-col">
        <p class="w-[80%] font-normal text-xl leading-6 pt-10">
          რედბერის მთავარი ღირებულება ჩვენი გუნდის თითოეული წევრია. გარემო,
          რომელსაც ჩვენი თანამშრომლები ქმნით, ბევრისთვის არის და ყოფილა წლების
          განმავლობაში მიზნებისთვის ერთად ბრძოლის მიზეზი, ბევრისთვის კი —
          ჩვენთან გადმოსვლის. <br /><br />
          პანდემიის პერიოდში ერთმანეთსაც იშვიათად ვნახულობთ პირისპირ და
          ყოველდღიური კომუნიკაციაც გაიშვიათდა.
        </p>
        <feedback-form />
      </div>
      <bike-man
        class="grow-[4] shrink basis-0 w-0 h-[680px] self-start top-0 sticky"
      />
    </div>
  </div>
</template>

<script>
import BikeMan from "@/components/icons/BikeMan.vue";
import FeedbackForm from "@/components/FeedbackForm.vue";
export default {
  components: { FeedbackForm, BikeMan },
  mounted() {},
};
</script>

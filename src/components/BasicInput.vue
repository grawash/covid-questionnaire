<template>
  <div class="flex flex-col pt-10">
    <label :for="inputId" class="font-bold text-xl">{{ inputLabel }} *</label>
    <input
      :type="inputType"
      :id="inputId"
      :name="inputName"
      :placeholder="inputPlaceholder"
      class="border border-black bg-transparent max-w-[70%] h-10 pl-5 pr-5 mt-2"
    />
  </div>
</template>

<script>
export default {
  props: {
    inputLabel: String,
    inputName: String,
    inputType: String,
    inputId: String,
    inputPlaceholder: String,
  },
};
</script>

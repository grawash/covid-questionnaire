<template>
  <div class="pt-10">
    <label :for="id" class="font-bold text-xl">{{ label }}</label>
    <textarea
      :name="name"
      :id="id"
      rows="6"
      class="resize-none border border-black bg-transparent w-full pl-5 pr-5 mt-2"
    ></textarea>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: false,
    },
    name: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
  },
};
</script>

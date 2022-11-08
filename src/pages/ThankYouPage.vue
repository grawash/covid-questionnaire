<template>
  <div class="bg-neutral-800 h-screen flex items-center justify-center">
    <transition name="bigStar">
      <big-star v-if="stars" class="translate-x-20 -translate-y-20" />
    </transition>
    <transition name="para">
      <p v-if="thanks" class="font-bold text-[64px] text-white tracking-widest">მადლობა</p>
    </transition>
    <transition name="smallStar">
      <small-star v-if="stars" class="-translate-x-16 translate-y-16" />
    </transition>
  </div>
</template>
<script>
import BigStar from "@/components/icons/BigStar.vue";
import SmallStar from "@/components/icons/SmallStar.vue";

export default {
  components: { BigStar, SmallStar },
  data() {
    return {
      stars: false,
      thanks: false,
      data: { ...this.$store.getters.getData },
    };
  },
  mounted() {
    setTimeout(() => {
      this.thanks = true;
    }, "600");
    setTimeout(() => {
      this.stars = true;
    }, "1200");

    fetch("https://covid19.devtest.ge/api/create", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(this.data),
    }).then((response) => console.log(response));
  },
};
</script>
<style>
.para-enter-from {
  opacity: 0;
}
.para-enter-active {
  transition: all 0.3s;
}
.para-enter-to {
  opacity: 1;
}
.bigStar-enter-from {
  opacity: 0;
  transform: translate(10rem, 0);
}
.bigStar-enter-active {
  transition: all 0.6s;
}
.bigStar-enter-to {
  opacity: 1;
  transform: translate(5rem, -5rem);
}
.smallStar-enter-from {
  opacity: 0;
  transform: translate(-10rem, 0);
}
.smallStar-enter-active {
  transition: all 0.6s;
}
.smallStar-enter-to {
  opacity: 1;
  transform: translate(-4rem, 4rem);
}
</style>

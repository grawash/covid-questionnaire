<template>
  <div class="flex h-screen">
    <div class="flex flex-col ml-auto mr-auto mt-auto mb-auto">
      <img src="@/components/icons/Vector(1).svg" alt="redberry logo" />
      <router-link
        :to="{ name: 'personal-info' }"
        class="mt-28 font-extrabold text-3xl text-center wrap hover:text-shadow-black"
        >კითხვარის <br />
        დაწყება</router-link
      >
    </div>
  </div>
</template>

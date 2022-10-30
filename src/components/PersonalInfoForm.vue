<template>
  <form action="">
    <div class="flex flex-col pt-10">
      <label for="name" class="font-bold text-xl">სახელი*</label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="იოსებ"
        class="border border-black bg-transparent max-w-[70%] h-10 pl-5 pr-5 mt-2"
      />
    </div>
    <div class="flex flex-col pt-11">
      <label for="lastName" class="font-bold text-xl">გვარი*</label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        placeholder="ჯუღაშვილი"
        class="border border-black bg-transparent max-w-[70%] h-10 pl-5 pr-5 mt-2"
      />
    </div>
    <div class="flex flex-col pt-11">
      <label for="mail" class="font-bold text-xl">მეილი*</label>
      <input
        type="email"
        id="mail"
        name="email"
        placeholder="fbi@redberry.ge"
        class="border border-black bg-transparent max-w-[70%] h-10 pl-5 pr-5 mt-2"
      />
    </div>
  </form>
</template>

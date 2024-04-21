<template>
  <div class="about border-round p-2">
    <h2 class="text-center uppercase">
      <span>My </span>
      <span>biography</span>
    </h2>
    <div class="flex flex-wrap-reverse w-full mt-3">
      <div class="col-12 md:col-8 flex flex-wrap">
        <div class="col-6">
          <p>Name: <span> Chum YOEURN</span></p>
        </div>
        <div class="col-6">
          <p>From: <span> Prey Veng</span></p>
        </div>
          <p>Email: yoeurnchum@gmail.com</p>
      </div>
      <div class="col-12 md:col-4">
        <img
          src="../assets/images/me/me1.png"
          alt=""
          class="w-full border-round"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.about {
  background: var(--vt-c-divider-light-2);
}
h2 {
  color: var(--vt-c-text-dark-2);
  border-bottom: 2px double #35cda9;
  border-radius: 5px;
  padding: 10px;
  margin: 0;
}
</style>

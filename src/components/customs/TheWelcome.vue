<script setup>
import {
  onMounted,
  reactive,
  ref,
  inject,
  provide,
  getCurrentInstance,
  watch,
} from "vue";
onMounted(() => {});
defineEmits([""]);
defineProps({
  msg: {
    type: String,
    required: false,
  },
});
// Variable
const instance = getCurrentInstance();
// Functions
defineExpose({});
</script>

<template>
  <div class="welcome">
    <div class="profile grid">
      <div class="col-12 md:col-4 lg:col-3">
        <div class="text-center">
          <img
            alt="profile"
            class="logo"
            src="../../assets/images/me/me.png"
            width="300"
            height="300"
          />
        </div>
      </div>
      <div class="col-12 md:col-8">
        <div class="text-center">
          <h1 class="uppercase">Welcom to my portfolio website</h1>
          <h2 class="uppercase">
            <span>I'</span>
            <span class="text-primary">m</span>
            <span>Chum</span>
          </h2>
          <div class="media">
            <h3>
              <p> Follow me </p>
              <span>
                <i class="pi pi-facebook" style="font-size: 2rem"></i>
              </span>
              <span>
                <i class="pi pi-tiktok" style="font-size: 2rem"></i>
              </span>
              <span>
                <i class="pi pi-youtube" style="font-size: 2rem"></i>
              </span>
              <span>
                <i class="pi pi-github" style="font-size: 2rem"></i>
              </span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.uppercase,
span {
  letter-spacing: 0.2rem;
}
</style>

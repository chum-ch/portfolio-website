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
      <div class="col-12 md:col-12 lg:col-3">
        <div class="text-center mt-5">
          <img
            alt="profile"
            class="logo"
            src="../../assets/images/me/me.png"
            width="350"
            height="350"
          />
        </div>
      </div>
      <div class="col-12 md:col-12 lg:col-8">
        <div class="text-center">
          <h1 class="uppercase">Welcom to my portfolio website</h1>
          <h2 class="uppercase">
            <p>
              <span>I'</span>
              <span class="text-primary">m</span>
              <span>Chum</span>
            </p>
            <p>
              <span>I'</span>
              <span class="text-primary">m</span>
              <span>Web Developer</span>
            </p>
          </h2>
          <div class="media">
            <h3>
              <p>Follow me on</p>
              <span>
              <a href="#">
                <i class="pi pi-facebook" style="font-size: 2rem"></i>
              </a>
              </span>
              <span>
              <a href="#">
                <i class="pi pi-tiktok" style="font-size: 2rem"></i>
              </a>
              </span>
              <span>
                <a href="https://www.youtube.com/channel/UChroJJpWzzkUQGv_9bMdcPQ" target="_blank">
                  <i class="pi pi-youtube" style="font-size: 2rem"></i>
                </a>
              </span>
              <span>
              <a href="#">
                <i class="pi pi-github" style="font-size: 2rem"></i>
              </a>
              </span>
            </h3>
          </div>
          <ButtonPrimevue label="Download CV" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.welcome {
  margin: 5rem 0;
  height: 75vh;
}
.uppercase,
span {
  letter-spacing: 0.2rem;
}
h3 i {
  margin: 0rem 0.5rem;
  color: var(--vt-c-indigo);
  transition: .4s;
}
.pi-facebook:hover {
  color: var(--fb);
}
.pi-tiktok:hover {
  color: var(--github);
}
.pi-youtube:hover {
  color: var(--yt);
}
.pi-github:hover {
  color: var(--github);
}
@media (max-width: 1200px) {
  
}
@media (max-width: 576px) {
  .welcome {
  height: auto;
  margin: 0 0 3rem 0;
}
  .logo {
    width: 80%;
    height: 80%;
  }
  .text-center {
    font-size: 10px;
  }
}
</style>

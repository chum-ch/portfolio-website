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
onMounted(() => {
  // const containers = document.querySelector(".containers");
  // const nav = document.querySelector("nav");
  // containers.addEventListener("scroll", function () {
  //   if (containers.scrollTop > 0) {
  //     nav.style.boxShadow =
  //       "4px 4px 5px rgba(0,0,0,0.3)"; /* Add bottom border when scrolled */
  //   } else {
  //     nav.style.boxShadow = "0 0 0"; /* Remove bottom border when not scrolled */
  //   }
  // });
});
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
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <RouterLink to="/contact">Contact</RouterLink>
    <RouterLink to="/profile">Profile</RouterLink>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  justify-content: flex-end;
  position: sticky;
  top: 0;
  z-index: 999;
  padding: 0.5rem;
}

nav a.router-link-exact-active {
  border: 2px double #35cda9;
  color: var(--vt-c-white);
}

/* nav a.router-link-exact-active:hover {
  color: red;
} */

nav a {
  padding: 5px;
  margin: 5px;
  transition: 0.5s;
  border-radius: 5px;
  text-decoration: none;
  border: 2px double transparent;
  color: var(--vt-c-text-dark-2);
}

nav a:hover {
  background: rgba(#35cda9, 0.4);
  color: var(--vt-c-white);
}
@media (max-width: 576px) {
  nav {
    justify-content: center;
  }
}
</style>

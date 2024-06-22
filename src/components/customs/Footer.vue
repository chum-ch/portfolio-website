<script setup>
import { onMounted, reactive, ref, inject, provide, getCurrentInstance, watch } from 'vue'
const date = new Date();
const currentYear = date.getFullYear();
onMounted(()=>{});
defineEmits(['']);
defineProps({
  msg: {
    type: String,
    required: false
  }
})
// Variable
const instance = getCurrentInstance();
// Functions
defineExpose({});
</script>

<template>
  <div class="text-center footer">
    <p> <span class="text-orange-500">&copy;</span> {{ currentYear }} YOEURN Chum. All rights reserved. </p>
  </div>
</template>

<style scoped>
.footer {
  /* position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 999;
  padding: 0.5rem;
  backdrop-filter: blur(10px); */
}
</style>
<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import { onMounted, reactive, ref, inject, provide, getCurrentInstance, watch } from 'vue'
onMounted(()=>{

});
defineEmits(['']);
defineProps({
  msg: {
    type: String,
    required: false
  }
})

</script>

<template>
  <header>
    <CustomNavigation/>
  </header>
  <div class="containers m-7 min-h-screen">
    <RouterView />
  </div>
    <CustomFooter/>
</template>

<style scoped>
@media (max-width: 576px) {
  .containers {
    padding: 0;
  }
}
</style>

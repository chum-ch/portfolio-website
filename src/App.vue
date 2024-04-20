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
  <div class="containers">
    <RouterView />
  </div>
</template>

<style scoped>
.containers {
  /* Add some height to create a scrollable area */
  height: 100vh;
  padding:0 5rem;
  overflow-y: scroll;
  text-align: justify;
}
@media (max-width: 576px) {
  .containers {
    padding: 0;
  }
}
</style>

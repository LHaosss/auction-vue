<script setup>
import { onBeforeMount } from 'vue';
import { useMainStore } from './stores';
import router from './router'

const store = useMainStore()

onBeforeMount(()=>{
  if (store.username === "" || store.userXid === "") {
    router.push('/login')
  } else {
    router.push('/')
  }
})

</script>

<template>
  <RouterView class="main" />
</template>

<style scoped>
.main {
  text-align: center;
}
</style>

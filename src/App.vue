<script setup>
import { onMounted, onUpdated } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import { useStore } from './stores/counter'
import router from './router';

const store = useStore()

onMounted(() => {
  alert(store)
  if (store.userXid === "") {
    router.push('/login')
  }
})

</script>

<template>
  <header v-bind:style="store.display">
    <div class="header-bar">
      <div class="header-wrap">
        <img class="header-img" src="" alt="">
        <div class="name">name</div>
      </div>
      <hr class="deviding-line">
    </div>
    <div class="foot-bar">
        <RouterLink class="asss" to="/">拍卖</RouterLink>
        <RouterLink class="asss" to="/about">直播</RouterLink>
        <RouterLink class="asss" to="/info">我的信息</RouterLink>
        <RouterLink class="asss" to="/login">登陆</RouterLink>
    </div>
  </header>

  <RouterView class="main" />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.header-bar {
  position: fixed;
  width: 100vw;
  min-height: calc(5vh + 13vw);
  background-color: #fff;
  top: 0;
}

.header-wrap {
  padding: 3vh 0 0 8vw;
}

.header-img {
  width: 13vw;
  height: 13vw;
  border-radius: 50%;
  border: 1px solid #000;
  vertical-align:text-top;
}

.name {
  display: inline-block;
  margin-left: 10px;
  font-size: 5vw;
}


.deviding-line {
  display: block;
  margin: auto;
  margin-top: 1vh;
  width: 84vw;
  box-shadow: 2px 3px 20px #b6b6b6;
}

.foot-bar {
  position: fixed;
  width: 100vw;
  top: 90vh;
  height: 10vh;
  border-radius: 10px 10px 0 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  box-shadow: -10px 5px 20px #b6b6b6;
  background-color: #fff;
}

.asss {
  display: inline-block;
  width: 20vw;
  text-align: center;
}

.main {
  margin-top: calc(8vh + 13vw);
  margin-bottom: 12vh;
}

</style>

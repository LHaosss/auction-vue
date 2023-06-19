<script setup>
import { onBeforeMount, ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
import { useMainStore } from '../stores';
import router from '../router'
import Auction from '../components/Auction.vue'
import LiveStreaming from '../components/LiveStreaming.vue'
import MyInfo from '../components/MyInfo.vue'

const store = useMainStore()

const which = ref("auction")

const myInfoMain = ref(null)


function ChooseAuction() {
  which.value = 'auction'
}

function ChooseLiveStreaming() {
  which.value = 'liveStreaming'
}

function ChooseMyInfo() {
  which.value = 'myInfo'
  myInfoMain.value?.changeSelected()
}




onBeforeMount(()=>{
  if (store.username === "" || store.userXid === "") {
    router.push('/login')
  }
})
</script>

<template>
  <header>
        <div class="header-bar">
        <div class="header-wrap">
            <img class="header-img" src="" onerror="this.src='/img/header_img.png';this.onerror=null;" >
            <div class="name">{{ store.username }}</div>
        </div>
        <hr class="deviding-line">
        </div>
        <div class="foot-bar">
          <div class="asss" @click="ChooseAuction">拍卖</div>
          <div class="asss" @click="ChooseLiveStreaming">直播</div>
          <div class="asss" @click="ChooseMyInfo">我的信息</div>
        </div>
  </header>
  <main class="main">
    <div style="margin-top: calc(8vh + 13vw);"></div>
    <Auction v-if="which === 'auction'" />
    <LiveStreaming v-else-if="which === 'liveStreaming'" />
    <MyInfo v-else ref="myInfoMain" />
    <div style="height: 13vh;"></div>
  </main>
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
  border: 1px solid #b7b7b7;
  vertical-align:text-top;
  box-shadow: 0px 1px 5px #b8b8b8;
  ruby-align: center;
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
.asss:hover{
  color: aquamarine;
}

.main {
  width: 80vw;
  margin-left: 10vw;
}
</style>
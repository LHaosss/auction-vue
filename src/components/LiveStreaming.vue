<script setup>
import Live from "./liveStreaming/Live.vue";
import { ref, inject } from "vue";
// 请求后端服务，获取所有直播信息
const streamUrl = ref(
  "artc://auction-live.code520.com.cn/auction-android/room?auth_key=1697208653-0-0-4db1ed65909bfa79b6dc6b19cbca8630"
);
const show = ref(false);
const lives = ref([]);

// const axios = inject("$myHttp");

// axios
//   .post('http://172.21.240.137' + ":7773/live/v1/live/get", {
//     tag: "temp",
//   })
//   .then((response) => {
//     lives.value = response.data.live_urls;
//   })
//   .catch((err) => {
//     alert(err.response.data);
//   });

// function getLive(url) {
//   streamUrl.value = url;
//   show.value = true;
// }
</script>

<template>
  <!-- <div v-if="!show">
    <div v-for="item in lives" @click="getLive(item)" :key="item">
      {{ item }}
    </div>
  </div> -->
  <div @click="show = !show">ssss</div>

  <Live v-if="show" :stream-url="streamUrl" />
</template>
<script setup>
import router from "../../router";
import { AliRTS } from "aliyun-rts-sdk";

const props = defineProps(["streamUrl"]);
console.log(props.streamUrl);

const aliRts = AliRTS.createClient();

if (props.streamUrl === "") {
  console.log("播放流不能为空");
  router.push("/");
}

aliRts.subscribe(props.streamUrl).then((remoteStream) => {
  const temp = document.getElementById("temp");
  const audio = document.createElement("video");
  audio.controls = true;
  audio.style.width = '100%';
  remoteStream.play(audio);
  temp.appendChild(audio
  );
});
</script>

<template>
  <div id="temp"></div>
</template>

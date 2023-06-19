<script setup>
    import { ref } from 'vue'
    import { defineExpose } from "vue"
    import MyAuctions from './myinfo/MyAuctions.vue';
    import MyOffers from './myinfo/MyOffers.vue';
    import PostAuction from './myinfo/PostAuction.vue';

    const selected = ref('main')

    const changeSelected = () => {
        selected.value = 'main'
    }

    function myAuctions() {
        selected.value = 'auction'
        console.log(selected)
    }

    function myOffers() {
        selected.value = 'auction'
        console.log(selected)
    }
    
    function postAuction() {
        selected.value = 'post'
        console.log(selected)
    }


    defineExpose({ 
        changeSelected
    })


</script>

<template>
    <div  v-if="selected === 'main'" class="myinfo-wrap">  
        <div @click="myAuctions">我的拍卖</div>
        <div @click="myOffers">我的出价</div>
        <div @click="postAuction">发布拍卖</div>
    </div>
    <MyAuctions v-else-if="selected === 'auction'">MyAuctions</MyAuctions>
    <MyOffers v-else-if="selected === 'offer'">MyOffers</MyOffers>
    <PostAuction v-else>PostAuction</PostAuction>
    
</template>

<style scoped>
.myinfo-wrap {
    width: 100%;
    height: 60vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
}
</style>
<script setup>
    import { ref } from 'vue'
    import PostAuction from './myinfo/PostAuction.vue';

    const selected = ref('main')

    const changeSelected = () => {
        selected.value = 'main'
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
        <div @click="postAuction">发布拍卖</div>
    </div>
    <PostAuction v-else-if="selected === 'post'">PostAuction</PostAuction>
    
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
<script setup>
// 获取拍卖信息
import { ref, inject, onMounted } from 'vue'
import { useMainStore } from '../stores';
    
const axios = inject('$myHttp')
const store = useMainStore()

const auctionsInfo = ref(null)

onMounted(() => {
    axios.get('http://127.0.0.1:8882/auction/v1/auction/auctions/time')
    .then(response => {
        auctionsInfo.value = response?.data?.auctions_info
    })
    .catch(err => {
        console.log(err)
    })
})

function offerPrice(current_price, auction_xid) {
    // 获取出价
    const offer = document.getElementsByClassName(auction_xid)[0]

    // 比较出价，如果高于出价的话，则提交出价
    if (offer.value > current_price) {
        // 提交出价
        axios.post(
            'http://127.0.0.1:8882/auction/v1/auction/offer', 
            {
                "auction_xid": auction_xid,
                "offer_user_xid": store.userXid,
                "offer_price": parseInt(offer.value, 10)
            }
        )
        .then(response => {
            for (let i in auctionsInfo.value) {
                if (auctionsInfo.value[i].auction_xid === auction_xid) {
                    auctionsInfo.value[i].current_price = response.data?.current_price
                    auctionsInfo.value[i].offer_user_xid = response.data?.offer_user_xid
                }
            }
        })
        .catch(err => console.log(err))
    }else {
        alert("请提交高于现价的价格")
    }

    offer.value=''

}
    
</script>

<template>
    <div>
        <div class="item" v-for="auction in auctionsInfo" :key="auction?.auction_xid">
            <img class="img" :src="auction?.auction_img_url" alt="">
            <p>{{ auction.auction_name }}</p>
            <h5 class="price">当前价格：{{ auction.current_price ? auction.current_price : auction.base_price }}</h5>
            <input :class="auction.auction_xid" style="width: 14vw; margin-right: 2vw;" type="number">
            <button @click="offerPrice(auction.current_price ? auction.current_price : auction.base_price, auction.auction_xid)">出价</button>
        </div>
    </div>
</template>

<style scoped>
.item {
    display: inline-block;
    width: 38vw;
    min-height: 44vw;
    padding-bottom: 1vw;
    margin: 1vw;
    background-color: rgba(232, 232, 232, 0.3);
    border-radius: 10px;
    box-shadow: 1px 1px 5px ;
}

.img {
    width: 38vw;
    height: 34vw;
    border-radius: 10px;
}
</style>
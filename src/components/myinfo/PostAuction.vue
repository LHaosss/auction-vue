<script setup>
    import { ref, inject } from 'vue'
    import { useMainStore } from '../../stores';
    
    const axios = inject('$myHttp')
    const store = useMainStore()

    const name = ref("")
    const userXid = ref("")
    const price = ref(0)
    const type = ref("艺术品")
    const fileUrl = ref("")

    const file = ref()
    const mask = ref(false)

    const selected = ref("artwork")

    const options = [
        {text: "艺术品", value: "artwork", key:"a"},
        {text: "文玩", value: "artscrafts", key:"b"},
        {text: "珠宝", value: "jewelry", key:"c"},
        {text: "房产", value: "house", key:"d"},
        {text: "汽车", value: "car", key:"e"},
        {text: "烟酒", value: "smokedrink", key:"f"},
        {text: "服饰", value: "clothes", key:"g"},
        {text: "其他", value: "others", key:"h"}
    ]


    function chooseImg(e) {
        file.value = e.target.files[0]
        // 将图片提交，并返回路径
        let param = new FormData()
        param.append('myFile', file.value)
        let config = {
            headers: {'Content-Type': 'multipart/form-data'}
        }
        
        axios.post('http://127.0.0.1:7771/img/v1/img/upload', param, config)
            .then(response => {
                fileUrl.value = response?.data?.img_url
            })
            .catch(err => {
                console.log(err)
            })
    }
    
    function submitAuction() {
        // userXid
        userXid.value = store.userXid
        // 拍品品类
        const t = options.filter(option => option.value === selected.value)
        type.value = t[0].text

        if (name.value !== "" && userXid.value !== "" && price.value > 0 && type.value !== "" && fileUrl.value !== "") {
              // 发送提交竞品请求
                axios.post(
                    'http://127.0.0.1:8882/auction/v1/auction/post',
                    {
                        auction_name: name.value,
                        post_user_xid: userXid.value,
                        base_price: price.value,
                        type: type.value,
                        auction_img_url: fileUrl.value
                    }
                )
                .then(response => {
                    console.log(response)
                })
                .catch(err => {
                    console.log(err)
                })
                mask.value = true
                setTimeout(()=>{
                    hideMask()
                }, 1500);

        } else {
            alert("请填写完整竞拍信息")
        }
    }

    function hideMask() {
        mask.value =false
    }
    
</script>

<template>
    <div class="mask" v-show="mask">提交竞拍成功</div>
    <img class="auction-img" :src="fileUrl" alt="" onerror="this.src='/img/auctions.png';this.onerror=null" >
    <input class="img-choose" type="file" text="选择图片" name="image" id="file" ref="file" @change="chooseImg($event)">
   <div>拍品：</div>
    <input v-model="name" type="text">
    <div>底价：</div>
    <input v-model="price" type="number">￥
    <div>品类：</div>
    <select v-model="selected">
        <option v-for="option in options" :key="option.key" :value="option.value">{{ option.text }}</option>
    </select>
    <div></div>
    <button @click="submitAuction()">提交</button>
</template>

<style scoped>
.mask {
    position: fixed;
    left: 25vw;
    top: 30vh;
    text-align: center;
    line-height: 10vh;
    width: 50vw;
    height: 10vh;
    background-color: rgba(200, 200, 200, 0.5);
    border-radius: 10px;
}
.auction-img {
    width: 15vw;
    height: 15vw;
    border: 1px solid #b6b6b6;
}

.img-choose {
    text-decoration: none;
}
</style>
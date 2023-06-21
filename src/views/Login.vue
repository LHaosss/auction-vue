<script setup>
import { useMainStore } from '../stores'
import router from '../router';
import { inject, ref, onMounted } from 'vue';

    const un = ref("")
    const pwd = ref("")

    const store = useMainStore()
    const axios = inject('$myHttp')

    function  LoginIn() {
        if (un === "") {
            alert("用户名不能为空")
            return
            }
        if (pwd === "") {
            alert("用户名不能为空")
            return
        }

        // 使用axois请求后端服务，获取数据
        axios.post(
            'http://192.168.1.9:8881/userapi/v1/user/login',
            {
                username: un.value,
                password: pwd.value
            }
        )
        .then(response => {
            store.username = response.data.user_name
            store.userXid = response.data.xid
            store.display = "display: block"
            router.push('/')
        })
        .catch(err => {
            alert(err.response.data)
        })

        // headerImg = document.getElementsByClassName('header-img')
      
        return
    }

    onMounted(() => {
        store.display = "display: none"

        if (store.username !== "" && store.userXid !== "") {
            router.push('/auction')
        }
    })
</script>

<template>
    <div>
        <div  class="login-wrap">
            <div class="d">
                用户名：
                <input v-model="un" type="text" placeholder="username">
                密码：
                <input v-model="pwd"  type="password" placeholder="password">
            </div>
            <button @click="LoginIn" class="login-button">登陆</button>
        </div>
        <RouterLink class="asss" to="/register">注册</RouterLink>
    </div>
</template>
  
<style scoped>


.login-wrap {
    width: 60vw;
    height: 30vh;
    margin: 20vw;
    margin-top: 26vh;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    justify-content: space-around;
    box-shadow: 0 5px 20px #b6b6b6;
}

.d {
    display: inline-block;
    width: 40vw;
    margin-left: 10vw;
}

.login-button {
    width: 20vw;
    margin-left: 20vw;
}
</style>
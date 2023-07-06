<script setup>
    import { inject, ref, onMounted } from 'vue';
    import router from '../router'
    import { useMainStore } from '../stores';

    const axios = inject('$myHttp')
    const store = useMainStore()

    const username = ref("")
    const password = ref("")
 
    function Register() {
        alert("1")
        if (username === "") {
            alert("用户名不能为空")
        }
        if (password === "") {
            alert("用户名不能为空")
        }

        axios.post(
            import.meta.env.VITE_REQUEST_IP+':8881/userapi/v1/user/register',
             {
                username: username.value,
                password: password.value
             }
        )
        .then(response => {
            alert("2")
            alert(response.data.description)
            router.push('/login')
        })
        .catch(err => {
            alert("3")
            console.log(err)
            alert(err)
        })
        alert(4)
    }

    onMounted(() => {
        store.display = "display: none"
    })

</script>

<template>
    
    <div>
        <div  class="login-wrap">
            <div class="d">
                用户名：
                <input v-model="username" type="text" placeholder="username">
                密码：
                <input v-model="password"  type="password" placeholder="password">
            </div>
            <button @click="Register" class="login-button">注册</button>
        </div>
        <RouterLink class="asss" to="/login">登陆</RouterLink>
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
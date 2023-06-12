<script>
    export default {
        data() {
            return {
                username:"",
                password: ""
            }
        },
        methods: {
            Register() {
                if (this.username === "") {
                    alert("用户名不能为空")
                }
                if (this.password === "") {
                    alert("用户名不能为空")
                }
            }
        }
    }
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
<script>
    import { useStore } from '../stores/counter'
    import { computed } from 'vue'
    import router from '../router';


     export default {
        data() {
            return {
                un:"",
                pwd: ""
            }
        },
        methods: {
            LoginIn() {
                if (this.un === "") {
                    alert("用户名不能为空")
                    return
                }
                if (this.pwd === "") {
                    alert("用户名不能为空")
                    return
                }
                this.username = this.un
                this.userXid = "temp"
                alert("here")
                router.push('/')
                return
            }
        },
        setup() {
            const store = useStore()

            const username = computed({
                get: () => store.username,
                set(newVal) {
                    store.message = newVal
                }
            })

            const userXid = computed({
                get: () => store.userXid,
                set(newVal) {
                    store.userXid = newVal
                }
            })

            const display = computed({
                get: () => store.display,
                set(newVal) {
                    store.display = newVal
                }
            })
           
            return {
                store, username, userXid, display
            }
        }

    }
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
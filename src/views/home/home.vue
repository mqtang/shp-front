<template>
    <div id="h-page">
        <h3>WeChat</h3>
        <!--        <img src="@/images/contact/wechat.jpg" alt="wx">-->
        <el-button onclick="" type="primary" @click.native.prevent="login">按钮</el-button>
    </div>
</template>

<script>
    import {login} from '@/api/login'

    export default {
        name: "home",
        created() {
            login({id: 123}).then(response => {
                console.log(response)
            })
        },
        methods: {
            login() {
                login({id: 123})
            }
        }
    }
</script>

<style scoped>
    #h-page {
        width: 50%;
        /*background-color: snow;*/
        margin: 80px auto;
        text-align: center;
    }
</style>

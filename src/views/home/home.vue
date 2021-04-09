<template>
    <div id="h-page">
        <h3>WeChat</h3>
        <!--        <img src="@/images/contact/wechat.jpg" alt="wx">-->
        <div>
            IP: => {{ip}}
        </div>
        <el-button onclick="" type="primary" @click.native.prevent="getUserIp">按钮</el-button>
    </div>
</template>

<script>
    import {login, getIp} from '@/api/login'

    export default {
        name: "home",
        data() {
            return {
                ip: ""
            }
        },
        created() {
            /*login({id: 123}).then(response => {
                console.log(response)
            })*/
        },
        methods: {
            getUserIp() {
                getIp().then(response => {
                    this.ip = response.result;
                })
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

// noinspection SpellCheckingInspection
import Axios from "axios"
import {Notification, MessageBox, Message} from 'element-ui'
import store from '../store'
import {getToken} from './auth'

Axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'
const service = Axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    withCredentials: false,
    timeout: 10000
})

service.interceptors.request.use(
    config => {
        return config;
    },
    error => {
        console.log(error)
        return Promise.reject(error)
    }
)
service.interceptors.response.use(
    response => {
        const resp = response.data
        if (resp.status.code !== 0) {
            Message({
                message: resp.status.msg || 'Error',
                type: 'error',
                duration: 3 * 1000
            })
        } else {
            return resp
        }
    },
    error => {
        console.log(error)
        return Promise.reject(error)
    }
)

export default service

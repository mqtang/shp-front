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
    prepare => {
        return prepare;
    },
    error => {
        console.log(error)
        return Promise.reject(error)
    }
)
service.interceptors.response.use(
    response => {
        return response
    },
    error => {
        console.log(error)
        return Promise.reject(error)
    }
)

export default service

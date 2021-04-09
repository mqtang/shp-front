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
        // check server status code
        if (resp.status.code !== '0') {
            Message({
                message: resp.status.msg || 'Error',
                type: 'error',
                duration: 2 * 1000
            })
            return Promise.reject(new Error(resp.status.msg || 'Error'))
        }
        // return api data
        else {
            return resp
        }
    },
    error => {
        Message({
            message: error.message,
            type: 'error',
            duration: 2 * 1000
        })
        return Promise.reject(new Error(error.message))
    }
)

export default service

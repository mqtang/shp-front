// noinspection SpellCheckingInspection
import Axios from "axios"
import {Notification, MessageBox, Message} from 'element-ui'
import store from '../store'
import {getToken} from './auth'

Axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'
const apiClient = Axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    withCredentials: false,
    timeout: 10000
})




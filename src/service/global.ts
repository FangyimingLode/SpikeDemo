/*
 * @Description: axios封装
 * @Author: Fangyiming
 * @Date: 2019-12-07 11:16:26
 * @LastEditTime: 2019-12-08 23:45:29
 */
import axios from 'axios';

let service = axios.create({
    baseURL: 'http://localhost:3000',
    withCredentials: true,
    timeout: 3000
})
// axios.CancelToken
// 请求拦截器
service.interceptors.request.use(config => {
    return config
}, error => {
    return Promise.reject(error);
})
// 响应拦截器
service.interceptors.response.use(config => {
    return config;
}, error => {
    return Promise.reject(error);
})

export {
    service
}

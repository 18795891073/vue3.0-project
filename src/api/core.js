// Api 配置

import axios from 'axios'
// 引入golbal文件，统一管理url
import global_ from './global'
const baseUrl = global_.BASE_URL;

axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8';
const service = axios.create({
  baseURL: baseUrl,
  timeout: 15000,// 请求超时,
});
export default service

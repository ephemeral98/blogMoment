import axios from 'axios';
const xsLocal = 'http://192.168.31.238:9101'; // 雪山本地
const xlLocal = 'http://192.168.31.240:9101'; // 小陆本地
const testUrl = 'http://120.77.211.242:9701'; // 测试服
// const masterUrl = 'http://18.139.225.192'; // 正式服
const masterUrl = 'https://coinoriginswap.org/'; // 域名https 正式服

// const baseURL = process.env.NODE_ENV == 'development' ? testUrl : '';
const baseURL = masterUrl;

const defaultConfig = {
  baseURL,
  timeout: 30000,
};
Object.assign(axios.defaults, defaultConfig);
axios.defaults.headers['Content-Type'] = 'application/json';

// 请求拦截器
axios.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么
    /* const uid = localMemory.getItem('uid') || ''

    const params = { 
      uid,
    } */

    /* if (config.method === 'get') {
      config.params = {
        ...config.params,
        ...params,
      };
    } else {
      config.data = {
        ...config.data,
        ...params,
      };
    } */
    return config;
  },
  (err) => {
    // 对请求错误做些什么
    return Promise.reject(err);
  }
);

// 响应拦截器
axios.interceptors.response.use(
  (resp) => {
    if (resp.data?.code !== 1) {
      /* ElMessage({
        message: resp.data?.message,
        type: 'error',
      }); */
    }
    return resp.data;
  },
  (err) => {
    return Promise.reject(err);
  }
);

/**
 * get请求
 * @param {Object} params 请求参数query
 * @returns {Promise}
 * @author gzq
 */
export function $GET(url: string, params?: object) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, { params })
      .then((resp) => {
        console.log('respppp', resp);
        resolve(resp);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

/**
 * post请求
 * @param {Object} params 请求参数 body
 * @returns {Promise}
 * @author gzq
 */
export function $POST(url: string, params: object) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, { ...params })
      .then((resp) => {
        resolve(resp);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export default axios;

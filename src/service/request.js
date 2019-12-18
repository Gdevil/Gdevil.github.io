import axios from 'axios';
import useAuthorize from '../utils/sessionAuth';
import { Loading, Message } from 'element-ui';
import Login from 'u/showLogin';

/**
 * 网络请求封装
 */
const apiClientConfig = {
  development: {
    BASE_HOST: 'https://rest-test.gyk.com',
    M_HOST: 'http://localhost:8080',
  },
  production: {
    BASE_HOST: 'https://rest.gyk.com',
    M_HOST: 'Gdevil.github.io',
  },
  test: {
    BASE_HOST: 'https://rest-test.gyk.com',
    M_HOST: 'http://localhost:8080',
  }
}

const [user] = useAuthorize();
const API = apiClientConfig[process.env.NODE_ENV || 'development'];

async function apiRequest(method, url, data, config) {
  let requestData = data;
  let params = data;

  if (method === 'GET') {
    requestData = null;
  } else {
    params = null;
  }

  if (config.showLoading) {
    Loading.service();
  }

  const token = config.defaultToken || user.token;

  const response = await axios(url, {
    data: requestData,
    headers: {
      token: token || ''
    },
    method,
    params
  })

  if (config.showLoading) {
    Loading.service().close()
  }

  if (response.data.status === 80003) {
    //登录已过期
    window.setSessionStorage && window.setSessionStorage('login', 'logout');
    user.logout();
    
    if(!config.skipError) {
      Message.error({
        message: response.data.msg,
        duration: 2000
      });
      setTimeout(function(){
        Login.install()
      },1000)
    }
  }

  return response.data;
}
function createClient(
  method,
  url='',
  defaultData = {},
  defaultConfig
) {
  return (u , data, apiConfig = {}) => {
    const url = u;

    const config = {
      ...defaultConfig,
      ...apiConfig
    };

    const requestData = {
      ...defaultData,
      ...data
    };

    return apiRequest(method, url, requestData, config);
  };
}

export function createBaseClient(
  method,
  url,
  defaultData = {},
  defaultConfig = {}
) {
  return createClient(method, API.BASE_HOST + url, defaultData, defaultConfig);
}

export function createMapiClient(
  method,
  url= '',
  defaultData = {},
  defaultConfig = {}
) {
  return createClient(method, API.M_HOST + url, defaultData, defaultConfig);
}


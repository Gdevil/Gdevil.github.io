import qs from 'query-string';
import Login from 'u/showLogin';
import apiClient from '@/service/user';
import store from './store';
import observeSession from './observe';

export class User {
  init() {
    const token = qs.parse(window.location.search).token;

    if (typeof token === 'string') {
      this.setToken(token);
    }

    if (this.token) {
      return;
    }
  }

  get token() {
    return localStorage.getItem('token');
  }

  get authorized() {
    return !!this.token;
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('avatar');
    localStorage.removeItem('nickname');
    observeSession.emmit('userInfoObserve', 1)
  }

  login() {
    Login.install()
  }

  setToken(token) {
    localStorage.setItem('token', token);
  }

  // async getUserInfo() {
  //   const res = await apiClient.base.member({},{skipError: true})
  //   if(res.status == 10000) {
  //     observeSession.emmit('userInfoObserve', 1)
  //     localStorage.setItem('avatar', res.body.avatar);
  //     localStorage.setItem('nickname', res.body.nickname);
  //   }else {
  //     window.setSessionStorage && window.setSessionStorage('login', 'logout');
  //     this.logout;
  //   }
  // }
}

export default function useAuthorize() {
  const user = new User();

  return [user];
}

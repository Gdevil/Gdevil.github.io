import Vue from 'vue';
import Login from 'c/login';

const LoginClass = Vue.extend(Login)

Login.install = function (data) {
  const instance = new LoginClass({
    data
  }).$mount()
  document.body.appendChild(instance.$el)

  Vue.nextTick(() => {
    instance.dialogFormVisible = true
    // dialogFormVisible 和弹窗组件里的show对应，用于控制显隐
  })
}

export default Login;
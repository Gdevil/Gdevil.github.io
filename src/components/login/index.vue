<template>
  <el-dialog
    id="loginCompont"
    title="登录/注册"
    :visible.sync="dialogFormVisible"
    width="460px"
    center
  >
    <el-form :model="form" :rules="rules">
      <el-form-item label="手机号码" :label-width="formLabelWidth" prop="phone" >
        <el-input v-model="form.phone" autocomplete="on"></el-input>
      </el-form-item>
      <el-form-item label="短信验证码" :label-width="formLabelWidth">
        <el-row>
          <el-col :span="12">
            <el-form-item prop="vcode">
              <el-input v-model="form.vcode"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="11" :offset="1">
            <el-button type="success" style="width:100%" @click="getCode" :disabled="!!countDown">{{countDown>0?countDown+'秒后重新发送':'获取验证码'}}</el-button>
          </el-col>
        </el-row>
        
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button type="primary" style="width:320px;" round @click="handleSubmit" :loading="loading">立即登录/注册</el-button>
    </div>
  </el-dialog>
</template>

<script>
import md5 from 'js-md5';

export default {
  name: 'login',
  props: [],
  data() {
    return {
      dialogFormVisible: false,
      form: {
        phone: '',
        vcode: ''
      },
      rules: {
        phone: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { min: 11, max: 11, message: '请输入正确手机号', trigger: 'blur' }
        ],
        vcode: [
          { required: true, message: '请输入验证码', trigger: 'blur' }
        ]
      },
      formLabelWidth: '120px',
      countDown: 0,
      loading: false
    };
  },
  watch: {
    dialogFormVisible: function (val, old) {
      if(!val){
        let that = this;
        setTimeout(function(){
          document.body.removeChild(that.$el)
        },200)
      }
    }
  },
  created() {},
  methods: {
    async handleSubmit() {
      let that = this;
      if(this.form.phone.length == '' || this.form.vcode == ''){
        this.$message.error({
          message: "请填写完整内容",
          duration: 2000
        });
        return;
      }
      this.loading = true;
      const res = await this.$apiClient.base.login({
        phone: this.form.phone,
        vcode: this.form.vcode
      })
      this.loading = false;
      if(res.status == 10000) {
        this.$message.success({
          message: "登录成功！",
          duration: 2000
        });
        this.$user.setToken(res.body.token)
        window.setSessionStorage('login', 'login')
        setTimeout(function(){
          that.dialogFormVisible = false;
          location.reload()
        },1000)
      }else {
        this.$message.error({
          message: res.msg,
          duration: 2000
        });
      }
    },
    async getCode(){
      if(this.form.phone.length != 11) {
        this.$message.error({
          message: "手机号码不完整",
          duration: 2000
        });
        return;
      }
      if(this.countDown > 0) {
        return;
      }else {
        this.countDown = 60
        this.countFun()
      }
      const timestamp = parseInt(new Date().getTime()/1000);
      const res = await this.$apiClient.base.vcode({
        phone: this.form.phone
      },{
        defaultToken: md5(timestamp + '325e1fe67673f75185c38bddb0e92bb1')
      })
    },
    countFun() {
      let that = this;
      if(this.countDown <= 0) {
        return;
      }
      setTimeout(function(){
        that.countDown--
        that.countFun()
      },1000)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.menu {
  position: fixed;
  top:0;
  left:0;
  width: 100%;
  z-index: 99;
}
</style>

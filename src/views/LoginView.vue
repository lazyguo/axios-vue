<template>
  <div class="Login">
    <div class="login-box">
      <el-row class="login-header">登录</el-row>
      <el-row style="margin-top: 30px">
        <el-form
          ref="form"
          :model="form"
          label-width="70px"
          style="width: 400px; margin: 0 auto"
          label-position="right"
        >
          <el-form-item label="用户名:" prop="username">
            <el-input placeholder="请输入用户名" size="medium" v-model="form.username"></el-input>
          </el-form-item>
          <el-form-item label="密码:" prop="password">
            <el-input
              show-password
              placeholder="请输入密码"
              size="medium"
              v-model="form.password"
            ></el-input>
          </el-form-item>
        </el-form>
      </el-row>
      <el-row class="login-login">
        <div class="box" ref="showD">
          <div class="container">
            <div class="loading-bar"></div>
            <span class="loading">加载中...</span>
          </div>
          <div class="start" @click="login">起飞</div>
        </div>
      </el-row>
    </div>
  </div>
</template>

<script>
import { login } from '@/axios/api/login'
import cookie from '@/utils/utils.cookie'
export default {
  name: 'Login',
  data() {
    return {
      form: {
        username: 'admin',
        password: '123456'
      }
    }
  },
  mounted() {},
  methods: {
    login() {
      this.$axios({ url: '/login', method: 'post', data: this.form }).then(res => {
        let { data } = res
        if (data.code == 200) {
          let info = this.$refs.showD
          info.style.transform = 'rotateX(' + -90 + 'deg)'
          info.style.bottom = 24 + 'px'
          let token = 'Bearer-' + res.data
          cookie.set('token', token)
          cookie.set('Authorization', token)
          setTimeout(() => {
            this.$message.success(data.msg)
            this.$router.push('/home')
          }, 800)
        } else {
          this.$message.error(data.msg)
        }
      })
      // login(this.form).then(res => {
      //   if(res.isOk === true) {
      //     let token = 'Bearer-' + res.data
      //     cookie.set('token',token)
      //     cookie.set('Authorization',token)
      //   }
      //   console.log('res',res)
      // })
    }
  }
}
</script>

<style scoped>
html,
body {
  width: 100%;
  height: 100%;
}
.Login {
  width: 100%;
  height: 100%;
  background: url('../assets/img/file2.png') no-repeat fixed center;
  background-size: 100% 100%;
}
.login-box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 480px;
  height: 260px;
  border-radius: 45px;
  background-color: rgba(255, 255, 255, 0.5);
}
.login-header {
  font-size: 22px;
  color: #24292e;
  margin-top: 25px;
}
::v-deep .el-form .el-form-item__label {
  color: #24292e;
}
.login-login {
  position: relative;
  width: 350px;
  height: 80px;
}
.box {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 63px;
  bottom: 35px;
  transform-style: preserve-3d;
  transition: all 0.5s;
  margin: 0 auto;
}
.start {
  transform: rotateZ(0) translateZ(17px);
  margin: 0 auto;
  width: 95px;
  height: 37px;
  line-height: 37px;
  border-radius: 5px;
  color: #f9cc9d;
  font-size: 18px;
  background-color: #977f91;
  cursor: pointer;
  box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.5);
}
.container {
  transform: rotateX(90deg) translateZ(-18px);
  width: 240px;
  height: 37px;
  background-color: rgba(67, 93, 118, 0.5);
  margin: 0 auto;
  border-radius: 5px;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.2);
}
.loading-bar {
  display: inline-block;
  position: relative;
  width: 100%;
  height: 10px;
  overflow: hidden;
  background-color: #f1f1f1;
  border-radius: 5px;
  box-shadow: inset 0 0 5px rgba(255, 255, 255, 0.2);
}
.loading-bar::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  animation: load-animate infinite 0.8s;
}
.loading {
  animation: text-animate infinite 0.8s;
}
@keyframes load-animate {
  0% {
    width: 0%;
    background-color: #ff6369;
  }
  70% {
    width: 70%;
    background-color: skyblue;
  }
  100% {
    width: 100%;
    background-color: #d6e663;
  }
}
@keyframes text-animate {
  0% {
    color: #ff6369;
  }
  70% {
    color: skyblue;
  }
  100% {
    color: #d6e663;
  }
}
</style>

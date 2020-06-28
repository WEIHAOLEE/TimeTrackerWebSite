<template>
  <div
    :style="{backgroundImage:'url('+url+')'}"
    style="background-size: 100% 100%; position: absolute; width:100%; top:70px;bottom:50px; left:0px"
  >
    <el-card class="box-card">
      <el-image style="width: 10%; height: 10%;" :src="logo" :fit="fit"></el-image>
      <br />
      <h1>时间追踪者 账户管理</h1>
      <el-button type="primary" round plain @click="loginShow = !loginShow">登录</el-button>
      <el-button type="info" round plain @click="registerShow = !registerShow">注册</el-button>
    </el-card>
    <el-collapse-transition>
      <Register v-show="registerShow"></Register>
    </el-collapse-transition>
    <el-collapse-transition>
      <Login v-show="loginShow"></Login>
    </el-collapse-transition>
  </div>
</template>

<script>
import Register from "./register";
import Login from "./login";
export default {
  name: "mainPage",
  components: {
    Register,
    Login
  },
  data() {
    return {
      logo: require("@/assets/logo.png"),
      url: require("@/assets/backGround.jpg"),
      registerShow: false,
      loginShow: false
    };
  }
};
</script>

<style>
.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}

.box-card {
  width: 800px;
  margin: 0 auto;
  margin-top: 20px;
  filter: alpha(Opacity=90);
  -moz-opacity: 0.9;
  opacity: 0.9;
}
</style>
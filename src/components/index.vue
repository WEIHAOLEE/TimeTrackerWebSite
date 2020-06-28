<template>
  <div>
    <el-container>
      <el-header>
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          router
          style=" position: relative;"
        >
          <el-menu-item>
            <el-image style="width: 40px; height: 40px;" :src="logoSrc" :fit="fit"></el-image>
          </el-menu-item>
          <el-menu-item index="/">首页</el-menu-item>
          <el-submenu index="2">
            <template slot="title">软件介绍</template>
            <el-menu-item index="2-1">功能介绍</el-menu-item>
            <el-menu-item index="2-2">常见问题</el-menu-item>
          </el-submenu>
          <el-menu-item style="float:right" index="/account">账户管理</el-menu-item>
          <el-menu-item style="float:right" index="/about">关于我们</el-menu-item>
        </el-menu>
        <div class="line"></div>
      </el-header>
      <el-main
        :style="{minHeight:windowsHeight + 'px'}"
        style="padding-top:5px; padding-left:0px; padding-right:0px"
      >
        <transition name="el-fade-in">
          <router-view></router-view>
        </transition>
      </el-main>
      <el-footer style="width:100%; ">
        <!--分割线-->
        <el-divider></el-divider>Copyright WeiHaoLee. All Rights Reserved.
      </el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      fit: "fill",
      logoSrc: require("@/assets/logo.png"),
      windowsHeight: 0
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  mounted() {
    //动态设置内容高度 让footer始终居底   header+footer的高度是100
    this.windowsHeight = document.documentElement.clientHeight - 140; //监听浏览器窗口变化
    window.onresize = () => {
      this.windowsHeight = document.documentElement.clientHeight - 140;
    };
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

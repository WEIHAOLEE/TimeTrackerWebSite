<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="logo">
        <el-image style="width: 40px; height: 40px;" :src="logoSrc" :fit="fit"></el-image>
      </el-menu-item>
      <el-menu-item index="1">
        首页
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">软件介绍</template>
        <el-menu-item index="2-1">功能介绍</el-menu-item>
        <el-menu-item index="2-2">常见问题</el-menu-item>
      </el-submenu>
      <el-menu-item style="float:right" index="4">账户管理</el-menu-item>
      <el-menu-item style="float:right" index="3">关于我们</el-menu-item>
    </el-menu>
    <div class="line"></div>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      fit:"fill",
      logoSrc: require("@/assets/logo.png")
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
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

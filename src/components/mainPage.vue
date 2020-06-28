<template>
  <div>

        <el-image style="width: 95%; height: 95%;" :src="mainSrc" :fit="fit"></el-image>
  
    
  </div>
</template>

<script>
export default {
  name: "mainPage",
  data() {
    return {
      fit: "fill",
      mainSrc: require("@/assets/mainPic1.png"),
    };
  }
};
</script>

<style>

</style>
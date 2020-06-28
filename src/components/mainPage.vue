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
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
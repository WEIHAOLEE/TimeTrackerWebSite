<template>
  <div>
      欢迎<br>
    用户名：{{id}}
  </div>
</template>

<script>
export default {
  name: "userPage",
  props: ['id'],
  data() {
    return {
    };
  }
};
</script>

<style>

</style>
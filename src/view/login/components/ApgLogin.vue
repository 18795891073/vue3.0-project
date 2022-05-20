<template>
  <div>apg template</div>
  <el-button type="primary" @click="login">登录</el-button>
</template>
<script>
import request from "@/api/request";
export default {
  components: {},
  data() {
    return {};
  },
  watch: {
    list: {
      handler() {
        // newList, oldList可传两个参数，表示新值和旧值
      },
      deep: true, // 深度监听父组件传过来对象变化
    },
  },
  created() {},
  computed: {},
  methods: {
    login() {
      request
        .login({ username: "lwl", password: "123" })
        .then((res) => {
          console.log(123, res);
        })
        .catch();
    },
  },
};
</script>
<style lang="scss" scoped>
</style>

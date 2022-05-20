<template>
  <div>
    <!-- logo图片 -->
    <div class="header">
      <img
        src="@/assets/images/apg_logo.png"
        alt="图片加载失败"
        style="width: 120px; height: 40px; margin: 0 255px"
      />
    </div>
    <!-- 登录框及背景 -->
    <div class="login_bg">
      <!-- 登录框 -->
      <table></table>
      <div class="login_frame">
        <!-- 爱批改账号登录 -->
        <div v-if="this.accountType === 'apg'" class="apg">
          <Apg :switchCustomerType="switchCustomerType" />
        </div>
        <!-- 外语通账号登录 -->
        <div v-if="this.accountType === 'wyt'" class="wyt">
          <Wyt :switchCustomerType="switchCustomerType" />
        </div>
      </div>
    </div>
    <!-- 页脚说明 -->
    <div class="footer">
      <div style="font-size: 13px; color: #777">
        Copyright © 2020-2021 南京听说科技有限公司 All Rights Reserved
        <a href="https://beian.miit.gov.cn">苏ICP备09002028号-6</a>
      </div>
    </div>
  </div>
</template>
<script>
import Wyt from "./components/WytLogin";
import Apg from "./components/ApgLogin";
export default {
  components: {
    Wyt,
    Apg,
  },
  data() {
    return {
      accountType: "apg",
    };
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
  methods: {},
};
</script>
<style scoped>
@import url(./index.css);
</style>

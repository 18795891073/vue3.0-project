<template>
  <div>{{text}}</div>
  <div>
    <button @click="onClick" class="btn">循环</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      text: "这是主页面",
    };
  },
  components: {},
  watch: {
    // list: {
    //   handler() {
    //     // newList, oldList可传两个参数，表示新值和旧值
    //   },
    //   deep: true, // 深度监听父组件传过来对象变化
    // },
  },
  created() {},
  computed: {},
  methods: {
    onClick() {
      this.$router.push('./loop')
    }
  },
};
</script>
<style scoped>
.btn {
  width: 100px;
  height: 30px;
  line-height: 30px;
  align-items: center;
  color:#666;
  border: 1px solid #333;
  background: white;
}
</style>

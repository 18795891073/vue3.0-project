<template>
  <div></div>
</template>
<script>
export default {
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
  methods: {},
};
</script>
<style lang="scss" scoped>
</style>

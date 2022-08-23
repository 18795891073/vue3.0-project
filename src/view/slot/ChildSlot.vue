<template>
  <div>
    <p style="color: #333">子组件：插槽展示：</p>
    <!--  默认插槽 -->
    <slot></slot>
    <!-- 具名插槽 -->
    <div>第一个插槽</div>
    <slot name="one"></slot>
    <div>第二个插槽</div>
    <slot name="two"></slot>
    <!-- 作用域插槽 -->
    <slot name="three" :isAllwo="isAllwo"></slot>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      isAllwo: "作用域插槽",
      name: "aok",
      // isAllwo: {
      //   three: "three",
      //   four: "four",
      // },
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
</style>

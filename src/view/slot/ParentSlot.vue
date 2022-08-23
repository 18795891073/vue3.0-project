<template>
  <div>
    <p style="color: #333">父组件：插槽</p>
    <ChildSlot>
      <!-- 默认插槽 -->
      <div style="color: #0ff; font-size: 20px">这是父组件中的文本1</div>
      <!-- 具名插槽 -->
      <template v-slot:one>
        <div>第一个具名插槽</div>
      </template>
      <template v-slot:two>
        <div>第二个具名插槽</div>
      </template>
      <!-- 作用域插槽 -->
      <template v-slot:three="slotProps">
        <div>{{ slotProps.isAllwo }}</div>
      </template>
    </ChildSlot>
    <!-- 如何显示带有标签的文本 -->
    <div>{{ this.text }}</div>
    <div v-html="this.text"></div>
  </div>
  <div></div>
</template>
<script>
import ChildSlot from "./ChildSlot.vue";
export default {
  data() {
    return {
      text: "<p><span>这是一段带有p标签和span标签的文本</span></p>",
    };
  },
  components: {
    ChildSlot,
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

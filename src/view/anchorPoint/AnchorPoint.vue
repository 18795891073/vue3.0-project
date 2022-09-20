<template>
    <div id="anchor">
      <button style="font-size: 20px;color: #f00;" @click="onClick">跳转</button>
      <!-- 第一种 -->
      <p id="num1" style="width: 100px;height:200px;border:1px solid #f00;">1111111111111</p>
      <p  style="width: 100px;height:1200px;border:1px solid #f00;">555555</p>
      <p id="num2" style="width: 100px;height:200px;border:1px solid #00f;">2222222222222</p>
      <p  style="width: 100px;height:1200px;border:1px solid #f00;">555555</p>
      <p id="num3" style="width: 100px;height:200px;border:1px solid #0f0;">3333333333333</p>
    </div>
</template>
<script>
export default {
components: {},
   data() {
     return {
       currentId: '',
      }
   },
   watch: {
     list: {
       handler () {
         // newList, oldList可传两个参数，表示新值和旧值
       },
       deep: true // 深度监听父组件传过来对象变化
     },
   },
   created(){},
   computed:{},
  methods: {
    onClick() {
      console.log(111);
      // 第一种
      window.location = '#loop';
      // 第二种
      // document.getElementById('num3').scrollIntoView();
      // 第三种
      // window.scrollTo(0, 2500);
    },
   }
}
</script>
<style scoped>

</style>

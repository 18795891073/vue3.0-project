<template>
    <div @click="onClick" class="cover">
      比较forEach和.map两种遍历方式
    </div>
</template>
<script>

export default {
components: {},
   data() {
     return {
       arr: [1, 2, 3, 4, 5, 6, 7, 8],
        newArr:[]
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
      // forEach循环无返回值，或者说返回值为undefined
      // this.arr.forEach((item, index, arr) => {
      //   console.log('111 ===', item, '222 ===', index, '333 ===', arr)
      // });
      // map有返回值，且返回值是一个数组
      this.newArr = this.arr.map((item, index, arr) => {
        console.log('112 ===', item, '122 ===', index, '132 ===', arr)
        return item + 'ok'
      });
      console.log(35,this.arr,36,this.newArr)
    }
  }
}
</script>
<style scoped>
.cover {
  width: 300px;
  height: 50px;
  line-height: 50px;
  align-items: center;
  color: #0ff;
  background:#7c7ceb;
}
</style>

<template>
  <div class="group">
    <p>{{title}}</p>
    <!-- 动态产生子组件 -->
    <groups v-for="(v, i) in arr" :key="i" :obj="v"></groups>
    <p class="mid">{{footer}}</p>
  </div>
</template>

<script>
// 引用子组件
import groups from "./groups";
export default {
  // 接受外部数据
  props: ["title", "url", "name", "footer"],
  // 根据url请求后端数据
  mounted() {
    this.axios.get(this.url).then(ok => {
      this.arr = ok.data[this.name];
      console.log(this.arr);
    });
  },
  components: {
    groups
  },
  data() {
    return {
      arr: []
    };
  }
};
</script>

<style scoped>
.group {
  width: 100%;
  height: auto;
  margin-top: 0.2rem;
}
.mid {
  margin-top: 0.1rem;
  text-align: center;
  color: #42bd56;
}
</style>
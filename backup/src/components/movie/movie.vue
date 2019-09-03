<template>
  <div class="box">
    <p>
      <span>{{title}}</span>
      <span class="right">更多</span>
    </p>
    <div class="movie">
      <!-- 动态调用子组件 -->
      <movies v-for="(v, i) in obj" :key="i" :obj="v"></movies>
    </div>
  </div>
</template>

<script>
//调用子组件
import movies from "./movies";
export default {
  //接受参数
  props: ["obj", "title"],
  components: {
    movies
  }
};
</script>

<style scoped>
.movie {
  width: 2.9rem;
  display: flex;
  flex-wrap: nowrap;
  overflow: auto;
}
.box > p {
  margin-top: 0.1rem;
  display: flex;
  justify-content: space-between;
}
.right {
  color: #42bd56;
}
.box {
  width: 2.9rem;
}
</style>
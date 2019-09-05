<template>
  <!-- 更多的分类 -->
  <div class="movieClassify">
    <h4>查看更多的相关分类</h4>
    <p>
      <span v-for="(v, i) in arr1" :key="i">{{v}}</span>
    </p>
  </div>
</template>
<script>
export default {
  props: ["arr1"]
};
</script>
<style scoped>
h4 {
  color: #aaa;
  font-size: 0.12rem;
  font-weight: 200;
}
span {
  display: inline-block;
  text-align: center;
  line-height: 0.3rem;
  width: 0.5rem;
  height: 0.3rem;
  margin-right: 0.1rem;
  background: #f5f5f5;
  border-radius: 0.2rem;
  font-size: 0.12rem;
}
p {
  margin-top: 0.1rem;
}
.movieClassify {
  margin-top: 0.1rem;
}
</style>
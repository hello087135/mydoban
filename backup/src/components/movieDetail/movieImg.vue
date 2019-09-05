<template>
  <!-- 无问东西相关图片 -->
  <div class="box1">
    <h4>无问东西相关图片</h4>
    <div class="movieImg">
      <img :src="imgUrl" alt v-for="i in 3" :key="i" />
    </div>
  </div>
</template>
<script>
export default {
  props: ["imgUrl"]
};
</script>
<style scoped>
.movieImg {
  margin-top: 0.1rem;
  width: 2.9rem;
  display: flex;
  overflow: auto;
}
img {
  width: 50%;
  height: 0.8rem;
  flex-shrink: 0;
  margin-right: 0.1rem;
}
h4 {
  color: #aaa;
  font-size: 0.12rem;
  font-weight: 200;
}
.box1 {
  margin-top: 0.1rem;
}
</style>
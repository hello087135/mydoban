<template>
  <div class="indexHead">
    <router-link to="/index">豆瓣</router-link>
    <div>
      <router-link to="/movie">电影</router-link>
      <router-link to="/book">图书</router-link>
      <router-link to="/broadcast">广播</router-link>
      <router-link to="/group">小组</router-link>
      <router-link to="/change">更多</router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.indexHead {
  width: 100%;
  height: 0.6rem;
  display: flex;
  justify-content: space-between;
}
.indexHead > a {
  font-size: 0.26rem;
  color: #42bd56;
  height: 0.6rem;
  line-height: 0.6rem;
}
.indexHead > div {
  height: 0.6rem;
  line-height: 0.6rem;
  font-size: 0.14rem;
}
.indexHead > div > a:first-child {
  color: #2384e8;
}
.indexHead > div > a:nth-child(2) {
  color: #9f7860;
}
.indexHead > div > a:nth-child(3) {
  color: #e4a813;
}
.indexHead > div > a:nth-child(4) {
  color: #2ab8cc;
}
</style>
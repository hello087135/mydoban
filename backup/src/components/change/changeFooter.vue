<template>
  <div class="changeFooter">
    <p>
      <router-link to="/register">注册豆瓣</router-link>
      <router-link to="/register">登入豆瓣</router-link>
    </p>
    <p>
      <a href="#">使用桌面版</a>
      <a href="#">使用豆瓣app</a>
    </p>
  </div>
</template>
<script>
export default {};
</script>
<style  scoped>
.changeFooter {
  margin-top: 0.2rem;
}
p {
  border-top: 1px solid #aaa;
  margin-top: 0.1rem;
  padding-top: 0.1rem;
  display: flex;
}
a {
  text-align: center;
  flex: 1;
  color: #42bd56;
}
a:nth-of-type(2n) {
  border-left: 1px solid #aaa;
}
p:nth-of-type(2) {
  padding-bottom: 0.1rem;
  border-bottom: 1px solid #aaa;
}
</style>
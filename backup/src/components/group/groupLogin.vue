<template>
  <div class="groupLogin">
    <!-- 左边盒子 -->
    <div class="left">
      <img src="../../../static/img/user.png" alt />
      <router-link to="/login">请先登入</router-link>
    </div>
    <!-- 右边的盒子 -->
    <div class="right">
      <img src="../../../static/img/1748.png" />
      <img src="../../../static/img/1749.png" alt />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.groupLogin {
  margin-top: 0.2rem;
  width: 2.9rem;
  height: 0.35rem;
  line-height: 0.35rem;
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid #aaa;
}
.left > img {
  width: 0.24rem;
  height: 0.24rem;
}
.groupLogin > a {
  color: #aaa;
}
.right {
  width: 0.7rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
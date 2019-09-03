<template>
  <div class="index">
    <div>
      <index-head></index-head>
      <hr />
    </div>
    <div class="box">
      <group-login></group-login>
      <group-all></group-all>
      <logo></logo>
    </div>
  </div>
</template>

<script>
import indexHead from "../components/public/indexHead";
// 引用小组的登入木块
import groupLogin from "../components/group/groupLogin";
import groupAll from "../components/group/groupAll";
import logo from "../components/public/logo";
export default {
  components: {
    indexHead,
    groupLogin,
    groupAll,
    logo
  }
};
</script>

<style scoped>
.index {
  width: 100%;
}
.box {
  width: 2.9rem;
  margin: 0 auto;
}
</style>
<template>
  <div class="broadcast">
    <div>
      <index-head></index-head>
      <hr />
    </div>
    <div class="box">
      <download mes="打开app下载更多"></download>
      <group-login></group-login>
      <log></log>
      <log></log>
      <log></log>
      <p>显示更多</p>
      <logo></logo>
    </div>
  </div>
</template>

<script>
import logo from "../components/public/logo";
import log from "../components/broadcast/log";
import indexHead from "../components/public/indexHead";
import download from "../components/public/download";
import groupLogin from "../components/group/groupLogin";
export default {
  components: {
    indexHead,
    download,
    groupLogin,
    log,
    logo
  }
};
</script>

<style scoped>
.broadcast {
  width: 100%;
}
.box {
  width: 2.9rem;
  margin: 0 auto;
}
p {
  margin: 0.2rem 0;
  text-align: center;
  color: #42bd56;
}
</style>
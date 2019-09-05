<template>
  <div class="broadcast">
    <div>
      <index-head></index-head>
      <hr />
    </div>
    <div class="box">
      <download mes="打开app下载更多"></download>
      <index-detail :id="this.$route.query.id"></index-detail>
      <logo></logo>
    </div>
  </div>
</template>

<script>
import logo from "../components/public/logo";
import indexHead from "../components/public/indexHead";
import download from "../components/public/download";
import indexDetail from "../components/indexDetail/indexDetail";
export default {
  components: {
    indexHead,
    download,
    logo,
    indexDetail
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
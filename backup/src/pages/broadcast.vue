<template>
  <div class="broadcast">
    <div>
      <index-head></index-head>
      <hr />
    </div>
    <div class="box">
      <download></download>
      <group-login></group-login>
    </div>
  </div>
</template>

<script>
import indexHead from "../components/public/indexHead";
import download from "../components/public/download";
import groupLogin from "../components/group/groupLogin";
export default {
  components: {
    indexHead,
    download,
    groupLogin
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
</style>
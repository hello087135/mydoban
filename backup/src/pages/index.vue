<template>
  <div class="index">
    <div>
      <index-head></index-head>
      <hr />
    </div>
    <div class="box">
      <index-nav></index-nav>
      <index-thumbnail></index-thumbnail>
    </div>
  </div>
</template>

<script>
import indexThumbnail from "../components/index/indexThumbnail";
import indexHead from "../components/public/indexHead";
import indexNav from "../components/index/indexNav";
export default {
  components: {
    indexHead,
    indexNav,
    indexThumbnail
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
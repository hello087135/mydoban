<template>
  <div class="movie">
    <div>
      <index-head></index-head>
      <hr />
    </div>
    <div class="box"></div>
  </div>
</template>

<script>
import indexHead from "../components/public/indexHead";
export default {
  components: {
    indexHead
  }
};
</script>

<style scoped>
.movie {
  width: 100%;
}
.box {
  width: 2.9rem;
  margin: 0 auto;
}
</style>
<template>
  <div class="movie">
    <div>
      <index-head></index-head>
      <hr />
    </div>
    <div class="box">
      <all-movie></all-movie>
      <find-good-movie></find-good-movie>
      <browse></browse>
      <logo></logo>
    </div>
  </div>
</template>

<script>
import browse from "../components/movie/browse";
import indexHead from "../components/public/indexHead";
//引用movie组件
import allMovie from "../components/movie/allMovie";
import findGoodMovie from "../components/movie/findGoodMovie";
import logo from "../components/public/logo";
export default {
  components: {
    indexHead,
    allMovie,
    findGoodMovie,
    browse,
    logo
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
<template>
  <div class="movie">
    <div>
      <index-head></index-head>
      <hr />
    </div>
    <div class="box">
      <all-movie :obj1="obj1" :obj2="obj2" :obj3="obj3" :title="title"></all-movie>
      <find-good-movie :url="url"></find-good-movie>
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
  data() {
    return {
      obj1: {},
      obj2: {},
      obj3: {},
      title: ["影院热映", "免费在在线观影", "新片速递"],
      url: "/faxianhaodianying"
    };
  },
  components: {
    indexHead,
    allMovie,
    findGoodMovie,
    browse,
    logo
  },
  created() {
    this.axios.get("/movie").then(ok => {
      let arr1 = ok.data.movie.filter((v, i) => {
        if (i < 8) {
          return v;
        }
      });
      let arr2 = ok.data.movie.filter((v, i) => {
        if (i > 8 && i < 16) {
          return v;
        }
      });
      let arr3 = ok.data.movie.filter((v, i) => {
        if (i > 16 && i < 24) {
          return v;
        }
      });
      this.obj1 = arr1;
      this.obj2 = arr2;
      this.obj3 = arr3;
    });
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
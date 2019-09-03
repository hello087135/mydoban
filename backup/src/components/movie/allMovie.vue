<template>
  <div class="allMovie">
    <movie :obj="obj1" :title="title[0]"></movie>
    <movie :obj="obj2" :title="title[1]"></movie>
    <movie :obj="obj3" :title="title[2]"></movie>
  </div>
</template>

<script>
//引用movies
import movie from "./movie";
export default {
  components: {
    movie
  },
  data() {
    return {
      obj1: {},
      obj2: {},
      obj3: {},
      title: ["影院热映", "免费在在线观影", "新片速递"]
    };
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
</style>
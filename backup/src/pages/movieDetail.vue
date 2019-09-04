<template>
  <div class="index">
    <div>
      <index-head></index-head>
      <hr />
    </div>
    <div class="box">
      <download mes="聊聊你的观影感受"></download>
      <movie-detail
        :title="obj[0].title"
        :average="obj[0].rating.average"
        :count="obj[0].collect_count"
        :arr="arr"
        :imgUrl="obj[0].images.small"
      ></movie-detail>
      <movie-introduction :title="obj[0].title"></movie-introduction>
      <movie-classify :arr1="obj[0].genres"></movie-classify>
    </div>
  </div>
</template>

<script>
import indexHead from "../components/public/indexHead";
import download from "../components/public/download";
import movieDetail from "../components/movieDetail/movieDetail";
import movieIntroduction from "../components/movieDetail/movieIntroduction";
import movieClassify from "../components/movieDetail/movieClassify";
export default {
  data() {
    return {
      obj: [
        {
          title: "",
          rating: { average: "" },
          collect_count: "",
          images: { small: "" },
          genres: []
        }
      ]
    };
  },
  components: {
    indexHead,
    download,
    movieDetail,
    movieIntroduction,
    movieClassify
  },
  created() {
    console.log(this.$route.query.id);
    this.axios.get("/movie").then(ok => {
      this.obj = ok.data.movie.filter((v, i) => {
        if (v.id == this.$route.query.id) {
          return v;
        }
      });
      console.log(this.obj);
    });
  },
  computed: {
    arr() {
      // 计算面包屑的内容
      let arr = [];
      arr.push(this.obj[0].year);
      //   拷贝类型
      for (let i in this.obj[0].genres) {
        arr.push(this.obj[0].genres[i]);
      }
      //拷贝演员
      for (let i in this.obj[0].casts) {
        arr.push(this.obj[0].casts[i].name);
      }
      console.log(arr);
      return arr;
    }
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
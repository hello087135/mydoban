<template>
  <div class="book">
    <div>
      <index-head></index-head>
      <hr />
    </div>
    <div class="box">
      <allbook :obj="obj1" :title="title[0]"></allbook>
      <allbook :obj="obj2" :title="title[1]"></allbook>
      <allbook :obj="obj3" :title="title[2]"></allbook>
      <findgoodbook :url="url"></findgoodbook>
      <browse></browse>
      <logo></logo>
    </div>
  </div>
</template>

<script>
import browse from "../components/movie/browse";
import indexHead from "../components/public/indexHead";
import allbook from "../components/books/allbook";
import findgoodbook from "../components/books/findgoodbook";
import logo from "../components/public/logo";
export default {
  data() {
    return {
      obj1: {},
      obj2: {},
      obj3: {},
      title: ["影院热映", "免费在在线观影", "新片速递"],
      url: "/goodBook"
    };
  },
  components: {
    indexHead,
    allbook,
    findgoodbook,
    browse,
    logo
  },
  created() {
    this.axios.get("/books").then(ok => {
      let arr1 = ok.data.filter((v, i) => {
        if (i < 8) {
          return v;
        }
      });
      let arr2 = ok.data.filter((v, i) => {
        if (i > 8 && i < 16) {
          return v;
        }
      });
      let arr3 = ok.data.filter((v, i) => {
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
.book {
  width: 100%;
}
.box {
  width: 2.9rem;
  margin: 0 auto;
}
</style>
<template>
  <div class="movies" @click="fun()">
    <img :src="imgUrl" />
    <p>{{title}}</p>
    <div class="score">
      <five-start :score="average"></five-start>
      <span>{{average}}</span>
    </div>
  </div>
</template>

<script>
// 1-1引入五星组件
import fiveStart from "./fiveStart";
export default {
  props: ["title", "average", "imgUrl", "obj", "id"],
  components: {
    fiveStart
  },
  methods: {
    fun() {
      this.$router.push({ name: "movieDetail", query: { id: this.id } });
    }
  }
};
</script>

<style scoped>
.movies {
  margin-top: 0.2rem;
  margin-right: 0.1rem;
  display: block;
}
.movies > img {
  width: 0.95rem;
  height: 1rem;
}
.score {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-around;
}
.movies > p {
  font-size: 0.12rem;
  width: 0.95rem;
  overflow: hidden;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
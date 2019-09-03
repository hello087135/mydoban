<template>
  <div class="movies">
    <img :src="obj.images.small" />
    <p>{{obj.title}}</p>
    <div class="score">
      <five-start :score="obj.rating.average"></five-start>
      <span>{{obj.rating.average}}</span>
    </div>
  </div>
</template>

<script>
// 1-1引入五星组件
import fiveStart from "./fiveStart";
export default {
  props: ["obj"],
  components: {
    fiveStart
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
}
</style>
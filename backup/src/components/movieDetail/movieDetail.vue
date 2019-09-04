<template>
  <!-- 电影详情其导演 -->
  <div>
    <div class="movieDetail">
      <div class="left">
        <h4>{{title}}</h4>
        <p class="fiveStar">
          <five-start :score="average"></five-start>
          <span>{{average}}</span>
          <span>{{count}}参与评价</span>
        </p>
        <p>
          <span v-for="(v, i) in arr" :key="i">{{v}}/</span>
        </p>
        <a href="#">用app查看资料</a>
      </div>
      <div class="right">
        <img :src="imgUrl" alt />
      </div>
    </div>
    <p class="see">
      <span>想看</span>
      <span>看过</span>
    </p>
  </div>
</template>
<script>
import fiveStart from "../movie/fiveStart";
export default {
  props: ["title", "average", "count", "arr", "imgUrl"],
  components: {
    fiveStart
  }
};
</script>
<style scoped>
.movieDetail {
  width: 100%;
  display: flex;
  margin-top: 0.1rem;
}
.left {
  width: 2.3rem;
  flex-shrink: 0;
}
.fiveStar {
  display: flex;
}
.fiveStar > span {
  margin-left: 0.1rem;
  color: #aaa;
}
p {
  margin-top: 0.1rem;
}
a {
  color: #42bd56;
  display: inline-block;
  margin-top: 0.1rem;
}
img {
  width: 0.6rem;
  height: 0.7rem;
  margin-top: 0.3rem;
}
.see {
  display: flex;
  justify-content: space-around;
}
.see > span {
  text-align: center;
  width: 1.3rem;
  height: 0.3rem;
  border-radius: 5px;
  flex-shrink: 0;
  border: 1px solid #ffb712;
  color: #ffb712;
  line-height: 0.3rem;
}
</style>
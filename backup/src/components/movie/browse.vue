<template>
  <div>
    <div class="findGoodMovie">
      <p>
        <span>发现好电影</span>
      </p>
      <div class="box">
        <browses v-for="(v, i) in obj" :key="i" :mes="v"></browses>
      </div>
    </div>
  </div>
</template>

<script>
import browses from "./browses";
export default {
  data() {
    return {
      obj: [
        "经典",
        "冷门夹片",
        "豆瓣高峰",
        "动作",
        "喜剧",
        "爱情",
        "悬疑",
        "恐怖"
      ]
    };
  },
  components: {
    browses
  }
};
</script>

<style scoped>
.findGoodMovie {
  width: 100%;
  height: auto;
}
.findGoodMovie > p {
  margin-top: 0.1rem;
  display: flex;
  justify-content: space-between;
}
.right {
  color: #42bd56;
}
.box {
  margin-top: 0.1rem;
  overflow: hidden;
}
</style>
<template>
  <!-- 电影的简介 -->
  <div class="movieIntroduction">
    <h4>{{title}}的简介</h4>
    <p>
      {{text}}
      <span @click="fun()" v-if="bool">（展开）</span>
      <span @click="fun1()" v-else>（收起）</span>
    </p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      text:
        "里昂·蒙泰拿（让·雷诺饰）是意大利裔美国人的顶尖职业杀手，一直孤独的住在纽约小意大利，为一名叫托尼的意大利餐厅老板（也是意大利裔美国人）服务",
      temp: "",
      bool: true
    };
  },
  props: ["title"],
  methods: {
    fun() {
      this.temp = this.text;
      this.text +=
        "只有一盆万年青是他最好的朋友。他形容：“它永远都很开心，从来都不问问题，而且也跟我一样—没有根。”他虽然身手不凡，但内心其实非常缺乏安全感。他甚至从来都不敢在床上睡觉，而是坐在椅子上睡觉，并把手枪放在手边以便随时应付任何入侵的敌人";
      this.bool = !this.bool;
    },
    fun1() {
      this.text = this.temp;
      this.bool = !this.bool;
    }
  }
};
</script>
<style scoped>
.movieIntroduction {
  margin-top: 0.1rem;
}
h4 {
  color: #aaa;
  font-size: 0.12rem;
  font-weight: 200;
}
p {
  margin-top: 0.1rem;
}
span {
  color: #42bd56;
}
</style>
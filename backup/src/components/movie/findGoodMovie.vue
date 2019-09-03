<template>
  <div class="findGoodMovie">
    <p>
      <span>发现好电影</span>
      <span class="right">更多</span>
    </p>
    <div class="box">
      <div v-for="(v, i) in obj" :key="i" :class="v.line?'box1':'boxs'">
        <a :href="v.href" :style="'color:'+v.color">{{v.title}}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      obj: []
    };
  },
  created() {
    this.axios.get("/faxianhaodianying").then(ok => {
      console.log(ok.data.faxianhaodianying);
      this.obj = ok.data.faxianhaodianying;
    });
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
  width: 2.9rem;
  overflow: auto;
  display: flex;
}
.boxs {
  padding: 0.1rem;
  border: 1px solid #ffac2d;
  border-radius: 0.05rem;
  margin-top: 0.1rem;
  margin-right: 0.1rem;
}
.boxs > a {
  white-space: nowrap;
}
.box1 {
  width: 1px;
  height: 1px;

  border: none;
}
</style>
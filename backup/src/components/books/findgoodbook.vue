<template>
  <div class="findGoodMovie">
    <p>
      <span>发现好书</span>
      <span class="right">更多</span>
    </p>
    <div class="box">
      <a
        :href="v.href"
        :style="'color:'+v.color"
        v-for="(v, i) in obj"
        :key="i"
        v-if="!v.line"
      >{{v.title}}</a>
      <br v-else />
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
  mounted() {
    this.axios.get(this.url).then(ok => {
      console.log(ok.data.goodBook);
      this.obj = ok.data.goodBook;
    });
  },
  props: ["url"]
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
  /* display: flex; */
  white-space: nowrap;
}
.boxs {
  padding: 0.1rem;
  border: 1px solid #ffac2d;
  border-radius: 0.05rem;
  margin-top: 0.1rem;
  margin-right: 0.1rem;
}
.box > a {
  white-space: nowrap;
  flex-shrink: 0;
  display: inline-block;
  padding: 0.1rem;
  border: 1px solid #ffac2d;
  border-radius: 0.05rem;
  margin-top: 0.1rem;
  margin-right: 0.1rem;
}
.box1 {
  width: 1px;
  height: 1px;

  border: none;
}
</style>
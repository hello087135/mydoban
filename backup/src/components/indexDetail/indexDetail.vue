<template>
  <div class="indexDetail">
    <h4>{{obj[0].title}}</h4>
    <p>
      <span class="red">{{obj[0].loc_name}}</span>
    </p>
    <div class="imgc">
      <img :src="obj[0].image" alt />
    </div>
    <div class="box">
      <p class="left left1">时间:</p>
      <div>
        <p>{{obj[0].begin_time}}</p>
        <p>{{obj[0].end_time}}</p>
      </div>
    </div>
    <div class="box">
      <p class="left">地点:</p>
      <p>{{obj[0].address}}</p>
    </div>
    <div class="box">
      <p class="left">费用:</p>
      <p>{{obj[0].price_range}}</p>
    </div>
    <div class="box">
      <p class="left">类型:</p>
      <p>{{obj[0].category_name}}</p>
    </div>
    <div class="box">
      <p class="left">起始时间:</p>
      <p>{{obj[0].time_str}}</p>
    </div>
    <div>
      <span v-for="(v, i) in arr" :key="i" class="tag">{{v}}</span>
    </div>
    <div v-html="obj[0].content"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      obj: [
        {
          title: "",
          loc_name: "",
          image: "",
          begin_time: "",
          end_time: "",
          address: "",
          price_range: "",
          category_name: "",
          time_str: "",
          tags: "",
          content: ""
        }
      ]
    };
  },
  props: ["id"],
  created() {
    this.axios.get("/shouye").then(ok => {
      ok.data.shouye = ok.data.shouye.filter((v, i) => {
        if (v.id == this.id) {
          return v;
        }
      });
      this.obj = ok.data.shouye;
    });
  },
  computed: {
    arr() {
      let arr = this.obj[0].tags.split(",");
      return arr;
    }
  }
};
</script>
<style scoped>
.red {
  display: inline-block;
  margin-top: 0.1rem;
  background: red;
  border-radius: 0.05rem;
  height: 0.2rem;
  width: 0.35rem;
  text-align: center;
  color: white;
}
.imgc {
  margin-top: 0.1rem;
  text-align: center;
}
img {
  width: 2.6rem;
  height: 3.7rem;
}
.box {
  display: flex;
}
.left {
  margin-right: 0.1rem;
}
.tag {
  display: inline-block;
  padding: 0.05rem;
  background: #aaa;
  border-radius: 0.2rem;
  margin-right: 0.2rem;
  margin-top: 0.1rem;
}
</style>
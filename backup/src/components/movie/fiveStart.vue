<template>
  <div>
    <img v-for="(v, i) in num" :key="i" :src="'../../../static/img/'+v+'.png'" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: []
    };
  },
  // 1-2接受参数
  props: ["score"],
  computed: {
    num() {
      let arr = [0, 0, 0, 0, 0];
      let a = parseInt(parseInt(this.score) / 2);
      for (let i = 0; i < a; i++) {
        //   1-3把前几个设为2
        arr[i] = 2;
      }
      parseFloat(this.score) % 2 == 0 ? (arr[a] = 2) : (arr[a] = 1);
      return arr;
    }
  }
};
</script>

<style scoped>
</style>
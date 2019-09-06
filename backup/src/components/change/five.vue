<template>
  <div>
    <el-rate :value="value" disabled show-score text-color="#ff9900" score-template="{value}"></el-rate>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 3.7
    };
  },
  computed: {
    num() {
      return this.value * 2;
    }
  }
};
</script>
<style scoped>
</style>
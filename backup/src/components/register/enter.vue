<template>
  <div class="enter">
    <input type="text" placeholder="请输入" />
    <div @click="fun()" :class="this.bool?'':'red'">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bool: true
    };
  },
  methods: {
    fun() {
      this.bool = !this.bool;
    }
  }
};
</script>

<style scoped>
.enter {
  width: 100%;
  height: 0.5rem;
  border: 1px solid gray;
  border-radius: 0.05rem;
  display: flex;
}
.enter > input {
  height: 0.5rem;
  border: none;
  outline: none;
  line-height: 0.5rem;
  flex: 1;
}
.enter span {
  height: 0.5rem;
  line-height: 0.5rem;
  width: 0.4rem;
}
.red {
  color: red;
}
</style>
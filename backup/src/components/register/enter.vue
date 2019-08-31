<template>
  <div class="enter">
    <input :type="bool?'text':'password'" :placeholder="placeholders" v-model="textzz" />
    <div @click="fun()" :class="this.bool?'':'red'">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bool: true,
      textzz: ""
    };
  },
  methods: {
    fun() {
      this.bool = !this.bool;
    }
  },
  watch: {
    textzz: function(val) {
      this.$emit("enter", val);
    }
  },
  props: ["placeholders"]
};
</script>

<style scoped>
.enter {
  margin-top: 0.02rem;
  width: 100%;
  height: 0.5rem;
  border: 1px solid gray;
  border-radius: 0.05rem;
  display: flex;
}
.enter > input {
  text-indent: 0.2rem;
  height: 0.5rem;
  border: none;
  outline: none;
  line-height: 0.5rem;
  flex: 1;
  border-radius: 0.05rem;
}
.enter span {
  height: 0.5rem;
  line-height: 0.5rem;
  width: 0.4rem;
  margin-right: 0.1rem;
}
.red {
  color: red;
}
</style>
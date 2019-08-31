<template>
  <div class="register">
    <heads></heads>
    <inputs></inputs>
 
  </div>
</template>

<script>
import heads from "../components/register/heads";
import inputs from "../components/register/inputs";

export default {
  components: {
    heads,
    inputs
  }
};
</script>

<style scoped>
.register {
  width: 2.9rem;
  margin: 0 auto;
}
</style>
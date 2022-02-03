<template>
  <div id="app">
    <Mortgages />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Mortgages from "./modules/Mortgages/index.vue";

export default Vue.extend({
  name: "App",
  components: {
    Mortgages,
  },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

  border: 1px dashed slategray;
  padding: 0.5rem;
}
</style>

<template>
  <div>
    <h1>Mortgages</h1>
    <Creator />
    <List />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import List from "./components/List.vue";
import useMortgagesStore from "./useMortgagesStore";
import Creator from "./components/Creator.vue";

export default defineComponent({
  components: {
    List,
    Creator,
  },

  setup() {
    useMortgagesStore.providers();
    const [mortgages] = useMortgagesStore.injectors();
    return { mortgages };
  },
});
</script>

<style scoped lang="scss">
</style>

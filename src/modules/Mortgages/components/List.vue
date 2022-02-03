<template>
  <ol>
    <li v-for="mortgage in mortgages.list" :key="mortgage.id">
      {{ mortgage.name }}
    </li>
  </ol>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import useMortgagesStore from "../useMortgagesStore";

export default defineComponent({
  setup() {
    const [mortgages] = useMortgagesStore.injectors();

    return {
      mortgages,
    };
  },
});
</script>

<style scoped lang="scss">
</style>

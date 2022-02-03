<template>
  <div class="root">
    <input type="text" v-model="newMortgageValue" />
    <button :disabled="!newMortgageValue || mortgages.loading" @click="addNew">
      New mortgage
    </button>
    <span
      :v-if="mortgages.loading"
      class="loading"
      :class="{ '--is-loading': mortgages.loading }"
    >
      💣
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";
import useMortgagesStore from "../useMortgagesStore";

export default defineComponent({
  setup() {
    const [mortgages, mortgagesActions] = useMortgagesStore.injectors();
    const newMortgageValue = ref("");

    function addNew() {
      mortgagesActions.add({
        id: mortgages.list.length + 1,
        name: newMortgageValue.value,
      });
    }

    return {
      mortgages,
      newMortgageValue,
      addNew,
    };
  },
});
</script>

<style scoped lang="scss">
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(359deg);
  }
}

.root {
  & > *:not(:last-child) {
    margin-right: 8px;
  }
}
.loading {
  display: inline-block;
  &.--is-loading {
    animation-name: spin;
    animation-duration: 1s;
    animation-iteration-count: infinite;
  }
}
</style>

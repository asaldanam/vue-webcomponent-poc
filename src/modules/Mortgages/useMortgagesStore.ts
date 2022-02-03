import { reactive } from '@vue/composition-api';
import { createStore } from '@/shared/libs/createStore';

export default createStore(() => {
  const state = reactive({
    list: [] as { id: number, name: string }[],
    loading: false,
  });

  function add(mortgage: typeof state.list[0]) {
    state.loading = true;
  
    setTimeout(() => {
      state.list.push(mortgage);
      state.loading = false;
    }, 1000)
  }

  return { state, actions: { add } };
});

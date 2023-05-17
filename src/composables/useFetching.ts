import { ref } from "vue";

export function useFetching(callback: Function) {
  const loading = ref(false);
  async function fetch(...cbArgs: any[]) {
    loading.value = true;
    await callback(...cbArgs);
    loading.value = false;
  }

  return [fetch, loading];
}

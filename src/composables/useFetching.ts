import { ref } from "vue";

export function useFetching(callback: Function) {
  const loading = ref(false);
  async function fetch(...cbArgs: any[]) {
    try {
      loading.value = true;
      await callback(...cbArgs);
    } finally {
      loading.value = false;
    }
  }

  return [fetch, loading];
}

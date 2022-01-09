import { run_log } from "./types.ts";

export function sort(arr: number[]): run_log {
  const start_time = performance.now();
  let LOOP_COUNT = 0;

  for (let index = 1; index < arr.length; index++) {
    const current = arr[index];
    let pi = index - 1;

    while (pi >= 0 && arr[pi] > current) {
      arr[pi + 1] = arr[pi];
      pi = pi - 1;
      LOOP_COUNT++;
    }
    arr[pi + 1] = current;
    LOOP_COUNT++;
  }
  const end_time = performance.now();

  return {
    loop_count: LOOP_COUNT,
    run_time: end_time - start_time,
    array_size: arr.length,
  };
}

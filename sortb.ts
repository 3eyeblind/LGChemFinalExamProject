import { run_log } from "./types.ts";

export function sort(arr: number[]): run_log {
  let LOOP_COUNT = 0;
  const start_time = performance.now();
  let j, min_idx;
  for (let index = 0; index < arr.length; index++) {
    min_idx = index;
    for (j = index + 1; j < arr.length; j++) {
      if (arr[j] < arr[min_idx]) {
        min_idx = j;
      }
      LOOP_COUNT++;
    }

    // Swap the found minimum element with the first element
    swap(arr, min_idx, index);
    LOOP_COUNT++;
  }

  const end_time = performance.now();

  return {
    loop_count: LOOP_COUNT,
    run_time: end_time - start_time,
    array_size: arr.length,
  };
}
function swap(arr: number[], xp: number, yp: number) {
  const temp = arr[xp];
  arr[xp] = arr[yp];
  arr[yp] = temp;
}

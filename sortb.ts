import { run_log } from "./types.ts";

export function sort(arr: number[]): run_log {
  let LOOP_COUNT = 0;
  const start_time = performance.now();
  for (let index = 1; index < arr.length; index++) {
    LOOP_COUNT++;
  }

  const end_time = performance.now();
  return {
    loop_count: LOOP_COUNT,
    run_time: end_time - start_time,
    array_size: arr.length
  };
}

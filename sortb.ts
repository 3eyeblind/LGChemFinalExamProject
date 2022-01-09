import { get_array } from "./data.ts";

export async function sort(): Promise<number> {
  const start_time = performance.now();
  const arr: number[] = await get_array();
  console.log(arr);

  const end_time = performance.now();
  return end_time - start_time;
}

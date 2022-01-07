import { get_array } from "./data.ts";
export async function sort() {
  let list: number[] = await get_array();
  console.log(list);
}

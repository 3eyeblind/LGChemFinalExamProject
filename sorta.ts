import { get_array } from "./data.ts";
export async function sort() {
  const arr: number[] = await get_array();
  console.log(arr);

  for (let index = 1; index < arr.length; index++) {
    const current = arr[index];
    let pi = index - 1;

    while (pi >= 0 && arr[pi] > current) {
      arr[pi + 1] = arr[pi];
      pi = pi - 1;
    }
    arr[pi + 1] = current;

    console.log(arr);
  }
}

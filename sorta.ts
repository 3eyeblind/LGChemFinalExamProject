export function sort(arr: number[]): number {
  const start_time = performance.now();
  console.log(arr);

  for (let index = 1; index < arr.length; index++) {
    const current = arr[index];
    let pi = index - 1;

    while (pi >= 0 && arr[pi] > current) {
      arr[pi + 1] = arr[pi];
      pi = pi - 1;
    }
    arr[pi + 1] = current;
  }
  console.log(arr);
  const end_time = performance.now();
  return end_time - start_time;
}

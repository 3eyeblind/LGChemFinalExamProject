export function sort(arr: number[]): number {
  const start_time = performance.now();
  console.log(arr);

  const end_time = performance.now();
  return end_time - start_time;
}

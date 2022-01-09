// load data
import { sort as sorta } from "./sorta.ts";
import { sort as sortb } from "./sortb.ts";
import { parse } from "https://deno.land/std/flags/mod.ts";
import { get_array } from "./data.ts";
import { run_log, run_record } from "./types.ts";

const DATA_SOURCE = "./ztest_data.csv";
const flags = parse(Deno.args);
const run_times = flags.n || 1;

const run_records: run_record[] = [];

for (let idx = 1; idx <= run_times; idx++) {
  let arr: number[],
    run_log: run_log,
    rr: run_record;

  arr = await get_array(DATA_SOURCE);
  run_log = sorta(arr);
  rr = {
    sort: "insertion",
    run_time: run_log.run_time,
    loop_count: run_log.loop_count,
    run_number: idx,
    array_size: run_log.array_size,
  };

  print_run(arr, rr);

  arr = await get_array(DATA_SOURCE);
  run_records.push(rr);
  run_log = sortb(arr);
  rr = {
    sort: "selection",
    run_time: run_log.run_time,
    loop_count: run_log.loop_count,
    run_number: idx,
    array_size: run_log.array_size,
  };

  run_records.push(rr);
  print_run(arr, rr);
}

let str =
  `"run number","sort type","array length","execution time","loop count"\n`;
for (const rr of run_records) {
  // console.log(rr);
  str = str +
    `${rr.run_number},"${rr.sort}",${rr.array_size},${rr.run_time},${rr.loop_count}\n`;
}
Deno.writeTextFileSync(`zoutput-${Date.now()}.csv`, str);

function print_run(arr: number[], rr: run_record) {
  console.log(
    `
    Performance: 
      run number: ${rr.run_number}
      sort type: ${rr.sort}
      array length: ${rr.array_size}
      execution time: ${rr.run_time}
      loop count: ${rr.loop_count}\n
    Result: ${arr}
    `,
  );
}

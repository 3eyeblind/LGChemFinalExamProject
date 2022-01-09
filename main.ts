// load data
import { sort as sorta } from "./sorta.ts";
import { sort as sortb } from "./sortb.ts";
import { parse } from "https://deno.land/std/flags/mod.ts";
import { get_array } from "./data.ts";
import { run_record } from "./types.ts";

const DATA_SOURCE = "./ztest_data.csv";
const flags = parse(Deno.args);
const run_times = flags.n || 1;

const run_records: run_record[] = [];

for (let idx = 1; idx <= run_times; idx++) {
  let run_log = sorta(await get_array(DATA_SOURCE));
  let rr: run_record = {
    sort: "insertion",
    run_time: run_log.run_time,
    loop_count: run_log.loop_count,
    run_number: idx,
  };

  run_records.push(rr);
  run_log = sortb(await get_array(DATA_SOURCE));
  rr = {
    sort: "b",
    run_time: run_log.run_time,
    loop_count: run_log.loop_count,
    run_number: idx,
  };

  run_records.push(rr);
}

let str = `"run number","sort type","execution time","loop count"\n`;
for (const rr of run_records) {
  console.log(rr);
  str = str + `${rr.run_number},"${rr.sort}",${rr.run_time},${rr.loop_count}\n`;
}
Deno.writeTextFileSync(`zoutput-${Date.now()}.csv`, str);

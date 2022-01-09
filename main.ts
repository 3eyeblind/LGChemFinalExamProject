// load data
import { sort as sorta } from "./sorta.ts";
import { sort as sortb } from "./sortb.ts";
import { parse } from "https://deno.land/std/flags/mod.ts";
import { get_array } from "./data.ts";

const DATA_SOURCE = "./ztest_data.csv";
const arr = await get_array(DATA_SOURCE);
const flags = parse(Deno.args);
const run_times = flags.n || 1;

interface run_record {
  sort: string;
  run_time: number;
  run_number: number;
}

const run_records: run_record[] = [];

for (let idx = 1; idx <= run_times; idx++) {
  let rr: run_record = {
    sort: "insertion",
    run_time: sorta(arr),
    run_number: idx,
  };

  run_records.push(rr);

  rr = {
    sort: "b",
    run_time: sortb(arr),
    run_number: idx,
  };

  run_records.push(rr);
}

let str = `"run number","sort type","execution time"\n`;
for (const rr of run_records) {
  console.log(rr);
  str = str + `${rr.run_number},${rr.sort},${rr.run_time}\n`;
}
Deno.writeTextFileSync(`zoutput-${Date.now()}.csv`, str);

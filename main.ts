// load data
import { sort as sorta } from "./sorta.ts";
import { sort as sortb } from "./sortb.ts";
import { parse } from "https://deno.land/std/flags/mod.ts";

const flags = parse(Deno.args);
let run_times = flags.n || 1;

interface run_record {
  sort: string;
  run_time: number;
  run_number: number;
}

const run_records: run_record[] = [];

for (let idx = 1; idx <= run_times; idx++) {
  let rr: run_record = {
    sort: "insertion",
    run_time: await sorta(),
    run_number: idx,
  };

  run_records.push(rr);

  rr = {
    sort: "b",
    run_time: await sortb(),
    run_number: idx,
  };

  run_records.push(rr);
}

let str = "";
for (const rr of run_records) {
  console.log(rr);
  str = str + `${rr.run_number},${rr.sort},${rr.run_time}\n`;
}
Deno.writeTextFileSync("output.csv", str);

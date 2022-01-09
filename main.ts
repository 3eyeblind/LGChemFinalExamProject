// load data
import { get_array } from "./data.ts";
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

while (run_times > 0) {
  let rr: run_record = {
    sort: "insertion",
    run_time: await sorta(),
    run_number: run_times,
  };

  run_records.push(rr);

  rr = {
    sort: "b",
    run_time: await sortb(),
    run_number: run_times,
  };

  run_records.push(rr);

  run_times--;
}

let str = "";
for (const rr of run_records) {
  console.log(rr);
  str = str + `${rr.run_number},${rr.sort},${rr.run_time}\n`;
}
Deno.writeTextFileSync("output.csv", str);

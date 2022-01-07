// load data
import { get_array } from "./data.ts";
import { sort as sorta } from "./sorta.ts";
import { sort as sortb } from "./sortb.ts";
import { parse } from "https://deno.land/std/flags/mod.ts";

const flags = parse(Deno.args);

if (flags.s === "a") {
  sorta();
}
if (flags.s === "b") {
  sortb();
}

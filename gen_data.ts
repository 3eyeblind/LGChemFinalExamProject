import { parse } from "https://deno.land/std/flags/mod.ts";

const flags = parse(Deno.args);

const numbers = "0123456789";

const list_len = flags.l || 5;
const file_path = flags.f || "./test_data_csv";
let str = "";

for (let ll = 0; ll < list_len; ll++) {
  const num_len = Math.floor(Math.random() * 6) + 1;
  let num = "";
  for (let nl = 0; nl < num_len; nl++) {
    const pos = Math.floor(Math.random() * 10);
    num = num + numbers[pos];
  }
  str = str + `"${make_str(5)}","${num}"\n`;
}

Deno.writeTextFileSync(file_path, str);

function make_str(length: number) {
  let result = "";
  let characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(
      Math.random() *
        charactersLength,
    ));
  }
  return result;
}

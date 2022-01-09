import {
  parse as parseCsv,
} from "https://deno.land/std@0.82.0/encoding/csv.ts";

export async function load_file(file_path: string): Promise<any> {
  const content = await parseCsv(await Deno.readTextFile(file_path));
  return content;
}

export async function get_array(file_path: string) {
  const content: string[][] = await load_file(file_path);
  const data: number[] = [];
  let list: number[] = [];
  // array = data[0]

  for (let i of content) {
    list.push(
      parseInt(
        i[1],
      ),
    );
  }

  return list;
}

import {
  parse as parseCsv,
} from "https://deno.land/std@0.82.0/encoding/csv.ts";

export async function load_file(file_path: string): Promise<string[][]> {
  const parse = await parseCsv(await Deno.readTextFile(file_path));
  const content: string[][] = <string[][]> parse;
  return content;
}

export async function get_array(file_path: string) {
  const content = await load_file(file_path);
  const list: number[] = [];

  for (const i of content) {
    list.push(
      parseInt(
        i[1],
      ),
    );
  }

  return list;
}

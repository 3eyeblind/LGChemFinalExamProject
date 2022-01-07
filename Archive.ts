let list: number[] = await get_array();
// let list: number[] = [100, 12, 678, 5];
let slist: number[] = [];

// sort data
prime_array(list, slist);
console.log("BEGIN STATE>>>>>");
console.log(slist);
console.log(list);

// MAIN LOOPING LOGIC

console.log("BEGIN SLIST>>>>>");
for (let item of list) {
  // are you smaller than the first thing in slist
  if (item < slist[0]) {
    slist.splice(0, 0, item);
  } else if (item > slist[slist.length - 1]) {
    slist.push(item);
  } else {
    for (let x in slist) {
      const idx: number = parseInt(x);
      const nextsItem: number = slist[idx + 1];
      const sitem: number = slist[idx];
      console.log(`
          ITEM: ${item}
          SITEM: ${sitem}
          NSITEM: ${nextsItem}
      `);

      if (item > sitem && item < nextsItem) {
        slist.splice(idx + 1, 0, item);
        break;
      }
    }
  }
  // insert logic
  console.log(slist);
}
// END MAIN LOOPING LOGIC
console.log("ENDING SLIST>>>>>\n");

console.log("ENDING STATE>>>>>");

console.log(slist);
// console.log(list);

function prime_array(a1: number[], a2: number[]) {
  const zero = a1[0];
  const one = a1[1];

  if (one > zero) {
    a2[0] = a1[0];
    a2[1] = a1[1];
  } else {
    a2[0] = a1[1];
    a2[1] = a1[0];
  }

  a1.splice(0, 2);
}

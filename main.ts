// load data
import { get_array } from "./data.ts";
// let list: number[] = await get_array();
let list: number[] = [100, 12, 678, 5];
let slist: number[] = [];

console.log(list);

// sort data

//outer loop
for (let i of list) {
  if (slist.length === 0) {
    slist.push(i);
  } else {
    //inner loop
    for (let x = 0; slist.length; x++) {
      if (i > slist[x]) {
        slist.splice(x, 0, i);
        break;
      }
    }
  }
}

console.log(slist);

let flist: number[] = [];
for (let x = slist.length - 1; x > -1; x--) {
  flist.push(slist[x]);
}

// // load data
// let list: number[] = [1, 2, 3, 20, 4, 11];
// let slist: number[] = [];
// console.log(list);
// let pn: number = -1;
// // sort data
// for (let i of list) {
//   pn = i;

//   if (slist.length === 0) {
//     slist.push(i);
//   } else {
//     for (let x = 0; slist.length; x++) {
//       if (i > slist[x]) {
//         slist.splice(x, 0, i);
//         break;
//       }
//     }
//   }
// }

// console.log(slist);

debugger;

let str_e = "e";
let incr_str_e;
{ // let incr_str_e = ++str_e;
  let step_1 = Number(str_e);
  let step_2 = step_1 + 1;
  incr_str_e = step_2;
  str_e = step_2;
};

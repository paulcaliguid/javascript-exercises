const ftoc = function(f) {
  let c = (5/9)*(f-32);
  c = Math.round(c * 10) / 10;
  return c;
};

const ctof = function(c) {
  let f = (9/5)*c + 32;
  f = Math.round(f * 10) / 10;
  return f;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};

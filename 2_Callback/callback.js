const sum = (x, y, cb) => {
  const o = x + y;
  cb(o);
};

const mul = (x, y, cb) => {
  let o = x * y;
  cb(o);
};

const print = (value) => {
  console.log("Output: ", value);
};

sum(2, 3, print);

mul(4, 5, print);

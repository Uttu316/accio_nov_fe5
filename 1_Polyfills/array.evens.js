Array.prototype.evens = function () {
  let arr = this;

  let output = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      output.push(arr[i]);
    }
  }
  return output;
};

const arr = [3, 2, 4, 5, 1, 6, 9, 8, 10];

let ans = arr.evens();
console.log(ans);

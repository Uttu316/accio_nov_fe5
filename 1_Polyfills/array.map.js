Array.prototype.map = null; // assumption

if (!Array.prototype.map) {
  Array.prototype.map = function (callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
      let curr = callback(this[i], i, this);
      result.push(curr);
    }

    return result;
  };
}

let arr = ["A", "B", "C"];

let output = arr.map((item, index, currArray) => {
  console.log(item, index);
  return item + index;
});

console.log(output);

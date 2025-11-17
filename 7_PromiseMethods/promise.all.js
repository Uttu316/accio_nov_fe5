const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("A");
  }, 3000);
}); // reject 3s A

const p2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("B");
  }, 5000);
}); // 5s B

const p3 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("C");
  }, 2000);
}); // 2s C

const p = Promise.all([p1, p2, p3]);

p.then((res) => {
  console.log(res);
}).catch((err) => {
  console.log("Error", err);
});

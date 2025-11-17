const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hey");
  }, 3000);
});

p.then((v) => {
  console.log(v);
  return v + 2;
})
  .then((v) => {
    console.log(v);
    return v + 3;
  })
  .then((v) => {
    console.log(v);
    return v + 4;
  })
  .then((x) => {
    console.log(x);
  })
  .catch((err) => {
    console.log("Error", err);
  });

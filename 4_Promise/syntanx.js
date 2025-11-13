const p = new Promise((resolve, reject) => {
  //sync

  //async task
  setTimeout(() => {
    if (4 % 2 === 0) {
      resolve("Hello");
    } else {
      reject("Bye");
    }
  }, 3000);
});

p.then((v) => {
  console.log(v);
}).catch((err) => {
  console.log(err);
});

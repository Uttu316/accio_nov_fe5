console.log("A");

const getUserdata = (userName) => {
  console.log("B");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("C");
      if (userName) {
        resolve("Hey");
      } else {
        reject("Bye");
      }
      console.log("D");
    }, 2000);
    console.log("E");
  });
};
console.log("F");

getUserData("Abc")
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
console.log("G");

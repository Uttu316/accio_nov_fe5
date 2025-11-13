console.log("A");

const getUserData = (username) => {
  console.log("B");

  setTimeout(() => {
    if (username === "ABC") {
      console.log("C");
    }
  }, 1000);

  console.log("D");
};

console.log("E");

getUserData("ABC");

console.log("F");

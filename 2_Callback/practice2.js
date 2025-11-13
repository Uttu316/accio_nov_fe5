console.log("A");
const getUserData = (username, onSuccess, onFailure) => {
  console.log("B");

  setTimeout(() => {
    if (username === "ABC") {
      console.log("C");
      const userData = {
        name: "ABC XYZ",
        id: "2323273",
      };
      onSuccess(userData);
    } else {
      onFailure("No user found");
    }
    console.log("G");
  }, 1000);

  console.log("D");
};

console.log("E");

getUserData(
  "ABC",
  (userData) => {
    console.log("User", userData.name);
  },
  (err) => {
    console.log("Error", err);
  }
);
console.log("F");

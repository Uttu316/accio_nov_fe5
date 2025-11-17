// function getdata(){
//     return new Promise((res,rej)=>{
//         res('Hey')
//     })
// }

// function getdata(){
//     return Promise.resolve("Hey")
// }

async function getdata() {
  console.log("Hey");
  // return "Hello" // resolve
  throw "Oops"; //reject
}

console.log("A");
getdata()
  .then((v) => {
    console.log(v);
  })
  .catch((err) => {
    console.log("Error", err);
  });
console.log("C");

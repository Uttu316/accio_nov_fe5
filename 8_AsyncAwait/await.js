function api() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("Hello");
    }, 3000);
  });
}

async function getdata() {
  console.log("Hey");
  try {
    const res = await api();
    const res1 = await api();
    const res2 = await api();
    const res3 = await api();
    console.log(res);
    return res + "Bye";
  } catch (e) {
    console.log(e);
  }
}

console.log("A");
getdata();
console.log("C");

console.log("A");

const p = new Promise((resolve, reject) => {
  console.log("B");
  const name = prompt("Enter a name");
  setTimeout(() => {
    const emojis = ["😎", "😵", "💩", "😍", "🤥", "☠️", "🤑"];

    const randomIndex = parseInt(Math.random() * emojis.length);

    let emoji = emojis[randomIndex];

    if (emoji) {
      const response = {
        name,
        emoji,
      };
      resolve(response);
    } else {
      reject("Try later");
    }
  }, 2000);
});
console.log("C");

p.then((res) => {
  console.log(`${res.name}: ${res.emoji}`);
}).catch((e) => {
  console.log(e);
});

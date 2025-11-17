const getUserData = (username) => {
  console.log("Fetching user data", username);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "abc") {
        const data = {
          name: "ABC",
          id: "27382",
        };
        resolve(data);
      } else {
        reject("No user found");
      }
    }, 3000);
  });
};

const getPost = (userId) => {
  console.log("Fetching post for", userId);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId) {
        const post = {
          postId: "323212",
          caption: "Way to Goa!",
        };
        resolve(post);
      } else {
        reject("No Post Available");
      }
    }, 3000);
  });
};

const getComment = (postId) => {
  console.log("Fetching comment");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (postId) {
        const data = {
          commentId: "32342329",
          comment: "Woow!",
        };
        resolve(data);
      } else {
        reject("No comment");
      }
    }, 2000);
  });
};

console.log("Start");
getUserData("abc")
  .then((userData) => {
    console.log("Userdata recieved", userData);
    return userData.id;
  })
  .then((userId) => {
    return getPost(userId);
  })
  .then((post) => {
    console.log("Post recieved", post);
    return getComment(post.postId);
  })
  .then((comment) => {
    console.log("comment recieved", comment);
  })
  .catch((err) => {
    console.log(err);
  });

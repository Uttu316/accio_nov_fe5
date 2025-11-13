const getUserData = (username, onSuccess, onFailure) => {
  console.log("Fetching user data", username);
  setTimeout(() => {
    if (username === "abc") {
      const user = {
        name: "Abc XYZ",
        userId: "323211",
      };
      onSuccess(user);
    } else {
      onFailure("No user found");
    }
  }, 3000);
};

const getPost = (userId, onSuccess, onFailure) => {
  console.log("Fetching posts for", userId);

  setTimeout(() => {
    if (userId) {
      const post = {
        postId: "213112",
        caption: "Travelling to New york",
      };
      onSuccess(post);
    } else {
      onFailure("No post found");
    }
  }, 3000);
};
const getComment = (postId, onSuccess, onFailure) => {
  console.log("Fetching Comments for", postId);
  setTimeout(() => {
    if (postId) {
      const comment = {
        comment: "Woow!",
        commentId: "322313",
      };
      onSuccess(comment);
    } else {
      onFailure("No comment");
    }
  }, 3000);
};

getUserData(
  "abc",
  (user) => {
    console.log("Userdata recieved", user);
    getPost(
      user.userId,
      (post) => {
        console.log("Post recieved", post);
        getComment(
          post.postId,
          (comment) => {
            console.log("Comment Recieved", comment);
          },
          (err) => {
            console.log("Comment Error", err);
          }
        );
      },
      (err) => {
        console.log("Post Error", err);
      }
    );
  },
  (error) => {
    console.log("Error", error);
  }
);

// ===== INPUT FIELDS =====

// Username input
let userInput = document.createElement("input");
userInput.placeholder = "Enter username";

// Caption input
let captionInput = document.createElement("input");
captionInput.placeholder = "Enter caption";

// Button to create post
let button = document.createElement("button");
button.textContent = "Create Post";

// Like button
let likeButton = document.createElement("button");
likeButton.textContent = "Like Post";

// Output area
let output = document.createElement("div");

// Add to page
document.body.appendChild(userInput);
document.body.appendChild(captionInput);
document.body.appendChild(button);
document.body.appendChild(likeButton);
document.body.appendChild(output);

// ===== OBJECT (ONLY username & caption are dynamic) =====
let post;

// Display function
function displayPost() {

  let { username, caption } = post;

  output.innerHTML = `
    <b>Username:</b> ${username} <br>
    <b>Caption:</b> ${caption} <br>
    <b>Likes:</b> ${post.likes} <br>
    <b>Comments:</b> ${post.comments.join(", ")} <br>
  `;
}

// Create post
button.onclick = function () {

  post = {
    username: userInput.value,
    caption: captionInput.value,
    likes: 0, // default value as required
    comments: ["Nice post!", "Awesome!", "Great content!"],

    // method
    addLike: function () {
      this.likes++;
    }
  };

  displayPost();
};

// Increase likes
likeButton.onclick = function () {
  if (post) {
    post.addLike();
    displayPost();
  } else {
    output.innerHTML = "Please create a post first!";
  }
};
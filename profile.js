// html elements
let button = document.querySelector("button");
let profileName = document.querySelector(".profile-name");
let profileImage = document.querySelector(".profile-image");
let main = document.querySelector(".main");

button.addEventListener("click", function() {

    // 1. Updated the innerHTML of profileName to your name or a made up one.
  profileName.innerHTML = "Richard-Z";
    // 2. Updated the src of profileImage a picture of you or one that makes sense.
  profileImage.src = "basket.png";
    // 3. Updated the src of main to a photo that's be your first post.
  main.src = "curry.jpg";
  
});

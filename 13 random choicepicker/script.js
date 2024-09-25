const tagsEl = document.getElementById("tags");
const textarea = document.getElementById("textarea");
const createTags = (input) => {
  console.log(input);
};

textarea.focus();
textarea.addEventListener("keyup", (e) => {
  createTags(e.target.value);
});

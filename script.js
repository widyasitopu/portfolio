const roles = [
  "occasionally a funny lecturer",
  "mostly a serious researcher",
  "a student who probably should study... again",
  "an analyst who finds what's hidden",
  "a midnight reader who overthinks",
];

let i = 0;
let j = 0;
let isDeleting = false;
const speed = 60;

const textElement = document.querySelector(".changing");

function typeEffect() {
  const current = roles[i];

  if (isDeleting) {
    textElement.textContent = current.substring(0, j--);
  } else {
    textElement.textContent = current.substring(0, j++);
  }

  if (!isDeleting && j === current.length) {
    setTimeout(() => (isDeleting = true), 1200);
  } else if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % roles.length;
  }

  setTimeout(typeEffect, isDeleting ? speed / 2 : speed);
}

typeEffect();

const tags = document.querySelectorAll(".tag");

tags.forEach((tag) => {
  tag.addEventListener("click", () => {
    tag.classList.toggle("active");
  });
});

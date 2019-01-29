const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  // your code here
  let count = 0

  document.body.addEventListener("keydown", (e) => {
    const key = e.key

    if (codes[count] === key){
      count++
    }

    if (count === codes.length) {
      window.alert("Konami Sequence!?");
      count = 0
    }
  });
}

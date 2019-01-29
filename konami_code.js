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
  let counter = 0;
  document.body.addEventListener("keydown", e => {
    (e.key === codes[counter]) ? counter ++ : counter = 0;
    if (counter === codes.length){
      alert("test");
      console.log("alert fired");
      counter = 0;
      console.log(counter);
    }
  })
}

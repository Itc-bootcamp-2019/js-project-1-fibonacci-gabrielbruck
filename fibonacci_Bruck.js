// Milestone 2
// document.getElementById("x").innerText = "4 ";
// document.getElementById("y").innerText = "3";

// //Milestone 3

// function fib(x) {
//   let b = 1;
//   let c = 0;

//   for (let i = 1; i < x; i++) {
//     result = b + c;
//     c = b;
//     b = result;
//   }
//   return result;
// }
// x = 8;
// console.log(fib(x));
// result - fib(x);

// document.getElementById("myNumber").innerText = [x];
// document.getElementById("y").innerText = [result];

// Milestone 4
function fib(x) {
  let b = 1;
  let c = 0;

  for (let i = 1; i < x; i++) {
    result = b + c;
    c = b;
    b = result;
  }
  return result;
}
function myFunction() {
  var x = document.getElementById("myText").value;
  document.getElementById("demo").innerHTML = fib(x);
}

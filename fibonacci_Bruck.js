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

// // Milestone 4
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

// // Milestone 4.1

// function fib(x) {
//   if (x <= 2) return 1;
//   return fib(x - 1) + fib(x - 2);
// }
// function myFunction() {
//   var x = document.getElementById("myText").value;
//   document.getElementById("demo").innerHTML = fib(x);
// }

// Mileston 5

function myFunction() {
  let x = document.getElementById("myText").value;

  fetch(`http://localhost:5050/fibonacci/${x}`)
    .then(res => res.json())
    .then(function(data) {
      let y = data.result;
      document.getElementById("demo").innerHTML = y;
      console.log(y);
    });
}

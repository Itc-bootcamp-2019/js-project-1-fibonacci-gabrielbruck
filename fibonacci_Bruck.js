// Milestone 2
// document.getElementById("x").innerText = "4 ";
// document.getElementById("y").innerText = "3";

//Milestone 3

function fib(x) {
  let b = 1;
  let c = 0;

  for (let i = 1; i < x; i++) {
    y = b + c;
    c = b;
    b = y;
  }
  return y;
}
x = 8;
console.log(fib(x));
y - fib(x);

document.getElementById("x").innerText = [x];
document.getElementById("y").innerText = [y];

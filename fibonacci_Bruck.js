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

// // Mileston 5
// function goSpinning() {
//   let spinner = document.getElementById("loader");
//   spinner.classList.toggle("hidden");
// }
// function fibonacci() {
//   let x = document.getElementById("myText").value;
//   goSpinning();

//   if (checkData(x) !== "okay") {
//     return console.log("not a valid number");
//   }
//   const url = `http://localhost:5050/fibonacci/${x}`;
//   fetch(url)
//     .then(response => {
//       if (response.status === 400) {
//         return response.text();
//       } else {
//         return response.json();
//       }
//     })
//     .then(function(data) {
//       let y = data.result;
//       document.getElementById("demo2").innerHTML = y;
//       console.log(y);
//       goSpinning();
//       loader.style.visibility = "hidden";
//     });
// }

// function checkData(num) {
//   let alertData = document.getElementById("alertData");
//   if (num > 50) {
//     alertData.innerText = "Can't be larger than 50";
//     alertData.style.display = "block";
//     return console.log("error");
//   } else {
//     return "okay";
//   }
// }

// Milestone 6
function goSpinning() {
  let spinner = document.getElementById("loader");
  spinner.classList.replace("hide", "show");
  setTimeout(() => {
    spinner.classList.replace("show", "hide");
  }, 2000);
}
function goHidden() {
  let hiddenResult = document.getElementById("result");
  hiddenResult.classList.add("hide");
}
function goUnHidden() {
  let hiddenResult = document.getElementById("result");
  hiddenResult.classList.remove("hide");
}
function goUnFifty() {
  let hiddenResult1 = document.getElementById("ErrorBox");
  hiddenResult1.classList.remove("hide");
}
function goFifty() {
  let hiddenResult1 = document.getElementById("ErrorBox");
  hiddenResult1.classList.add("hide");
}

function goFetch() {
  document.getElementById("FortyTwoError").innerText = "";
  goFifty();
  goHidden();
  goSpinning();

  let number = document.getElementById("number").value;
  if (number > 50) {
    let ErrorFifty = document.getElementById("ErrorBoxText");
    ErrorFifty.innerText = "Can't be larger than 50";
    goUnFifty();
    goSpinning();
  } else {
    const url = `http://localhost:5050/fibonacci/${number}`;
    console.log(url);

    setTimeout(() => {
      fetch(url)
        .then(response => {
          if (response.status === 400) {
            return response.text();
          } else {
            return response.json();
          }
        })
        .then(data => {
          if (typeof data === "object") {
            console.log(data.result);
            document.getElementById("result").innerText = data.result;
            goUnHidden();
          } else {
            document.getElementById("FortyTwoError").innerText =
              "Server Error: " + " " + data;
          }
        });
    }, 2000);
  }
}
document.getElementById("isBtn").addEventListener("click", goFetch);

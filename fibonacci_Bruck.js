// Milestone 8
//functions to hide/ unhide
function goSpinning() {
  let spinner = document.getElementById("loader");
  spinner.classList.replace("hide", "show");
  setTimeout(() => {
    spinner.classList.replace("show", "hide");
  }, 2000);
}
function goSpinning2() {
  let spinner2 = document.getElementById("loader2");
  spinner2.classList.add("hide");
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

//Save Checkbox
function saving() {
  let checkbox = document.getElementById("myCheck");
  if (checkbox.checked == true) {
    goFetch();
  } else {
    fib();
  }
}

// Extracting Fibonacci though the server
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
document.getElementById("isBtn").addEventListener("click", saving);

// Extracting Fibonacci  locally
function fib() {
  goFifty();
  goUnHidden();
  let x = document.getElementById("number").value;
  if (x > 50) {
    let ErrorFifty = document.getElementById("ErrorBoxText");
    ErrorFifty.innerText = "Can't be larger than 50";
    goUnFifty();
    goHidden();
  } else {
    let b = 1;
    let c = 0;

    for (let i = 1; i < x; i++) {
      result = b + c;
      c = b;
      b = result;
    }
    document.getElementById("result").innerText = result;
  }
}
fetch(`http://localhost:5050/getFibonacciResults`).then(response => {
  response.json().then(function(data) {
    const results = data.results;
    goSpinning2();
    showResults(results);
  });
});

function showResults(array) {
  for (i = 0; i < array.length; i++) {
    let resultDate = new Date(array[i].createdDate);
    let mydiv = document.getElementById("dataArray");
    let paragraph = document.createElement("p");
    paragraph.classList.add("bottomLine");
    paragraph.innerHTML +=
      "The Fibonnaci of <b>" +
      " " +
      array[i].number +
      " " +
      "</b> is <b>" +
      array[i].result +
      " " +
      "</b> calculated at : " +
      resultDate;
    mydiv.appendChild(paragraph);
  }
}

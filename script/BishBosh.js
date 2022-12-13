// This code executed on the console.
for (let i = 0; i < 100; i++) {
  answer = i;
  if (i % 3 == 0) {
    answer = "Bish";
  }
  if (i % 4 == 0) {
    answer = "Bosh";
  }
  if (i % 3 == 0 && i % 4 == 0) {
    answer = "Bish-Bosh";
  }
  console.log(answer);
}

//Bish Bosh => Version 2
const button = document.getElementById("submit");
button.addEventListener("click", calculateBishBosh);

function calculateBishBosh(event) {
  let count = document.getElementById("countValue").value;
  let bish = document.getElementById("bishValue").value;
  let bosh = document.getElementById("boshValue").value;
  var finalAnswer = "";
  let answer = "";

  for (let i = 0; i <= count; i++) {
    answer = i;
    if (i % bish == 0) {
      answer = "Bish";
    }
    if (i % bosh == 0) {
      answer = "Bosh";
    }
    if (i % bish == 0 && i % bosh == 0) {
      answer = "Bish-Bosh";
    }
    finalAnswer = finalAnswer + " \n " + i + " => " + answer;
  }
  document.getElementById("bishBoshAnswer").innerHTML = finalAnswer;
  event.preventDefault();
}

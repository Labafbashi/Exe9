// This code executed on the console.
// for (let i = 0; i < 100; i++) {
//   answer = i;
//   if (i % 3 == 0) {
//     answer = "Bish";
//   }
//   if (i % 4 == 0) {
//     answer = "Bosh";
//   }
//   if (i % 3 == 0 && i % 4 == 0) {
//     answer = "Bish-Bosh";
//   }
//   console.log(answer);
// }




function calculateBishBosh(bish, bosh, count) {
  form1 = document.getElementById("bishBoshAnswer").value;
  
  //   counter = document.getElementById(countValue);
  //   bish = document.getElementById(bishValue);
  //   bosh = document.getElementById(boshValue);
  var finalAnswer = "";

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
    console.log(answer);
    finalAnswer = finalAnswer + ", " + answer;
  }
  console.log(
    "Just for test!!! " + bish + " " + bosh + " " + count + " " + form1
  );
  form1 = finalAnswer;
  return true;
}

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

function chkBishValue(e) {
  return (
    (e.charCode != 8 && e.charCode == 0) ||
    (e.charCode >= 48 && e.charCode <= 57)
  );
}

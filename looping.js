// looping dengan for
function denganFor() {
  for (let i = 0; i <= 10; i++) {
    if (i === 0) {
      console.log(i + " adalah nol");
    } else if (i % 2 === 0) {
      console.log(i + " adalah genap");
    } else {
      console.log(i + " adalah ganjil");
    }
  }
}

  // looping dengan For isi Array
  function denganForIsiArray() {
    const dogs = ["golden", "oni", "ola", "bulldog"];

    for (let i = 0; i < dogs.length; i++) {
      console.log(`anjing ke-${i} adalah ${dogs[i]}`);
    }
  }

  

// looping dengan break
// contoh : jika nilai n = 5, maka looping akan berhenti dan lanjut ke tahap selanjutnya

function denganBreak() {
  var n;
  for (let n = 1; n <= 10; n++) {
    if (n === 5) {
      break;
    }
    console.log("the number is", n);
  }
}

// looping dengan continue
// contoh : jika nilai n = 5, maka looping ke 5 akan di skip
function denganContinue() {
  var n;
  for (let n = 1; n <= 10; n++) {
    if (n === 5) {
      continue;
    }
    console.log("the number is", n);
  }
}
denganForIsiArray();
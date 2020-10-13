// (1)
function HitungSuhu() {
  const celcius = 35;
  const reamur = (4 / 5) * celcius;
  const farenheit = (9 / 5) * celcius + 32;

  console.log("celcius = ", celcius);
  console.log("reamur = ", reamur);
  console.log("farenheit = ", farenheit);
}

//  (2)
function peluang() {
  let nol = 0;
  let genap = 0;
  let ganjil = 0;

  for (let n = 0; n < 50; n++) {
    if (n === 0) {
      nol = nol + 1;
    } else if (n % 2 === 0) {
      genap = genap + 1;
    } else {
      ganjil = ganjil + 1;
    }
  }

  console.log("nol = ", nol);
  console.log("bilangan genap = ", genap);
  console.log("bilangan ganjil = ", ganjil);
}

// (3)
function DibagiTiga() {
  let habis = 0;

  for (let n = 130; n < 170; n++) {
    if (n % 3 === 0) {
      habis = habis + 1;
    }
  }

  console.log("jadi bilangan yang habis dibagi 3 sebanyak", habis);
}

// (4)
function MenyeleksiData() {
  let nol = 0;
  let positif = 0;
  let negatif = 0;
  const array = [0, -123, 45, -12, 0, 42, -54, 76];

  for (let n = 0; n < array.length; n++) {
    if (array[n] === 0) {
      nol = nol + 1;
    } else if (array[n] > 0) {
      positif = positif + 1;
    } else {
      negatif = negatif + 1;
    }
  }

  console.log("banyak bilangan nol adalah", nol);
  console.log("banyak bilangan positif adalah", positif);
  console.log("banyak bilangan negatif adalah", negatif);
}

// (5)
function MenghitungHarga() {
  totalpage = 0;
  const books = [
    { title: "Sapiens", page: 600, price: 200000 },
    { title: "Shoe Dog", page: 530, price: 170000 },
    { title: "The Subtle Art of Not Giving a F*ck", page: 200, price: 150000 },
    { title: "Atomic Habits", page: 460, price: 230000 },
  ];

  for (let n = 0; n < books.length; n++) {
    totalpage += books[n].page;
  }

  console.log("total page =", totalpage);
}

// (6)
function faktorial() {
  let hasil = 1;
  for (let n = 1; n <= 4; n++) {
    hasil = hasil * n;
  }
  console.log("hasil =", hasil);
}

// (7)
function hitungRataRata() {
  let hasil = 0;
  const nilai = [70, 85, 90, 45, 50, 100];
  for (let n = 0; n < nilai.length; n++) {
    hasil += nilai[n];
  }
  console.log("hasil", hasil / nilai.length);
}

// (8)
function NilaiUjian() {
  let hasil = 0;
  const mahasiswa = [
    { name: "bayu", score: 100 },
    { name: "gede", score: 60 },
    { name: "adit", score: 80 },
    { name: "dono", score: 75 },
    { name: "adi", score: 40 },
  ];
  for (let n = 0; n < mahasiswa.length; n++) {
    hasil += mahasiswa[n].score;
  }
  const rata = hasil / mahasiswa.length;
  console.log("nilai rata - rata mahasiswa adalah ", rata);

  console.log(
    "====================================================================="
  );
  for (let n = 0; n < mahasiswa.length; n++) {
    if (mahasiswa[n].score >= rata) {
      console.log(mahasiswa[n].name, "nilai diatas rata-rata");
    }
  }
  console.log(
    "====================================================================="
  );
  for (let n = 0; n < mahasiswa.length; n++) {
    if (mahasiswa[n].score < rata) {
      console.log(mahasiswa[n].name, "nilai dibawah rata-rata");
    }
  }
}

// (9)
function hitungRata(array) {
  // const array = [0, -123, 45, -12, 0, 42, -54, 76];
  let nilai = 0;
  for (let n = 0; n < array.length; n++) {
    nilai = nilai + array[n];
  }
  const rata = nilai / array.length;
  return rata;
}

// 10
function berapaBanyakAngkaYangDiatasRataRata() {
  const array = [0, -123, 45, -12, 0, 42, -54, 76];
  const rataRata = hitungRata(array);
  let diatas = 0;
  for (let a = 0; a < array.length; a++) {
    if (array[a] >= rataRata) {
      diatas = diatas + 1;
    }
  }
  return diatas;
  console.log("diatas rata-rata", berapaBanyakAngkaYangDiatasRataRata());
}

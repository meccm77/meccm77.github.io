function testClick() {
  console.log("Test klik button");

  // Ambil nilai input dari pengguna dan konversi ke angka
  var getNum1 = Number(document.getElementById("num1").value);
  var getNum2 = Number(document.getElementById("num2").value);

  // Ambil operator yang dipilih
  var getOperator = document.getElementById("operator").value;

  console.log("Get Num1:", getNum1);
  console.log("Get Num2:", getNum2);
  console.log("Get Operator:", getOperator);

  var hitung;

  // Switch case untuk operasi matematika
  switch (getOperator) {
    case "tambah":
      hitung = getNum1 + getNum2;
      break;
    case "kurang":
      hitung = getNum1 - getNum2;
      break;
    case "kali":
      hitung = getNum1 * getNum2;
      break;
    case "bagi":
      // Cek pembagian dengan nol
      if (getNum2 !== 0) {
        hitung = getNum1 / getNum2;
      } else {
        hitung = "Tidak bisa membagi dengan 0";
      }
      break;
    default:
      hitung = "Operator tidak valid";
  }

  // Tampilkan hasil
  document.getElementById("result").innerHTML = hitung;
}

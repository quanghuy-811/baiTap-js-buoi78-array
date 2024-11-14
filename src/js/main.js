const getEle = (selector) => {
  return document.querySelector(selector);
};

const arrNumber = [];
document.querySelector("#btnNhapSo").onclick = () => {
  let number = +getEle("#inputArr").value;
  arrNumber.push(number);
  getEle("#arr").innerHTML = arrNumber;
  getEle("#inputArr").value = "";
};

// --- Bài 1: Tính tổng các số dương ----

const tinhTong = () => {
  let sum = 0;

  for (let i = 0; i < arrNumber.length; i++) {
    if (arrNumber[i] >= 0) {
      sum += arrNumber[i];
      count++;
    } else {
      continue;
    }
  }

  getEle("#result1 span").innerHTML = ` Tổng các số Dương: ${sum}`;
};

// --- Bài 2: Đếm số dương ---
const demSoDuong = () => {
  let count = 0;
  for (let i = 0; i < arrNumber.length; i++) {
    if (arrNumber[i] >= 0) {
      count++;
    } else {
      continue;
    }
  }

  getEle("#result2 span").innerHTML = ` Số Dương: ${count}`;
};

// --- Bài 3: Tìm số nhỏ nhất

const soNhoNhat = () => {
  let min = arrNumber[0];
  for (let i = 0; i < arrNumber.length; i++) {
    if (arrNumber[i] < min) {
      min = arrNumber[i];
    }
  }
  getEle("#result3 span").innerHTML = ` Số nhỏ nhất: ${min}`;
};
// --- Bài 4: Tìm số dương nhỏ nhất
const timSoDuongNhoNhat = () => {
  let min = null;
  for (let i = 0; i < arrNumber.length; i++) {
    if (arrNumber[i] > 0) {
      if (min === null || arrNumber[i] < min) {
        min = arrNumber[i];
      }
    } else {
      continue;
    }
  }

  if (min === null) {
    getEle("#result4 span").innerHTML = `Không có số dương nào trong mảng `;
  } else {
    getEle("#result4 span").innerHTML = ` Số dương nhỏ nhất: ${min}`;
  }
};

// BÀi 5: Tìm số chẵn cuối cùng
const timSoChan = () => {
  let soChan = 0;
  for (let i = 0; i < arrNumber.length; i++) {
    if (arrNumber[i] % 2 === 0) {
      soChan = arrNumber[i];
    }
  }

  getEle("#result5 span").innerHTML = ` Số chẵn cuối cùng: ${soChan}`;
};

// BÀi 6: Đổi chỗ

const doiCho = () => {
  let viTri1 = +getEle("#viTri1").value;
  let viTri2 = +getEle("#viTri2").value;
  let so = arrNumber[viTri1];

  arrNumber[viTri1] = arrNumber[viTri2];
  arrNumber[viTri2] = so;

  getEle("#result6 span").innerHTML = `  ${arrNumber}`;
};

// Bài 7: Sắp xếp tăng dân.

const sapXepTangDan = () => {
  // 3,1,0
  // for (let i = 0; i < arrNumber.length; i++) {
  //   let minIndex = i;
  //   for (let j = i + 1; j < arrNumber.length; j++) {
  //     if (arrNumber[j] < arrNumber[minIndex]) {
  //       minIndex = j;
  //     }
  //   }

  //   let temp = arrNumber[i];
  //   arrNumber[i] = arrNumber[minIndex];
  //   arrNumber[minIndex] = temp;
  // }

  for (let i = 0; i < arrNumber.length - 1; i++) {
    for (let j = 0; j < arrNumber.length - i - 1; j++) {
      if (arrNumber[j] > arrNumber[j + 1]) {
        let temp = arrNumber[j];
        arrNumber[j] = arrNumber[j + 1];
        arrNumber[j + 1] = temp;
      }
    }
  }

  getEle("#result7 span").innerHTML = `  ${arrNumber}`;
};

// Bài 8: Tìm số nguyên tố đầu tiên

const kiemTraSoNguyenTo = (num) => {
  if (num < 2) {
    return false;
  } else if (num <= 3) {
    return true;
  } else if (num % 2 === 0 || num % 3 === 0) {
    return false;
  }

  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false; // Kiểm tra các số có dạng 6k ± 1
  }

  return true;
};

const timSoNguyenToDauTien = () => {
  let so = null;
  for (let i = 0; i < arrNumber.length; i++) {
    if (kiemTraSoNguyenTo(arrNumber[i])) {
      so = arrNumber[i]; // Trả về số nguyên tố đầu tiên tìm thấy
    }
  }
  if (so === null) {
    getEle("#result8 span").innerHTML = ` Không có số nguyên tố nào `;
  } else {
    getEle("#result8 span").innerHTML = `${so}`;
  }
};

// --- Bài 9 : Đếm số nguyên----
const arrNumber9 = [];
document.querySelector("#btnThemSo").onclick = () => {
  let num = +getEle("#input9").value;
  arrNumber9.push(num);

  getEle("#arr9 span").innerHTML = ` ${arrNumber9}`;
  getEle("#input9").value = "";
};

const demSoNguyen = () => {
  let count = 0;
  for (let i = 0; i < arrNumber9.length; i++) {
    if (Number.isInteger(arrNumber9[i])) {
      count++;
    }
  }

  getEle("#result9 span").innerHTML = ` Số nguyên ${count}`;
};

// Bài 10: So sánh số âm dương

const soSanhSoAmDuong = () => {
  let countEven = 0;
  let countOdd = 0;
  for (let i = 0; i < arrNumber.length; i++) {
    if (arrNumber[i] > 0) {
      countEven++;
    } else if (arrNumber[i] < 0) {
      countOdd++;
    }
  }

  if (countEven === countOdd) {
    getEle("#result10 span").innerHTML = "Số dương = Số âm";
  } else if (countEven > countOdd) {
    getEle("#result10 span").innerHTML = "Số dương > Số âm";
  } else {
    getEle("#result10 span").innerHTML = "Số dương < Số âm";
  }
};

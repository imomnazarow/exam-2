console.log("======= 100 =======");
// 100.Quyidagi namunani kuzatgan holda funksiya yasang.
// Namuna:
// Namuna("div*2") ᔍ "<div></div><div></div>"
// Namuna("p*1") ᔍ "<p></p>"
// Namuna("li*3") ᔍ "<li></li><li></li><li></li>"
function tegYoz(str) {
  let arr = str.split("*");
  let teg = arr[0];
  let daraja = +arr[1];
  let result = "";

  for (let i = 0; i < daraja; i++) {
    result += `<${teg}></${teg}>`;
  }
  return result;
}
console.log(tegYoz("div*2"));
console.log(tegYoz("p*1"));
console.log(tegYoz("li*3"));
// ==================================================================
// ==================================================================
console.log("======= 101 =======");
// 101.Funksiya butun son qabul qilsa, 1dan ushbu butun
// songacha bo’lgan sonlar yig’indisini qaytarsin.
// Namuna:
// namuna(3) -> 6
// // 1 + 2 + 3 = 6
// namuna(10) -> 55
// // 1 + 2 + 3 + ... + 10 = 55
// namuna(7) -> 28
// // 1 + 2 + 3 + ... + 7 = 28

function yigindi(son) {
  let summa = 0;
  for (let i = 0; i <= son; i++) {
    summa += i;
  }
  return summa;
}
console.log(yigindi(3));
console.log(yigindi(4));

// ==================================================================
// ==================================================================
console.log("======= 102 =======");
// 102.Funskiya son va object qabul qiladi. Objectni ichida min va
// max degan propertilar mavjud. Agar ushbu son min va maxni
// oralig’ida bo’lsa funksiya true qaytarsin, aks holda false
// Namuna:
// Namuna(4, { min: 0, max: 5 }) ᔍ true
// Namuna(4, { min: 4, max: 5 }) ᔍ true
// Namuna(4, { min: 6, max: 10 }) ᔍ false

function avarage(son, obj) {
  if (son >= obj.min && son <= obj.max) {
    return true;
  } else {
    return false;
  }
}
console.log(avarage(4, { min: 0, max: 5 }));
console.log(avarage(4, { min: 4, max: 5 }));
console.log(avarage(4, { min: 6, max: 10 }));

// ==================================================================
// ==================================================================
console.log("======= 103 =======");
// 103.Funksiya son qabul qiladi, agar ushbu sonni kvadratga
// ko’tarsak, ushbu natijaning oxirigi qiymati sonning o’ziga teng
// bo’lsa funksiya true qaytarsin, aks holda false.
// Namuna:
// Namuna(1) ᔍ true
// Namuna(3) ᔍ false
// // 3^2 = 9
// Namuna(6) ᔍ true
// // 6^2 = 36 (ends with 6)
// Namuna(95) ᔍ false
// // 95^2 = 9025 (does not end with 95)

function tengToLast(son) {
  let kvadrat = son ** 2;

  if (kvadrat % 10 === son) {
    return true;
  } else {
    return false;
  }
}
console.log(tengToLast(5));
console.log(tengToLast(3));

// ==================================================================
// ==================================================================
console.log("======= 104 =======");
// 104.Funksiya massiv qabul qiladi. Funksiya massivning elementlariga
// o’sha elementning indexini qo’shgan holda yangi massiv qaytarsin.
// Namuna:
// Namuna([0, 0, 0, 0, 0]) ᔍ [0, 1, 2, 3, 4]
// Namuna([1, 2, 3, 4, 5]) ᔍ [1, 3, 5, 7, 9]
// Namuna([5, 4, 3, 2, 1]) ᔍ [5, 5, 5, 5, 5]

function array(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i] + i);
  }
  return newArr;
}
console.log(array([0, 1, 2, 3, 4]));
console.log(array([1, 2, 3, 4, 5]));

// ==================================================================
// ==================================================================
console.log("======= 105 =======");
// 105.Funksiya ichimliklar massivini qabul qiladi. Funksiya
// ichida shakari yo’q ichimlilarinigina qaytarishi kerak. Ichida
// shakari bor ichimliklar ro’yxati:
// cola
// fanta
// Namuna:
// Namuna(["fanta", "cola", "water"]) ᔍ ["water"]
// Namuna(["fanta", "cola"]) ᔍ []
// Namuna(["lemonade", "beer", "water"]) ᔍ ["lemonade",
// "beer", "water"]
function ichimliklar(arr) {
  let bezSaxr = [];
  let saxr = "fanta, cola";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== "fanta" && arr[i] !== "cola") {
      bezSaxr.push(arr[i]);
    }
  }
  return bezSaxr;
}
console.log(ichimliklar(["fanta", "cola", "water"]));
console.log(ichimliklar(["fanta", "cola"]));
console.log(ichimliklar(["lemonade", "beer", "water"]));

// ==================================================================
// ==================================================================
console.log("======= 106 =======");
// 106.Funksiya son qabul qilsa, Funksiya ushbu sonda nechta
// raqam borligini qaytarsin.
// Namuna:
// Namuna(123) ᔍ 3
// Namuna(56) ᔍ 2
// Namuna(7154) ᔍ 4
// Namuna(61217311514) ᔍ 11
// Namuna(0) ᔍ 1

function counter(son) {
  let count = 0;
  son = String(son);
  for (let i = 0; i < son.length; i++) {
    count++;
  }
  return count;
}
console.log(counter(125));
console.log(counter(7154));

// ==================================================================
// ==================================================================
console.log("======= 107 =======");
// 107.Funksiya son qabu qilsa, ushbu funksiya sonning raqamlari
// o’rni istalgancha almashtirib eng katta hosil bo’lishi mumkin
// bo’lgan sonni qaytarsin.
// Namuna:
// Namuna(123) ᔍ 321
// Namuna("001") ᔍ 100
// Namuna(999) ᔍ 999
// Namuna(784) ᔍ 874
function katta(son) {
  let arr = String(son).split("");

  arr.sort((a, b) => b - a);

  return arr.join("");
}
console.log(katta(123));
console.log(katta("001"));
console.log(katta(999));
console.log(katta(784));

// ==================================================================
// ==================================================================
console.log("======= 108 =======");

// 108.Funksiya 2ta sonlar oralig’ini qabul qiladi. Funksiya ushbu
// oraliqdan bironta random son qaytarsin.
// Namuna:
// Namuna(5, 9) ᔍ 7
// Namuna(5, 9) ᔍ 9
// Namuna(5, 9) ᔍ 5
function oraligida(a, b) {
  let random = Math.floor(Math.random() * (b - a + 1)) + a;
  return random;
}
console.log(oraligida(5, 9));
console.log(oraligida(10, 19));

// ==================================================================
// ==================================================================
console.log("======= 109 =======");

// 109.Funksiya son qabul qiladi. Ushbu funksiya ushbu son narissistik son bo’lsa
// true qaytarsin, aks holda false. Narissistik son
// degani sonning har bir raqamini sonning uzunligi miqdorida
// darajaga ko’tarib qo’shib chiqilganda o’ziga teng bo’lgan son.
// Namuna:
// Namuna(153) ᔍ true
// // 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
// Namuna(370) ᔍ true
// Namuna(1652) ᔍ false
function narissistik(son) {
  let arr = String(son).split("");
  let summa = 0;

  for (let i = 0; i < arr.length; i++) {
    let teng = arr[i] ** arr.length;
    summa += teng;
  }

  return summa === son;
}

console.log(narissistik(153));
console.log(narissistik(370));
console.log(narissistik(1652));

// ==================================================================
// ==================================================================
console.log("======= 110 =======");

// 110.Funksiya string qabul qiladi.Funksiya ushbu stringda
// nechta katta harf ishtirok etganin qaytarsin.
// Namuna:
// Namuna("fvLzpxmgXSDrobbgMVrc") ᔍ 6
// Namuna("JMZWCneOTFLWYwBWxyFw") ᔍ 14
// Namuna("mqeytbbjwqemcdrdsyvq") ᔍ 0
function kattaHarf(str) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase() && str[i] !== str[i].toLowerCase()) {
      count++;
    }
  }
  return count;
}
console.log(kattaHarf("fvLzpxmgXSDrobbgMVrc"));
console.log(kattaHarf("1Aa2Bb3Ss4Ff5Dd"));

// ==================================================================

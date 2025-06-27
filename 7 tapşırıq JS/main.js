//Tapşırıq 1: “Gələcəkdə neçə yaşın olacaq?”

let year = Number(prompt("Doğum ilinizi yazın"));
let yas = 2035 - year;
alert("Sizin yaşınız: " + yas);

if (yas < 18) {
    alert("Uşaqsan hələ!");
}

//Tapşırıq 2: “Al-ver robotu”

let result = Number(prompt("Aldığınız məhsulun qiymətini yazın"));
if (result > 100) { alert("Sizə 10% endirim düşür!"); }
else { alert("Əlavə alış-verişlə endirim qazana bilərsiz!"); }

//Tapşırıq 3: “Hansı fəsildə doğulmusan?”

let month = prompt("Doğum ayınızı yazın").toLowerCase();
switch (month) {
    case "mart":
    case "aprel":
    case "may":
        alert("Sizin doğum fəsliniz: Yaz");
        break;

    case "iyun":
    case "iyul":
    case "avqust":
        alert("Sizin doğum fəsliniz: Yay");
        break;

    case "sentyabr":
    case "oktyabr":
    case "noyabr":
        alert("Sizin doğum fəsliniz: Payız");
        break;

    case "dekabr":
    case "yanvar":
    case "fevral":

        alert("Sizin doğum fəsliniz: Qış");
        break;
}

//Tapşırıq 4: “Ən kiçik ədədi tap”

let a = Number(prompt("1-ci ədədi daxil edin:"));
let b = Number(prompt("2-ci ədədi daxil edin:"));
let c = Number(prompt("3-cü ədədi daxil edin:"));

let min;

if (a <= b && a <= c) {
  min = a;
} else if (b <= a && b <= c) {
  min = b;
} else {
  min = c;
}
let say = 0;
if (a === min) say++;
if (b === min) say++;
if (c === min) say++;

if (say >= 2) {
  alert("En kicik eded: " + min + " (en azi iki eded eynidir)");
} else {
  alert("En kicik eded: " + min);
}

//Tapşırıq 5: Saat neçədir ?
let now = new Date();        
let hour = now.getHours();  

if (hour >= 6 && hour < 12) {
  alert("Sabahınız xeyir");
} else if (hour >= 12 && hour < 18) {
  alert("Gününüz xeyir");
} else if (hour >= 18 && hour <= 23) {
  alert("Axşamınız xeyir");
} else {
  alert("Gecəniz xeyir");
}

//Tapşırıq 6: “Parolu yoxla”

let parol = prompt("Parolu daxil edin:");

if (parol === "12345" || parol === "efsun1234") {
  alert("Parol doğrudur");
} else {
  alert("Parol yanlışdır");
}

//Tapşırıq 7 (Çətin): “Countdown test”

let tarixStr = prompt("Tarixi daxil edin (YYYY-MM-DD formatında):");
let daxilEdilenTarix = new Date(tarixStr);
let bugun = new Date();


let ferq = daxilEdilenTarix - bugun;


let gunFerqi = Math.floor(ferq / (1000 * 60 * 60 * 24));

if (gunFerqi > 0) {
  alert(`${tarixStr} tarixinə ${gunFerqi} gün qalıb.`);
} else if (gunFerqi === 0) {
  alert("Bu gün həmin gündür!");
} else {
  alert(`${tarixStr} tarixi artıq keçib (${Math.abs(gunFerqi)} gün əvvəl).`);
}

let ad = prompt("Adinizi daxil edin"); 
let yas = Number(prompt("Yasinizi daxil edin")); 
let qiymet = Number(prompt("Imtahan neticenizi daxil edin")); 
console.log(typeof yas); 
console.log(typeof qiymet); 
if(yas > 18 && qiymet >= 90) {alert("Əla nəticə," + ad + "!");} 
else if (qiymet >= 70 && qiymet <= 89) {alert("Yaxşı nəticə");} 
else if (qiymet >= 50 && qiymet <= 69) {alert("Orta nəticə");} 
else {alert("Kəsildin, təəssüf...");}  
let gun = prompt("Həftənin gününü daxil edin (1–7):");
switch (gun) {
    case "1":
        alert("Bazar ertəsi");
        break;
    case "2":
        alert("Çərşənbə axşamı");
        break;
    case "3":
        alert("Çərşənbə");
        break;
    case "4":
        alert("Cümə axşamı");
        break;
    case "5":
        alert("Cümə");
        break;
    case "6":
        alert("Şənbə");
        break;
    case "7":
        alert("Bazar");
        break;
    default:
        alert("Yanlış gün nömrəsi daxil etmisiniz.");
} if (yas > 18 && qiymet > 70) {
    console.log("Təbriklər! Təqaüd üçün uyğun namizədsən.");
} else {
    console.log("Təəssüf, növbəti dəfə uğurlar.");
}

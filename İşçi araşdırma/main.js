let ad = prompt("Adınızı daxil edin:");
let yas = Number(prompt("Yaşınızı daxil edin:"));
let status = prompt("Statusunuzu yazın (tələbə, işçi, işsiz):").toLowerCase();

// 1. Əsas yoxlamalar
if (status === "işçi" && yas > 25) {
    alert("Sən peşəkar işləyən kateqoriyasına aidsən");
} else if (status === "tələbə" && yas >= 18 && yas <= 25) {
    alert("Sən aktiv gənc tələbəsən");
} else if (status === "işsiz" && yas < 20) {
    alert("Sən potensial namizəd ola bilərsən");
} else {
    alert("Məlumatlarınız qeydə alındı.");
}

// 2. Əlavə (bonus) şərtlər
if (yas > 30 && status !== "işsiz") {
    console.log("İqtisadi aktiv şəxs");
} else if (yas < 15 || status !== "tələbə") {
    console.log("Qeyri-adi profil tapıldı");
} else {
    console.log("Nəticə: Yoxlanış tamamlandı.");
}
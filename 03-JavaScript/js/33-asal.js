function hesapla() {
    let sayi = document.querySelector("#txtSayi").value;
    //!sayi bosluk kontrolu yapar
    //isNaN sayi degil mi? sayi degilse true verir.
    if (!sayi || isNaN(sayi) || sayi <= 1) {
        alert("Uygun bir sayi giriniz");
        return;
    }
    let kontrol = 0;
    for (let i = 2; i < sayi; i++){
        if (sayi%i==0) {
            kontrol++;
        }
    }
    if (kontrol==0) {
        alert("Girilen asal sayidir")
    } else {
        alert("Girilen asal sayi degildir.")
    }
}

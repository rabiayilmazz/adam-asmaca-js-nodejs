var kelimeler = ["panda", "ağaç", "staj", "haber", "yazılım", "usishi", "buluthan", "bilgisayar", "kitap"];
var kelime;
var sembol = "_ ";
var durum;

var btnHarf = document.querySelectorAll("#btnHarf");



var adam = [];
adam[0]='<pre> -------</br> |/    |</br> |</br> |</br> |</br> |</br> |</br>/|\\</br>-------------</pre>';
adam[1]='<pre> -------</br> |/    |</br> |     o</br> |</br> |</br> |</br> |</br>/|\\</br>-------------</pre>';
adam[2]='<pre> -------</br> |/    |</br> |     o</br> |     |</br> |     |</br> |</br> |</br>/|\\</br>-------------</pre>';
adam[3]='<pre> -------</br> |/    |</br> |     o</br> |     |</br> |     |</br> |    /</br> |</br>/|\\</br>-------------</pre>';
adam[4]='<pre> -------</br> |/    |</br> |     o</br> |     |</br> |     |</br> |    / \\</br> |</br>/|\\</br>-------------</pre>';
adam[5]='<pre> -------</br> |/    |</br> |     o</br> |   --|</br> |     |</br> |    / \\</br> |</br>/|\\</br>-------------</pre>';
adam[6]='<pre> -------</br> |/    |</br> |     o</br> |   --|--</br> |     |</br> |    / \\</br> |</br>/|\\</br>---OYUN BİTTi--</pre>';

var kelime_ekran;
var hak = 0;
kelime = kelime_sec(kelimeler);

function basla() {
    hak = 0;
    kelime_ekran = bos_harf(kelime);
    document.getElementById("soru").innerHTML = kelime_goster(kelime_ekran);
    document.getElementById("hak").innerHTML = hak;
    document.getElementById("adam").innerHTML = adam[hak];
}

function kelime_sec (dizi){
    var r = Math.floor(Math.random() * dizi.length);
    return dizi[r];
}

function harf(kelime){
    var dizi_harf = [];
    var uzunluk = kelime.length;

    for ( var i=0; i < uzunluk ; i++) { 
        dizi_harf[i] = kelime.substr(i,1);
    }

    return dizi_harf;
}

function bos_harf(kelime){
    var dizi_harf = [];
    var uzunluk = kelime.length;

    for (var i=0; i < uzunluk ; i++) { 
        dizi_harf[i] = sembol;
    }

    return dizi_harf;
}

function kelime_goster(dizi){
    var metin = "";
    
    dizi.forEach(element => {
    metin += element;
    });
    return metin;
}

function hak_kontrol(harf, kelime){
    var kontrol = kelime.includes(harf);
    if(kontrol == false){
        hak++;
    }
}

function doldur(harf){
    for (const key in kelime) {
        if (kelime[key] == harf) {
            kelime_ekran[key] = harf;
        } 
    }
    hak_kontrol(harf,kelime);
    
    document.getElementById("hak").innerHTML = hak;

    document.getElementById("soru").innerHTML = kelime_goster(kelime_ekran);
    document.getElementById("adam").innerHTML = adam[hak];


    if(kazandiniz() == false){
        document.getElementById("harfler").innerHTML = '<div class="alert alert-success" role="alert"><strong>Kazandınız!</strong></div>';
    }

    if(hak >= 6){
        document.getElementById("harfler").innerHTML = '<div class="alert alert-danger text-center"><strong>Aranan Kelime: '+kelime+' </strong> </div>';
    }
}

function getHarf(harf) {
var input_var= document.getElementById('btnharf');
switch(harf){
    case 'a':doldur('a'); break;
    case 'b':doldur('b'); break;
    case 'c':doldur('c'); break;
    case 'ç':doldur('ç'); break;
    case 'd':doldur('d'); break;
    case 'e':doldur('e'); break;
    case 'f':doldur('f'); break;
    case 'g':doldur('g'); break;
    case 'ğ':doldur('ğ'); break;
    case 'h':doldur('h'); break;
    case 'ı':doldur('ı'); break;
    case 'i':doldur('i'); break;
    case 'j':doldur('j'); break;
    case 'k':doldur('k'); break;
    case 'l':doldur('l'); break;
    case 'm':doldur('m'); break;
    case 'n':doldur('n'); break;
    case 'o':doldur('o'); break;
    case 'ö':doldur('ö'); break;
    case 'p':doldur('p'); break;
    case 'r':doldur('r'); break;
    case 's':doldur('s'); break;
    case 'ş':doldur('ş'); break;
    case 't':doldur('t'); break;
    case 'u':doldur('u'); break;
    case 'ü':doldur('ü'); break;
    case 'v':doldur('v'); break;
    case 'y':doldur('y'); break;
    case 'z':doldur('z'); break;
}
}

function kazandiniz(){
    var sonuc = kelime_ekran.includes(sembol);
    return sonuc;
}
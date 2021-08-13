var http = require('http')
const express = require('express');
const app = express();
const path = require('path');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static("public"));

const kelimeler = ["panda", "ağaç", "staj", "haber", "yazılım", "usishi", "buluthan", "bilgisayar", "kitap"];

let harfler = ["a", "b", "c", "ç", "d", "e","f", "g", "ğ", "h", "ı", "i","j" ,"k", "l", "m", "n", "o", "ö", "p", "r", "s", "ş", "t","u", "ü", "v", "y", "z"];
let kelime;
let kelime_ekran;
let kelime_kontrol;
let hak = 0;
let sembol = "_ ";
let harf_get;
var sayac = 0;
var kontrol;
	
kelime = kelime_sec(kelimeler); 
kelime_ekran = bos_harf(kelime);
kelime_kontrol = harf(kelime);

function kelime_sec (dizi){
    let r = Math.floor(Math.random() * dizi.length);
    return dizi[r];
} 

function kelime_goster(dizi){
    var metin = "";
    
    dizi.forEach(element => {
    metin += element;
    });
    return metin;
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

function doldur(harf,kelime,kelime_ekran){
    for (var key in kelime) {
        if (kelime[key] == harf) {
            kelime_ekran[key] = harf;
        } 
    }
    return kelime_ekran;	
}

function kazandiniz(){
    var sonuc = kelime_ekran.includes(sembol);
    return sonuc;
}

app.get('/', function(req, res) { 
    hak = 0;
    kelime = kelime_sec(kelimeler); 
    sonuc = true;
    kelime_ekran = bos_harf(kelime);
    kelime_kontrol = harf(kelime);
    res.render('anasayfa',{kelime: kelime, kelime_ekran: kelime_goster(kelime_ekran), hak:hak, harf:req.params.harf, harfler:harfler, sonuc:kazandiniz()}); 
    
    res.end();  
});

app.get('/temizle', function(req, res) { 
    hak = 0;
    sonuc = true;
    kelime_ekran = bos_harf(kelime);
    kelime_kontrol = harf(kelime);
    res.render('anasayfa',{kelime: kelime, kelime_ekran: kelime_goster(kelime_ekran), hak:hak, harf:req.params.harf, harfler:harfler, sonuc:kazandiniz()}); 
    res.end();  
});

app.get('/:harf', function(req, res) { 
    sayac++;
    kontrol = kelime.includes(req.params.harf);
    if(sayac %2 == 0){
        if(kontrol == false){
            hak++;
        }
    }
    kelime_ekran = doldur(req.params.harf, kelime, kelime_ekran);
    res.render('anasayfa', { kelime: kelime, kelime_ekran: kelime_goster(kelime_ekran), hak : hak, harf:req.params.harf, harfler:harfler, sonuc:kazandiniz()});
    res.end();
    });
        
app.listen(8080); 
// post ve get kullanılacak

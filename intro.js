var http = require('http')
var express = require('express');
var app = express();
var path = require('path');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static("public"));

var kelimeler = ["panda", "ağaç", "staj", "haber", "yazılım", "usishi", "buluthan", "bilgisayar", "kitap"];

var harfler = ["a", "b", "c", "ç", "d", "e","f", "g", "ğ", "h", "ı", "i","j" ,"k", "l", "m", "n", "o", "ö", "p", "r", "s", "ş", "t","u", "ü", "v", "y", "z"];
var kelime;
var kelime_ekran;
var kelime_kontrol;
var hak = 0;
var sembol = "_ ";
	

function kelime_sec (dizi){
    var r = Math.floor(Math.random() * dizi.length);
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

function hak_kontrol(harf, dizi){
    var kontrol = kelime.includes(harf);
		if(kontrol == false){
			hak++;
		}
        return hak;
}

kelime = kelime_sec(kelimeler); 
kelime_ekran = bos_harf(kelime);
kelime_kontrol = harf(kelime);

app.get('/', function(req, res) { 
    hak = 0;
    kelime = kelime_sec(kelimeler); 
    res.render('anasayfa',{kelime: kelime, kelime_ekran: kelime_goster(bos_harf(kelime)), hak:hak, harf:req.params.harf, harfler:harfler, sonuc:kazandiniz()}); 
    sonuc = false;
    res.end();  
});

app.get('/temizle', function(req, res) { 
    hak = 0;
    sonuc= false;
    res.render('anasayfa',{kelime: kelime, kelime_ekran: kelime_goster(bos_harf(kelime)), hak:hak, harf:req.params.harf, harfler:harfler, sonuc:kazandiniz()}); 
    res.end();  
});

app.get('/:harf', function(req, res) { 
    kelime_ekran = doldur(req.params.harf, kelime, kelime_ekran);
    hak = hak_kontrol(req.params.harf, kelime_kontrol);
    res.render('anasayfa', { kelime: kelime, kelime_ekran: kelime_goster(kelime_ekran), hak:hak, harf:req.params.harf, harfler:harfler, sonuc:kazandiniz()});
    res.end();
    });
        
app.listen(8080);

    
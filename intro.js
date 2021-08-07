var express = require('express');
var app = express();
var path = require('path');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

var kelimeler = ["panda", "ağaç", "staj", "haber", "yazılım", "usishi", "buluthan", "bilgisayar", "kitap"];

var harfler = ["a", "b", "c", "ç", "d", "e", 
			"f", "g", "ğ", "h", "ı", "i", 
			"j" ,"k", "l", "m", "n", "o", 
			"ö", "p", "r", "s", "ş", "t", 
			"u", "ü", "v", "y", "z"];
var kelime;
var kelime_ekran;
var hak = 0;
var sembol = "_ ";
var adam = [];
	adam[0]='<pre> -------</br> |/    |</br> |</br> |</br> |</br> |</br> |</br>/|\\</br>-------------</pre>';
	adam[1]='<pre> -------</br> |/    |</br> |     o</br> |</br> |</br> |</br> |</br>/|\\</br>-------------</pre>';
	adam[2]='<pre> -------</br> |/    |</br> |     o</br> |     |</br> |     |</br> |</br> |</br>/|\\</br>-------------</pre>';
	adam[3]='<pre> -------</br> |/    |</br> |     o</br> |     |</br> |     |</br> |    /</br> |</br>/|\\</br>-------------</pre>';
	adam[4]='<pre> -------</br> |/    |</br> |     o</br> |     |</br> |     |</br> |    / \\</br> |</br>/|\\</br>-------------</pre>';
	adam[5]='<pre> -------</br> |/    |</br> |     o</br> |   --|</br> |     |</br> |    / \\</br> |</br>/|\\</br>-------------</pre>';
	adam[6]='<pre> -------</br> |/    |</br> |     o</br> |   --|--</br> |     |</br> |    / \\</br> |</br>/|\\</br>---OYUN BİTTi--</pre>';
	

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

function getHarf(harf) {
	var input_var = document.getElementById('btnharf');
	doldur(harf);
	}

    function doldur(harf){
		for (const key in kelime) {
			if (kelime[key] == harf) {
				kelime_ekran[key] = harf;
			} 
		}
		hak_kontrol(harf,kelime);	
	}

    function kazandiniz(){
		var sonuc = kelime_ekran.includes(sembol);
		return sonuc;
	}

    function hak_kontrol(harf, kelime){
		var kontrol = kelime.includes(harf);
		if(kontrol == false){
			hak++;
		}
	}
	

app.get('/', function(req, res) { 
    hak = 0;
    kelime = kelime_sec(kelimeler); 
    kelime_ekran = kelime_goster(bos_harf(kelime));  
    res.render('anasayfa',{ kelime: " ", kelime_ekran:kelime_ekran, adam:adam, hak:hak, harf:req.params.harf, harfler:harfler}); 
    res.end();  
});


app.get('/:harf', function(req, res) { 

    //res.send(kelime_sec(kelimeler));
    res.render('anasayfa',{ kelime: kelime, harf:req.params.harf, harfler:harfler,hak:hak});
    
    getHarf(req.params.harf);
    res.end();
    });
        
app.listen(8080);

    
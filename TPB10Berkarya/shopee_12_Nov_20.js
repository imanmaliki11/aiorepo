// ==UserScript==
// @name 12.12
// @namespace Script Runner Pro
// @match *://*/*
// @grant none
// ==/UserScript==

var uu = new Date();
console.log(uu);

var sukses = false;

var iman = setInterval(run, 10);

function run() {
  
  //contoh 8 April 2020 jam 13:00 WIB = '2020', '03', '08', '06', '00', '00'
  //BULAN DIMINUS 1 | JAM DALAM UTC (DIMINUS 7 JAM)
  var tt = new Date(Date.UTC('2020','10','10','13','59','57')); //isi tanggal dan jam flash sale
  var d = new Date();
  var n = d.getTime();
  var x = tt.getTime();
  
  if(x <= n && !sukses) {
  
    try {
      //isi URL HALAMAN AWAL BARANG (tidak perlu lengkap)
      //misal => https://shopee.co.id/Crocodile_823823dashYTst6tats6T6 => cukup ditulis https://shopee.co.id/Crocodile
      if(document.URL.startsWith("https://shopee.co.id/Crocodile")) {
        console.log('POS 1');
        var r = document.getElementsByClassName("crl7WW")[0].lastElementChild;
        if(r) {
          r.click();
          console.log('POS 1 SUKSES');
        }
      }
    } catch {
      console.log("POS 1 GAGAL");
    }
    
    try {
      if(document.URL.startsWith("https://shopee.co.id/Crocodile")) {
        console.log('POS 2');
        var x = document.getElementsByClassName("_2O0llP")[0].lastElementChild;
        if(x) {
          x.click();
          console.log('POS 2 SUKSES');
        }
      }
    } catch {
      console.log("POS 2 GAGAL");
    }
    
    try {
            if(document.URL.startsWith("https://shopee.co.id/cart")) {
              console.log('POS 3');
              var y = document.querySelector(".cart-page-footer__checkout button");
              if(y) {
                y.click();
                console.log('POS 3 SUKSES');
              }
            }
    } catch {
      console.log('POS 3 GAGAL');
    }
    

    try {
          if(document.URL.startsWith("https://shopee.co.id/checkout")) {
            console.log('POS 4');
            var z = document.querySelector("._1WpGLP button");
            if(z) {
              if(z.click()) {
                console.log('POS 4 SUKSES');
                console.log('====== PEMBELIAN BERHASIL =======');
                sukses = true;
                var u2 = new Date();
                console.log("========================================================\n", uu, 
                            "\n", u2, "\n========================================================")
              }
            }
          }
    } catch {
      console.log("POS 4 GAGAL");
    }
    
    //close date if
  }
  
  
  //var c = x.getElementsByClassName("btn-solid-primary")
  //console.log(x);
}
//$('.YtgjXY').click();

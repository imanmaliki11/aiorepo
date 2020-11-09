// ==UserScript==
// @name Insyaallah WIN IPHONE XR
// @namespace Script Runner Pro
// @match *://*/*
// @grant none
// ==/UserScript==

var s0=false, s1 = false, s2=false, s3=false;
var c1=0, c2=0, c3=0;

var iman = setInterval(run, 50);

function run() {
  
  //contoh 8 April 2020 jam 13:00 WIB = '2020', '03', '08', '06', '00', '00'
  //BULAN DIMINUS 1 | JAM DALAM UTC (DIMINUS 7 JAM)
  var tt = new Date(Date.UTC('2020','10','05','06','00','00')); //isi tanggal dan jam flash sale
  var d = new Date();
  var n = d.getTime();
  var x = tt.getTime();
  
  if(x <= d) {
  
    try {
      if(!s0) {
        console.log('======= 0 ========');
        var r = document.getElementsByClassName("crl7WW")[0].lastElementChild;
        if(r.click()) {
          s0 = true;
        }
      }
    } catch {
      console.log("------ G 0 --");
    }
    
    try {
      if(!s1) {
        console.log('======= 1 ========');
        var x = document.getElementsByClassName("_2O0llP")[0].lastElementChild;
        if(x) {
          x.click();
          s1 = true;
          c1=0;
        } else if(s0) {
          if(c1 > 20) {
            s0 = true;
            c1=0;
          } else{
            c1++;
          }
        }
      }
    } catch {
      console.log("------ G 1 --");
    }
    
    try {
            if(!s2) {
              console.log('======= 2 ========');
              var y = document.querySelector(".cart-page-footer__checkout button");
              if(y) {
                y.click();
                s2 = true;
              } else if(s1) {
                if(c2>5) {
                  s1 = false;
                  c2=0;
                } else {
                  c2++;
                }
              }
            }
    } catch {
      console.log("------ G 2 --");
    }
    

    try {
          if(!s3) {
            console.log('======= 3 ========');
            var z = document.querySelector("._1WpGLP button");
            if(z) {
              if(z.click()) {
                console.log("------ SUCESS --");
                s3 = true;
                c3 = 0;
              }
            } else if(s2) {
                if(c3>10) {
                  s2 = false;
                  c3=0;
                } else {
                  c3++;
                }
            }
          }
    } catch {
      console.log("------ G 3 --");
    }
    
    //close date if
  }
  
  
  //var c = x.getElementsByClassName("btn-solid-primary")
  //console.log(x);
}
//$('.YtgjXY').click();

// ==UserScript==
// @name Iman Script
// @namespace Script Runner Pro
// @match *://*/*
// @grant none
// ==/UserScript==

var s0=false, s1 = false, s2=false, s3=false;

var iman = setInterval(run, 50);

//var i = setTimeout(run, 1000);

function run() {
  
  var tt = new Date(Date.UTC('2020','09','24','17','00','00'));
  var d = new Date();
  var n = d.getTime();
  var x = tt.getTime();
  
  if(x <= d) {
  
    if(!s0) {
        console.log('======= 0 ========');
        var r = document.getElementsByClassName("crl7WW")[0].firstElementChild;
        if(r) {
          r.click();
          s0 = true;
        }
    }
    
    if(!s1) {
        console.log('======= 1 ========');
        var x = document.getElementsByClassName("_2O0llP")[0].lastElementChild;
        if(x) {
          x.click();
          s1 = true;
        }
    }

    if(!s2) {
      console.log('======= 2 ========');
      var y = document.querySelector(".cart-page-footer__checkout button");
      if(y) {
        y.click()
        s2 = true;
      }
    }

    if(!s3) {
      console.log('======= 3 ========');
      var z = document.querySelector("._1WpGLP button");
      if(z.click()) {
        s3 = true;
      }
    }
    
  }
  
  
  //var c = x.getElementsByClassName("btn-solid-primary")
  //console.log(x);
}
//$('.YtgjXY').click();

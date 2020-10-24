// ==UserScript==
// @name Iman Script
// @namespace Script Runner Pro
// @match *://*/*
// @grant none
// ==/UserScript==

var s1 = false, s2=false, s3=false;

var iman = setInterval(run, 100);

//var i = setTimeout(run, 1000);

function run() {
  
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
      y.click();
      s2 = true;
    }
  }
  
  
  //var c = x.getElementsByClassName("btn-solid-primary")
  //console.log(x);
}
//$('.YtgjXY').click();

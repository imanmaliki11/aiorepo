var iman = setInterval(run, 25);
var done = false;

function run() {
  if(window.location.href == 'https://coldplayinjakarta.com/' || window.location.href == 'https://coldplayinjakarta.com') {
    try {
      if(done) return;
      console.log("================ Para Pencari Tiket part 2 ================");
      var allButtons = document.querySelectorAll('button>div>span');
      if(allButtons.length) {
        allButtons.forEach((el) => {
          if(el.innerHTML == 'BUY PUBLIC ON-SALE TICKETS') {
            let parent = el.parentElement.parentElement;
            if(parent.classList.contains('disabled')) {
              //refresh
              setTimeout(function() {
                //your code to be executed after 0.1 second
                location.reload(true);
              }, 100);
            } else {
              el.click();
              done = true;
              clearInterval(iman);
              return;
            }
          }
        })
      }
    } catch {
      console.log("Waiting . . .");
    }
  } else { // Close window.location
    console.log("Have redirected");
    clearInterval(iman);
  }
}

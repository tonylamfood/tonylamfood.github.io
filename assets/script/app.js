$("#mewe") .mouseover(function () {
    this.src= "assets/img/logo/TheMeWeLogo-black.png";
    $("#mewe").css("border-color","black");
 })
 .mouseout(function () {
    this.src= "assets/img/logo/TheMeWeLogo-red.png";
    $("img").css("border-color","#E51200");
});


$("#etsyRamen").load("assets/blog/etsy.html #ramenShirt");

$("#mawanVlog").load("assets/blog/mawanVlog.html #mawanVlog");

$("#oldVersion").load("assets/blog/oldVersion.html #oldVersion");

$("#ramenShirt-redbubble").load("assets/blog/ramencollection-Redbubble.html #ramenShirt-redbubble");

let deferredPrompt;
/*const addBtn = document.querySelector('.add-button');*/
const addBtn = document.getElementById('add-button');
addBtn.style.display = 'none';

window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault();
    // Stash the event so it can be triggered later.
    deferredPrompt = e;
    // Update UI to notify the user they can add to home screen
    addBtn.style.display = 'block';
  
    addBtn.addEventListener('click', (e) => {
      // hide our user interface that shows our A2HS button
      addBtn.style.display = 'none';
      // Show the prompt
      deferredPrompt.prompt();
      // Wait for the user to respond to the prompt
      deferredPrompt.userChoice.then((choiceResult) => {
          if (choiceResult.outcome === 'accepted') {
            console.log('User accepted the A2HS prompt');
          } else {
            console.log('User dismissed the A2HS prompt');
          }
          deferredPrompt = null;
        });
    });
  });

  window.addEventListener('appinstalled', (evt) => {
    // Log install to analytics
    console.log('INSTALL: Success');
  });
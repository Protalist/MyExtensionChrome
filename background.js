// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




//"player-ads"
  var c;
  var c2; 
  var c3; 
  var c4;
    const interval = setInterval(function() {
        c= document.getElementsByClassName("tw-button tw-button--success tw-interactive");
       if(c.length === 0 ){
           console.log("non c'è il loot su twitch");
       }
       else{
            console.log("trovato");
            c[0].click();
       }

       c2= document.getElementsByClassName("ytp-ad-text ytp-ad-skip-button-text");
       if(c2.length === 0 ){
           console.log("non c'è la publicità");
       }
       else{
            console.log("trovato");
            c2[0].click();

       }

       c3=document.getElementsByClassName("ytp-ad-overlay-close-button");
       if(c3.length === 0 ){
        console.log("non c'è la publicità");
    }
    else{
         console.log("trovato");
         c3[0].click();

    }



    c4=document.getElementById("player-ads");
    if(c4 === null ){
        console.log("non c'è la publicità 2ß");
    }
    else{
        if(  c4.style.display != "none"){
         console.log("trovatowww");
         c4.style.display = "none";
        }
    }

     }, 5000);
    
  
    
    

    //  "page_action": {
    //   "default_icon": {
    //     "16": "images/kekimg16x16.png",
    //     "32": "images/kekimg32x32.png",
    //     "48": "images/kekimg48x48.png",
    //     "128": "images/kekimg128x128.png"
    //   }
    // },
  
    // "icons": {
    //   "16": "images/kekimg16x16.png",
    //   "32": "images/kekimg32x32.png",
    //   "48": "images/kekimg48x48.png",
    //   "128": "images/kekimg128x128.png"


    /* 
function setSameTime(toBe){
    var asIs=document.getElementsByClassName("vjs-remaining-time-display")[0].innerHTML
    var b = asIs.split(':'); // split it at the colons

    // minutes are worth 60 seconds. Hours are worth 60 minutes.
    var seconds = 0
    for(var i=b.length-1;i>=0;i--){
        seconds+=(+b[i])*Math.pow(60, i)
    }  
    var r=document.getElementsByClassName("vjs-icon-placeholder rai-player-seek-step-rr-button vjs-icon-replay_10")[0]

    var f=document.getElementsByClassName(" vjs-icon-placeholder rai-player-seek-step-ff-button vjs-icon-forward_10")[0]


    while (Math.abs(seconds-toBe)>10){
        
        if(seconds-toBe > 0){
            r.click();
            seconds-=10
        }

        else if(seconds-toBe < 0){
            f.click();
            seconds+=10
        }
        console.log(seconds-toBe)
    }

    return;
}


    */
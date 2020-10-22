// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





  var c;
  var c2; 
  alert("ciao")
    const interval = setInterval(function() {
        c= document.getElementsByClassName("tw-button tw-button--success tw-interactive");
       if(c.length === 0 ){
           console.log("non c'è");
       }
       else{
            console.log("trovato");
            c[0].click();
       }

       c2= document.getElementsByClassName("ytp-ad-text ytp-ad-skip-button-text");
       if(c2.length === 0 ){
           console.log("non c'è");
       }
       else{
            console.log("trovato");
            c2[0].click();

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
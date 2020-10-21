// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





  var c;
  var c2; 
  
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
       if(c.length === 0 ){
           console.log("non c'è");
       }
       else{
            console.log("trovato");
            c[0].click();

       }
     }, 5000);
    
  
    
    


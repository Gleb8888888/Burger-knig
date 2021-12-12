
    let popup1 = document.getElementById('mypopup1'),
        popupToggle = document.getElementById('myBtn'),
        popupClose = document.querySelector('.close');
        
        popupToggle.onclick = function() {
            popup1.style.display="block";
        };
        
        popupClose.onclick = function() {
            popup1.style.display="none";
        };
        
        window.onclick = function(e) {// e eto event
            if(e.target == popup1) {
            popup1.style.display='none';
            }
        
        }



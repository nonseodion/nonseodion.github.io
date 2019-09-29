
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    document.getElementById("hider").style.visibility = "visible";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    
    document.body.style.backgroundColor = "white";
    document.getElementById("hider").style.visibility = "hidden";
  }
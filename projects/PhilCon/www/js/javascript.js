function openNav() {
    document.getElementById("mySidenav").style.width = "80%";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}



function myFunction(e) {
  var str1 = "myDropdown";
  var d = str1.concat(e);
         document.getElementById(d).classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
if (!event.target.matches('.dropbtn')) {

 var dropdowns = document.getElementsByClassName("dropdown-content");
 var i;
 for (i = 0; i < dropdowns.length; i++) {
   var openDropdown = dropdowns[i];
   if (openDropdown.classList.contains('show')) {
     openDropdown.classList.remove('show');
   }
 }
}
}


// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
if (!event.target.matches('.sidenav')) {

 var sidenav = document.getElementsByClassName("sidenav");
 var i;
 for (i = 0; i < sidenav.length; i++) {
   var openSidenav = sidenav[i];
   if (openSidenav.classList.contains('show')) {
     openSidenav.classList.remove('show');
   }
 }
}
}

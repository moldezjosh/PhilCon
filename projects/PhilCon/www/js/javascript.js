
// show side menu
function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}

// close the side menu
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}


// show dropdown contents
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

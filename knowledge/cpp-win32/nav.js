function toggleNav(){
    var x = document.getElementById("toggleNavbar");
    if (x.value == "close"){
        openNav();
        x.value = "open";
    } else {
        closeNav();
        x.value = "close";
    }
}
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}
function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}
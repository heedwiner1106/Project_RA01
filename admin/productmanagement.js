function changelist(){
    document.getElementById("productonsale").classList.toggle("show");
    document.getElementById("productlist").classList.toggle("unshow");
    document.getElementById("onsale").classList.toggle("focus");
    document.getElementById("list").classList.toggle("unfocus");
}
function addproduct(){
    document.getElementById("addproduct").classList.toggle("show");
}
function openmenu(){
    document.getElementById("menus").classList.toggle("Openmenus");
    document.getElementById("mainadmin").classList.toggle("hidemenu-main");
}
function openbtn(x){
    document.getElementById(x).classList.toggle("showbtn");
}
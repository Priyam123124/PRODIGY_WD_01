let dropdown = document.getElementById('box');
let element = document.getElementById('dropdown');
let switch1 = document.getElementById('flexSwitchCheckDefault');
let id1 = document.getElementById('container1');
let id2 = document.getElementById('background');
let nav = document.getElementById('navbar1');
let image = document.getElementById('immg');
let check = false;
let check2 = false;

dropdown.addEventListener("click", ()=>{
    check = !check;
    if(check){
    element.style.display = "block";
    } else{
        element.style.display = "none";
    }
})

switch1.addEventListener("click", ()=>{
    check2 = !check2
    if(check2){
        document.body.style.backgroundColor = "rgb(35, 34, 34)";
        id1.style.backgroundColor = "rgb(35, 34, 34)";
        id2.style.backgroundColor = "rgb(35, 34, 34)";
        nav.style.backgroundColor = "black";
        id1.style.color = "white";
        id2.style.color = "white";
        image.innerHTML = '<img src="dark.jpg" class="image" alt="Banner">';
    } else {
        document.body.style.backgroundColor = "azure";
        id1.style.backgroundColor = "azure";
        id2.style.backgroundColor = "azure";
        id1.style.color = "black";
        id2.style.color = "black";
        nav.style.backgroundColor = "#23413E";
        image.innerHTML = '<img src="banner.jpg" class="image" alt="Banner">';
    }
})
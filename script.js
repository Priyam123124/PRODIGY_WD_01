let dropdown = document.getElementById('box');
let element = document.getElementById('dropdown');
let switch1 = document.getElementById('flexSwitchCheckDefault');
let id1 = document.getElementById('container1');
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
        console.log("Enabled");
        id1.style.backgroundColor = "rgb(35, 34, 34)";
        nav.style.backgroundColor = "black";
        id1.style.color = "white";
        image.innerHTML = '<img src="dark.jpg" class="image" alt="Banner">';
    } else {
        id1.style.backgroundColor = "azure";
        id1.style.color = "black";
        nav.style.backgroundColor = "#23413E";
        image.innerHTML = '<img src="banner.jpg" class="image" alt="Banner">';
        console.log("Disabled");
    }
})

document.body.style.backgroundColor = "black"
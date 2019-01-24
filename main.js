// sursa de date pe care o primim impreuna cu imaginile din directorul img
const images = [
    { "src": "img/img1.jpg", "alt": "1 Nature" },
    { "src": "img/img2.jpg", "alt": "2 Fjords" }, 
    { "src": "img/img3.jpg", "alt": "3 Mountains" },
    { "src": "img/img4.jpg", "alt": "4 Lights" }
];

//parametru index, hardcodat la inceputul codului JS
var index = 0;

// pasul 1: Realizati o bucla for care parcurge array-ul de imagini si printeaza in consola fiecare proprietate .alt si .src  a obiectelor.    
for(var i=0; i<images.length; i++){

    console.log(images[i].src);
    console.log(images[i].alt);
}

//pasul 2: realizati o functie showImage() care primeste ca parametru indexul unui obiect de tip imagine, din array-ul de imagini. Functia trebuie sa puna continut in tag-ul img: ii completeaza atributul src si atributul alt. Demonstrati apelarea functiei in consola.


var imagine = document.getElementById('slide');
function showImage(imageIndex) {
imagine.src = images[imageIndex].src;
imagine.alt = images[imageIndex].alt;
};

//pasul 3: Folositi functia pe post de event handler pentru evenimentul window.onload. Folositi metoda care creeaza un event listener. Setati-l astfel incat functia showImage sa fie apelata cu un parametru index, pe care il hardcodati la inceputul codului JS (ex. var index = 1; ).   
window.addEventListener("load",showImage(index));


//pasul 4 si 5: Creati un buton de “inainte” si faceti astfel incat la click sa afiseze urmatoarea imagine din lista. Daca se ajunge la finalul listei, urmatorul click pe “inainte” trebuie sa ajunga din nou la primul element din lista 

document.getElementById("inainte").addEventListener("click", nextImage);


function nextImage()
{
    if(index < images.length - 1)
    {
        showImage(++index);
    }
    
    else {

        index = 0;
        showImage(index);
    } 
    Activate(document.getElementById("biluta" + index));
};



//pasul 6: Repetati procesul pentru un buton “inapoi” 
document.getElementById("inapoi").addEventListener("click", previousImage);

function previousImage()
{
    if(index > 0)
    {
        showImage(--index);
     }
    
    else{

        index = images.length - 1;
        showImage(index);
    }
    
    Activate(document.getElementById("biluta" + index));
};

//pasul 7: Faceti butoanele de “inainte” si “inapoi” sa dispara atunci cand se ajunge la prima sau respectiv ultima imagine din array-ul de imagini. Trebuie sa modificati comportamentul functiei.

/*function hideNextButton () {
    if (index < images.length - 1) {
    document.getElementById("inainte").style.display = 'inline';
    document.getElementById("inapoi").style.display = 'inline'}

    else {document.getElementById("inainte").style.display = 'none';}
 }


function hideBackButton () {
    if (index!==0) {
        document.getElementById("inainte").style.display = 'inline';
        document.getElementById("inapoi").style.display = 'inline'
}

    else {document.getElementById("inapoi").style.display = 'none';}
}
*/

//pasul 8: Incercati sa replicati un comportament similar folosind proprietatea .hidden a unui HTMLElement
/*function hideNextButton () {

    if (index < images.length - 1) {
    document.getElementById("inainte").hidden = false;
    document.getElementById("inapoi").hidden = false}

    else {document.getElementById("inainte").hidden = true;}
}

function hideBackButton () {

    if (index!==0) {
        document.getElementById("inainte").hidden = false;
        document.getElementById("inapoi").hidden = false
}

    else {document.getElementById("inapoi").hidden = true;}
} */

//pasul 9: Faceti un meniu de bilute. Exista atatea bilute cate imagini sunt in slideshow. Realizati o functie special pentru asta: meniuBilute()
function getImage(index){
    return function(){
        showImage(index);
        Activate(document.getElementById("biluta" + index));
    }
}



function meniuBilute(indexCurrent){

for (indexCurrent = 0; indexCurrent < images.length; indexCurrent++) {
    var dot = document.createElement("span");
    dot.className = "biluta";
    dot.id = "biluta"+ indexCurrent ;
    document.getElementById("meniu").appendChild(dot);
    document.getElementById("biluta" + indexCurrent).addEventListener("click", getImage(indexCurrent));
}
document.getElementById("biluta0").className += " activ";
}


function Activate(biluta) {
    var bilute = document.getElementsByTagName("span");
    for (var i = 0; i < bilute.length; i++) {
        if (bilute[i].id !== biluta.id) {bilute[i].className = "biluta";} 
        else {bilute[i].className = "biluta activ";}
    }
}

window.addEventListener("load",meniuBilute(index));
const btnValiderNombreJoueur = document.getElementById("valider_nombre_joueur");
const infoJoueur = document.getElementById("infoJoueur");
const colonne1 = document.getElementById("colonne1");
const colonne2 = document.getElementById("colonne2");
const colonne3 = document.getElementById("colonne3");
const colonne4 = document.getElementById("colonne4");
const elementHtmlBlock = `  <div class='block-name first-block-name'></div>
                            <div class='block-name'></div>
                            <div class='lien'></div>`;

const htmlBlockElement = "<block-element></block-element>";

function fermerAfficher(){
    document.getElementById("tournoi").style.display = "block";
    infoJoueur.style.display = "none";
}

function tournoi2Colonnes() {
    fermerAfficher();
    colonne1.style.display = "none";
    colonne2.style.display = "none";
    for(i=0 ; i < 2; i++){
        document.getElementsByTagName("section")[i].style.width = "50%";
    }
};

function tournoi3Colonnes(){
    fermerAfficher();
    colonne1.style.display = "none";
    for(i=0 ; i < 4; i++){
        document.getElementsByTagName("section")[i].style.width = "33.33%";
    }
}


function afficherTournoi(){
    let nombreJoueur = document.getElementById("nombre_joueur").value;
    
    if(nombreJoueur == 4){
        tournoi2Colonnes();
        for (var i=0; i<3; i++){
            document.getElementsByClassName("col")[12 + i].innerHTML = htmlBlockElement;
        }
    }
    else if (nombreJoueur == 6){
        tournoi3Colonnes();
        for (var i=0; i<4; i++){
            document.getElementsByClassName("col")[11 + i].innerHTML = htmlBlockElement;
        }
    }
    else if (nombreJoueur == 8){
        tournoi3Colonnes();
        for (var i=0; i<7; i++){
            document.getElementsByClassName("col")[8 + i].innerHTML = htmlBlockElement;
        }
    }
    else if (nombreJoueur == 10){
        fermerAfficher();
        for (var i=0; i<8; i++){
            document.getElementsByClassName("col")[7 + i].innerHTML = htmlBlockElement;
        }
    }
    else if (nombreJoueur == 12){
        fermerAfficher();
        for (var i=0; i<9; i++){
            document.getElementsByClassName("col")[6 + i].innerHTML = htmlBlockElement;
        }
    }
    else if (nombreJoueur == 14){
        fermerAfficher();
        for (var i=0; i<10; i++){
            document.getElementsByClassName("col")[5 + i].innerHTML = htmlBlockElement;
        }
    }
    else if (nombreJoueur == 16){
        fermerAfficher();
        for (var i=0; i<15; i++){
            document.getElementsByClassName("col")[i].innerHTML = htmlBlockElement;
        }
    }
}

// Constructeur de block 
class Block extends HTMLElement {
    constructor(){
        super()
        this.innerHTML = elementHtmlBlock;
    }
}
customElements.define('block-element', Block)

console.log(document.getElementsByClassName("col"));
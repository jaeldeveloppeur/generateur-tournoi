const btnValiderNombreJoueur = document.getElementById("valider_nombre_joueur");
const infoJoueur = document.getElementById("infoJoueur");
const colonne1 = document.getElementById("colonne1");
const colonne2 = document.getElementById("colonne2");
const colonne3 = document.getElementById("colonne3");
const colonne4 = document.getElementById("colonne4");

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
    
    if(nombreJoueur < 5){
        tournoi2Colonnes();
    }
    else if (nombreJoueur < 9){
        tournoi3Colonnes();
    }
    else{
        fermerAfficher();
    }
}
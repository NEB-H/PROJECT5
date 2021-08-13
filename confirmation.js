/*DECLARATION DES VARIABLES*/
let total
let idCommande
let locTotal
let locIdCommande

/*Lancer la fonction main */
main();  

/*fonction main  pour lancer les fonctions selon un ordre definit*/
function main() {
    recupStorage();
    localisation();
    setData();
    restart();
    
}

/*RECUPERER LES ELEMENTS DU STORAGE*/
function recupStorage (){
    if (JSON.parse(localStorage.getItem("TOTAL"))==null ||  JSON.parse(localStorage.getItem("idCommande" ))==null)
    {
        alert("Une erreur a eu lieu lors de votre commande merci de recommencer!")     
    }
    else{
        /*RECUPERER LES VALEURS ID COMMANDE +TOTAL*/
        total = JSON.parse(localStorage.getItem("TOTAL" ));
        idCommande = JSON.parse(localStorage.getItem("idCommande" ));
       
    }  
        
}

function localisation() {
    /*LOCALISATION DES CHAMPS*/
    locTotal=document.getElementById("total")
    locIdCommande=document.getElementById("identifiant")
}


/*RENSEIGNEMENT DES CHAMPS*/
function setData(){

    locTotal.innerHTML=total;
    locIdCommande.innerHTML=idCommande;
}

/*CLEANER LE STORAGE*/
function restart(){
    localStorage.clear();
}

    
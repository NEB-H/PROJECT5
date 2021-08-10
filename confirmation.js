
/*RECUPERER LES VALEURS ID COMMANDE +TOTAL*/
let total = JSON.parse(localStorage.getItem("TOTAL" ));
let idCommande = JSON.parse(localStorage.getItem("idCommande" ));
/*LOCALISATION DES CHAMPS*/
let locTotal=document.getElementById("total")
let locIdCommande=document.getElementById("identifiant")
/*RENSEIGNEMENT DES CHAMPS*/
locTotal.innerHTML=total;
locIdCommande.innerHTML=idCommande;
/*CLEANER LE STORAGE*/
localStorage.clear();

    
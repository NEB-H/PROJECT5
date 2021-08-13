/*Declaration des variable */
let panier ;
let total=0;
let locRecap;
let locTotal;
let firstName;
let lastName;
let address;
let city;
let email;
let contact;
let p;
let i;
let listeArticle=[];
let idComande;
/*Lancer la fonction main */
main();             
/*fonction main  pour lancer les fonctions selon un ordre definit*/
function main() {  
    /**/ 
    disabled(true);
    recupStorage();
    setData();
    form();
    
    

}


 /*ACTIVER-DESACTIER LE BOUTON VALIDER LA COMMANDE*/
 function disabled (valeur){
    document.getElementById("validation").disabled = valeur;
 }
 
/*RECUPERER LES ELEMENTS DEJA AJOUTEES AU PANIER*/
function recupStorage (){
    if (JSON.parse(localStorage.getItem("panier" ))==null )
    {
        panier = [];
        alert("Votre panier est vide")
    }
    else{
        
    panier= JSON.parse(localStorage.getItem("panier" ))
    }  
        
}



 /*TRAITEMENT DES DONNEES DU PANIER*/
function setData(){

   
    /*POUR CHAQUE ARTICLE DANS LE PANIER*/
    for (i=0;i<panier.length;i++){
        createRecap();
        getResult();
        /*Ajout de l'article dans une liste*/
        listeArticle.push(panier[i].name)

    }

}

/*CREER UN LIGNE RECAP ARTICLE*/
function createRecap(){
    locRecap= document.getElementById("recap")
    p=document.createElement('p')
    locRecap.appendChild(p);
    p=document.getElementsByTagName('p');
    
}

/*RENSEIGNER LES VALEURS DE RECAP ET DE TOTAL*/
function getResult(){
    locTotal= document.getElementById("total");
    total = total+ panier[i].price*panier[i].quantite
    p[i].innerHTML=panier[i].name+" "+panier[i].price*panier[i].quantite+"$";
    locTotal.innerHTML="<p>Le montant de votre commande est de:  "+total+"$</p> "; 

}


/*LOCALISATION ET RECUPERATION DES ELEMENTS DU FORMULAIRE DANS LE DOM*/
function getForm(){
    firstName= document.getElementById("prenom").value;
    lastName= document.getElementById("nom").value;
    address= document.getElementById("adresse").value;
    city= document.getElementById("ville").value;
    email= document.getElementById("email").value;   

 }

/*CREATION D'UN OBJET CONTACT */
function createContact(){
    class Contact {
        constructor(firstName ,lastName ,address ,city ,email ) {
            this.firstName=firstName;
            this.lastName= lastName;
            this.address= address;
            this.city= city;
            this.email=email;

            }    
          } 
    
    contact= new Contact (firstName ,lastName ,address ,city ,email);
          
    
}

/*TRAITEMENT DU FORMULAIRE*/
function form(){
    
    document.getElementById("formDetails").addEventListener("submit", function (e){
        /*EMPECHER LE RAFFRECHISSEMENT DE LA PAGE AU SUBMIT*/
        e.preventDefault();
        getForm();
        createContact();
        alert('Coordonnees valides');
        disabled(false);
        console.log(contact)
        post(); 
       
            
        
    })
}

/*DIALOGUE AVEC L'API*/
function post(){
    /*CONNECTION A L API AVEC METHOD POST*/
    fetch("http://localhost:3000/api/cameras/order",{

        method:"POST",
        /*SELECTION  DES DONNEES A ENVOYER MISE EN FORMAT JSON*/
        body:JSON.stringify({
            contact,
            products:[],
        }),
        headers:{
           "Content-Type":"application/json",
        }

       })
    .then(response => response.json())
    .then(promise=> idComande=promise.orderId)
  
    
     
}

/*SAUVEGARDER LES DONNEES DANS LE STORAGE*/
validation.onclick=
function putStorage(){
    localStorage.setItem('idCommande', JSON.stringify(idComande))
    localStorage.setItem('TOTAL', JSON.stringify(total))
}
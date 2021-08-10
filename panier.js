let listeArticle = JSON.parse(localStorage.getItem("panier" ));/*recuperer la liste des article */
let total=0;
document.getElementById("validation").disabled = true; /*empecher le client de valider */
    if (listeArticle){
        /*creer liste td'article et total*/

        for (let i=0;i<listeArticle.length;i++) /*boucle pour repeter la fonction autant de fois quìl y a d'article */
            {
                /*ajouter le montant de l'article a total*/            
                total = total+ listeArticle[i].price*listeArticle[i].quantite;
                /*Localiser et creer la ligne recap du produit */
                let locRecap= document.getElementById("recap")
                let p=document.createElement('p')
                locRecap.appendChild(p);
                p=document.getElementsByTagName('p');
                /*Ecrire dans la ligne les valeurs du produit*/
                p[i].innerHTML=listeArticle[i].name+" "+listeArticle[i].price*listeArticle[i].quantite+"$";

            }
            
        
        /*localiser et creer Total*/

        let locTotal= document.getElementById("total");
        locTotal.innerHTML="<p>Le montant de votre commande est de:  "+total+"$</p> ";

    }

    else{
        
            alert("Votre panier est vide")
        listeArticle=[]
    }


/*FORMULAIRE*/

 
     /*Fonction creer contact*/
    class Contact {
        constructor(firstName ,lastName ,address ,city ,email ) {
            this.firstName=firstName;
            this.lastName= lastName;
            this.address= address;
            this.city= city;
            this.email=email;

            }    
          } 



    /*Recuperation des element du form au submit*/          

document.getElementById("formDetails").addEventListener("submit", function (e){
     
         e.preventDefault();                                                                 /*empeche le rafraichissement de la page*/

        let   firstName= document.getElementById("prenom").value;
        let   lastName= document.getElementById("nom").value;
        let   address= document.getElementById("adresse").value;
        let   city= document.getElementById("ville").value;
        let   email= document.getElementById("email").value;
        let contact= new Contact (firstName ,lastName ,address ,city ,email)
        console.log(contact)
        document.getElementById("validation").disabled = false; /*autoriser le client de valider */
        alert('Corddonnees valider');
        console.log(JSON.stringify(contact))
        console.log(JSON.stringify(listeArticle))
        
        /*FETCH POST */
        const promise01=fetch("http://localhost:3000/api/cameras/order",{
          method:"POST",
          body:JSON.stringify({
              contact,
                listeArticle,
            }),
                
          
          headers:{
          "Content-Type":"application/json",
          }
        });
      
});


  

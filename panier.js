/*recuperer la liste des article */
let listeArticle = JSON.parse(localStorage.getItem('panier' ));

console.log(listeArticle)
/*Defnir le total*/
let total= 0;
for (let i=0;i<listeArticle.length;i++)
        {
            /*Recap les produits*/            
            total = total+ listeArticle[i].price*listeArticle[i].quantite;
            let locRecap= document.getElementById("recap")
            let p=document.createElement('p')
            
            locRecap.appendChild(p);
            p=document.getElementsByTagName('p');
            p[i].innerHTML=listeArticle[i].name+" "+listeArticle[i].price*listeArticle[i].quantite+"$";
            
            
             
            
            console.log(total)


        };

        /*Total*/
        let locTotal= document.getElementById("total");
        locTotal.innerHTML="<p>Le montant de votre commande est de:  "+total+"$</p> ";


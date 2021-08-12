/*lLancer la fonction main */
main();             
/*fonction main  pour lancer les fonctions selon un ordre definit*/
function main() {   
  getArticles();
}
function getArticles(){
//fectch connectionn API et acceder au donnees avec get et la PROMISE
fetch("http://localhost:3000/api/cameras")
.then( importList => importList.json())             //convert to JSON sinon inexploitable 
.then( listProduct => {                             //variable des donnees exploitable 

   /*NOmbre de produits*/
   let b=listProduct.length;
   /*boucle*/
   for (let arctileNumber = 0 ;arctileNumber<b;arctileNumber++) {
     //Recuper chaque data et assigner a une variable en fonction du numero de produit
     let id = listProduct[arctileNumber]._id;
     let name = listProduct[arctileNumber].name;
     let price = listProduct[arctileNumber].price;
     let description =listProduct[arctileNumber].description;
     let imgUrl=listProduct[arctileNumber].imageUrl;

     //LOCALISATION DES BALISE
     let locArticle = document.getElementsByTagName('article');              
     let locTitle= document.getElementById("title"+arctileNumber); 
     let locdescription= document.getElementById("description"+arctileNumber);
     let locproductLink= document.getElementById("productLink"+arctileNumber);

                                 //REMPLISSAGE

     locTitle.innerHTML= name;
     locdescription.innerHTML= description;
     locproductLink.setAttribute('href',"product.html?id="+id+"?articleNumber="+arctileNumber)
     /*CREATION D'UNE IMAGE*/
     let newImg = document.createElement("img");    
     locArticle[arctileNumber].appendChild(newImg).setAttribute('id',id);
     let locImg= document.getElementById(id);                         
     locImg.setAttribute('src',imgUrl);
     locImg.setAttribute('width', 150);
     locImg.setAttribute('alt', "Apareil photo");
    
 


      }  
   }) 
}
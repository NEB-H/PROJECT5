main();             /*lLancer la fonction main */

function main() {   /*fonction main  pour lancer les fonctions selon un ordre definit*/
  getArticles();
}
function getArticles(){
//fectch connectionn API et acceder au donnees avec get et la PROMISE
fetch("http://localhost:3000/api/cameras")
.then( importList => importList.json())             //convert to JSON sinon inexploitable 
.then( listProduct => {                             //variable des donnees exploitable 

   /*NOmbre de produits*/let b=listProduct.length;

  /*boucle*/           for (let arctileNumber = 0 ;arctileNumber<b;arctileNumber++) { 

//Recuper chaque data et assigner a une variable en fonction du numero de produit
              

                        let id = listProduct[arctileNumber]._id;
                        let name = listProduct[arctileNumber].name;
                        let price = listProduct[arctileNumber].price;
                        let description =listProduct[arctileNumber].description;
                        let imgUrl=listProduct[arctileNumber].imageUrl;
                    
                        
                     

                            //LOCALISATION DES BALISE
                  
    /*locatlisation Article*/let locArticle = document.getElementsByTagName('article');              
    /*localisation title*/   let locTitle= document.getElementById("title"+arctileNumber); 
    /*locdescription*/       let locdescription= document.getElementById("description"+arctileNumber);
    /*locproductLink*/       let locproductLink= document.getElementById("productLink"+arctileNumber);

                                //REMPLISSAGE
    /*config title */        locTitle.innerHTML= name;
    /*config Description */  locdescription.innerHTML= description;
    /*config linkProduct*/   locproductLink.setAttribute('href',"product.html?id="+id+"?articleNumber="+arctileNumber)
                           
    /*fonions creer img*/    let newImg = document.createElement("img");    
                             locArticle[arctileNumber].appendChild(newImg).setAttribute('id',id);
    /*localisation img*/     let locImg= document.getElementById(id);                         
    /*config img */          locImg.setAttribute('src',imgUrl);
                             locImg.setAttribute('width', 150);
                             locImg.setAttribute('alt', "Apareil photo");

  



      }  
   }) 
}
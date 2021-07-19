  //fectch connectionn API et acceder au donnees avec get et la PROMISE
fetch("http://localhost:3000/api/cameras")
.then( importList => importList.json())             //convert to JSON sinon inexploitable 
.then( listProduct => { //variable des donnees exploitable 

                        //Recuper chaque data et assigner a une variable en fonction du numero de produit
                    
                        let arctileNumber = 0 ;
                        let id = listProduct[arctileNumber]._id;
                        let name = listProduct[arctileNumber].name;
                        let price = listProduct[arctileNumber].price;
                        let description =listProduct[arctileNumber].description;
                        let imgUrl=listProduct[arctileNumber].imageUrl;
                        console.log(id + name+price+description+imgUrl)
                        
                        //Creation de balise pour un article
    /*locatlisation*/   let locArticle = document.getElementsByTagName("main");
                        
                        const newImg = document.createElement("div");
                        
                        locArticle.appendChild(newImg);
    /**/                    
    /**/
    /**/
    /**/
    /**/

                        


                         }) 
   //let elememt = document.getElementById("title0") // titre
   
   //ecrire element
   //elememt.write(listProduct);


//rprendre les donnees au click:


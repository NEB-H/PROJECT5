  //fectch connectionn API et acceder au donnees avec get et la PROMISE
fetch("http://localhost:3000/api/cameras")
.then( importList => importList.json())             //convert to JSON sinon inexploitable 
.then( listProduct => { //variable des donnees exploitable 

                        //Recuper chaque data et assigner a une variable en fonction du numero de produit
                    
    /*Article Number*/  let arctileNumber = 0 ;  

                        let id = listProduct[arctileNumber]._id;
                        let name = listProduct[arctileNumber].name;
                        let price = listProduct[arctileNumber].price;
                        let description =listProduct[arctileNumber].description;
                        let imgUrl=listProduct[arctileNumber].imageUrl;
                        console.log(id + name+price+description+imgUrl)
                        
                        
                     

                            //Creation et remplissage de balises pour un article
                  
    /*locatlisation Article*/let locArticle = document.getElementsByTagName('article');
    /*fonions creer img*/    let newImg = document.createElement("img");                    
                              
                             locArticle[arctileNumber].appendChild(newImg).setAttribute('id',id);         
    /*localisation img*/     let locImg= document.getElementById(id);
    /*localisation title*/   let locTitle= document.getElementById("title"+arctileNumber); 
    /*locdescription*/       let locdescription= document.getElementById("description"+arctileNumber);
                              console.log(locTitle)
    
    /*config img */          locImg.setAttribute('src',imgUrl);
                             locImg.setAttribute('width', 150);
                             locImg.setAttribute('alt', "Apareil photo");
  
    /*config title */        locTitle.innerHTML= name;
    /*config Description */  locdescription.innerHTML= description; 
                          
                             ;


                             


                      }) 






























                            //Creation de balises pour un article
                  
    /*locatlisation         let locArticle = document.getElementsByTagName('article') 
    /*liste de balise      let  balise = ["img","p","h2"]
    /*Balise a creer      let i=1 ; let b=balise[i]
    /*fonions creer        let newimg = document.createElement("img").setAttribute('id',id);*/
                      
            



    /*LANCEMENT DE LA CREA while (i < 4 ) {
                                              locArticle[arctileNumber].appendChild(newElt).setAttribute('id',id); i++;}
                              console.log(i)
                              i = 2 
                             locArticle[arctileNumber].appendChild(newElt).setAttribute('id',id);
    
    
    /*if (b=="img") { 

                                              locArticle[arctileNumber].appendChild(newElt).setAttribute('id',id);         
                                              locImg.setAttribute('src', imgUrl);
                                              locArticle.setAttribute('id', id);
                                              locArticle.setAttribute('alt',name);
                                            }

    /*creer blaise image*/   
    /*ajout attributs*/
    /*creer titre*/
    /**/
    /*creer description
                        console.log(locArticle)
                        
                        locArticle[arctileNumber].innerHTML= "<ul><li>Elément 1</li><li>Elément 2</li></ul>"+"<p>test</p>";

                        const newElt = document.createElement("img");
                        locArticle[arctileNumber].appendChild(newElt).setAttribute('src', "tes");
                        
                        locArticle[arctileNumber].appendChild(newElt);
                        /*
                        
                        const newElt = document.createElement("p");
                        locArticle.appendChild(newElt);
                        //locArticle.innerHTML= "<div> </div>"

    */                    
    /*creer blaise image*/                
    /*ajout attributs*/
    /*creer titre*/
    /**/
    /*creer description*/

                        


                         
   //let elememt = document.getElementById("title0") // titre
   
   //ecrire element
   //elememt.write(listProduct);


//rprendre les donnees au click:


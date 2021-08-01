/*recuper url*/
let urlData= new URLSearchParams(window.location.search)
/*recuperer parametres*/
 let id = urlData.get("id") 

/*FETCH*/
fetch("http://localhost:3000/api/cameras/"+id)
.then( importList => importList.json())             //convert to JSON sinon inexploitable 
.then( listProduct => { 
 
            
                        let name = listProduct.name;
                        let price = listProduct.price;
                        let description = listProduct.description;
                        let imgUrl=listProduct.imageUrl;
                        let lenses= listProduct.lenses
                        
    /*locatlisation Article*/let locArticle = document.getElementsByTagName('article');
    /*fonions creer img*/    let newImg = document.createElement("img"); 
                             locArticle[0].appendChild(newImg).setAttribute('id',id);        
    /*localisation img*/     let locImg= document.getElementById(id);
    /*localisation title*/   let locTitle= document.getElementById("title"); 
    /*locdescription*/       let locdescription= document.getElementById("description");
    /*locprice*/             let locPrice= document.getElementById("price");
    /*locoption*/            let locOption= document.getElementById("lensSelect")
        /*config img */          locImg.setAttribute('src',imgUrl);
                                 locImg.setAttribute('width', 150);
                                 locImg.setAttribute('alt', "Apareil photo");
        /*config title */        locTitle.innerHTML= name;
        /*config Description */  locdescription.innerHTML= description;
                                 locPrice.innerHTML= price+"$";
                                 
    /*repeter nombre de lenses*/ for(let i=0;i < lenses.length;i++){
    /*Ajout d'option*/                 locOption.add (new Option(lenses[i]));}

    /*ajout produit*/       class achat {
                                                constructor(name , price,lenses) {
                                                    this.name=name;
                                                    this.price= price;
                                                    this.lenses=lensSelect.value;

                                                    }    
                                    }   
    /*panier*/                let panier =[]                             

    /*on cick*/               btn.onclick =function setData(){
                                
                                        if (lensSelect.value=="")
                                        {alert("Merci de selectionner une option!")}
                                        else{ 
                                              let add = new achat(name,price,lenses)
                                              panier.push(add)
                                              console.log(panier)
                                            }

    /*nouvelle instance produit*/               
                                                

    
                         
                                                            };
                                      
                                                                                      
})


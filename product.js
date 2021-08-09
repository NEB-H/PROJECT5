/*recuper url*/
let urlData= new URLSearchParams(window.location.search)
/*recuperer parametres*/
 let id = urlData.get("id"); 
 let panier = null;
/*FETCH*/
fetch("http://localhost:3000/api/cameras/"+id)
.then( importList => importList.json())             //convert to JSON sinon inexploitable 
.then( listProduct => { 
 
            
                        let name = listProduct.name;
                        let price = listProduct.price/100;
                        let description = listProduct.description;
                        let imgUrl=listProduct.imageUrl;
                        let lenses= listProduct.lenses;
                        let quantite=0;
                        console.log(JSON.parse(localStorage.getItem("panier" )))
                       
                        if (JSON.parse(localStorage.getItem("panier" ))==null )
{
     panier = [];
}
else{
    
   panier= JSON.parse(localStorage.getItem("panier" ))
    
}
                       
    /*locatlisation Article*/let locArticle = document.getElementById('infos');
    /*fonions creer img*/    let newImg = document.createElement("img"); 
                             locArticle.appendChild(newImg).setAttribute('id',id);        
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
                                                    this.quantite= 1;

                                                    }    
                                    }   
                               
                                      
                               

    /*on cick*/               btn.onclick =function setData(){
                                
                                        if (lensSelect.value=="")
                                        {alert("Merci de selectionner une option!")}
                                        else{ 
                                            
                                                                let add = new achat(name,price,lenses,quantite)
                                                                panier.push(add)
                                                                console.log(panier)
/*verifier si objet existe*/                                                                                                                               
 /*Mettre dans storage*/                                        localStorage.setItem('panier', JSON.stringify(panier))
                                                                alert("L'article a bien ete ajoute au panier !");
}

                                            
          
                                                

    
                         
                                                            };
                                      
                                                                                      
})


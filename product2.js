/*Declaration des variable */
let urlData;
let id; 
let panier;
let price;
let description;
let imgUrl;
let lenses;
let quantite;
let names;
let locArticle;
let newImg;
let locImg;
let locTitle; 
let locdescription;
let locPrice;
let locOption;
/*lLancer la fonction main */
main();             
/*fonction main  pour lancer les fonctions selon un ordre definit*/
function main() {  
  /*RECUPERER L'ID PRODUIT*/   
  getId();
/*RECUPERER LES ELEMENTS DEJA AJOUTEES AU PANIER*/
  recupStorage();
  /*CREATION D'UNE BALISE*/
  createImg();
  /*LOCALISATION*/
  localisation();
  /*CONNECTION A L'API , RECUPERATION DES DONNEES + REMPLISSAGE DES ELEMENTS*/
  fetcher();
}
/*RECUPERER L'ID PRODUIT*/
function getId(){
/*recuper url*/
 urlData= new URLSearchParams(window.location.search)
/*recuperer parametres*/
  id = urlData.get("id"); 

}

/*RECUPERER LES ELEMENTS DEJA AJOUTEES AU PANIER*/
function recupStorage (){
    if (JSON.parse(localStorage.getItem("panier" ))==null )
    {
        panier = [];
    }
    else{
        
    panier= JSON.parse(localStorage.getItem("panier" ))
    }  
        
}



/*CREER UNE IMAGE*/
function createImg(){
  /*locatlisation Article*/
  locArticle = document.getElementById('infos');
   /*fonions creer img*/
   newImg = document.createElement("img"); 
   locArticle.appendChild(newImg).setAttribute('id',id);        
    /*localisation img*/
    locImg= document.getElementById(id);
    
}

function options(){
    /*repeter nombre de lenses*/ 
    for(let i=0;i < lenses.length;i++){
        /*Ajout d'option*/                 
        locOption.add (new Option(lenses[i]));
    }
}

/*LOCALISER LES ELEMENTS*/
function localisation(){
   /*localisation title*/   
   locTitle= document.getElementById("title"); 
    /*locdescription*/       
    locdescription= document.getElementById("description");
    /*locprice*/             
    locPrice= document.getElementById("price");
    /*locoption*/            
    locOption= document.getElementById("lensSelect") 

}



/*FETCH*/
function fetcher(){

    fetch("http://localhost:3000/api/cameras/"+id)
        .then( importList => importList.json())             //convert to JSON sinon inexploitable 
        .then( listProduct => { 

            names = listProduct.name;
            price = listProduct.price/100;
            description = listProduct.description;
            imgUrl=listProduct.imageUrl;
            lenses= listProduct.lenses;
            quantite=0;
            options();
            remplissage();
            
        
            }
    )
}
/*REMPLISSAGE DES DONNEES*/
function remplissage(){
 
    /*config img */
    locImg.setAttribute('src',imgUrl);
    locImg.setAttribute('width', 150);
    locImg.setAttribute('alt', "Apareil photo");
    /*config title */        
    locTitle.innerHTML= names;
    /*config Description */  
    locdescription.innerHTML= description;
    locPrice.innerHTML= price+"$";
                                 
}
/*on cick creer le produit selectionner et l ajouter au panier dans storage*/ 
btn.onclick = 
function setData(){
                                
    if (lensSelect.value=="")
    {
        alert("Merci de selectionner une option!")
    }
    else
    {
        /*ajout produit*/
        class achat {
            constructor(names , price,lenses) {

        this.name=names;
        this.price= price;
        this.lenses=lensSelect.value;
        this.quantite= 1;

        }    
}   
    let add = new achat(names,price,lenses,quantite)
    panier.push(add)
    /*Mettre dans storage*/                                                                                                                            
    localStorage.setItem('panier', JSON.stringify(panier))
                            alert("L'article a bien ete ajoute au panier !");

    }
}

    
 





    

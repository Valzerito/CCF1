const items=[ // Créer une variable item ou tous les menus sont compris dedans
    {
        id:1, // Attribue l'ID 1 pour ce menu
        nom:"Menu Classic", // donne le nom "Menu classic"
        img:"img/m1.png", // Attribue une image au menu 
        prix: 5, // Fixe un prix pour ce menu
        description:"Burger, Salade, Tomate, Cornichon" // Décris les détails du menu
    
    },
    
    {
        id:2,
        nom:"Menu Bacon",
        img:"img/m2.png",
        prix: 6,
        description:"Burger, Fromage, Bacon, Salade, Tomate"
    
    },
    {
        id:3,
        nom:"Menu Big",
        img:"img/m3.png",
        prix: 8,
        description:"Double Burger, Fromage, Cornichon, Salade"
    
    },
    {
        id:4,
        nom:"Menu Chicken",
        img:"img/m4.png",
        prix: 7,
        description:"Poulet Frit, Tomate, Salade, Mayonnaise"
    
    },
]


const list = document.querySelector('.cards-list'); // cette ligne sélectionne le premier élément HTML qui a une classe CSS 


function afficheitem(doc){ // cette fonction prend un objet "doc" et creer une carte HTML 
    let carte = document.createElement('div'); // Creer l'élément "div" pour la carte
    carte.setAttribute('id', doc.id); // ajoute l'identifiant "ID" en utilisant l'identifiant de l'objet doc
    carte.classList.add('card'); // Ajoute la classe CSS "card" à la carte
    carte.innerHTML='<div class="card_image"><img src="'+ doc.img + '"/></div><div class="card_title title-white"><div><p>'+ doc.nom+'</p><p>'+doc.prix +' E</p></div> </div> </div>'; // Cela ajoute du contenu HTML à la carte en utilisant les propriétés de l'objet "doc" 
list.appendChild(carte); // Ajoute la carte a la liste en utilisant "appendchild" 
}



items.map(item=>afficheitem(item)); // appelle la fonctio "afficheitem" pour les éléments de la liste "items"



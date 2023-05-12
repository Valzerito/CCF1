const items=[ 
    {
        id:1,
        nom:"Menu Classic",
        img:"img/m1.png",
        prix: 5,
        description:"Burger, Salade, Tomate, Cornichon"
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
];

const list = document.querySelector('.cards-list');

function afficheitem(doc){
    let carte = document.createElement('div');
    carte.setAttribute('id', doc.id);
    carte.classList.add('card');
    carte.innerHTML='<div class="card_image"><img src="'+ doc.img + '"/></div><div class="card_title title-white"><div><p>'+ doc.nom+'</p><p>'+doc.prix +' E</p></div> </div> </div>';
    list.appendChild(carte);
    carte.addEventListener('click', () => {
        alert(doc.description);
    })
}

items.map(item=>afficheitem(item));

const btnMax = document.createElement('button');
btnMax.setAttribute('id', 'btnMax');
btnMax.innerText = '+ CHERS';
document.body.appendChild(btnMax);
btnMax.addEventListener('click', () => {
  const maxItem = items.sort((a, b) => b.prix - a.prix)[0];
  list.innerHTML = '';
  afficheitem(maxItem);
});

const btnMin = document.createElement('button');
btnMin.setAttribute('id', 'btnMin');
btnMin.innerText = '- CHERS';
document.body.appendChild(btnMin);
btnMin.addEventListener('click', () => {
  const minItem = items.sort((a, b) => a.prix - b.prix)[0];
  list.innerHTML = '';
  afficheitem(minItem);
});


const btnAll = document.createElement('button');
btnAll.setAttribute('id', 'btnAll');
btnAll.innerText = 'Tous les menus';
document.body.appendChild(btnAll);
btnAll.addEventListener('click', () => {
  list.innerHTML = '';
  items.map(item => afficheitem(item));
});

const btnAvg = document.createElement('button');
btnAvg.setAttribute('id', 'btnAvg');
btnAvg.innerText = 'Moyenne des prix';
document.body.appendChild(btnAvg);
btnAvg.addEventListener('click', () => {
  const avg = items.reduce((total, item) => total + item.prix, 0) / items.length;
  alert(`La moyenne des prix est de ${avg.toFixed(2)} E`);
});






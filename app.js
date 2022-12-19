
const pierreBtn = document.getElementById('Pierre');
const feuilleBtn = document.getElementById('Feuille');
const ciseauxBtn = document.getElementById('Ciseaux');
const affichage = document.getElementById('affichage');
const comptJoueur = document.getElementById('comptJoueur');
const comptOrdi = document.getElementById('comptOrdi');
const resetCompt = document.getElementById('reset')

let joueur = null;
let ordi = null;
let resultat = null;

const ordiChoix = ['pierre', 'feuille', 'ciseaux'];

function combat (j, o) {
    if(j === 'pierre' && o === 'ciseaux' || j === 'feuille' && o === 'pierre' || j === 'ciseaux' && o === 'feuille'){
        resultat = 'Vous avez gagné';
        affichage.innerHTML = `${joueur} contre ${ordi} : ${resultat} `;
        compteur();
       
    } else if (j === 'pierre' && o === 'feuille' || j === 'feuille' && o === 'ciseau' || j === 'ciseaux' && o === 'pierre') {
        resultat = 'Vous avez perdu';
        affichage.innerHTML = `${joueur} contre ${ordi} : ${resultat} `;
        compteur();
        
    } else {
        resultat = 'Il y a égalité';
        affichage.innerHTML = `${joueur} contre  ${ordi} : ${resultat} `;
    }
}

function compteur(){
    if (resultat === 'Vous avez gagné'){
        
         comptJoueur.textContent++ 
         
    }
    else {
      
        comptOrdi.textContent++

    }
}


pierreBtn.addEventListener('click', function(){
     joueur = 'pierre';
     chiffre = Math.floor(Math.random() *3);
     ordi = ordiChoix[chiffre];
     combat(joueur, ordi)
})


feuilleBtn.addEventListener('click', function(){
    joueur = 'feuille';
    chiffre = Math.floor(Math.random() *3);
    ordi = ordiChoix[chiffre];
    combat(joueur, ordi)
})

ciseauxBtn.addEventListener('click', function(){
    joueur = 'ciseaux';
    chiffre = Math.floor(Math.random() *3);
    ordi = ordiChoix[chiffre];
    combat(joueur, ordi)
})

resetCompt.addEventListener('click', function(){
    comptJoueur.textContent = 0
    comptOrdi.textContent = 0
    affichage.innerText = ' '
})
    

const container = document.getElementById('text')

const text = 'Bienvenue au jeu du Shi Fou Mi'
const limit = text.length
const interval = 100
let index = 0


const idInterval = setInterval(function(){
    console.log(index)
    if(index <= limit){
        container.innerText = text.slice(0, index++)
    } else {
        clearInterval(idInterval)
    }
}, interval)



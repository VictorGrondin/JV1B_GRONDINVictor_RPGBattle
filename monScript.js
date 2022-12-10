monstre_numero1 = document.getElementById("monstre_numero1");
vie_monstre_numero1 = document.getElementById("vie_monstre_numero1");
affiche_vie_monstre_numero1 = document.getElementById("affiche_vie_monstre_numero1");

monstre_numero2 = document.getElementById("monstre_numero2");
vie_monstre_numero2 = document.getElementById("vie_monstre_numero2");
affiche_vie_monstre_numero2 = document.getElementById("affiche_vie_monstre_numero2");



narato = document.getElementById("narato")
joueur = document.getElementById("joueur");
vie_joueur = document.getElementById("vie_joueur");
affiche_vie_joueur = document.getElementById("affiche_vie_joueur");







function Fonction_attaque() {

    vie_monstre_numero1.innerHTML = vie_monstre_numero1.innerHTML-(40);
    affiche_vie_monstre_numero1.innerHTML = "vous avez fait 40 de degats ";
   console.log("test");
   
    setTimeout(() => {
       narato.innerHTML = "attention le monstre riposte  ";
    }, 2000);

    
    setTimeout(() => {
        vie_joueur.innerHTML = vie_joueur.innerHTML-(80);
        affiche_vie_joueur.innerHTML = "vous avez recu 40 points de degats ";
    }, 4000);
 

}



monstre_numero2.onclick = function() {


    vie_monstre_numero2.innerHTML = vie_monstre_numero1.innerHTML-(40);
    affiche_vie_monstre_numero2.innerHTML = "vous avez fait 40 de degats ";
   console.log("test");
   
    setTimeout(() => {
       narato.innerHTML = "attention le monstre vous attaque  ";
    }, 2000);

    
    setTimeout(() => {
        vie_joueur.innerHTML = vie_joueur.innerHTML-(80);
        affiche_vie_joueur.innerHTML = "vous avez recu 40 points de dommage ";
    }, 4000);
 

}



function Fonction_defence() {

    setTimeout(() => {
        narato.innerHTML = "vous avez bloqué l'attaque ennemi   ";
     }, 1000);
  
   
}

function Fonction_attaque_special() {

    setTimeout(() => {
        narato.innerHTML = "vous infligez 80 de dégats a l'ennemi de votre choix   ";
     }, 1000);
  
}
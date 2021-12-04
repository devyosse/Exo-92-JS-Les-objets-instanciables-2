let Personne = function(nom, prenom, age, sexe) {
    this.nom = nom;
    this.prenom = prenom;
    this.age = age;
    this.sexe = sexe;

    this.getPersonne = function (){
        return "Ma personne s'appelle " + this.nom + this.prenom + " il/elle a " + this.age + " et est de sexe " + this.sexe;
    }
}
// creation personnnages
let tableau = [];

let Hocine = new Personne('Hassaini ', ' Hocine', '20', 'Homme');
let Arnold = new Personne('Schwarzenegger ', ' Arnold', '45', 'Homme');
let Ridan = new Personne('Hassaini ', 'Ridan', '10', 'Homme');
let Elise = new Personne('Auger ', 'Elise', '20', 'Femme');
let John = new Personne('Buchet ', 'Jonathan', '30', 'Homme');
let Oli = new Personne('Peuchet ', 'Olivier', '24', 'Homme');
let Kev = new Personne('Mura ', 'Kévin', '28', 'Homme');

tableau.push(Hocine, Arnold, Ridan, Elise, John, Oli, Kev);

for(let i = 0; i < tableau.length;i++){
   let div = document.createElement('div');
    div.innerHTML = tableau[i].getPersonne();
    document.body.appendChild(div);
}
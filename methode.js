//Création d'un objet véhicule
class vehicule {

    constructor (myCouleur, myRoues, myMarque) {
        this.couleur = myCouleur;
        this.roues = myRoues;
        this.marque = myMarque;
    }

    demarrer() {
    return "Je démarre";
    }

    arreter() {
    return "Je m'arrète";
    }
}

let ford = new vehicule('blue', 4, 'Ford');
console.log(ford.demarrer());
console.log(ford.arreter());

//Création d'un objet velo qui hérite de l'objet véhicule
class velo extends vehicule {

    constructor(myCouleur, myRoues, myMarque, myRayonRoues, myTypePeinture) {
        super(myCouleur, myRoues, myMarque);
        this.rayonRoues = myRayonRoues;
        this.typePeinture = myTypePeinture;
    }

    monter() {
    return "Je monte en voiture";
    }
}

let bicycle = new velo('yellow', 2, 'Décatlon', 50, 'Lisse');
console.log(bicycle.monter());

//Création d'un objet voiture qui hérite de l'objet véhicule
class voiture extends vehicule {

    constructor(myCouleur, myRoues, myMarque, myAssurance, myProprietaire) {
        super(myCouleur, myRoues, myMarque);
        this.assurance = myAssurance;
        this.proprietaire = myProprietaire;
    }

    passerAuCarWash() {
        return "Hello Word!";
    }
}

let citroen = new voiture('green', 4, 'Citroen', 'Responsabilité civil', 'Monsieur Von');
console.log(citroen.passerAuCarWash());

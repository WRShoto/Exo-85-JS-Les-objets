let personne = {
    "prenom" : "James",
    "nom" : "Bond ",
    "metier": "agent secret",
    "Nom de code": "007",

};

/* Afficher ci-dessous "mon nom est <propriété nom de notre objet>, <propriété prenom de notre objet>
 <propriété nom de notre objet>, agent <propriété nomDeCode de notre objet>" dans un alert */

alert("mon nom est "+ personne["nom"] + personne["prenom"]+", agent " + personne["Nom de code"]);



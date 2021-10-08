let variable = "Hello World!";
document.write(variable); 
// Avec let et var déclare une varible
// Une variable peut avoir sa valeur modifiée

document.write("<br>");
variable = "coucou"
document.write(variable);


const nombre =3;
// Redonner une valeur à une constante est impossible
// et provoque une erreur
//nombre = 6; => Erreur
// Assignment to constant variable.
document.write(nombre);
let string = "chaine de caractère" // La chaine de caractère est toujours  entre guillemets
let integer = 123; // Un nombre n'a pas besoin de ""
let integer2 = 34.5; //Un nombre à virgule
let boolean = true; // ou false
let array = ["coucou",8,64];
// Un tableau contient plusieurs valeurs entre[]
// et sépéres par des,
let object ={
    couleur:"blanc",
    hauteur: 100,
    largeur: 350
}
//Un objet est une répresentation d'un éleément
// Un objet possède des propriétés:
// ce sont des variables qui lui sont propres 

//let a = 12;
//let b = 20;
//let c = a + b; 
//document.write("<p>Le total de a + b =")
//document.write(c)
//document.write("</p>");

//let reponse = window.prompt ("Comment vas-tu?");
// document.write (" Ta réponse est:");
// document.write (Super);
// document.write("</p>")

//let nom = window.prompt("Quel est votre nom ?");
// let prenom = window.prompt("Quel est votre prenom?");

//document.write(prénom);
//document.write("  ");
//document.write(nom);
//document.write("!</p>");

// document.write("<p> Bonjour " + prenom + "  " + nom + "!</p>");

for (let index = 1; index < 11; index++) {
    document.write ("<p>" + index + "</p>");
}

let jane = "Alex";
if (jane == "jane") {
    document.write("Bonjour jane");
} else if (jane == "Alex") {
    document.write("Bonjour Alex");
}
else {
    document.write("Tu n'es ni Jane ni Alex. Au revoir!");
}
if (condition1 == true && condition2 == ) {
    
}


do {
    // Première étape je demande quel calcul l'utilisateur veut faire.
do {
    var choix = parseInt(prompt("Que souhaitez-vous faire ?\n\n1 - Addition\n2 - Multiplication \n3 - Soustraction\n4 - Division\n"));
} 
while (choix != 1 && choix != 2 && choix != 3 && choix != 4)

// Je veux que l'utilisateur rentre uniquement un nombre, et qu'une boucle se fasse tant que ce n'est pas le cas.
do {
    var premierNombre = Number(prompt("Entrez le premier chiffre: "));
} while (isNaN(premierNombre));

do {
    var deuxiemeNombre = Number(prompt("Entrez le second chiffre: "));
} while (isNaN(deuxiemeNombre));

// Je met en place les différentes possibilités.
try {
    switch (choix) {
        case 1:
            alert("Le résultat de votre addition est : " + addition(premierNombre, deuxiemeNombre));
            break;
    
        case 2:
            alert("Le résultat de votre multiplication est : " + multiplication(premierNombre, deuxiemeNombre));
            break;
    
        case 3:
            alert("Le résultat de votre soustraction est : " + soustraction(premierNombre, deuxiemeNombre));        
            break;
    
        case 4:
            alert("Le résultat de votre division est : " + division(premierNombre, deuxiemeNombre));
            break;
    
        default:
            throw new Error("Une erreur est survenu");
    }
} catch (error) {
    alert(error);
}


// Dans cette partie je créer les fonction qui me seront nécessaire pour effectuer les calculs.
function addition(nombreUn, nombreDeux) {
    return resultat = nombreUn + nombreDeux;
}

function soustraction(nombreUn, nombreDeux) {
    return resultat = nombreUn - nombreDeux;
}

function multiplication(nombreUn, nombreDeux) {
    return resultat = nombreUn * nombreDeux;
}

function division(nombreUn, nombreDeux) {
    if (nombreDeux == 0) {
        throw new Error("Impossible de diviser par 0.");
    }
    return resultat = nombreUn / nombreDeux;
}
} while (confirm("Voulez-vous utiliser la calculatrice?"));


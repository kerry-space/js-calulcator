// Funktion för att starta miniräknaren
function startMiniräknare() {
    // Välkomstmeddelande
    alert("Välkommen till Miniräknaren!");

    let fortsätt = true;

    while (fortsätt) {
        // Fråga om första talet
        let förstaTalet = prompt("Ange ett tal:");
        förstaTalet = parseFloat(förstaTalet);

        // Fråga om andra talet
        let andraTalet = prompt("Ange ett annat tal:");
        andraTalet = parseFloat(andraTalet);

        // Fråga om räknesätt
        let räknesätt = prompt("Vilket räknesätt vill du använda? (+, -, *, /):");

        // Beräkning och resultat
        let resultat;

        if (räknesätt === "+") {
            resultat = förstaTalet + andraTalet;
            alert("Resultatet av additionen är: " + resultat);
        } else if (räknesätt === "-") {
            resultat = förstaTalet - andraTalet;
            alert("Resultatet av subtraktionen är: " + resultat);
        } else if (räknesätt === "*") {
            resultat = förstaTalet * andraTalet;
            alert("Resultatet av multiplikationen är: " + resultat);
        } else if (räknesätt === "/") {
            if (andraTalet !== 0) {
                resultat = förstaTalet / andraTalet;
                alert("Resultatet av divisionen är: " + resultat);
            } else {
                alert("Fel: Division med noll är inte tillåtet.");
            }
        } else {
            alert("Fel: Ogiltigt räknesätt.");
        }

        // Fråga användaren om de vill fortsätta
        let fortsättSvar = prompt("Vill du göra en ny beräkning? (ja/nej):");
        if (fortsättSvar.toLowerCase() !== "ja") {
            fortsätt = false;
        }
    }

    // Avslutningsmeddelande
    alert("Tack för att du använde Miniräknaren! Hej då!");
}

// Starta miniräknaren
startMiniräknare();
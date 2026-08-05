// 🌲 Sandra, die Malamuten und der Bus
// Version 0.1 "Aufbruch"

document.addEventListener("DOMContentLoaded", () => {
    console.log("Willkommen bei Sandra, die Malamuten und der Bus");

    // Begrüßung je nach Uhrzeit
    const stunde = new Date().getHours();

    let begruessung = "Willkommen zurück, Sandra!";

    if (stunde < 12) {
        begruessung = "☀️ Guten Morgen, Sandra!";
    } else if (stunde < 18) {
        begruessung = "🌤️ Guten Tag, Sandra!";
    } else {
        begruessung = "🌙 Guten Abend, Sandra!";
    }

    const titel = document.querySelector(".hero p");

    if (titel) {
        titel.textContent = begruessung + " Bereit für das nächste Abenteuer.";
    }

    // Klick auf "Neue Reise"
    const buttons = document.querySelectorAll("button");

    if (buttons.length > 0) {
        buttons[0].addEventListener("click", () => {
            alert("🚐 Hier entsteht als Nächstes der Reise-Assistent.");
        });
    }

    // Klick auf "Packliste"
    if (buttons.length > 1) {
        buttons[1].addEventListener("click", () => {
            alert("📦 Als Nächstes bauen wir deine komplette Packliste ein.");
        });
    }
});

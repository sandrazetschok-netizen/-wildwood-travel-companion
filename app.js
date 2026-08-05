// Sandra, die Malamuten und der Bus
// Version 1.0

document.addEventListener("DOMContentLoaded", async () => {

    // Begrüßung
    const begruessung = document.getElementById("begruessung");

    if (begruessung) {
        const stunde = new Date().getHours();

        let text = "🌲 Willkommen zurück, Sandra!";

        if (stunde < 12) {
            text = "☀️ Guten Morgen, Sandra!";
        } else if (stunde < 18) {
            text = "🌤️ Guten Tag, Sandra!";
        } else {
            text = "🌙 Guten Abend, Sandra!";
        }

        begruessung.textContent = text + " Bereit für das nächste Abenteuer.";
    }

    // Elemente holen
    const grid = document.querySelector(".grid");
    const detailBereich = document.getElementById("details");
    const detailTitel = document.getElementById("detailTitel");
    const detailListe = document.getElementById("detailListe");
    const suche = document.getElementById("suche");

    if (!grid) {
        return;
    }

    // Packliste laden
    let daten = {};

    try {

        const response = await fetch("packliste.json");
        daten = await response.json();

    } catch (e) {

        console.error("Packliste konnte nicht geladen werden.", e);
        return;

    }

    // Kacheln erzeugen
    grid.innerHTML = "";

    const kategorien = Object.keys(daten);

    kategorien.forEach((kategorie) => {

        const tile = document.createElement("div");
        tile.className = "tile";

        const anzahl = Array.isArray(daten[kategorie])
            ? daten[kategorie].length
            : Object.keys(daten[kategorie]).length;

        tile.innerHTML = `
            <div class="icon">📦</div>
            <strong>${kategorie}</strong><br>
            <small>${anzahl} Einträge</small>
        `;

        grid.appendChild(tile);

    });

});

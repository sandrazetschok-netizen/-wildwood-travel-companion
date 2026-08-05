document.addEventListener("DOMContentLoaded", async () => {

    // Service Worker läuft bereits

    // Packliste laden
    const antwort = await fetch("packliste.json");
    const daten = await antwort.json();

    const grid = document.querySelector(".grid");

    grid.innerHTML = "";

    Object.keys(daten).forEach(kategorie => {

        const karte = document.createElement("div");
        karte.className = "tile";

        karte.innerHTML = `
            <div class="icon">📦</div>
            <strong>${kategorie}</strong><br>
            <small>${daten[kategorie].length} Einträge</small>
        `;

        karte.addEventListener("click", () => {

            alert(
                kategorie + "\n\n" +
                daten[kategorie].join("\n")
            );

        });

        grid.appendChild(karte);

    });

});

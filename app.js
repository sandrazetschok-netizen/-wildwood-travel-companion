document.addEventListener("DOMContentLoaded", async () => {

    // Service Worker läuft bereits

    // Packliste laden
    const antwort = await fetch("packliste.json");
    const daten = await antwort.json();

    const grid = document.querySelector(".grid");
const suche = document.getElementById("suche");
    grid.innerHTML = "";
let karten = [];
    Object.keys(daten).forEach(kategorie => {

        const karte = document.createElement("div");
        karte.className = "tile";

        karte.innerHTML = `
            <div class="icon">📦</div>
            <strong>${kategorie}</strong><br>
            <small>${daten[kategorie].length} Einträge</small>
        `;

        karte.addEventListener("click", () => {

    document.getElementById("details").style.display = "block";

    document.getElementById("detailTitel").innerText = kategorie;

    const liste = document.getElementById("detailListe");

    liste.innerHTML = "";

    daten[kategorie].forEach(eintrag => {

    const schluessel = kategorie + "_" + eintrag;

    const erledigt = localStorage.getItem(schluessel) === "true";

    liste.innerHTML += `
    <label style="display:block;margin:10px 0;">
        <input
            type="checkbox"
            ${erledigt ? "checked" : ""}
            onchange="speichern('${schluessel}',this.checked)">
        ${eintrag}
    </label>
    `;

});

});

        grid.appendChild(karte);
karten.push({
    element: karte,
    name: kategorie.toLowerCase()
});
    });

});
function speichern(schluessel, wert){
suche.addEventListener("input", () => {

    const text = suche.value.toLowerCase();

    karten.forEach(k => {

        if(k.name.includes(text)){
            k.element.style.display = "";
        }else{
            k.element.style.display = "none";
        }

    });

});
    localStorage.setItem(schluessel, wert);

}

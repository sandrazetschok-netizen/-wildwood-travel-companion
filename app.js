document.addEventListener("DOMContentLoaded", async () => {
const stunde = new Date().getHours();

let begruessung = "🌲 Willkommen zurück, Sandra!";

if (stunde < 12) {
    begruessung = "☀️ Guten Morgen, Sandra!";
} else if (stunde < 18) {
    begruessung = "🌤️ Guten Tag, Sandra!";
} else {
    begruessung = "🌙 Guten Abend, Sandra!";
}

document.getElementById("begruessung").innerText =
    begruessung + " Bereit für das nächste Abenteuer.";
    // Service Worker läuft bereits

    // Packliste laden
    const antwort = await fetch("packliste.json");
    const daten = await antwort.json();

    const grid = document.querySelector(".grid");
    const progress = document.querySelector("progress");
const fortschrittText = document.getElementById("fortschrittText");
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
fortschrittBerechnen();
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
const reiseButton = document.getElementById("reiseAnlegen");

if(reiseButton){

    const gespeicherteReise = localStorage.getItem("reise");

    if(gespeicherteReise){
        document.getElementById("reise").innerText = gespeicherteReise;
    }

    reiseButton.addEventListener("click",()=>{

        const ziel = prompt("📍 Wohin geht die Reise?");

        if(!ziel) return;

        const datum = prompt("📅 Wann geht es los?");

        const text = ziel + "\n" + datum;

        localStorage.setItem("reise",text);

        document.getElementById("reise").innerText = text;

    });

}
    localStorage.setItem(schluessel, wert);

    fortschrittBerechnen();

}
suche.addEventListener("input", () => {
function fortschrittBerechnen(){

    const checkboxen = document.querySelectorAll("#detailListe input[type='checkbox']");

    if(checkboxen.length === 0){
        return;
    }

    let erledigt = 0;

    checkboxen.forEach(cb=>{
        if(cb.checked){
            erledigt++;
        }
    });

    const prozent = Math.round(erledigt / checkboxen.length * 100);

    progress.value = prozent;
    fortschrittText.innerText = prozent + " % gepackt";

}
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

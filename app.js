// Sandra, die Malamuten und der Bus
// Version 0.1 – Aufbruch

document.addEventListener("DOMContentLoaded", () => {

    const progress = document.querySelector("progress");
    const text = document.querySelector("progress + p");

    let wert = localStorage.getItem("packstatus");

    if (!wert) {
        wert = 0;
    }

    progress.value = wert;
    text.innerHTML = wert + " % gepackt";

    const karten = document.querySelectorAll(".tile");

    karten.forEach(karte => {

        karte.addEventListener("click", () => {

            karte.classList.toggle("aktiv");

            let aktuell = Number(progress.value);

            if (karte.classList.contains("aktiv")) {
                aktuell += 5;
            } else {
                aktuell -= 5;
            }

            if (aktuell < 0) aktuell = 0;
            if (aktuell > 100) aktuell = 100;

            progress.value = aktuell;
            text.innerHTML = aktuell + " % gepackt";

            localStorage.setItem("packstatus", aktuell);

        });

    });

});

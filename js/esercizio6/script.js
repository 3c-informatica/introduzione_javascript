const corpo = document.body; //riferimento a body
const radice = document.documentElement; // driferimento html
const finestra = document.defaultView; //Oggetto window associato al documento
const implementazione = document.implementation; //oggetto Dom implementation 

document.getElementById("infoBtn").addEventListener("click", function () {
    const titolo = document.getElementById("titolo");
    titolo.innerText = "informazioni sul documento: ";

    //mostra i dettagli della pagina 
    let info = document.createElement("p");
    info.innerText =
        "Titolo: " + document.title + "\n" +
        "Elemento radice: " + radice.nodeName + "\n" +
        "Body: " + corpo.nodeName + "\n" +
        "finestra predefinita: " + finestra + "\n" +
        "implementazione DOM: " + implementazione;
    corpo.appendChild(info);
});

document.getElementById("btnModifica").addEventListener("click", function () {
    const titolo = document.getElementById("titolo");
    titolo.innerHTML = " <em>Titolo aggironato dinamicamente con innerHTML</em>";

    const paragrafi = document.getElementsByTagName("p");
    for (let i = 0; i < paragrafi.length; i++) {
        paragrafi[i].innerText = "questo e il paragrafo numero " + (i + 1) + " modificato da Javasript.";
    }

    const descrizioni = document.getElementsByName("descrizione");
    for (let i = 0; i < descrizioni.length; i++) {
        descrizioni[i].innerHTML += " (<strong>selezionato tramite name</strong>)";
    }

    const nuovoParagrafo = document.createElement("p");
    nuovoParagrafo.innerText = "un nuovo elemento e stato creato dinamicamente nel body.";
    corpo.appendChild(nuovoParagrafo);
});

document.getElementById("btnConta").addEventListener("click", function () {
    const paragrafi = document.getElementsByTagName("p");
    alert("Numero totale di paragrafi nel documento: " + paragrafi.length);
});
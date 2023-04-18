/*  > CHIEDI ALL'UTENTE LA MAIL (USANDO PROMPT)
    > CONTROLLA CHE SIA NELLA LISTA (CICLO FOR CON ARRAY + IF ELSE)
    > STAMPA RISULTATO CONTROLLO */

let mail = prompt("Inserisci la tua email:");
const mailList = ["ciao@gmail.com", "studente@boolean.com", "space@boolean.it"];
let isAuthorized = false;

for (let c = 0; c < mailList.length; c++) {
    const list = mailList[c];

    if (mail == list) {
        isAuthorized = true;
    }
}

if (isAuthorized) {
    alert("Accesso autorizzato");
} else {
    alert("Accesso negato");
}
let buttonPiu = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/></svg>'


class Bicicletta {
    #tipo;
    #id;
    #modello;
    taglia;
    #velocita;

    constructor(tipo, id, modello, taglia, velocita = 0) {
        this.#tipo = tipo;
        this.#id = id;
        this.modello = modello;
        this.taglia = taglia;
        this.#velocita = velocita;
    }

    get tipo() {
        return this.#tipo;
    }

    get id() {
        return this.#id;
    }

    get modello() {
        return this.#modello;
    }

    get velocita() {
        return this.#velocita;
    }

    nuovaTaglia(nuovaTaglia) {
        this.taglia = nuovaTaglia;
        StampaTabella();
    }

    nuovoModello(nuovoModello) {
        this.modello = nuovoModello;
        StampaTabella();
    }

    cambiaVelocita(differenzaDiVelocita) {
        this.#velocita += differenzaDiVelocita;
        if (this.#velocita < 0) {
            alert("La Velocità non può essere negativa");
            this.#velocita = 0;
        }
        if (this.#velocita > 100) {
            alert("La Velocità non può essere maggiore di 100 km/h");
            this.#velocita = 0;
        }
        StampaTabella();
    }
}

class MountainBike extends Bicicletta {
    #marciaSelettore1;
    #marciaSelettore2;

    constructor(tipo, id, modello, taglia, velocita, marciaSelettore1 = 1, marciaSelettore2 = 1) {
        super(tipo, id, modello, taglia, velocita);
        this.setMarciaSelettore1 = marciaSelettore1;
        this.setMarciaSelettore2 = marciaSelettore2;
    }

    get marciaSelettore1() {
        return this.#marciaSelettore1;
    }

    get marciaSelettore2() {
        return this.#marciaSelettore2;
    }

    set setMarciaSelettore1(marciaSelettore1) {
        if (marciaSelettore1 < 1 || marciaSelettore1 > 3) {
            marciaSelettore1 = 1;
        }
        this.#marciaSelettore1 = marciaSelettore1;
    }

    set setMarciaSelettore2(marciaSelettore2) {
        if (marciaSelettore2 < 1 || marciaSelettore2 > 7) {
            marciaSelettore2 = 1;
        }
        this.#marciaSelettore2 = marciaSelettore2;
    }

    cambiaMarcia(marcia1 = 0, marcia2 = 0) {
        this.#marciaSelettore1 += marcia1;
        if (this.#marciaSelettore1 < 1) {
            alert("La marcia del Selettore 1 non può essere inferiore a 1");
            this.#marciaSelettore1 = 1;
        } else if (this.#marciaSelettore1 > 3) {
            alert("La marcia del Selettore 1 non può essere superiore a 3");
            this.#marciaSelettore1 = 3;
        }

        this.#marciaSelettore2 += marcia2;
        if (this.#marciaSelettore2 < 1) {
            alert("La marcia del Selettore 2 non può essere inferiore a 1");
            this.#marciaSelettore2 = 1;
        } else if (this.#marciaSelettore2 > 7) {
            alert("La marcia del Selettore 2 non può essere superiore a 7");
            this.#marciaSelettore2 = 7;
        }
        StampaTabella();
    }
}

let ElencoBici = [];

ElencoBici.push(new Bicicletta("Bicicletta", 1, "City Cruiser", "XL", 20));
ElencoBici.push(new Bicicletta("Bicicletta", 2, "Road Racer", "L", 15));
ElencoBici.push(new Bicicletta("Bicicletta", 3, "Mountain Explorer", "M", 12));
ElencoBici.push(new Bicicletta("Bicicletta", 4, "Commuter Pro", "S", 18));
ElencoBici.push(new Bicicletta("Bicicletta", 5, "Folding Compact", "XS", 10));

ElencoBici.push(new MountainBike("MountainBike", 6, "Trail Blazer", "XL", 25, 2, 5));
ElencoBici.push(new MountainBike("MountainBike", 7, "Ridge Runner", "M", 22, 1, 7));
ElencoBici.push(new MountainBike("MountainBike", 8, "Peak Climber", "L", 20, 3, 3));
ElencoBici.push(new MountainBike("MountainBike", 9, "Speed Demon", "S", 28, 2, 4));
ElencoBici.push(new MountainBike("MountainBike", 10, "Compact Explorer", "XS", 15, 1, 6));

let ID = 11;



function InserisciBici() {
    let modello = document.getElementById("ModelloBici").value;
    let tagliaElement = document.querySelector('input[name="inlineRadioOptionsBici"]:checked');
    let velocita = document.getElementById("VelocitaBici").value;

    try {
        if (!modello.trim()) {
            throw "Il campo Modello non può essere vuoto";
        }

        if (!tagliaElement) {
            throw "Seleziona una Taglia";
        }
        let taglia = tagliaElement.value;

        if (!velocita.trim()) {
            throw "Il campo Velocità non può essere vuoto";
        }

        if (velocita < 0) {
            document.getElementById("VelocitaBici").value = "";
            throw "La velocità non può essere negativa";
        }

        if (velocita > 100) {
            document.getElementById("VelocitaBici").value = "";
            throw "La velocità non può essere maggiore di 100 km/h";
        }

        NuovaBici = new Bicicletta("Bicicletta", ID, modello, taglia, velocita);
        ElencoBici.push(NuovaBici);
        ID++;

        document.getElementById("ModelloBici").value = "";
        document.querySelector('input[name="inlineRadioOptionsBici"]:checked').checked = false;
        document.getElementById("VelocitaBici").value = "";

        StampaTabella();
    } catch (error) {
        alert("Errore: " + error);
        let modalBici = new bootstrap.Modal(document.getElementById('modalBici'));
        modalBici.show();
    }
}

function InserisciMB() {
    let modello = document.getElementById("ModelloMB").value;
    let tagliaElement = document.querySelector('input[name="inlineRadioOptionsMB"]:checked');
    let velocita = document.getElementById("VelocitaMB").value;
    let marcia1 = document.getElementById("Marcia1").value;
    let marcia2 = document.getElementById("Marcia2").value;

    try {
        if (!modello.trim()) {
            throw "Il campo Modello non può essere vuoto";
        }

        if (!tagliaElement) {
            throw "Seleziona una Taglia";
        }
        let taglia = tagliaElement.value;

        if (!velocita.trim()) {
            throw "Il campo Velocità non può essere vuoto";
        }

        if (velocita < 0) {
            document.getElementById("VelocitaMB").value = "";
            throw "La velocità non può essere negativa";
        }

        if (velocita > 100) {
            document.getElementById("VelocitaMB").value = "";
            throw "La velocità non può essere maggiore di 100 km/h";
        }

        if (marcia1 < 1 || marcia1 > 3) {
            document.getElementById("Marcia1").value = "";
            throw "La Marcia Selettore 1 deve essere compresa tra 1 e 3";
        }

        if (marcia2 < 1 || marcia2 > 7) {
            document.getElementById("Marcia2").value = "";
            throw "La Marcia Selettore 2 deve essere compresa tra 1 e 7";
        }

        NuovaBici = new MountainBike("MountainBike", ID, modello, taglia, velocita, marcia1, marcia2);
        ElencoBici.push(NuovaBici);
        ID++;

        document.getElementById("ModelloMB").value = "";
        document.querySelector('input[name="inlineRadioOptionsMB"]:checked').checked = false;
        document.getElementById("VelocitaMB").value = "";
        document.getElementById("Marcia1").value = "";
        document.getElementById("Marcia2").value = "";

        StampaTabella();
    } catch (error) {
        alert("Errore: " + error);
        let modalMB = new bootstrap.Modal(document.getElementById('modalMB'));
        modalMB.show();
    }
}



function Elimina(pos) {
    console.log(ElencoBici[pos]);
    ElencoBici.splice(pos, 1);
    StampaTabella();
    alert("Bicicletta Eliminata")
}

posizioneModifica = 0;
function PosModifica(pos) {
    posizioneModifica = pos;
}

function Modifica() {
    let tagliaElement = document.querySelector('input[name="inlineRadioOptionsM"]:checked');
    let modello = document.getElementById("ModelloM").value;
    try {
        if (!tagliaElement) {
            throw "Seleziona una Taglia";
        }

        if (!modello.trim()) {
            throw "Il campo Modello non può essere vuoto";
        }
        
        let taglia = tagliaElement.value;

        if (taglia == ElencoBici[posizioneModifica].taglia) {
            document.querySelector('input[name="inlineRadioOptionsM"]:checked').checked = false;
            throw "Taglia Uguale";
        }

        ElencoBici[posizioneModifica].nuovaTaglia(taglia);
        StampaTabella();
        alert("Informazioni Modificate");

        document.querySelector('input[name="inlineRadioOptionsM"]:checked').checked = false;
    } catch (error) {
        alert("Errore: " + error);
        let modalModifica = new bootstrap.Modal(document.getElementById('modalModifica'));
        modalModifica.show();
    }
}

const plus = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
<path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
</svg>`

const minus = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-circle" viewBox="0 0 16 16">
<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
<path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8"/>
</svg>`

const trash = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
<path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
</svg>`

const pencil = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
<path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
</svg>`


function StampaTabella() {
    console.log(ElencoBici);

    let tabella = '<table class="table">';
    tabella += '<thead class="text-center"><tr><th scope="col">ID</th><th scope="col">Modello</th><th scope="col">Taglia</th><th scope="col">Velocità</th><th scope="col">Marcia Selettore 1</th><th scope="col">Marcia Selettore 2</th><th scope="col">Modifica</th><th scope="col">Elimina</th></tr></thead>';
    tabella += '<tbody>'
    for (let i = 0; i < ElencoBici.length; i++) {
        tabella += '<tr>';
        tabella += '<td class="text-center">' + ElencoBici[i].id + '</td>';
        tabella += '<td class="text-center">' + ElencoBici[i].modello + '</td>';
        tabella += '<td class="text-center">' + ElencoBici[i].taglia + '</td>';
        tabella += '<td class="text-center"><button type="button" class="btn btn-primary" onclick="ElencoBici[' + i + '].cambiaVelocita(' + -5 + ')">' + minus + '</button>&nbsp' + ElencoBici[i].velocita + ' km/h&nbsp<button type="button" class="btn btn-primary" onclick="ElencoBici[' + i + '].cambiaVelocita(' + 5 + ')">' + plus + '</button></td>';
        if (ElencoBici[i].tipo == "Bicicletta") {
            tabella += '<td class="text-center"></td>';
            tabella += '<td class="text-center"></td>';
        } else {
            tabella += '<td class="text-center"><button type="button" class="btn btn-primary" onclick="ElencoBici[' + i + '].cambiaMarcia(' + -1 + ')">' + minus + '</button>&nbsp' + ElencoBici[i].marciaSelettore1 + '&nbsp<button type="button" class="btn btn-primary" onclick="ElencoBici[' + i + '].cambiaMarcia(' + 1 + ')">' + plus + '</button></td>';
            tabella += '<td class="text-center"><button type="button" class="btn btn-primary" onclick="ElencoBici[' + i + '].cambiaMarcia(' + 0 + ',' + -1 + ')">' + minus + '</button>&nbsp' + ElencoBici[i].marciaSelettore2 + '&nbsp<button type="button" class="btn btn-primary" onclick="ElencoBici[' + i + '].cambiaMarcia(' + 0 + ',' + 1 + ')">' + plus + '</button></td>';
        }
        tabella += '<td class="text-center"><button type="button" class="btn btn-primary" onclick="PosModifica(' + i + ')" data-bs-toggle="modal" data-bs-target="#modalModifica">' + pencil + '</button></td>';
        tabella += '<td class="text-center"><button type="button" class="btn btn-primary" onclick="Elimina(' + i + ')">' + trash + '</button></td>';
    
        tabella += '</tr>';
    }
    
    tabella += '</tbody></table>';

    document.getElementById("StampaTabella").innerHTML = tabella;
}

StampaTabella()

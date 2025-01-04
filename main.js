const array = [
    {
        idoszak: "XVI. század",
        Evszam: "1516",
        Esemeny:"Dózsa-féle parasztháború",
        Tananyag: "magyar",
    
    
        Evszam2: "1519-1522",
        Esemeny2:"Magellán körülhajózza a földet",
        Tananyag2: "egyetemes",
    },
    {
        idoszak: "XVII. század",
        Evszam: "1664",
        Esemeny:"vasvári béke",
        Tananyag: "magyar",
    },
    {
        idoszak: "XVIII. század",
        Evszam: "1701-1714",
        Esemeny:"spanyol örökösödési háború",
        Tananyag: "egyetemes",
    
    
        Evszam2: "1703-1711",
        Esemeny2:"Rákóczi szabadságharc",
        Tananyag2: "magyar",
    }, 
    {
        idoszak: "XIX. század",
        Evszam: "1812",
        Esemeny:"Napóleon oroszországi hadjárata",
        Tananyag: "egyetemes",
    

        Evszam2: "1809",
        Esemeny2:"győri csata",
        Tananyag2: "magyar",
    },
]

const table = document.createElement('table');
document.body.appendChild(table);

const thead = document.createElement('thead')
table.appendChild(thead)

const tbody = document.createElement('tbody')
table.appendChild(tbody)

function generateHeader(){
    const header = ["Időszak", "Évszám", "Esemény", "Tananyag" ]

    const headerrow = document.createElement('tr')
    thead.appendChild(headerrow)

    for ( const head of header){

        const headercell = document.createElement('th')
        headercell.innerHTML = head
        headerrow.appendChild(headercell)
        if(head === "Időszak"){
            headercell.rowSpan = "2"
        }

    }
}

generateHeader()

function RenderTable(array) {
    for (const currentElement of array) {
        const tbodyrow = document.createElement('tr');
        tbody.appendChild(tbodyrow);

        const idoszak = document.createElement('td');
        idoszak.innerHTML = currentElement.idoszak;
        tbodyrow.appendChild(idoszak);

        const Evszam = document.createElement('td');
        Evszam.innerHTML = currentElement.Evszam ;
        tbodyrow.appendChild(Evszam);

        const Esemeny = document.createElement('td');
        Esemeny.innerHTML = currentElement.Esemeny ;
        tbodyrow.appendChild(Esemeny);

        const Tananyag = document.createElement('td');
        Tananyag.innerHTML = currentElement.Tananyag ;
        tbodyrow.appendChild(Tananyag);

        // Ha van második esemény, új sort hozunk létre
        if (currentElement.Evszam2 !== undefined && currentElement.Esemeny2 !== undefined  && currentElement.Tananyag2 !== undefined) {
            idoszak.rowSpan = 2;

            const secondRow = document.createElement('tr');
            tbody.appendChild(secondRow);

            const Evszam2 = document.createElement('td');
            Evszam2.innerHTML = currentElement.Evszam2 ;
            secondRow.appendChild(Evszam2);

            const Esemeny2 = document.createElement('td');
            Esemeny2.innerHTML = currentElement.Esemeny2 ;
            secondRow.appendChild(Esemeny2);

            const Tananyag2 = document.createElement('td');
            Tananyag2.innerHTML = currentElement.Tananyag2 ;
            secondRow.appendChild(Tananyag2);
        }
    }
}


RenderTable(array)
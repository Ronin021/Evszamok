const array = [
    {
        idoszak: "XVI. század",
        Evszam: "1516",
        Esemeny:"Dózsa-féle parasztháború",
        Tananyag: "magyar",
    },
    {
        Evszam: "1519-1522",
        Esemeny:"Magellán körülhajózza a földet",
        Tananyag: "egyetemes",
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
    }, 
    {
        Evszam: "1703-1711",
        Esemeny:"Rákóczi szabadságharc",
        Tananyag: "magyar",
    }, 
    {
        idoszak: "XIX. század",
        Evszam: "1812",
        Esemeny:"Napóleon oroszországi hadjárata",
        Tananyag: "egyetemes",
    }, 
    {
        Evszam: "1809",
        Esemeny:"győri csata",
        Tananyag: "magyar",
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
        if(head === "Évszám"){
            headercell.colSpan = "2"
        }

    }
}

generateHeader()
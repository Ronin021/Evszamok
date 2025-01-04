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

function generateForm(){

    const FormFields = [
        {id: 'korszak', label: 'Korszak Megnevezése: ', type: 'text'},
        {id: 'evszam1', label: '1. esemény évszám: ', type: 'text'},
        {id: 'megnev1', label: '1. esemény megnevezés: ', type: 'text'},
        { 
            id: 'tan1', 
            label: '1. esemény tananyag: ', 
            type: 'select', 
            options: ['', 'Magyar történelem', 'Egyetemes történelem'] 
        },
        {id: 'evszam2', label: '2. esemény évszám: ', type: 'text'},
        {id: 'megnev2', label: '2. esemény megnevezés: ', type: 'text'},
        {id: 'tan2', label: '2. esemény tananyag: ', type: 'select',
            options: ['', 'Magyar történelem', 'Egyetemes történelem']
        },

    ]

    const form = document.createElement('form')
    form.id='form'
    document.body.appendChild(form)

    for (fields of FormFields){
        const div = document.createElement('div')
        div.classList.add('field')

        const label = document.createElement('label')
        label.innerText = fields.label
        label.htmlFor = fields.id
        div.appendChild(label)

        if (fields.type === 'select') {
            const select = document.createElement('select')
            select.id = fields.id
            for (const option of fields.options) {
                const optionElement = document.createElement('option')
                optionElement.value = option
                optionElement.textContent = option
                select.appendChild(optionElement)
            }
            div.appendChild(select)
        } else {
            const input = document.createElement('input')
            input.type = fields.type
            input.id = fields.id
            div.appendChild(input)
        }

        

       

        const error = document.createElement('div')
        error.classList = "error"
        div.appendChild(error)
        form.appendChild(div)
    }

    const button = document.createElement('button')
    button.type = 'submit'
    button.innerText = "Hozzáadás"
    form.appendChild(button)

}
generateForm()
function RenderTable() {
    tbody.innerHTML = ''
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

const form = document.getElementById('form')

form.addEventListener('submit', function(e){
    e.preventDefault()

    const idoszakHTMLelement = document.getElementById('korszak')

    const EvszamHTMLelement = document.getElementById('evszam1')

    const EsemenyHTMLelement = document.getElementById('megnev1')  

    const TananyagHTMLelement = document.getElementById('tan1')

    const Evszam2HTMLelement = document.getElementById('evszam2')

    const Esemeny2HTMLelement = document.getElementById('megnev2') 
    
    const Tananyag2HTMLelement = document.getElementById('tan2')


    const ThisForm = e.currentTarget

    const errorElement = ThisForm.querySelectorAll('.error')


    for (const errorok of errorElement){
        errorok.innerHTML = ''


    }

    let validation = true

    if (!simplevalidation(idoszakHTMLelement, "Add meg az időszakot")){
        validation = false
    }

    if (!simplevalidation(EvszamHTMLelement, "Add meg az évszámot")){
        validation = false
    }

    if (!simplevalidation(EsemenyHTMLelement, "Add meg az eseményt")){
        validation = false
    }

    if (!simplevalidation(TananyagHTMLelement, "Add meg a tananyagot")){
        validation = false
    }

    if(!complexvalidation(Evszam2HTMLelement, Esemeny2HTMLelement, Tananyag2HTMLelement, "Az összes adatot meg kell adni a másodikhoz")){
        validation = false
    }

    if(validation){
        const idoszakValue = idoszakHTMLelement.value
        const evszam1Value = EvszamHTMLelement.value
        const evszam2Value = Evszam2HTMLelement.value
        const esemeny1Value = EsemenyHTMLelement.value
        const esemeny2Value = Esemeny2HTMLelement.value
        const tananyag1Value = TananyagHTMLelement.value
        const tananyag2Value = Tananyag2HTMLelement.value

        const newEvszam = {
            idoszak: idoszakValue,
            Evszam: evszam1Value,
            Evszam2: evszam2Value,
            Esemeny: esemeny1Value,
            Esemeny2: esemeny2Value,
            Tananyag: tananyag1Value,
            Tananyag2: tananyag2Value

        }

        if(newEvszam.Evszam2 === '' && newEvszam.Esemeny2 === '' && newEvszam.Tananyag2 ===''){

            newEvszam.Evszam2 = undefined
            newEvszam.Esemeny2 = undefined
            newEvszam.Tananyag2 = undefined
        }

        array.push(newEvszam)
        tbody.innerHTML = ''
        RenderTable()
        ThisForm.reset()

    }

})


function simplevalidation(inputhtmlmessage, errormessage){

    let validation = true

    if(inputhtmlmessage.value === ''){

        const parent = inputhtmlmessage.parentElement;
        const place_of_error = parent.querySelector('.error')

        if(place_of_error != undefined){

            place_of_error.innerHTML = errormessage

        }
        validation = false

    }
    return validation
}

function complexvalidation(Evszam2input, Esemeny2input, Tananyag2input, errormessage){
    let validation = true

    if(Evszam2input.value === '' && Esemeny2input.value !== '' && Tananyag2input.value !== ''){
        const parent = Evszam2input.parentElement
        const place_of_error = parent.querySelector('.error')

        if (place_of_error !== undefined){

            place_of_error.innerHTML = errormessage;            
        }
        validation = false
    }

    if(Evszam2input.value !== '' && Esemeny2input.value === '' && Tananyag2input.value !== ''){
        const parent = Esemeny2input.parentElement
        const place_of_error = parent.querySelector('.error')

        if (place_of_error !== undefined){

            place_of_error.innerHTML = errormessage;            
        }
        validation = false
    }

    if(Evszam2input.value !== '' && Esemeny2input.value !== '' && Tananyag2input.value === ''){
        const parent = Tananyag2input.parentElement
        const place_of_error = parent.querySelector('.error')

        if (place_of_error !== undefined){

            place_of_error.innerHTML = errormessage;
            
        }
        validation = false
    }

    return validation
}
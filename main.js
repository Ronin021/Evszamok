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


generateHeader()

generateForm()

RenderTable()

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


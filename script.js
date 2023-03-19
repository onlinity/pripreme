//https://onlinity.tk/question.html?text=p4
let question_parameter = location.search.split('&')[0].split('=')[1]
let format_parameter = location.search.split('&')[1].split('=')[1]

var p1 = [
    'Šta su endokrine žlezde?',
    'Šta su hormoni?',
    'Koje endokrine žlezde se nalaze u telu čoveka?',
    'Koja je uloga epifize?',
    'Koja je uloga hipofize?',
    'Koja je uloga štitne žlezde?',
    'Koja je uloga paraštitnih žlezda?',
    'Koja je uloga timusa (grudne žlezde)?',
    'Koja je uloga gušterače (pankreasa)?',
    'Koja je uloga nadbubrežnih žlezda?',
    'Koje su muške polne žlezde?',
    'Koje su ženske polne žlezde?',
    'Koliko traje menstrualni ciklus?',
    'Koji su delovi menstrualnog ciklusa i koliko traju?',
    'Šta je menopauza?',
    'Šta je FSH i čemu služi?',
    'Šta je homeostaza?',
    'Šta je i koje su vrste povratne sprege?',
    'Koji su primeri pozitivne povratne sprege?',
    'Koji su primeri negativne povratne srpege?',
    'Koji su tipovi stimulacije endokrinih žlezda?',
    'Šta je termoregulacija?',
    'Kako se delje životinje prema načinu termoregulacije?',
    'Kako ektotermni organizmi vrše termoregulaciju?',
    'Koje su evolutivne prednosti endoterma?',
    'Koje su adaptacije endoterma?',
    'Gde se stvaraju biljni hormoni',
    'Kako se prenose biljni hormoni?',
    'Koji su biljni hormoni i čemu služe?',
    'Šta su monokulture i korovi?',
    'Koji se procesi sa vodom dešavaju kod biljaka?',
    'Koji su reaktanti, a koji produkti fotosinteze?',
    'Koji su reaktanti, a koji produkti disanja (kod biljaka)?',
    'Zašto se dešava transpiracija?',
]

var p2 = [
    'Šta je kalendar života?',
    'Šta su geološka doba i koja postoje?',
    'Kada je trajao i koji su se događaji desili u prekambrijumu?',
    'Koje su ere fanerozoika?',
    'Na koje se periode deli paleozoik?',
    'Kada je trajao i koji su se događaji desili u paleozoiku?',
    'Na koje se periode deli mezozoik?',
    'Kada je trajao i koji su se događaji desili u mezozoiku?',
    'Na koje se periode deli kenozoik?',
    'Kada je trajao i koji su se događaji desili u kenozoiku?',
    'Na koje načine se planeta menjala tokom vremena?',
    'Kako se menjala atmosfera Zemlje?',
    'Šta je prekambrijumska eksplozija?',
    'Koji događaj je omogućio izlazak živog sveta na kopno?',
    'Šta je endosimbioza?',
    'Šta su stromatoliti?',
    'Šta je ozonski omotač i koja je njegova uloga?',
    'Kako se odvijala promena rasporeda kopna?',
    'Šta su velika izumiranja?',
    'Šta je dovelo do izumiranja dinosaurusa?',
    'Šta su geni i DNK?',
    'Šta je genotipa šta fenotip?',
    'Zašto se jedinke razlikuju u različitim periodima u toku života?',
    'Od kojih ćelija nastaju sve telesne ćelije i kako?',
    'Koje su faze u razvoju insekata sa potpunim preobražajem?',
    'Koje su faze u razvoju biljke?',
    'Šta je evolucija?',
    'Ko su bili najznačajniji naučnici koji su se bavili evolucijom?',
    'Ko se naziva "ocem evolucije"?',
    'Šta je govorila Lamarkova teorija?',
    'Koje su Lamarkove zasluge u oblasti evolucije?',
    'Koji su faktori evolucije prema Darvinovoj teoriji, i kako se ona drugačije naziva?',
    'Koja su Darvinova najznačajnija dela?',
    'Šta je specijacija?',
    'Koji su evolucioni procesi (mehanizmi)?',
    'Šta su mutageni i kakvi mogu biti?',
    'Kako se mutacije dele prema veličini, uzroku i mogućnosti nasleđivanja?',
    'Šta su protok gena i genetički drift?',
    'Koji su načini specijacije?'
]

var p3 = [
    'Kako se naziva nauka o stanovništvu?',
    'Kako se dobijaju podaci o broju stanovnika zemlje?',
    'Šta su natalitet, mortalitet i fertilitet?',
    'Šta je prirodni priraštaj i kakav može biti?',
    'Kada se desio prvi popis u Srbiji?',
    'Kada je Srbija dostigla milion stanovnika?',
    'Kakve strukture stanovništva postoje?',
    'Kako se grafički prikazuje polno-starosna struktura?',
    'Šta su migracije?',
    'Koje su se migracije desile na prostoru Srbije?',
    'Gde su otkriveni prvi tragovi čoveka sa prostora Srbije?',
    'Koja su najstarija naselja u Srbiji?',
    'Koji su srpski utvrđeni gradovi?',
    'Kako se naselja dele prema funkciji, a kako prema postanku (genezi)?',
    'Podela naselja prema: razmeštaju, trajanju naseljenosti, veličini.',
    'Šta su salaši, katuni i pimnice?',
    'Kako se drugačije nazivaju gradska i seoska naselja?',
    'Šta je urbanizacija, a šta agrarizacija?',
    'Šta su konurbacije i megalopolisi?',
    'Koji tipovi gradskih naselja postoje i koje su njihove odlike?'
]

var p4 = [
    '!Po mestu tvorbe:',
    'Dvousneni: B, P, M',
    'Usneno-zubni: V, F',
    'Zubni: D, T, Z, S, C',
    'Prednjonepčani: Č, Đ, Ž, Š, Nj, ć, Lj, J, Dž',
    'Zadnjonepčani: K, G, H',
    'Nadzubni: L, R, N',
    ' ',
    '!Po zvučnosti:',
    'Zvučni: vokali (A, E, I, O, U), sonanti (V, R, L, J, Lj, M, N, Nj), B, G, D, Đ, Ž, Z, Dž',
    'Bezvučni: P, K, T, Ć, Š, S, Č, F, H, C'
]

var p5 = [
    '!Promenljive',
    '!Nepromenljive',
    'Imenice',
    'Prilozi',
    'Glagoli', 
    'Predlozi',
    'Zamenice', 
    'Veznici',
    'Pridevi',
    'Rečce',
    'Brojevi',
    'Uzvici'
]

var p6 = [
    'Šta je evolucija?',
    'Ko su bili najznačajniji naučnici koji su se bavili evolucijom?',
    'Ko se naziva "ocem evolucije"?',
    'Šta je govorila Lamarkova teorija?',
    'Koje su Lamarkove zasluge u oblasti evolucije?',
    'Koji su faktori evolucije prema Darvinovoj teoriji, i kako se ona drugačije naziva?',
    'Koja su Darvinova najznačajnija dela?',
    'Šta je specijacija?',
    'Koji su evolucioni procesi (mehanizmi)?',
    'Šta su mutageni i kakvi mogu biti?',
    'Kako se mutacije dele prema veličini, uzroku i mogućnosti nasleđivanja?',
    'Šta su protok gena i genetički drift?',
    'Koji su načini specijacije?'
]

var p7 = [
    'Koje su dve vrste evolucija čoveka?',
    'Ko su bili i kada su nastali preci čoveka?',
    'Koje adaptacije su te vrste stekle za život na drveću?',
    'Ko su bili australopitekusi?',
    'Koje karakteristike pretka čoveka su dovele do razvoja visoke inteligencije i kako?',
    'Kakav je bio Homo habilis i koji mu je srpski naziv?',
    'Kakav je bio Homo erectus, odakle je potekao i koji mu je srpski naziv?',
    'Kada se pojavio i kakav je bio Homo sapiens?',
    'Ko su bili neandertalci i denisovljani?',
    'Da li postoje različite rase ljudske vrste?'
]

var p8 = [
    'Šta je sukcesija?',
    'Kakva sukcesija može biti prema uzroku i načinu nastanka?',
    'Šta je degradacija?',
    'Šta su pionirske vrste, prelazni stadijumi i klimaks biocenoze?',
    'Kakvi mogu biti odnosi među članovima biocenoze u sukcesiji?',
    'Šta su dominantne vrste?'
]

var p9 = [
    '!Metal / nemetal',
    '!Nalazišta',
    'Gvožđe',
    'Zlatibor, Kopaonik, Vranje',
    'Bakar',
    'Bor, Majdanpek',
    'Olovo, cink',
    'Kopaonik, Medveđa, Gornji Milanovac, Trepča (KiM)',
    'Boksit',
    'Kosovo i Metohija',
    'Platina',
    'Trstenik',
    'Živa', 
    'Avala, Deli Jovan',
    'Zlato',
    'Reke: Timor, Mlava, Resava, Pek',
    'Laporac', 
    'Beočin. Veliko Pomoravlje',
    'Jadarit (litijum)',
    'Dolina Jadra',
    'Kvarc',
    'Aranđelovac, Zaječar',
    'Azbest',
    'Kragujevac, dolina Ibra',
    'Cigla, crep',
    'Kikinda',
    'Glina',
    'Vojvodina, Leskovac, KiM',
    'Mermer',
    'Venčac (Aranđelovac)'
]

var p10 = [
    '!Proizvod industrije',
    '!Mesto proizvodnje',
    'automobili (metalska industrija)',
    'Kragujevac',
    'kamioni (metalska industrija)',
    'Priboj',
    'traktori (metalska industrija)',
    'Beograd',
    'autobusi (metalska industrija)',
    'Zemun',
    'brodovi (metalska industrija)',
    'Apatin, Kladovo',
    'kvarc, azbest (industrija nemetala i građevinskog materijala)',
    'Mladenovac',
    'kablovi (elektroindustrija)',
    'Jagodina, Novi Sad',
    'fiskalne kase, klima-uređaji (elektroindustrija)',
    'Niš',
    'štednjaci (elektroindustrija)',
    'Smederevo',
    'aparati za domaćinstvo (elektroindustrija)',
    'Čačak',
    'optički instrumenti (elektroindustrija)',
    ' Beograd ',
    'veštačka đubriva (teška hemijska industrija)',
    'Pančevo, Prahovo',
    'sumporna kiselina (teška hemijska industrija)',
    'Bor, Šabac',
    'sredstva za zaštitu bilja (teška hemijska industrija)',
    'Vršac, Nova Varoš',
    'sapuni, detrdženti, kozmetika (laka hemijska industrija)',
    'Novi Sad, Zrenjanin, Kruševac',
    'boje, lakovi (laka hemijska industrija)',
    'Beograd, Šabac, Lučani, Gornji Milanovac',
    'lekovi (laka hemijska industrija)',
    'Zemun, Vršac, Šabac, Zrenjanin, Beograd',
    'testenina, brašno (prehrambena industrija)',
    'Vojvodina, Pomoravlje',
    'šećer (prehrambena industrija)',
    'Vrbas, Crvenka, Zrenjanin, Beograd, Ćuprija',
    'čokolada, bombone (prehrambena industrija)',
    'Beograd, Požarevac, Vršac, Paraćin',
    'ulje (prehrambena industrija)',
    'Zrenjanin, Vrbas, Sombor, Šid',
    'voće, povrće (prehrambena industrija)',
    'Subotica, Šabac, Prokuplje, Požega',
    'mleko (prehrambena industrija)',
    'Beograd, Novi Sad, Šabac, Subotica, Niš',
    'meso (prehrambena industrija)',
    'Beograd, Novi Sad, Šid, Vrbas, Jagodina',
    'pića (prehrambena industrija)',
    'Negotin, Aleksandrovac, Vršac, Bačka Palanka',
    'pivo (prehrambena industrija)',
    'Beograd, Apatin, Čelarevo, Zrenjanin',
    'tekstil (tekstilna industrija)',
    'Vranje, Leskovac, Priština, Arilje, Pirot',
    'drvna građa, papir (drvna industrija)',
    'Vranje, Kruševac, Uroševac, Kučevo Vršac',
    'duvanski proizvodi (duvanska industrija)',
    'Niš, Vranje, Inđija, Gnjilane, Senta',
    'koža, obuća (industrija kože)',
    'Knjaževac, Užice, Vranje, Beograd',
    'guma (industrija gume)',
    'Pirot, Niš, Beograd, Uroševac'
]


function bold(q, e){
    if (q[0] == '!'){
        e.innerHTML = q.substring(1)
        e.style.fontWeight = 'bold'
    } else{
        e.innerHTML = q
    }
}


if (format_parameter == 'q'){   //Pitanja
    document.getElementById('title').innerHTML = 'Pitanja:'
    let list = document.createElement('ol')
    document.getElementById('main').appendChild(list)

    let question_list = window[question_parameter]

    for(let q of question_list){
        let e = document.createElement('li')
        e.innerHTML = q
        list.appendChild(e)
    }
} else if (format_parameter == 'a'){   //tekst 
    let list = document.createElement('ul')
    list.style.listStyleType = 'none'
    document.getElementById('main').appendChild(list)

    let question_list = window[question_parameter]

    for(let q of question_list){
        let e = document.createElement('li')
        bold(q, e)
        list.appendChild(e)
    }
} else if (format_parameter == 'table'){    //tabela
    let table = document.createElement('table')
    document.getElementById('main').appendChild(table)

    let question_list = window[question_parameter]

    for(let q of question_list){
        if (question_list.indexOf(q) % 2 == 0){
            let row = document.createElement('tr')
            table.appendChild(row)
            row.id = question_list.indexOf(q)
            let data = document.createElement('td')
            row.appendChild(data)
            bold(q, data)
        } else {
            let data = document.createElement('td')
            document.getElementById(question_list.indexOf(q) - 1).appendChild(data)
            bold(q, data)
        }
        if (q == '-prazno-'){
            data.style.border = 'none'
        }
    }
}

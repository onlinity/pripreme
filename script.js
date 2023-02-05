let parameter = location.search.split('=')[1]

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
    'Koje su faze u razvoju biljke?'
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

let list = document.getElementById('questions')
var num = 10

let question_list = window[parameter]

for(let q of question_list){
    let e = document.createElement('li')
    e.innerHTML = q
    list.appendChild(e)
}
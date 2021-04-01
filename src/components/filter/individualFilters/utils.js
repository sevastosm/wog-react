function createAllSermonsChoice(lang) {
    const data = {}
    switch (lang) {
        case 'gr':
            data.value = 900
            data.label = 'Όλες οι εκπομπές'
            break
        case 'es':
            data.value = 901
            data.label = 'Buscar todas las series'
            break
        case 'it':
            data.value = 902
            data.label = 'Search All Series'
            break
        case 'ro':
            data.value = 903
            data.label = 'Toate emisiunile'
            break
        case 'ru':
            data.value = 904
            data.label = 'Все Передачи'
            break
        case 'pl':
            data.value = 905
            data.label = 'Wszystkie programy TV'
            break
        case 'fr':
            data.value = 906
            data.label = 'Toutes les émissions'
            break
        default:
            data.value = 907
            data.label = 'Search All Series'
    }

    return data
}

function createAllSpeakersChoice(lang) {
    const data = {}
    switch (lang) {
        case 'gr':
            data.value = 800
            data.label = 'Όλοι οι ομιλητές'
            break
        case 'es':
            data.value = 801
            data.label = 'Todos los oradores'
            break
        case 'it':
            data.value = 802
            data.label = 'All Speakers'
            break
        case 'ro':
            data.value = 803
            data.label = 'Toţi vorbitorii'
            break
        case 'ru':
            data.value = 804
            data.label = 'Все Проповедники'
            break
        case 'pl':
            data.value = 805
            data.label = 'All Speakers'
            break
        case 'fr':
            data.value = 806
            data.label = 'All Speakers'
            break
        default:
            data.value = 807
            data.label = 'All Speakers'
    }

    return data
}

function dataLabel(Data) {
    if (!Data) {
        return () => ''
    }

    return num => Data[num].Text
}

export { createAllSpeakersChoice, createAllSermonsChoice, dataLabel }

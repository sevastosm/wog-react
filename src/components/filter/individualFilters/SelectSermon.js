import React from 'react'
import Select from 'react-select'
import getData from '../../../api/apis'
import { endPoints } from '../../../constants'

function createAllSermonsChoice(lang) {
    const data = {}
    switch (lang) {
        case 'gr':
            data.value = '900'
            data.label = 'Όλες οι εκπομπές'
            break
        case 'es':
            data.value = '901'
            data.label = 'Buscar todas las series'
            break
        case 'it':
            data.value = '902'
            data.label = 'Search All Series'
            break
        case 'ro':
            data.value = '903'
            data.label = 'Toate emisiunile'
            break
        case 'ru':
            data.value = '904'
            data.label = 'Все Передачи'
            break
        case 'pl':
            data.value = '905'
            data.label = 'Wszystkie programy TV'
            break
        case 'fr':
            data.value = '906'
            data.label = 'Toutes les émissions'
            break
        default:
            data.value = '907'
            data.label = 'Search All Series'
    }

    return data
}

function formatSermon(sermon) {
    if (sermon.Name === '(Removed)') {
        return ''
    }
    return {
        value: sermon.ID,
        label: sermon.Name
    }
}

const fetchSermons = async lang => {
    const data = await getData(endPoints.GET_SERRIES_LIST)
    return data
}

export default function SelectSermon({ values, lang, setFilters }) {
    const [sermons, setSermons] = React.useState([])

    const getAndSetSermons = React.useCallback(async () => {
        const data = await fetchSermons(lang)
        const formatedData = data.Data.map(formatSermon)
        formatedData.unshift(createAllSermonsChoice(lang))
        setSermons(formatedData)
    }, [lang])

    const onChange = React.useCallback(
        e => {
            setFilters(previousValues => ({
                ...previousValues,
                sermonsIds: e
            }))
        },
        [setFilters]
    )

    React.useEffect(() => {
        getAndSetSermons(lang)
    }, [getAndSetSermons, lang])

    return (
        <Select options={sermons} isMulti onChange={onChange} value={values} />
    )
}

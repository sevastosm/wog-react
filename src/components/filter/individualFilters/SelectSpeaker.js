import React from 'react'
import Select from 'react-select'
import getData from '../../../api/apis'
import { endPoints } from '../../../constants'

function createAllSpeakersChoice(lang) {
    const data = {}
    switch (lang) {
        case 'gr':
            data.value = '800'
            data.label = 'Όλοι οι ομιλητές'
            break
        case 'es':
            data.value = '801'
            data.label = 'Todos los oradores'
            break
        case 'it':
            data.value = '802'
            data.label = 'All Speakers'
            break
        case 'ro':
            data.value = '803'
            data.label = 'Toţi vorbitorii'
            break
        case 'ru':
            data.value = '804'
            data.label = 'Все Проповедники'
            break
        case 'pl':
            data.value = '805'
            data.label = 'All Speakers'
            break
        case 'fr':
            data.value = '806'
            data.label = 'All Speakers'
            break
        default:
            data.value = '807'
            data.label = 'All Speakers'
    }

    return data
}

function formatSpeaker(speaker) {
    if (speaker.Name === '(Removed)') {
        return ''
    }
    return {
        value: speaker.ID,
        label: speaker.Name
    }
}

const fetchSpeaker = async lang => {
    const data = await getData(endPoints.GET_ALL_SPEAKERS)
    return data
}

export default function SelectSpeaker({ values, lang, setFilters }) {
    const [speakers, setSpeakers] = React.useState([])

    const getAndSetSpeakers = React.useCallback(async () => {
        const data = await fetchSpeaker(lang)
        const formatedData = data.Data.map(formatSpeaker)
        formatedData.unshift(createAllSpeakersChoice(lang))
        setSpeakers(formatedData)
    }, [lang])

    const onChange = React.useCallback(
        e => {
            setFilters(previousValues => ({
                ...previousValues,
                speakersIds: e
            }))
        },
        [setFilters]
    )

    React.useEffect(() => {
        getAndSetSpeakers()
    }, [getAndSetSpeakers])

    return (
        <Select options={speakers} isMulti onChange={onChange} value={values} />
    )
}

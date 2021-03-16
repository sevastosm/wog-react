import React from 'react'
import Select from 'react-select'
import getData from '../../../api/apis'
import { endPoints } from '../../../constants'

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

import React from 'react'
import Select from 'react-select'
import getData from '../../../api/apis'
import { endPoints } from '../../../constants'

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
        getAndSetSermons()
    }, [getAndSetSermons])

    return <Select options={sermons} isMulti onChange={onChange} value={values}/>
}

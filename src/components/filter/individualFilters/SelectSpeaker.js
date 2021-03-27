import React from 'react'
import Select from 'react-select'

export default function SelectSpeaker({speakers, values, setFilters }) {
    const onChange = React.useCallback(
        e => {
            setFilters(previousValues => ({
                ...previousValues,
                speakersIds: e || []
            }))
        },
        [setFilters]
    )

    return (
        <Select options={speakers} isMulti onChange={onChange} value={values} />
    )
}

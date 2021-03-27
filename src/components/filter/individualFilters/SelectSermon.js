import React from 'react'
import Select from 'react-select'

export default function SelectSermon({ sermons, values, setFilters }) {
    const onChange = React.useCallback(
        e => {
            setFilters(previousValues => ({
                ...previousValues,
                sermonsIds: e || []
            }))
        },
        [setFilters]
    )

    return (
        <Select options={sermons} isMulti onChange={onChange} value={values} />
    )
}

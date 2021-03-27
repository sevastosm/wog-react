import React from 'react'
import Select from 'react-select'
import { Label } from 'reactstrap'

import './select-sermon.scss'

export default function SelectSermon({
    labelValue,
    sermons,
    values,
    setFilters
}) {
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
        <div className="select-sermon-container">
            <Label for="sermons">{labelValue}</Label>
            <Select
                options={sermons}
                isMulti
                id="sermons"
                onChange={onChange}
                value={values}
                placeholder={labelValue + '...'}
            />
        </div>
    )
}

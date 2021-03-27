import React from 'react'
import Select from 'react-select'
import { Label } from 'reactstrap'

import './select-speaker.scss'

export default function SelectSpeaker({
    labelValue,
    speakers,
    values,
    setFilters
}) {
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
        <div className="select-speakers-container">
            <Label for="speakers">{labelValue}</Label>
            <Select
                options={speakers}
                isMulti
                placeholder={labelValue + '...'}
                id="speakers"
                onChange={onChange}
                value={values}
            />
        </div>
    )
}

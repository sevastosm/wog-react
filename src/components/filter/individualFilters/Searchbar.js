import React from 'react'
import { Label, Input } from 'reactstrap'

export default function Searchbar({ value, setFilters }) {
    const onChange = React.useCallback(
        e => {
            const { name, value } = e.target
            setFilters(previousFilters => ({
                ...previousFilters,
                [name]: value
            }))
        },
        [setFilters]
    )

    return (
        <>
            <Label for="search">Search</Label>
            <Input
                type="text"
                name="text"
                value={value}
                onChange={onChange}
                id="search"
                placeholder="Search..."
            />
        </>
    )
}

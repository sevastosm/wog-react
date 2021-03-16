import React from 'react'
import { Button, Collapse } from 'reactstrap'
import {
    SelectDates,
    SelectSermon,
    SelectSpeaker,
    Searchbar
} from '../filter/individualFilters'

import './filter.scss'

const defaultValues = {
    dateFrom: new Date(),
    dateTo: new Date(),
    speakersIds: null,
    sermonsIds: null
}

export default function Filter({ lang = '' }) {
    const [selectedFilters, setSelectedFilters] = React.useState({
        ...defaultValues
    })
    const [isOpen, setIsOpen] = React.useState(false)

    const toggle = React.useCallback(() => {
        setIsOpen(!isOpen)
    }, [isOpen])

    const resetSelectedFilters = React.useCallback(() => {
        setSelectedFilters({ ...defaultValues })
    }, [])

    return (
        <>
            <Button onClick={toggle} className="filter-btn">
                Filters
            </Button>
            <Collapse isOpen={isOpen} className="filter-collapsibles">
                <SelectDates
                    dates={{
                        dateFrom: selectedFilters.dateFrom,
                        dateTo: selectedFilters.dateTo
                    }}
                    lang={lang}
                    setFilters={setSelectedFilters}
                />
                <Searchbar setFilters={setSelectedFilters} />
                <SelectSpeaker
                    values={selectedFilters.speakersIds}
                    lang={lang}
                    setFilters={setSelectedFilters}
                />
                <SelectSermon
                    values={selectedFilters.sermonsIds}
                    lang={lang}
                    setFilters={setSelectedFilters}
                />
                <Button onClick={resetSelectedFilters} className="reset-filters-btn">
                    Reset Filters
                </Button>
            </Collapse>
        </>
    )
}

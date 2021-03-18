import React from 'react'
import { useParams } from 'react-router-dom'
import { Button, Collapse, Fade } from 'reactstrap'
import {
    SelectDates,
    SelectSermon,
    SelectSpeaker,
    Searchbar
} from '../filter/individualFilters'
import getData from '../../api/apis'
import {
    createAllSpeakersChoice,
    createAllSermonsChoice
} from './individualFilters/utils'

import './filter.scss'

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
    const data = await getData(lang)
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
    const data = await getData(lang)
    return data
}

const defaultValues = {
    dateFrom: new Date(),
    dateTo: new Date(),
    speakersIds: null,
    sermonsIds: null
}

export default function Filter() {
    const [selectedFilters, setSelectedFilters] = React.useState({
        ...defaultValues
    })
    const [fetchedData, setFetchedData] = React.useState({
        speakers: [],
        sermons: []
    })
    const [isOpen, setIsOpen] = React.useState(false)
    let { lang } = useParams()

    const toggle = React.useCallback(() => {
        setIsOpen(!isOpen)
    }, [isOpen])

    const resetSelectedFilters = React.useCallback(() => {
        setSelectedFilters({ ...defaultValues })
    }, [])

    const getAndSetFetchedData = React.useCallback(async lang => {
        const [speakers, sermons] = await Promise.all([
            fetchSpeaker(lang),
            fetchSermons(lang)
        ])

        const formatedSpeakers = speakers.Data.map(formatSpeaker)
        formatedSpeakers.unshift(createAllSpeakersChoice(lang))

        const formatedSermons = sermons.Data.map(formatSermon)
        formatedSermons.unshift(createAllSermonsChoice(lang))

        setFetchedData({
            speakers: formatedSpeakers,
            sermons: formatedSermons
        })
    }, [])

    React.useEffect(() => {
        getAndSetFetchedData(lang)
    }, [lang, getAndSetFetchedData])

    const onApplyFilters = React.useCallback(() => {}, [])

    return (
        <>
            <Button onClick={toggle} className="filter-btn">
                Filters
            </Button>
            <Collapse isOpen={isOpen} className="filter-collapsibles">
                <Fade in={isOpen}>
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
                        speakers={fetchedData.speakers}
                    />
                    <SelectSermon
                        sermons={fetchedData.sermons}
                        values={selectedFilters.sermonsIds}
                        lang={lang}
                        setFilters={setSelectedFilters}
                    />
                    <Button
                        onClick={resetSelectedFilters}
                        className="reset-filters-btn"
                    >
                        Reset Filters
                    </Button>
                    <Button
                        onClick={onApplyFilters}
                        className="reset-filters-btn"
                    >
                        Apply Filters
                    </Button>
                </Fade>
            </Collapse>
        </>
    )
}

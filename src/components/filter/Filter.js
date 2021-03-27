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
import { format } from 'date-fns'
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
    const data = await getData('GET_ALL_SPEAKERS', lang)
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
    const data = await getData('GET_SERRIES_LIST', lang)
    return data
}

const defaultValues = {
    dateFrom: new Date(),
    dateTo: new Date(),
    speakersIds: [],
    sermonsIds: [],
    text: ''
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

        const formatedSpeakers = speakers.Data.map(formatSpeaker).filter(
            sp => sp.value
        )
        formatedSpeakers.unshift(createAllSpeakersChoice(lang))

        const formatedSermons = sermons.Data.map(formatSermon).filter(
            sp => sp.value
        )
        formatedSermons.unshift(createAllSermonsChoice(lang))

        setFetchedData({
            speakers: formatedSpeakers,
            sermons: formatedSermons
        })
    }, [])

    React.useEffect(() => {
        getAndSetFetchedData(lang)
    }, [lang, getAndSetFetchedData])

    const prepareBodyForPost = React.useCallback(() => {
        const {
            dateFrom,
            dateTo,
            sermonsIds,
            speakersIds,
            text
        } = selectedFilters

        const formattedDateFrom = format(dateFrom, 'yyyy/MM/dd')
        const formattedDateTo = format(dateTo, 'yyyy/MM/dd')

        const formattedSpeakerIds = speakersIds.map(sp => {
            return sp.value
        })

        const formattedSermonIds = sermonsIds.map(sermon => {
            return sermon.value
        })

        const hasSelectedAllSermons = function () {
            formattedSermonIds.filter(
                sermon => sermon.value >= 900 && sermon.value <= 907
            )

            return formattedSermonIds.length > 0 ? true : false
        }

        const body = {
            Lang: lang,
            DateFrom: formattedDateFrom,
            DateTo: formattedDateTo,
            SpeakersList: formattedSpeakerIds,
            SeriesList: formattedSermonIds,
            AllSeries: hasSelectedAllSermons(),
            Text: text
        }

        return body
    }, [lang, selectedFilters])

    const onApplyFilters = React.useCallback(async () => {
        const body = prepareBodyForPost()

        const response = await fetch(
            `https://www.wordofgod.gr/api/contents/search`,
            {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(body)
            }
        )

        const data = await response.json()

        console.log(data)
    }, [prepareBodyForPost])

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
                    <Searchbar
                        value={selectedFilters.text}
                        setFilters={setSelectedFilters}
                    />
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

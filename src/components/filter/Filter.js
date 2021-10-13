import React from 'react'
import { useParams } from 'react-router-dom'
import { Button, Collapse, Fade } from 'reactstrap'
import {
    SelectDates,
    SelectSermon,
    SelectSpeaker,
    Searchbar
} from '../filter/individualFilters'
import { useGlobalState } from '../AppContext'
import getData from '../../api/apis'
import {
    createAllSpeakersChoice,
    createAllSermonsChoice,
    dataLabel
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
    const {
        state: { Data }
    } = useGlobalState()

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

    const labels = dataLabel(Data)

    const getLabel = React.useCallback(
        num => {
            return labels(num)
        },
        [labels]
    )

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

        return {
            Lang: lang,
            DateFrom: formattedDateFrom,
            DateTo: formattedDateTo,
            SpeakersList: formattedSpeakerIds,
            SeriesList: formattedSermonIds,
            AllSeries: hasSelectedAllSermons(),
            Text: text
        }
    }, [lang, selectedFilters])

    const onApplyFilters = React.useCallback(
        async e => {
            try {
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
            } catch (error) {
                console.log(error)
            }
        },
        [prepareBodyForPost]
    )

    return (
        <>
            <Button onClick={toggle} className="filter-btn">
                {getLabel('51')}
                FILTERS
            </Button>
            <Collapse isOpen={isOpen}>
                <Fade in={isOpen} className="filter-collapsibles">
                    <SelectDates
                        labelValue={getLabel('47')}
                        fromDateLabel={getLabel('115')}
                        toDateLabel={getLabel('73')}
                        dates={{
                            dateFrom: selectedFilters.dateFrom,
                            dateTo: selectedFilters.dateTo
                        }}
                        lang={lang}
                        setFilters={setSelectedFilters}
                    />
                    <Searchbar
                        labelValue={getLabel('110')}
                        value={selectedFilters.text}
                        setFilters={setSelectedFilters}
                    />
                    <SelectSpeaker
                        labelValue={getLabel('98')}
                        values={selectedFilters.speakersIds}
                        lang={lang}
                        setFilters={setSelectedFilters}
                        speakers={fetchedData.speakers}
                    />
                    <SelectSermon
                        labelValue={getLabel('2')}
                        sermons={fetchedData.sermons}
                        values={selectedFilters.sermonsIds}
                        lang={lang}
                        setFilters={setSelectedFilters}
                    />
                    <div className="actions-container">
                        <Button
                            onClick={onApplyFilters}
                            className="reset-filters-btn"
                        >
                            {getLabel('57')}
                            SEARCH
                        </Button>
                        <Button
                            onClick={resetSelectedFilters}
                            className="reset-filters-btn"
                        >
                            {getLabel('55')}
                            RESET
                        </Button>
                    </div>
                </Fade>
            </Collapse>
        </>
    )
}

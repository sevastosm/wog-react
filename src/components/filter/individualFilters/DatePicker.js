import React from 'react'
import DatePicker from 'react-datepicker'
import { registerLocale } from 'react-datepicker'
import { el, enGB, es, it, ro, ru, pl, fr } from 'date-fns/locale'

import 'react-datepicker/dist/react-datepicker.css'

function setDatePickerLang(lang) {
    switch (lang) {
        case 'gr':
            registerLocale('gr', el)
            break
        case 'es':
            registerLocale('es', es)
            break
        case 'it':
            registerLocale('it', it)
            break
        case 'ro':
            registerLocale('ro', ro)
            break
        case 'ru':
            registerLocale('ru', ru)
            break
        case 'pl':
            registerLocale('pl', pl)
            break
        case 'fr':
            registerLocale('fr', fr)
            break
        default:
            registerLocale('en', enGB)
    }
}

export default function SelectDates({ dates, lang, setFilters }) {
    const setDateFrom = React.useCallback(
        date => {
            setFilters(previousValues => ({
                ...previousValues,
                dateFrom: date
            }))
        },
        [setFilters]
    )

    const setDateTo = React.useCallback(
        date => {
            setFilters(previousValues => ({
                ...previousValues,
                dateTo: date
            }))
        },
        [setFilters]
    )

    React.useEffect(() => {
        setDatePickerLang(lang)
    }, [lang])

    return (
        <>
            <DatePicker
                selected={dates.dateFrom}
                onChange={setDateFrom}
                locale={lang}
            />
            <DatePicker
                selected={dates.dateTo}
                onChange={setDateTo}
                locale={lang}
            />
        </>
    )
}

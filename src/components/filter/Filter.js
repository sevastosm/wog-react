import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button, Collapse, Fade } from "reactstrap";
import {
  SelectDates,
  SelectSermon,
  SelectSpeaker,
  Searchbar,
} from "../filter/individualFilters";
import AppContext, { useGlobalState } from "../AppContext";
import useResources from "../../hooks/UseResources";

import getData from "../../api/apis";

import { format } from "date-fns";
import "./filter.scss";

function formatSpeaker(speaker) {
  if (speaker.Name === "(Removed)") {
    return "";
  }
  return {
    value: speaker.ID,
    label: speaker.Name,
  };
}

const fetchSpeaker = async (lang) => {
  const data = await getData("GET_ALL_SPEAKERS", lang);
  return data;
};

function formatSermon(sermon) {
  if (sermon.Name === "(Removed)") {
    return "";
  }
  return {
    value: sermon.ID,
    label: sermon.Name,
  };
}

const fetchSermons = async (lang) => {
  const data = await getData("GET_SERIES_SEARCH_LIST", lang);
  return data;
};

const defaultValues = {
  dateFrom: null,
  dateTo: null,
  speakersIds: [],
  sermonsIds: [],
  text: "",
};

export default function Filter() {
  const resourses = useResources([
    "tabRecordingsSeriesHdr",
    "SearchFilters",
    "SearchBtnClear",
    "SearchBtnFind",
    "SearchSpeakers",
  ]);
  const {
    setActivePlaylist,
    speakersList,
    lang,
    seriesSearchList,
    setLoader,
    setActivePage,
  } = useContext(AppContext);
  const [selectedFilters, setSelectedFilters] = React.useState({
    ...defaultValues,
  });

  const formatedSpeakers = (list) => {
    const formatedList = list.map(formatSpeaker).filter((sp) => sp.value);
    return formatedList.unshift(list(lang));
  };

  const formatedSermons = (list) => {
    const formatedList = list.map(formatSpeaker).filter((sp) => sp.value);
    return formatedList.unshift(seriesSearchList(lang));
  };

  const [fetchedData, setFetchedData] = React.useState({
    speakers: [],
    sermons: [],
  });
  const [isOpen, setIsOpen] = React.useState(false);
  const { Data } = useGlobalState();
  const toggle = React.useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const resetSelectedFilters = React.useCallback(() => {
    setSelectedFilters({ ...defaultValues });
  }, []);

  const prepareBodyForPost = React.useCallback(() => {
    const { dateFrom, dateTo, sermonsIds, speakersIds, text } = selectedFilters;

    const formattedSpeakerIds = speakersIds.map((sp) => {
      return sp.value;
    });

    const formattedSermonIds = sermonsIds.map((sermon) => {
      return sermon.value;
    });

    const hasSelectedAllSermons = function () {
      formattedSermonIds.filter(
        (sermon) => sermon.value >= 900 && sermon.value <= 907
      );

      return formattedSermonIds.length > 0 ? true : false;
    };
    const formattedDateFrom = dateFrom && format(dateFrom, "yyyy/MM/dd");
    const formattedDateTo = dateTo && format(dateTo, "yyyy/MM/dd");
    if (!formattedDateFrom && !formattedDateTo) {
      return {
        Lang: lang,
        // DateFrom: formattedDateFrom,
        // DateTo: formattedDateTo,
        SpeakersList: formattedSpeakerIds,
        SeriesList: formattedSermonIds,
        // AllSeries: hasSelectedAllSermons(),
        Text: text,
      };
    }

    return {
      Lang: lang,
      DateFrom: formattedDateFrom,
      DateTo: formattedDateTo,
      SpeakersList: formattedSpeakerIds,
      SeriesList: formattedSermonIds,
      // AllSeries: hasSelectedAllSermons(),
      Text: text,
    };
  }, [lang, selectedFilters]);

  const onApplyFilters = React.useCallback(
    async (e) => {
      try {
        const body = prepareBodyForPost();
        setLoader(true);
        const response = await fetch(
          `https://www.wordofgod.gr/api/contents/search`,
          {
            method: "POST",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify(body),
          }
        );

        const data = await response.json();
        setActivePlaylist({ ...data, activePage: 1 });
      } catch (error) {
        console.log(error);
      }
    },
    [prepareBodyForPost]
  );
  console.log("FETCHDATA", fetchedData);

  useEffect(() => {
    // console.log("formatedSpeakers", formatedSpeakers(speakersList));
    // console.log("formatedSermons", formatedSermons(seriesSearchList));
    // setFetchedData({
    //   speakers: formatedSpeakers(speakersList),
    //   sermons: formatedSermons(seriesSearchList),
    // });
  }, [seriesSearchList, speakersList]);

  return (
    <>
      <Button onClick={toggle} className="filter-btn">
        {resourses.length > 0 && resourses[1].Text}
      </Button>
      <Collapse isOpen={isOpen}>
        <Fade in={isOpen} className="filter-collapsibles">
          <SelectDates
            fromDateLabel={lang !== "gr" ? "Date from" : "Ημ/νια από"}
            toDateLabel={lang !== "gr" ? "Date το" : "Ημ/νια έως"}
            dates={{
              dateFrom: selectedFilters.dateFrom,
              dateTo: selectedFilters.dateTo,
            }}
            lang={lang}
            setFilters={setSelectedFilters}
          />
          <Searchbar
            labelValue={resourses.length > 0 && resourses[3].Text}
            value={selectedFilters.text}
            setFilters={setSelectedFilters}
          />

          {speakersList.length && (
            <SelectSpeaker
              labelValue={resourses.length > 0 && resourses[4].Text}
              lang={lang}
              setFilters={setSelectedFilters}
              speakers={speakersList}
            />
          )}
          {seriesSearchList && (
            <SelectSermon
              labelValue={resourses.length > 0 && resourses[0].Text}
              sermons={seriesSearchList}
              lang={lang}
              setFilters={setSelectedFilters}
            />
          )}
          <div className="actions-container">
            <Button onClick={onApplyFilters} className="reset-filters-btn">
              {resourses.length > 0 && resourses[3].Text}
            </Button>
            <Button
              onClick={resetSelectedFilters}
              className="reset-filters-btn"
            >
              {resourses.length > 0 && resourses[2].Text}
            </Button>
          </div>
        </Fade>
      </Collapse>
    </>
  );
}

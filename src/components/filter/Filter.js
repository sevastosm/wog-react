import React, { useContext } from "react";
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
import {
  createAllSpeakersChoice,
  createAllSermonsChoice,
  dataLabel,
} from "./individualFilters/utils";
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
  dateFrom: new Date(),
  dateTo: new Date(),
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
  const { setActivePlaylist, speakersList, lang, seriesSearchList, setLoader } =
    useContext(AppContext);
  const [selectedFilters, setSelectedFilters] = React.useState({
    ...defaultValues,
  });

  const formatedSpeakers = speakersList
    .map(formatSpeaker)
    .filter((sp) => sp.value);
  formatedSpeakers.unshift(createAllSpeakersChoice(lang));

  const formatedSermons = seriesSearchList
    .map(formatSermon)
    .filter((sp) => sp.value);
  formatedSermons.unshift(createAllSermonsChoice(lang));
  const [fetchedData, setFetchedData] = React.useState({
    speakers: formatedSpeakers,
    sermons: formatedSermons,
  });
  const [isOpen, setIsOpen] = React.useState(false);
  const { Data } = useGlobalState();
  const toggle = React.useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const resetSelectedFilters = React.useCallback(() => {
    setSelectedFilters({ ...defaultValues });
  }, []);

  const labels = dataLabel(Data);

  const getLabel = React.useCallback(
    (num) => {
      return "";
    },
    [labels]
  );

  const prepareBodyForPost = React.useCallback(() => {
    const { dateFrom, dateTo, sermonsIds, speakersIds, text } = selectedFilters;

    const formattedDateFrom = format(dateFrom, "yyyy/MM/dd");
    const formattedDateTo = format(dateTo, "yyyy/MM/dd");

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
        console.log("SEARCH_DATA", data);

        setActivePlaylist(data);
      } catch (error) {
        console.log(error);
      }
    },
    [prepareBodyForPost]
  );

  return (
    <>
      <Button onClick={toggle} className="filter-btn">
        {resourses.length > 0 && resourses[1].Text}
        {console.log(resourses)}
      </Button>
      <Collapse isOpen={isOpen}>
        <Fade in={isOpen} className="filter-collapsibles">
          <SelectDates
            labelValue={getLabel("47")}
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

          <SelectSpeaker
            labelValue={resourses.length > 0 && resourses[4].Text}
            values={selectedFilters.speakersIds}
            lang={lang}
            setFilters={setSelectedFilters}
            speakers={fetchedData.speakers}
          />
          <SelectSermon
            labelValue={resourses.length > 0 && resourses[0].Text}
            sermons={fetchedData.sermons}
            values={selectedFilters.sermonsIds}
            lang={lang}
            setFilters={setSelectedFilters}
          />
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

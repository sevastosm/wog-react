import React, { useContext, useEffect } from "react";
import { useLocation, Link, useRouteMatch } from "react-router-dom";
import { UncontrolledCollapse, Button } from "reactstrap";
import { route } from "../../constants";

import { getPlaylist } from "../../utils";
import Filter from "../../components/filter/Filter";
import { useMedia } from "react-media";
import useResources from "../../hooks/UseResources";

import AppContext from "../../components/AppContext";

// A custom hook that builds on useLocation to parse
// the query string for you.
// function useQuery() {
//     const { search } = useLocation();

//     return React.useMemo(() => new URLSearchParams(search), [search]);
// }

const SeriesList = () => {
    const {
        setActivePlaylist,
        series,
        lang,
        setVideo,
        setLoader,
        setSidebar,
    } = useContext(AppContext);
    const isSmallScreen = useMedia({ query: "(max-width: 1000px)" });
    const resourses = useResources([
        "tabRecordingsSeriesHdr",
        "tabRecentHdr"
    ]);
    const match = useRouteMatch("/:lang");

    let customList = series || [];

    const onClick = async (e, kind) => {
        const { id } = e.target
        setLoader(true);
        const result = await getPlaylist(kind, id, lang,);
        setActivePlaylist({ Data: result.data, Total: result.total, type: kind, activePage: 1 });

    };

    useEffect(() => {
        setVideo({
            YouTubeId: "ENn6RLC0wpo",
            Subject: "LIVE",
            RecordingSubject: "Live streaming from youtube",
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);




    return (
        <div className={`${isSmallScreen && "small"} w-100`}>
            {!isSmallScreen && (
                // <button onClick={handleClick} className="button tonglefilters">
                <h2 className='text-center'> {resourses.length > 0 && resourses[0].Text}</h2>
                // </button>
            )}
            <div className="d-flex flex-column  w-100">
                <button
                    key={32}
                    id={32}
                    className="w-100 btn mb-1"
                    onClick={onClick}
                >
                    {resourses.length > 0 && resourses[1].Text}
                </button>
                {customList.map((listItem) => {
                    if (listItem.Series) {
                        return (<div key={lang + listItem.ID} >

                            <button
                                id={lang + listItem.ID}
                                key={lang + listItem.ID}
                                className="w-100 d-flex btn mb-1 btn"
                            >
                                {listItem.Name}
                            </button>
                            <UncontrolledCollapse
                                className="p-2"
                                toggler={"#" + lang + listItem.ID}
                            >
                                {listItem.Series.map((item) => {
                                    return (
                                        <button
                                            key={item.ID}
                                            id={item.ID}
                                            className="w-100 btn mb-1"
                                            onClick={(e) => onClick(e, item.Kind)}

                                        >
                                            {item.Name}
                                        </button>
                                    );
                                })
                                }
                            </UncontrolledCollapse>
                        </div>)
                    }
                    return (<button
                        key={listItem.ID}
                        id={listItem.ID}
                        onClick={(e) => onClick(e, listItem.Kind)}
                        className="w-100 btn mb-1"
                    >
                        {listItem.Name}
                    </button>
                    )
                })}
                <Filter />

                {isSmallScreen && match &&
                    <Button
                        onClick={() => setSidebar(false)}
                        className="reset-filters-btn w-100"
                    >
                        <Link
                            to={`${match.url}/${route.CONTACT}`}
                            style={{
                                cursor: "pointer",
                                color: "white",
                                textDecoration: "none",
                            }}
                        >
                            Επικοινωνία
                        </Link>
                    </Button>}
            </div>
        </div >
    );
};

export default SeriesList;

import React, { useContext, useEffect } from "react";
import { useLocation, useHistory, Link, useRouteMatch } from "react-router-dom";
import { UncontrolledCollapse, Button } from "reactstrap";
import { route } from "../../constants";

import { getPlaylist } from "../../utils";
import Filter from "../../components/filter/Filter";
import { useMedia } from "react-media";

import AppContext from "../../components/AppContext";

// A custom hook that builds on useLocation to parse
// the query string for you.
function useQuery() {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
}

const SeriesList = () => {
    const {
        setActivePlaylist,
        series,
        lang,
        activePlaylist,
        setVideo,
        activeVideo,
        setLoader,
        setSidebar
    } = useContext(AppContext);
    const isSmallScreen = useMedia({ query: "(max-width: 1000px)" });
    const match = useRouteMatch("/:lang");

    let customList = series || [];
    const history = useHistory();

    const onClick = async (e) => {
        const { id } = e.target;
        setLoader(true);
        const result = await getPlaylist(id, lang);
        console.log("result", result);

        setActivePlaylist({ Data: result.data, Total: result.total });

        history.push(`?lang=${lang}&search=series&sid=${id}`);
    };

    let query = useQuery();
    console.log("URL-PARAMS", query.values());





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
            <div className="d-flex flex-column  w-100">
                {customList.map((listItem) => {

                    if (listItem.Series) {
                        return (<div>
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
                                            id={item.ID}
                                            className="w-100 btn mb-1"
                                            onClick={onClick}
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
                        onClick={onClick}
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

import React, { useContext } from "react";
import AppContext from "../../components/AppContext";
import useResources from "../../hooks/UseResources";
import { Button } from "reactstrap";

export default function BackToLive() {
  const { setLiveVideo } = useContext(AppContext);
  const resourses = useResources(["ImageReturnToLive"]);

  return (
    <Button
      onClick={() => {
        setLiveVideo();
      }}
      className="back-btn"
    >
      {resourses && resourses[0]?.Text}
    </Button>
  );
}

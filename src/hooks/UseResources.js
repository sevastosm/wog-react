import { useContext } from "react";
import AppContext from "../components/AppContext";

export default function useResources(names) {
  const { resourses } = useContext(AppContext);
  const title =
    typeof names === "object"
      ? resourses.filter((i) => names.find((name) => i.Name === name))
      : resourses.find((r) => r.Name === names);
  return title;
}

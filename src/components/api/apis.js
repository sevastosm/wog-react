const URL = "http://wordofgod.gr";
const getAllsermons = () => {
  fetch(`${URL}/api/series/gr`)
    .then((response) => response.json())
    .then((data) => console.log(data));
};

const apis = {
  GET_ALL_SERMONS: getAllsermons,
};

export default apis;

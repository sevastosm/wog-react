const host = "http://wordofgod.gr";
const getData = (url) => {
  fetch(`${host}${url}`)
    .then((response) => response.json())
    .then((data) => console.log(url,data));
};

export default getData


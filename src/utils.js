import getData from "./api/apis";
const getIntialData =(lang)=> Promise.all([
  getData("GET_RECENT", lang),
  getData("GET_RESOURCES", lang),
  getData("GET_PROGRAM", lang),

]).then((values) => {
  console.log(values[0].Data);
  console.log(values[1].Data);
  console.log(values[2].Data);


});

export default getIntialData
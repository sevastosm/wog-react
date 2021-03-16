const host = 'http://wordofgod.gr'
const getData = async url => {
    const response = await fetch(`${host}${url}`)
    const data = await response.json()
    return data
}
export default getData

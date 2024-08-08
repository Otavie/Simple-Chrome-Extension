const LOC_ENDPOINT = "https://ttp.cbp.dhs.gov/schedulerapi/locations/?temporary=false&inviteOnly=false&operational=true&serviceName=Global+Entry"

export default function fetchLocs() {
    fetch(LOC_ENDPOINT)
        .then(res => res.json())
        .then(data => {
            const filteredLocs = data.map(loc => ({
                "id": loc.id,
                "name": loc.name,
                "shortName": loc.shortName,
                "tzData": loc.tzData
            }))
            filteredLocs.sort((a, b) => a.name.localeCompare(b.name))
            chrome.storage.local.set({ locs: filteredLocs })
            console.log(filteredLocs)
        })
        .catch(error => {
            console.log(error)
        })
}
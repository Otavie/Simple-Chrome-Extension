// const OPEN_SLOTS_ENDPOINT = "https://ttp.cbp.dhs.gov/schedulerapi/locations/9240/slots?startTimestamp=2023-02-11T00%3A00%3A00&endTimestamp=2023-03-22T00%3A00%3A00"
import { handleNotification } from "../lib/handleNotifications.js";

export const fetchOpenSlots = (result) => {
    console.log("Fetching open slots with", result)

    const { locID, start, end } = result;
    const OPEN_SLOTS_ENDPOINT = `https://ttp.cbp.dhs.gov/schedulerapi/locations/${locID}/slots?startTimestamp=${start}T00%3A00%3A00&endTimestamp=${end}T00%3A00%3A00`

    fetch(OPEN_SLOTS_ENDPOINT)
        .then(res => res.json())
        .then(data => data.filter(slot => slot.active > 0))
        .then(data => handleNotification(data))
        .catch(error => console.log(error))
}

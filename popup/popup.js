const locationID = document.getElementById("locationId")
const startDateID = document.getElementById("start-date")
const endDateID = document.getElementById("end-date")
const startBtnID = document.getElementById("startBTN")
const stopBtnID = document.getElementById("stopBTN")

startBtnID.onclick = function() {
    const prefs = {
        locID: locationID.value,
        start: startDateID.value,
        end: endDateID.value
    }
    chrome.runtime.sendMessage({
        event: 'onStart',
        prefs
    })
}

stopBtnID.onclick = function() {
    chrome.runtime.sendMessage({
        event: 'onStop'
    })

    console.log("Stop Date is", startDateID.value)
}

chrome.storage.local.get(["locID", "start", "end", "locs"], (result) => {
    const { locID: storedLocID, start: storedStartDate, end: storedEndDate, locs: locations } = result

    if (storedLocID) {
        locationID.value = storedLocID
    }

    if (storedStartDate) {
        startDateID.value = storedStartDate
    }

    if (storedEndDate) {
        endDateID.value = storedEndDate
    }

    console.log(locations)
})

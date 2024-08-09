const locationID = document.getElementById("locationId")
const startDateID = document.getElementById("start-date")
const endDateID = document.getElementById("end-date")
const startBtnID = document.getElementById("startBTN")
const stopBtnID = document.getElementById("stopBTN")
const running = document.getElementById("running")
const stopped = document.getElementById("stopped")
const nothing = document.getElementById("nothing")
const locError = document.querySelector(".locError")
const startDateError = document.querySelector(".startDateError")
const endDateError = document.querySelector(".endDateError")

const enableBTN = (btn) => btn.disabled = false;
const disableBTN = (btn) => btn.disabled = true;

const isDateInPast = (date) => {
    const today = new Date().setHours(0, 0, 0, 0);
    return new Date(date).setHours(0, 0, 0, 0) < today
}

const inputValidations = () => {
    let isValid = true

    if (!locationID.value) {
        locError.style.display = "flex"
        isValid = false
    } else {
        locError.style.display = "none"
    }

    if (!startDateID.value || isDateInPast(startDateID.value)) {
        startDateError.style.display = "flex"
        isValid = false
    } else {
        startDateError.style.display = "none"
    }

    if (!endDateID.value || isDateInPast(endDateID.value)) {
        endDateError.style.display = "flex"
        isValid = false
    } else {
        endDateError.style.display = "none"
    }

    if (startDateID.value && endDateID.value && new Date(startDateID.value) > new Date(endDateID.value)) {
        endDateError.textContent = "End date cannot be before start date!"
        endDateError.style.display = "flex"
        isValid = false
    } else if (endDateID.value) {
        endDateError.textContent = "Enter a valid date!"
    }

    return isValid
}

const updateUI = (storedLocID, storedStartDate, storedEndDate, runningStatus) => {
    if (storedLocID) locationID.value = storedLocID
    if (storedStartDate) startDateID.value = storedStartDate
    if (storedEndDate) endDateID.value = storedEndDate

    if (runningStatus === true) {
        running.style.display = "flex"
        stopped.style.display = "none"
        nothing.style.display = "none"
        enableBTN(stopBtnID)
        disableBTN(startBtnID)
        locationID.disabled = true
        startDateID.disabled = true
        endDateID.disabled = true
    } else if (runningStatus === false) {
        running.style.display = "none"
        stopped.style.display = "flex"
        nothing.style.display = "none"
        enableBTN(startBtnID)
        disableBTN(stopBtnID)
        locationID.disabled = false
        startDateID.disabled = false
        endDateID.disabled = false
    } else {
        nothing.style.display = "flex"
    }
}

const loadAndUpdateUI = () => {
    chrome.storage.local.get(["locID", "start", "end", "locs", "isRunning"], (result) => {
        const {
            locID: storedLocID,
            start: storedStartDate,
            end: storedEndDate,
            locs: locations,
            isRunning: runningStatus
        } = result
        setLocs(locations)
        updateUI(storedLocID, storedStartDate, storedEndDate, runningStatus)
    })
}

startBtnID.onclick = function() {
    if (inputValidations()) {
        const prefs = {
            locID: locationID.value,
            start: startDateID.value,
            end: endDateID.value,
            tzData: locationID.options[locationID.selectedIndex].getAttribute("data-tz")
        }

        chrome.runtime.sendMessage({ event: 'onStart', prefs })
    }
}

stopBtnID.onclick = function() {
    chrome.runtime.sendMessage({ event: 'onStop' })
    console.log("Stop Date is", startDateID.value)
}

// Initial Load and Setup
loadAndUpdateUI()

// Listen for Changes in Storage
chrome.storage.onChanged.addListener((changes, area) => {
    if (area === "local") {
        const {
            locID: storedLocID,
            start: storedStartDate,
            end: storedEndDate,
            isRunning: runningStatus
        } = changes
        updateUI(storedLocID?.newValue, storedStartDate?.newValue, storedEndDate?.newValue, runningStatus?.newValue)
    }
})

const setLocs = (locations) => {
    locations.forEach(location => {
        let optElement = document.createElement("option")
        optElement.value = location.id
        optElement.innerHTML = location.name
        optElement.setAttribute("data-tz", location.tzData)
        locationID.appendChild(optElement)
    })
}
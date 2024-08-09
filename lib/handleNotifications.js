export const handleNotification = (activeAppointments) => {
    if (activeAppointments.length > 0) {
        const appointment = activeAppointments[0]
        console.log("Create Notification for:", appointment)
        createNotification(appointment)
    } else {
        console.log("No active appointment found!")
    }
}

const createNotification = (activeAppointment) => {
    chrome.notifications.create({
        title: "Global Entry Drops",
        message: `Found an open interview at ${activeAppointment.timestamp}`,
        // iconUrl: chrome.runtime.getURL("../images/icons-32.png"),
        iconUrl: chrome.runtime.getURL("images/icons-32.png"),
        type: "basic"
    }, (notificationId) => {
        if (chrome.runtime.lastError) {
            console.log("Notification Error:", chrome.runtime.lastError)
        } else {
            console.log("Notification created with ID:", notificationId)
        }
    })
}
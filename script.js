 function clockUpdate() {
    const clock = document.getElementById("clock");

    const now = new Date();

    let hours = String(now.getHours()).padStart(2, "0");
    let minutes = String(now.getMinutes()).padStart(2, "0");
    let seconds = String(now.getSeconds()).padStart(2, "0");

    const hour = now.getHours() >= 12 ? "PM" : "AM";

    clock.textContent = `${hours}:${minutes}:${seconds} ${hour}`

}

clockUpdate();
setInterval(clockUpdate, 1000);
function updateClock() {

    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    let period = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;

    if (hours === 0) {
        hours = 12;
    }

    hours = String(hours).padStart(2, "0");

    minutes = String(minutes).padStart(2, "0");

    seconds = String(seconds).padStart(2, "0");

    const currentTime =
        hours + ":" +
        minutes + ":" +
        seconds + " " +
        period;

    document.getElementById("clock").textContent =
        currentTime;
}


updateClock();

setInterval(updateClock, 1000);

const eventDate =
    new Date("December 20, 2026 13:00:00").getTime();


function updateCountdown() {

    const now =
        new Date().getTime();

    const distance =
        eventDate - now;


    if (distance <= 0) {

        document.getElementById("days")
            .textContent = "00";

        document.getElementById("hours")
            .textContent = "00";

        document.getElementById("minutes")
            .textContent = "00";

        document.getElementById("seconds")
            .textContent = "00";

        return;
    }


    const days =
        Math.floor(
            distance /
            (1000 * 60 * 60 * 24)
        );


    const hours =
        Math.floor(
            (distance %
                (1000 * 60 * 60 * 24))
            /
            (1000 * 60 * 60)
        );


    const minutes =
        Math.floor(
            (distance %
                (1000 * 60 * 60))
            /
            (1000 * 60)
        );


    const seconds =
        Math.floor(
            (distance %
                (1000 * 60))
            /
            1000
        );


    document.getElementById("days")
        .textContent =
        String(days).padStart(2, "0");


    document.getElementById("hours")
        .textContent =
        String(hours).padStart(2, "0");


    document.getElementById("minutes")
        .textContent =
        String(minutes).padStart(2, "0");


    document.getElementById("seconds")
        .textContent =
        String(seconds).padStart(2, "0");
}


updateCountdown();

setInterval(updateCountdown, 1000);


const announcementButton =
    document.getElementById(
        "announcementButton"
    );

const announcement =
    document.getElementById(
        "announcement"
    );


announcementButton.addEventListener(
    "click",
    function () {

        announcement.textContent =
            "Registration is now open! Form your team of five players, prepare your strategy, and get ready to compete in the Mobile Legends: Bang Bang Online Tournament!";

        announcementButton.textContent =
            "Announcement Displayed!";

    }
);


console.log(
    "Mobile Legends Online Event website loaded successfully!"
);
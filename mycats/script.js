document.addEventListener("DOMContentLoaded", function () {
    function startCountdown(id, birthday) {
        function updateCountdown() {
            const now = new Date();
            const birthDate = new Date(now.getFullYear(), birthday.month - 1, birthday.day);

            if (now > birthDate) {
                birthDate.setFullYear(now.getFullYear() + 1);
            }

            const timeDiff = birthDate - now;
            const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
            const seconds = Math.floor((timeDiff / 1000) % 60);

            const countdownElement = document.getElementById(id);
            if (countdownElement) {
                countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
            }

            setTimeout(updateCountdown, 1000);
        }
        updateCountdown();
    }

    if (document.getElementById("shadow-bday")) {
        startCountdown("shadow-bday", { month: 5, day: 9 });
    }

    if (document.getElementById("angelog-bday")) {
        startCountdown("angelog-bday", { month: 10, day: 19 });
    }

    if (document.getElementById("kiatot-bday")) {
        startCountdown("kiatot-bday", { month: 8, day: 25 });
    }

    if (document.getElementById("kawot-bday")) {
        startCountdown("kawot-bday", { month: 3, day: 10 });
    }

    if (document.getElementById("kira-bday")) {
        startCountdown("kira-bday", { month: 7, day: 5 });
    }

    if (document.getElementById("kiara-bday")) {
        startCountdown("kiara-bday", { month: 11, day: 22 });
    }
    
});

function flipCard(card) {
    card.classList.toggle("flipped");
}
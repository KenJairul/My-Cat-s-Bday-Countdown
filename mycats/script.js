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
                const today = new Date();
                if (today.getMonth() === birthday.month - 1 && today.getDate() === birthday.day) {
                    countdownElement.innerHTML = "Today's my birthday! 🎂";
                } else {
                    countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
                }
            }

            setTimeout(updateCountdown, 1000);
        }
        updateCountdown();
    }

    const birthdays = {
        "shadow-bday": { month: 5, day: 9 },
        "angelog-bday": { month: 10, day: 19 },
        "kiatot-bday": { month: 8, day: 25 },
        "kawot-bday": { month: 3, day: 8 }, 
        "kira-bday": { month: 7, day: 5 },
        "kiara-bday": { month: 11, day: 22 }
    };

    Object.keys(birthdays).forEach(id => {
        if (document.getElementById(id)) {
            startCountdown(id, birthdays[id]);
        }
    });
});


function flipCard(card) {
    card.classList.toggle("flipped");
}
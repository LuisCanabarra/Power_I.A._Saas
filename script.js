document.addEventListener('DOMContentLoaded', function () {
    const countdownElement = document.getElementById('countdown');
    const endTime = new Date();
    endTime.setHours(endTime.getHours() + 2); // Define o tempo de término para 2 horas a partir de agora
    endTime.setMinutes(endTime.getMinutes() + 1);
    endTime.setSeconds(endTime.getSeconds() + 40);

    function updateCountdown() {
        const now = new Date();
        const timeRemaining = endTime.getTime() - now.getTime();

        if (timeRemaining <= 0) {
            countdownElement.textContent = 'Tempo esgotado!';
            clearInterval(intervalId);
        } else {
            const hours = Math.floor(timeRemaining / (1000 * 60 * 60));
            const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

            countdownElement.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        }
    }

    updateCountdown();
    const intervalId = setInterval(updateCountdown, 1000);
});

// import './style.css';
// let hoursElement = document.getElementById('hours');
// let minutesElement = document.getElementById('minutes');
// let secondsElement = document.getElementById('seconds');
// let amPmElement = document.getElementById('am');

// setInterval(() => {
//     const time = new Date();

//     // Extract hours, minutes, and seconds
//     let hours = time.getHours();
//     let minutes = time.getMinutes();
//     let seconds = time.getSeconds();

//     // Determine AM or PM
//     const period = hours >= 12 ? 'PM' : 'AM';

//     // Convert hours to 12-hour format
//     hours = hours % 12 || 12;

//     // Update the DOM with leading zeros
//     hoursElement.innerHTML = (hours < 10 ? '0' : '') + hours;
//     minutesElement.innerHTML = (minutes < 10 ? '0' : '') + minutes;
//     secondsElement.innerHTML = (seconds < 10 ? '0' : '') + seconds;
//     amPmElement.innerHTML = period;
// }, 1000); // Use 1000ms for accurate updates


import './style.css';

document.addEventListener('DOMContentLoaded', () => {
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');
    const amPmElement = document.getElementById('am');

    if (!hoursElement || !minutesElement || !secondsElement || !amPmElement) {
        console.error('Clock elements are missing in the DOM.');
        return;
    }

    const updateClock = () => {
        const currentTime = new Date();

        let hours = currentTime.getHours();
        const minutes = currentTime.getMinutes();
        const seconds = currentTime.getSeconds();

        // Determine AM or PM
        const period = hours >= 12 ? 'PM' : 'AM';

        // Convert to 12-hour format
        hours = hours % 12 || 12;

        // Update the DOM with zero-padded values
        hoursElement.textContent = `${hours.toString().padStart(2, '0')}`;
        minutesElement.textContent = `${minutes.toString().padStart(2, '0')}`;
        secondsElement.textContent = `${seconds.toString().padStart(2, '0')}`;
        amPmElement.textContent = period;
    };

    // Update the clock every second
    setInterval(updateClock, 1000);

    // Initialize the clock immediately
    updateClock();
});

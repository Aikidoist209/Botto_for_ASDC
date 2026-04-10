(function () {
    
    const sample = 'UTF-8 check: ✓ — save this file as UTF-8';
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
        console.log('Running in browser. document.charset =', document.characterSet || document.charset);
        console.log(sample);
    } else {
        console.log('Running in Node.js');
        console.log(sample);
    }
})();


document.addEventListener('DOMContentLoaded', () => {

  
  function updateDateTime() {
    const now = new Date();
    
    const dateString = now.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    const timeString = now.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    });

    const formattedDateTime = `${dateString}<br>${timeString}`;
    
    
    const dateTimeBox = document.getElementById('date-time-box');
    
    if (dateTimeBox) {
      dateTimeBox.innerHTML = `<strong>Current Date & Time:</strong><br>${formattedDateTime}`;
      console.log('Time updated successfully:', timeString);
    } else {
      console.log('Date-time box not found!');
    }
  }
  
  
  updateDateTime();
  
  
  setInterval(updateDateTime, 1000);

  });
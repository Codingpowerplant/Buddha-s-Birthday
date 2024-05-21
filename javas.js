

  function changeMessage() {
    document.getElementById('birthday-message').innerText = "Wishing you enlightenment and joy!";
  }

function changeFontStyle() {
    document.body.style.fontFamily = 'Courier New, monospace';
  }

  function changeBackgroundColor() {
    document.body.style.backgroundColor = '#e0f7fa';
  }

  function generateQuote() {
    const quotes = [
      "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
      "The mind is everything. What you think you become.",
      "Health is the greatest gift, contentment the greatest wealth, faithfulness the best relationship."
    ];
  
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').innerText = quotes[randomIndex];
  }

  function countdown() {
    const eventDate = new Date('May 21, 2025 00:00:00').getTime();
    const now = new Date().getTime();
    const distance = eventDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('countdown').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (distance < 0) {
      clearInterval(timer);
      document.getElementById('countdown').innerHTML = "Event has started!";
    }
  }

  const timer = setInterval(countdown, 1000);

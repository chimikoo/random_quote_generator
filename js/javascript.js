// Array of quotes
const quotes = [
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    quote: "Innovation distinguishes between a leader and a follower.",
    author: "Steve Jobs",
  },
  {
    quote: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
  },
  {
    quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    quote: "Don't watch the clock; do what it does. Keep going.",
    author: "Sam Levenson",
  },
  {
    quote: "Don't eat yellow snow. I promise you it's not pineapple flavor.",
    author: "Pelle",
  },
  {
    quote: "Don't jump off an airplane. It's bad for you.",
    author: "Pelle",
  },
];

// Get a random quote
function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

// Display the random quote
function displayRandomQuote() {
  const randomQuote = getRandomQuote();

  const quoteContainer = document.querySelector("#quote-container");
  quoteContainer.innerHTML = `
    <p class="quote">${randomQuote.quote}</p>
    <p class="author">- ${randomQuote.author}</p>
  `;
}

// Button click event handler
const btnRandomQuote = document.querySelector("#btn-random-quote");
btnRandomQuote.addEventListener("click", displayRandomQuote);

// Initial display of a random quote
displayRandomQuote();
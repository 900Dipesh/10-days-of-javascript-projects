import quotes from './quotes.js';
const quote = document.querySelector(".quote");
const author = document.querySelector(".author");
const year = document.querySelector(".year");
window.quoteChanger = () => {
  const num = Math.floor(Math.random() * quotes.length);
  quote.innerText = `"${quotes[num].text}"`;
  author.innerText = quotes[num].author ? `— ${quotes[num].author}` : "— Unknown";
  year.innerText = quotes[num].year || "";
};


window.copyQuote = () => {
  const textToCopy = `${quote.innerText} ${author.innerText}`; 
  navigator.clipboard.writeText(textToCopy)
    .then(() => {
      alert("Quote copied to clipboard! ");
    })
    .catch(() => {
      alert("Failed to copy the quote ");
    });
};

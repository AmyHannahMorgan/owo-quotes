const quoteSpace = document.querySelector('#quote');
const authorSpace = document.querySelector('#author');
const twitterButton = document.querySelector('#twitterButton');

let req = new XMLHttpRequest();

req.open('GET', 'https://type.fit/api/quotes');
req.addEventListener('load', (e) => {
    let quotes = JSON.parse(e.target.responseText);
    let quote = quotes[Math.round(Math.random() * quotes.length)];
    let owoQuote = owoify(quote.text);
    
    quoteSpace.innerHTML = owoQuote;
    authorSpace.innerHTML = quote.author;
    document.querySelector('body').innerHTML += `<a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-size="large" data-text="${owoQuote} -${quote.author}" data-url="https://owo-quotes.glitch.me/" data-related="UnicornNukes" data-show-count="false" id="twitterButton">Tweet</a>`
    twttr.widgets.load();
});
req.send();

function owoify(text) {
    text = text.replace(/(?:r|l)/g, "w");
    text = text.replace(/(?:R|L)/g, "W");
    text = text.replace(/n([aeiou])/g, 'ny$1');
    text = text.replace(/N([aeiou])/g, 'Ny$1');
    text = text.replace(/N([AEIOU])/g, 'Ny$1');
    text = text.replace(/ove/g, "uv");
    return text
}
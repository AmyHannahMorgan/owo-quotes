const quoteSpace = document.querySelector('#quote');
const authorSpace = document.querySelector('#author');

let req = new XMLHttpRequest();

req.open('GET', 'https://type.fit/api/quotes');
req.addEventListener('load', (e) => {
    let quotes = JSON.parse(e.target.responseText);
    let quote = quotes[Math.round(Math.random() * quotes.length)];
    
    quoteSpace.innerHTML = owoify(quote.text);
    authorSpace.innerHTML = quote.author;
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
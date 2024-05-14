quotes = [
  {
    quote: `“Be yourself; everyone else is already taken.”`,
    auther: `― Oscar Wilde`,
  },

  {
    quote: `“Know thy self, know thy enemy. A thousand battles, a thousand victories.”`,
    auther: `― Sun Tzu, The Art of War`,
  },

  {
    quote: `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”`,
    auther: `― Albert Einstein`,
  },

  {
    quote: `“The fool doth think he is wise, but the wise man knows himself to be a fool.”`,
    auther: `― William Shakespeare`,
  },

  {
    quote: `“I have not failed. I've just found 10,000 ways that won't work.”`,
    auther: `― Thomas A. Edison`,
  },

  {
    quote: `“If you don't stand for something you will fall for anything.”`,
    auther: `― Gordon A. Eadie`,
  },

  {
    quote: `Carpe Diem`,
    auther: `― Horace`,
  },

  {
    quote: `“The only way to do great work is to love what you do.”`,
    auther: `― Steve Jobs`,
  },

  {
    quote: `“The only thing we have to fear is fear itself.”`,
    auther: `― Franklin D. Roosevelt`,
  },

  {
    quote: `“Manners maketh man.”`,
    auther: `―  William of Wykeham`,
  },

  {
    quote: `“Manners maketh man.”`,
    auther: `―  William of Wykeham`,
  },
];

usedNumbers = [];

function RNG() {
  var randomNumber = Math.floor(Math.random() * quotes.length);

  if (usedNumbers.length == quotes.length) {
    usedNumbers.splice(0, quotes.length);
  }

  if (usedNumbers.includes(randomNumber)) {
    return RNG();
  } else {
    usedNumbers.push(randomNumber);
    return randomNumber;
  }
}

function getQuote() {
  var randomNumber = RNG();
  document.getElementById("quote").innerHTML = quotes[randomNumber].quote;
  document.getElementById("auther").innerHTML = quotes[randomNumber].auther;
}

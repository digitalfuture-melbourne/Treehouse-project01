/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

const quotes = [
  {
    quote: 'Strive not to be a success, but rather to be of value.',
    source: 'Albert Einstein'
  },
  {
    quote: "I've missed more than 9000 shots in my career. I've lost almost 300 games. 26 times I've been trusted to take the game winning shot and missed. I've failed over and over and over again in my life. And that is why I succeed.",
    source: 'Michael Jordon'
  },
  {
    quote: 'I am not afraid of storms, for I am learning how to sail my ship.',
    source: 'Louisa May Alcott',
    citation: 'Little Women',
    year: 1869
  },
  {
    quote: 'Now that I knew fear, I also knew it was not permanent. As powerful as it was, its grip on me would loosen. It would pass.',
    source: 'Louise Erdrich',
    citation: 'The Round House',
    year: '2012'
  },
  {
    quote: 'The greatest glory in living lies not in never falling, but in rising every time we fall.',
    source: 'Nelson Mandela'
  }
];


/***
 * `getRandomQuote` function
***/

const getRandomQuote = () => Math.floor(Math.random() * quotes.length) + 1;

/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
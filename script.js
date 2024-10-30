const quotes = [{
    quote: ` "You only live once, but if you do it right, once is enough." `,
    writer:`- Mae West `
}, {
     quote: ` "If you want to live a happy life, tie it to a goal, not to people or things. " `,
    writer:`- Albert Einstein `
}, {
    quote: ` "Never let the fear of striking out keep you from playing the game." `,
   writer:`- Babe Ruth `
}, {
    quote: ` "Your time is limited, so don't waste it living someone else's life." `,
   writer:`- Steve Jobs `
}, {
    quote: ` "In order to write about life first you must live it." `,
   writer:`- Ernest Hemingway `
}, {
    quote: ` "Life is not a problem to be solved, but a reality to be experienced." `,
   writer:`- Soren Kierkegaard `
}, {
    quote: ` "The unexamined life is not worth living." `,
   writer:`- Socrates `
}, {
    quote: ` "Turn your wounds into wisdom." `,
   writer:`- Oprah Winfrey`
}, {
    quote: ` "The purpose of our lives is to be happy." `,
   writer:`- Dalai Lama`
}, {
    quote: ` "Live for each second without hesitation." `,
   writer:`- Elton John`
}, {
    quote: ` "The only limit to our realization of tomorrow is our doubts of today." `,
    writer: `- Franklin D. Roosevelt`
}, {
    quote: ` "Success is not final, failure is not fatal: It is the courage to continue that counts." `,
    writer: `- Winston Churchill`
}, {
    quote: ` "In the end, we will remember not the words of our enemies, but the silence of our friends." `,
    writer: `- Martin Luther King Jr`
}, {
    quote: ` "The best way to predict the future is to invent it." `,
    writer: `- Alan Kay`
}, {
    quote: ` "The journey of a thousand miles begins with one step." `,
    writer: `- Lao Tzu`
}, {
    quote: ` "It does not matter how slowly you go as long as you do not stop." `,
    writer: `- Confucius`
}, {
    quote: ` "Success usually comes to those who are too busy to be looking for it." `,
    writer: `- Henry David Thoreau`
}, {
    quote: ` "Be yourself; everyone else is already taken." `,
    writer: `- Oscar Wilde`
}, {
    quote: ` "The mind is everything. What you think you become." `,
    writer: `- Buddha`
},]

let btn = document.querySelector("#Qbtn");
let quote = document.querySelector(".quote");
let writer = document.querySelector(".writer");
 
btn.addEventListener("click",function(){
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerHTML = quotes[random].quote;

    writer.innerHTML = quotes[random].writer;
}) 

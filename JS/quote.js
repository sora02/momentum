const quotes = [
{
    quote : "If you're going through hell, keep going.",
    author : "Winston Churchill",
},
{
    quote : "Life is 10% what happens to you and 90% how you react to it.",
    author : "Charles R. Swindoll",
},
{
    quote : "It does not matter how slowly you go as long as you do not stop.",
    author : "Confucius",
},
{
    quote : "Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence.",
    author : "Helen Keller",
},
{
    quote : "If you can dream it, you can do it.",
    author : "Walt Disney",
},
{
    quote : "You will never win if you never begin.",
    author : "Helen Rowland",
},
{
    quote : "Knowing is not enough; we must apply. Willing is not enough; we must do.",
    author : "Johann Wolfgang von Goethe",
},
{
    quote : "Change your life today. Don't gamble on the future, act now, without delay.",
    author : "Simone de Beauvoir",
},
{
    quote : "No bird soars too high if he soars with his own wings.",
    author : "William Blake",
},
{
    quote : "Opportunity does not knock, it presents itself when you beat down the door.",
    author : "Kyle Chandler",
}
];
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

 const todayQuotes = quotes[Math.floor(Math.random() * quotes.length)];
 quote.innerText = todayQuotes.quote;
 author.innerText = todayQuotes.author;
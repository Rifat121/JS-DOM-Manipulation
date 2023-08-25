
const writerTag = document.querySelector(".name-text")
const quoteText = document.querySelector(".quote-text")
console.log(writerTag)

let url = '<script src="https://gist.github.com/b1nary/ea8fff806095bcedacce.js"></script>'
let api = 'https://gist.githubusercontent.com/b1nary/ea8fff806095bcedacce/raw/f6915a6a34c6992b6f48737eda6b11334116bdeb/enterpreneur-quotes.json'
let quotes = [  
    {  
       "text":"The only people who never fail are those who never try.",
       "from":"Ilka Chase"
    },
    {  
       "text":"Failure is just another way to learn how to do something right.",
       "from":"Marian Wright Edelman"
    },
    {  
       "text":"Every failure brings with it the seed of an equivalent success.",
       "from":"Napoleon Hill"
    },
]
    const text = quotes[0].text
    const writer = quotes[0].from
    quoteText.innerHTML = text
    writerTag.innerHTML = writer


function generate(){
    let i = Math.random()*1000;
    i = Math.round(i)
    const text = quotes[i%quotes.length].text
    const writer = quotes[i%quotes.length].from
    quoteText.innerHTML = text
    writerTag.innerHTML = writer
    
}
async function get(){
    const res = fetch(api)
    res.then(r =>r.json()).then(d => {quotes = d; console.log(quotes.length)})
    
}
get()

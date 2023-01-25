let btn = document.getElementById('btn')
let output = document.getElementById('output')
let quotes = [
'ollie north',
'bs pop shuv',
'fs pop shuv',
'kickflip',
'bs 180',
'fs 180',
'sw ollie',
'sw bs pop shuv',
'sw fs pop shuv',
'sw fs 180',
'sw bs 180',
'nollie big spin',
'nollie bs shuv',
'nollie fs shuv',
'nollie',
'nollie bs 180',
'nollie fs 180',
'fakie heelflip',
'fakie ollie',
'fakie big spin',
'fakie inward heel',
'fakie tre',
'bs flip',
'fakie bs heel',
'big spin',
'full cab',
'fakie fs flip',
'half cab flip',


];

btn.addEventListener('click', function(){
    var randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    output.innerHTML = randomQuote;
})

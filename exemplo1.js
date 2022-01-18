
var nome;
var frase;
var produto1;
var produto2;
var total;

nome = 'Olá, Flávio';
frase = 'O teste deu certo';
produto1 = 50;
produto2 = 30;
total = produto1 + produto2;

var elNome = document.getElementById('nome');
    elNome.textContent = nome;

var elFrase = document.getElementById('frase');
    elFrase.textContent = frase;

var elP1 = document.getElementById('p1');
    elP1.textContent = produto1;

var elP2 = document.getElementById('p2');
    elP2.textContent = produto2;

var elTotal = document.getElementById('total');
    elTotal.textContent = total;



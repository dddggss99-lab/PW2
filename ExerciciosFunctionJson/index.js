import express from 'express';

import { soma, sub, div, multi, raiz, resdiv, pot } from './oparitmeticas.js';
import { Nomee } from './declaracaoVaria.js';
import { maior, menor, igual, maiorIgual, diferente, menorIgual } from './operaRelacionais.js';
import { ifcomp, ifsimp, iftradi, swit, ternario } from './estruCondicional.js';
import { and, not, or } from './operaLogicos.js';
import { fibonacci, imparesAte1000, aplicarDesconto, anosBissextos } from "./opcLacoRepeticao.js";
import { acumulacao, adicao, buscarVetor } from "./opcVetores.js";

const app = express();

// rota inicial
app.get('/', (req, res) => {
    res.send("API funcionando ô glória");
});

// variável
app.get('/nome', (req, res) => {
    res.send(Nomee());
});

// operações
app.get('/soma', (req, res) => {
    res.send(soma(6, 4));
});

app.get('/sub', (req, res) => {
    res.send(sub(10, 5));
});

app.get('/multi', (req, res) => {
    res.send(multi(3, 4));
});

app.get('/div', (req, res) => {
    res.send(div(10, 2));
});

app.get('/resdiv', (req, res) => {
    res.send(resdiv(10, 3));
});

app.get('/raiz', (req, res) => {
    res.send(raiz(9));
});

app.get('/pot', (req, res) => {
    res.send(pot(2, 3));
});

// condicionais
app.get('/ifsimples', (req, res) => {
    res.send(ifsimp(18));
});

app.get('/ifcomposto', (req, res) => {
    res.send(ifcomp(5));
});

app.get('/iftradicional', (req, res) => {
    res.send(iftradi(7));
});

app.get('/switch', (req, res) => {
    res.send(swit(3));
});

app.get('/ternario', (req, res) => {
    res.sendternario(ternario(10));
});

// relacionais
app.get('/maior', (req, res) => {
    res.send(maior(10));
});

app.get('/menor', (req, res) => {
    res.send(menor(5));
});

app.get('/igual', (req, res) => {
    res.send(igual(10));
});

app.get('/maiorIgual', (req, res) => {
    res.send(maiorIgual(10));
});

app.get('/menorIgual', (req, res) => {
    res.send(menorIgual(5));
});

app.get('/diferente', (req, res) => {
    res.send(diferente(8));
});

// lógicos
app.get('/and', (req, res) => {
    res.send(and(20));
});

app.get('/or', (req, res) => {
    res.send(or(15));
});

app.get('/not', (req, res) => {
    res.send(not(true));
});

// repetição
app.get('/fibonacci', (req, res) => {
    res.send(fibonacci(10));
});

app.get('/impares', (req, res) => {
    res.send(imparesAte1000());
});

app.get('/desconto', (req, res) => {
    res.send(aplicarDesconto([10, 20, 30]));
});

app.get('/bissextos', (req, res) => {
    res.send(anosBissextos(2000, 2020));
});

// vetores
app.get('/acumulacao', (req, res) => {
    res.send(acumulacao([10, 20, 30, 40]));
});

app.get('/adicao', (req, res) => {
    res.send(adicao(["maçã", "banana"], "uva"));
});

app.get('/buscar', (req, res) => {
    res.send(buscarVetor([10, 20, 30, 40], 20));
});

app.listen(3000, () => {
    console.log(`Rodando em http://localhost:3000`);
});
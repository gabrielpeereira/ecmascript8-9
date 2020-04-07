/**
 * Padding start
 */
const nome = 'Gabriel';
const sobrenome = 'Pereira';

const nomeCompleto = sobrenome.padStart(14, nome);

document.getElementById('stringPad').innerHTML = nomeCompleto;


const nomeCompletoPadEnd = nome.padEnd(14, sobrenome);

console.log(nomeCompletoPadEnd);

const numeroCartao = '4890';

const cartaoPreenchido = numeroCartao.padStart(16, '*');

console.log(cartaoPreenchido);





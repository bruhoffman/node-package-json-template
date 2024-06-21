import { countries } from "./countries.js";

const value = process.argv[2];

// Retorna os dados de um determinado país.
/* if (!value) {
  console.log("Informe o nome do país!");
} else {
  const result = countries.filter((country) => {
    return country.name.toLowerCase() === value.toLowerCase();
  });

  console.table(result);
} */

// Verifica e retorna se um determinado país está na listagem.
/* if (!value) {
  console.log("Informe o nome do país!");
} else {
  const result = countries.filter((country) => {
    return country.name.toLowerCase().includes(value.toLowerCase());
  });

  console.table(result);
} */

// Exercício 3 - Receber nome e idade, e imprimir uma mensagem no console.

const nome = process.argv[2];
const idade = parseInt(process.argv[3]);

if (!nome || !idade) {
  console.table("Informe o nome e a idade!");
} else {
  console.log(
    `Olá, ${nome}!, você tem ${idade} anos. \nEm sete anos você terá ${
      idade + 7
    } anos.`
  );
}

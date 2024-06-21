import { countries } from "./countries.js";

const name = process.argv[2];
const code = process.argv[3];

const newCountry = {
  name,
  code,
};

if (!name || !code) {
  console.log("Digite o nome do país e seu respectivo código!");
} else {
  countries.push(newCountry);
  console.table(countries);
}

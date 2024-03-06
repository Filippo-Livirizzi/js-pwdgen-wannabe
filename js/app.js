
const name = prompt("Scrivi il tuo nome");  //string | null
console.log(name);

const surname = prompt("Scrivi il tuo cognome");    //string | null
console.log(surname);

const color = prompt("Scrivi il tuo colore preferito"); //string | null
console.log(color);

const random = Math.floor(Math.random() * 100); //number

const password = name + surname + color + random; //string
console.log(password);


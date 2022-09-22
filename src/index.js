// import { compose, pipe } from 'lodash/fp';

import { Map } from 'immutable';

const app = document.querySelector('#app');

const wikiPage = Map({
  wName: 'Mohamed abdelaal',
  age: 36,
  addition: {
    hobbies: 'Fifa',
    music: 'Munir',
  },
});

const modWiki = wikiPage.set('age', 20);

console.log(wikiPage.toJS());
console.log(modWiki.toJS());
// let dollar = givMeDollar()();
// console.log(dollar);
// let myDollar = dollar();
// console.log(myDollar);

// function forMe() {
//   return 'This is for me';
// }

// function hoFunc(fn) {
//   console.log(fn());
// }

// hoFunc(forMe);

//// piping

// const multiple = (a) => (b) => a * b;

// console.log(multiple(10)(20));

// const productNames = ['tv', 'caset', 'Laptop', 'mouse'];

// const upperProducts = productNames
//   .map((pro) => pro.toUpperCase())
//   .filter((pr) => pr !== 'CASET');
// console.log(upperProducts);

// const header4 = document.createElement('h4');
// const header2 = document.createElement('h2');

// const trim = (str) => str.trim();
// const lowerCase = (str) => str.toUpperCase();
// const trimHeader = (elem) => (input) => (elem.textContent = input);
// const appendApp = (input) => app.append(input);

// const transformation = pipe(trim, lowerCase, trimHeader(header2));

// const phrase = '  I love Javascript Sooooo much  and it"s ok';

// console.log(transformation(phrase));

// appendApp(header2);

///

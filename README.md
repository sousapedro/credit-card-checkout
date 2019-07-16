# Credit Card Checkout

This project is a credit card checkout based on one of the [DailyUI](https://dribbble.com/shots/5889032-Daily-UI-002-Credit-Card-Checkout) challenge interfaces. The main goal was to reproduce the chosen interface using [Vue.js]([https://vuejs.org/](https://vuejs.org/)) as its framework as well as its main practices.

In order to validate the credit card number information, Braintree's [Card Validator]([https://github.com/braintree/card-validator](https://github.com/braintree/card-validator)) library was used. Unit tests were also written in order to guarantee individual components functionality using [Jest]([https://jestjs.io/](https://jestjs.io/)) and [Babel]([https://babeljs.io/](https://babeljs.io/)).

## Project setup

To run the project, it it necessary to install [npm]([https://www.npmjs.com/get-npm](https://www.npmjs.com/get-npm)) package manager. Initially, it is necessary to have all dependencies installed. For that, simply run on the project root:
```
npm install
```
Afterwards, it is necessary to run the application on your [local server](http://localhost:8080) using:
```
npm run serve
```
And you're all set! If you want to run the project's unit tests and see a detailed log of the output, just run:
```
npm run test:unit
``` 

## Project Visualization

Below are some images of the application running in both web and mobile visualization:

![Empty Card View](/screenshots/screenshot1.PNG)

![Invalid Card View](/screenshots/screenshot2.PNG)

![Valid Card Viuew](/screenshots/screenshot3.PNG)

![Mobile Card View](/screenshots/screenshot4.PNG)

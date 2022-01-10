# Monthly Premium Calculation for the Insurance

This project is an Angular single page application to develop an UI which accepts the below data and return a monthly premium amount to be calculated and displayed on the screen.

Name,
Age,
Date of Birth,
Occupation,
Death – Sum Insured.

It will calculate monthly premium amount for the given sum insured amount based on your age and occupation using the below formula

Monthly Premium = (Death Sum Isnured * Occupation Rating Factor * Age) /1000 * 12

## Technical specifications

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.2. , 
Node.js Version - v16.13.1, 
Npm Version - 8.1.2

## Deployment details

This project is depoyed and published on the github pages and user can interact with the application UI by using below published URL.

https://senva1a.github.io/InsuranceMonthlyPremiumCalculation/

![image](https://user-images.githubusercontent.com/23475881/148666437-336cfcb9-9639-4beb-95c4-ce59b443fdce.png)


## Assumptions

1) Name input field should allow only Alphabets
2) DOB field should not allow to select future dates.
3) Age should be calculated automatically and shown based on the DOB selection.
4) Age field should be disabled as it doesn't need user input.
5) Sum-Insured field should allow only numbers
6) Sum-Insured field should not allow negative numbers.
7) Monthly premium amount should be shown with AUD currency format with two decimal points(ex $350.56)


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

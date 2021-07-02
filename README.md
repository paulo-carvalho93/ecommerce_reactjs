<div align="center">

<p align="center">
  <img alt="screenshot" src="./src/assets/online-shop.png" width="100px" />
<p>

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/paulo-carvalho93/ecommerce_reactjs">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/paulo-carvalho93/ecommerce_reactjs">
</p>

**eCommerce - ReactJS** is a project that uses an API from ChecIO called commerce.js that helps to create in an easy way your eCommerce Store and Stripe for Payments activities.

The idea of this mini project is just to boost my abilities with React.js and Material UI.

<p align="center">
  <img alt="screenshot" width="650px" src="./.github/assets/ecommerce_print.png" />
<p>

</div>

## Features

- Fetch all products created at the Dashboard from commerce.js API.
- Including cards for each product using Grid from Material UI.
- Button to add the product to the Cart, also update automatically the qty of the items at the Cart Icon.
* Cart 
  * Add/Remove Items 
  * Button to Increase/Decrease Qty
  * Button to clean the Cart 
  * Button to proceed to Address Form Payment Form
* Checkout Form
  * Fetch all Countries/States/Subdivisions and Shipping Cost from commerce.js API pre configured at the Dashboard
  * Using Stripe API to create fake credit card transactions as Method payment
  * Review page to show the Order Reference
  * An e-mail template that is send if the Order is completed successfully from commerce.js API with all the order details

## Live Demo

Access:

[eCommerce - ReactJS](https://ecommerce-reactjs-three.vercel.app/)


## Summary

- [Technology](#rocket-technology)
  - [Application](#computer-web)
- [How to run](#boom-how-to-run)
  - [Web](#computer-web)


## :rocket: Technology

<div align="center">

![react](https://img.shields.io/badge/react-61dafb?&logoColor=000&style=for-the-badge&logo=react)
![javascript](https://img.shields.io/badge/javascript-F7DF1E?&logoColor=FFF&style=for-the-badge&logo=javascript)
![materialui](https://img.shields.io/badge/materialui-0081CB?&logoColor=FFF&style=for-the-badge&logo=materialui)
![checkio](https://img.shields.io/badge/chec-008DB6?&logoColor=FFF&style=for-the-badge&logo=checkio)
![stripe](https://img.shields.io/badge/stripe-008CDD?&logoColor=FFF&style=for-the-badge&logo=stripe)

</div>


## :computer: Application

The application was developed with [Javascript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) using the framework [ReactJS](https://reactjs.org/) and [Material-UI](https://material-ui.com/) for design proposes. Also, the main ideia here is to use the [Commerce.JS](https://commercejs.com/) which allows having the flexibility to build better shopping experiences. Their Dashboard has all the facilities to create Products in an easy way and manage all the orders. Finally, at the Checkout Form, I'm using [React Hook Form](https://react-hook-form.com/) for holding all the customer information such as contact/address and [Stripe](https://commercejs.com/) to create fake credit card transactions as the method of payment.

---

# :boom: How to run

- ### **Prerequisites**

  - It's **necessary** to have **[Node.js 14v+](https://nodejs.org/en/)** installed on the computer
  - It's **necessary** to have **[Git](https://git-scm.com/)** installed and configured on the computer
  - Also, it's **necessary** to have a package manager either **[NPM](https://www.npmjs.com/)** or **[Yarn](https://yarnpkg.com/)**.


Clone the repository:

```sh
  $ git clone https://github.com/paulo-carvalho93/ecommerce_reactjs.git
```

You need to set the API keys from [Commerce.JS](https://commercejs.com/) and [Stripe](https://stripe.com/).
Just make your account at both APIs and copy the public key from Sandbox of each one. 

After that, just create a .env file and input the following environment variables inside:

```sh
  $ REACT_APP_CHEC_PUBLIC_KEY=YOUR_KEY
  $ REACT_APP_STRIPE_PUBLIC_KEY=YOUR_KEY
```

## :computer: Web

```sh
  # API
  $ cd ecommerce_reactjs
  # Installing project dependencies.
  $ yarn # or npm install

  # Start Web Project
  $ yarn start # or npm start
```



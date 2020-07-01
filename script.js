let amount = document.querySelector(".js-amount");
let currencyWant = document.querySelector(".js-exchangeFor");
let resultValue = document.querySelector(".js-result");
let formElement = document.querySelector(".js-form");

let euro = 4.4395;
let usDollar = 3.9526;
let britishPound = 4.9062;
let swissFranc = 4.1738;

formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  let currency = currencyWant.value;
  let amountValue = amount.value;
  let finalResult;

  switch (currency) {
    case "EUR":
      finalResult = +amountValue / euro;
      break;
    case "USD":
      finalResult = +amountValue / usDollar;
      break;
    case "GBP":
      finalResult = +amountValue / britishPound;
      break;
    case "CHF":
      finalResult = +amountValue / swissFranc;
      break;
  }
  resultValue.innerText = `${amountValue} PLN to ${finalResult.toFixed(
    2
  )} ${currency}`;
});

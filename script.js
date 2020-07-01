{
  const hallo = () => {
    console.log("Hallo!")
  };
  hallo()

}

let formElement = document.querySelector(".js-form");
let amount = document.querySelector(".js-amount");
let currencyHave = document.querySelector(".js-exchangeOn")
let currencyWant = document.querySelector(".js-exchangeFor");
let resultValue = document.querySelector(".js-result");
let zloty = 1;
let euro = 4.4395;
let usDollar = 3.9526;
let britishPound = 4.9062;
let swissFranc = 4.1738;

formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  let changeCurrencyFrom = currencyHave.value;
  let changeCurrencyOn = currencyWant.value;
  let amountValue = amount.value;
  let finalResult;

  switch (changeCurrencyFrom) {
    case "PLN":
      finalResult = +amountValue * zloty;
      break;
    case "EUR":
      finalResult = +amountValue * euro;
      break;
    case "USD":
      finalResult = +amountValue * usDollar;
      break;
    case "GBP":
      finalResult = +amountValue * britishPound;
      break;
    case "CHF":
      finalResult = +amountValue * swissFranc;
      break;
  }
  switch (changeCurrencyOn) {
    case "PLN":
      finalResult = finalResult /= zloty;
      break;
    case "EUR":
      finalResult = finalResult /= euro;
      break;
    case "USD":
      finalResult = finalResult /= usDollar;
      break;
    case "GBP":
      finalResult = finalResult /= britishPound;
      break;
    case "CHF":
      finalResult = finalResult /= swissFranc;
      break;
  }

  resultValue.innerText = `${amountValue} ${changeCurrencyFrom} TO ${finalResult.toFixed(
    2
  )} ${changeCurrencyOn}`;
});
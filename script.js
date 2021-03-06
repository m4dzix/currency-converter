{
  const hallo = () => {
    console.log("Hallo!")
  };
  hallo()

} {
  const formElement = document.querySelector(".js-form");
  const amount = document.querySelector(".js-amount");
  const currencyHave = document.querySelector(".js-exchangeOn")
  const currencyWant = document.querySelector(".js-exchangeFor");
  const resultValue = document.querySelector(".js-result");

  const finalCalculate = (amountValue, changeCurrencyFrom, changeCurrencyOn) => {

    const zloty = 1;
    const euro = 4.4722;
    const usDollar = 3.9604;
    const britishPound = 4.9773;
    const swissFranc = 4.2049

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
    };
    switch (changeCurrencyOn) {
      case "PLN":
        return finalResult /= zloty;

      case "EUR":
        return finalResult /= euro;

      case "USD":
        return finalResult /= usDollar;

      case "GBP":
        return finalResult /= britishPound;

      case "CHF":
        return finalResult /= swissFranc;

    };

  };
  const init = () => {
    const changeCurrencyFrom = currencyHave.value;
    const changeCurrencyOn = currencyWant.value;
    const amountValue = amount.value;

    const finalResult = finalCalculate(amountValue, changeCurrencyFrom, changeCurrencyOn);


    resultValue.innerText = `${amountValue} ${changeCurrencyFrom} TO ${finalResult.toFixed(
    2
  )} ${changeCurrencyOn}`;
  }

  formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    init()
  });
}
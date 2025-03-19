{
  const hallo = () => {
    console.log("Hallo!");
  };
  hallo();
}
{
  const finalCalculate = (
    amountValue,
    changeCurrencyFrom,
    changeCurrencyOn
  ) => {
    const zloty = 1;
    const euro = 4.1904;
    const usDollar = 3.8453;
    const britishPound = 4.3719;
    const swissFranc = 4.3706;

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
        return (finalResult /= zloty);

      case "EUR":
        return (finalResult /= euro);

      case "USD":
        return (finalResult /= usDollar);

      case "GBP":
        return (finalResult /= britishPound);

      case "CHF":
        return (finalResult /= swissFranc);
    }
  };

  const updateTextResult = (
    amountValue,
    changeCurrencyFrom,
    finalResult,
    changeCurrencyOn
  ) => {
    const resultValue = document.querySelector(".js-result");

    resultValue.innerText = `${amountValue} ${changeCurrencyFrom} TO ${finalResult.toFixed(
      2
    )} ${changeCurrencyOn}`;
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    const amount = document.querySelector(".js-amount");
    const currencyHave = document.querySelector(".js-exchangeFrom");
    const currencyWant = document.querySelector(".js-exchangeFor");

    const amountValue = +amount.value;
    const changeCurrencyFrom = currencyHave.value;
    const changeCurrencyOn = currencyWant.value;

    const finalResult = finalCalculate(
      amountValue,
      changeCurrencyFrom,
      changeCurrencyOn
    );
    updateTextResult(
      amountValue,
      changeCurrencyFrom,
      finalResult,
      changeCurrencyOn
    );
  };

  const init = () => {
    const formElement = document.querySelector(".js-form");

    formElement.addEventListener("submit", onFormSubmit);
  };

  init();
}

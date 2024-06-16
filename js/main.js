window.onload = () => {
  'use strict';

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('./sw.js');
  }
}

function calculate() {
  var base = $("#base").val();
  var months = $("#months").val();
  var logistic = $("#logistic").val();
  var margin = $("#margin").val();

  var result = base * months / 12 * logistic * margin;

  console.log(base);
  console.log(months);
  console.log(logistic);
  console.log(margin);
  console.log(result);

  $("#finalAmount").text(result.toFixed(1));

  var usdRate = $("#usdRate").val();

  var usdResult = result / usdRate;

  $("#finalAmountUSD").text("$" + usdResult.toFixed(2) + " (k)");

}

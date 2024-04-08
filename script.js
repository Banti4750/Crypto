var btc1 = document.getElementById("bitcoin");
var btc2 = document.getElementById("ethereum");
var btc3 = document.getElementById("dogecoin");


var setting = {
    "async" : true,
    "scrossDomain" : true,
    "url" : "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd",
    "method" : "GET",
    "header" : {}
}

$.ajax(setting).done(function (response) {
    // console.log(response);
    btc1.innerHTML = response.bitcoin.usd;
    btc2.innerHTML = response.ethereum.usd;
    btc3.innerHTML = response.dogecoin.usd;
});
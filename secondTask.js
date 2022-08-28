console.log("ЗАДАНИЕ №2")
let requestObjectArray = [ //создаем массив
    {
        card_sender: "Max Lol Kek",
        card_recipient: "vip",
        sum: 1.2,
        currency: "Uah"
    },
    {
        card_sender: "haha",
        card_recipient: 5168757326902964,
        sum: 1,
        currency: "EUeR"
    },
    {
        card_sender: "Max Lol Kek",
        card_recipient: "vip",
        sum: 1.2,
        currency: "usd"
    },
    {
        card_sender: "Max Lol Kek",
        card_recipient: "vip",
        sum: 1.2,
        currency: "USD"
    },
    {
        card_sender: 5168757326902964,
        card_recipient: 5168757326902964,
        sum: 120,
        currency: "UAH"
    }
]
requestObjectArray.forEach(requestObject => console.log("РЕЗУЛЬТАТ: ",checkPayment(requestObject)));

function checkPayment(request_obj) {
    console.log("ДАННЫЕ С ФОРМЫ ",request_obj);
    let payment_info = {
        result: "",
        description: ""
    };
    payment_info.description += checkCardNumber(request_obj.card_recipient, "recipient")
    payment_info.description += checkCardNumber(request_obj.card_sender, "sender")
    payment_info.description += checkSum(request_obj.sum);
    payment_info.description += checkCurrency(request_obj.currency);

    console.log()
    if (payment_info.description === "undefined") {

        payment_info.result = "ok"
        payment_info.description = "ok"
        return payment_info
    }
    payment_info.result = "error"
    return payment_info;
}

function checkCardNumber(cardNumber, who) {
    let regCard = /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/;
    if (regCard.test(cardNumber)) return "";
    else return `Не верная карта ${who}.`;
}


function checkSum(sum) {
    if (!((sum ^ 0) === sum)) return "Сумма не целое число"
    if (!(sum > 10 && sum < 100000)) return "Некоректная сумма, ведите сумму в диапазоне 10 - 100000 вашей валюты."
}

function checkCurrency(currency) {
    if ((/UAH|EUR|USD/i).test(currency) && currency.length === 3) return "";
    return "Неверная валюта"
}

console.log("--------------------------")
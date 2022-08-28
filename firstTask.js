console.log ("ЗАДАНИЕ №1")
let clients = [ //создаем массив
    2,
    {
        name: "Max",
        type: "vip",
        date: "17.06.1985"
    },
    {
        name: "Masha",
        type: "usual",
        date: "22.03.1995"
    },
    {
        name: "Denis",
        type: "gold",
        date: "16.02.1995"
    },
    "test",
    {
        name: "Nikita",
        type: "usual",
        date: "16.03.1985"
    },
    {
        name: "Max",
        type: "gold",
        date: "16.03.1986"
    },
    4,
    {
        name: "Sanya",
        type: "gold",
        date: "16.03.1984"
    },
    "aaaa",
    {
        name: "Igor",
        type: "vip",
        date: "16.03.1983"
    },
];

console.log("Исходный массив",clients);
getSortArray(clients);

function getSortArray(arr) {

    let newArr = arr.filter((el) =>
        typeof el === 'object'
        && el !== null
        && el.hasOwnProperty('type')
        && el.hasOwnProperty('date')
        && (
            el.type === "gold"
            || el.type === "usual"
            || el.type === "vip"
        ))
        //трансформируем массив, оставляя только 2 поля и преобразуя дату для сортирновки
        .map(function (current) {
            return ({
                type: current.type,
                date: new Date(current.date.slice(6, 10) + "-" + current.date.slice(3, 5) + "-" + current.date.slice(0, 2))
            })
        })
        //сортируем сначала по типу, потом по дате.
        .sort(function (x, y) {
            if (x.type.length > y.type.length) return -1;
            if (x.type.length < y.type.length) return 1;
            return x.date - y.date;
        })
        //необязательно, просто привел дату к изначальному виду
        .map(function (current) {
            return ({
                type: current.type,
                date: `${current.date.toLocaleString().replace(/\s\d{2}:\d{2}:\d{2,4}$/, '')}`
            })
        });
    console.log("Результат",newArr);
}
console.log ("--------------------------")
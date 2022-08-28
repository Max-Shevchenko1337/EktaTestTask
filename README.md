# EktaTestTask

	 Задание 1
Есть массив клиентов, который нужно отсортировать по полю "type" ("usual" < "gold" < "vip"), а внутри каждого "type" по возрасту, который в поле "date", в порядке возрастания.
В результате сначала идет самый молодой клиент с "type": "usual" ([0]), а последним - самый возрастной клиент с "type": "vip" ([clients.length - 1]).
Также нужно преобразовать текущий массив в новый, в котором у каждого обьекта в массиве останутся только 2 этих поля (type и date).
Каждый элемент массива не обязательно является объектом и в каждом объекте-элементе массива может не быть нужных параметров для сортировки - такие элементы не должны попасть в итоговый массив
Напишите функцию getSortArray для решения задачи
Пример массива дополните произвольно, чтобы в нем было минимум 10 элементов

clients: [
     2,
     {
         name: "Max",
         type: "vip",
         date: "17.06.1985"   
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
];


	 Задание 2

Приходит запрос с параметрами заполненной для платежа формы (номер карты отправителя, номер карты получателя, сумма и валюта платежа).
На клиенте, где заполняют форму, нет валидации у всех полей, пользователь может ввести произвольные данные. 

request_obj: {
    card_sender, // карта отправителя
    card_recipient, // карта получателя
    sum, // сумма платежа
    currency, // валюта платежа, допустимые значения только “UAH”, “USD”,” EUR” в любом регистре, остальные валюты = ошибка
};

Для валидации каждого поля используем отдельные функции.
Напишите функию checkPayment, которая вернет объект вида:

payment_info: {
    result, // "ok" или "error"
    description // "ok" или подробное описание ошибки, подумайте, какие могут быть ошибки и пропишите все возможные варианты, если ошибка сразу в нескольких параметрах - выводим текст, в котором они все указаны
}

Использовать HTTP в этом задании не требуется, функция  checkPayment принимает параметр request_obj в котором могут быть, а могут и не быть необходимые параметры. Ваш ответ это функция:
function checkPayment(request_obj){
	//Ваш код 
}


	 Задание 3

Написать функцию, которая принимает объект Date и возвращает время до или после наступления этой даты строкой в формате:
дд чч:мм:cc
например:
23 03:15:17
Если до или после даты менее одних суток, только чч:мм:cc
например:
00:47:12
Использование сторонних библиотек запрещено

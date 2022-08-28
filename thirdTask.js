console.log ("ЗАДАНИЕ №3")

timer(new Date(2022,8,28,17,0,0)) // месяц указывается от 0(январь) до 11(декабрь)
//  timer(new Date(2022,6,28,17,0,0)) //
//  timer(new Date(1999,8,28,17,0,0))
// timer(new Date())

function timer(archiveDate) {
    let nowDate = new Date();
    let result = (archiveDate - nowDate);
    console.log(archiveDate,"      ",nowDate)

    let seconds = Math.abs(Math.floor((result/1000)%60));
    let minutes = Math.abs(Math.floor((result/1000/60)%60));
    let hours = Math.abs(Math.floor((result/1000/60/60)%24));
    let days = Math.abs(Math.floor(result/1000/60/60/24));
    if (seconds < 10) seconds = '0' + seconds;
    if (minutes < 10) minutes = '0' + minutes;
    if (hours < 10) hours = '0' + hours;
    let forPrint = (result>=0 ? "Осталось " : "Прошло ") + (days  ? (days+ 'd ') : "")  + hours + ':' + minutes + ':' + seconds;
    console.log(forPrint)
    // setTimeout(timer, 1000);
}
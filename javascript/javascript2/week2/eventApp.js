

//Event application

const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
function getEventWeekday(eventDay){
    const todayIs = new Date();
    const eventDay = (todayIs - weekDays) % 7;
    return eventDay;
    

}
    console.log('THE EVENT ON ' + ' '+ getEventWeekday(3));

    //i got an error, i couldn't find out what is the problem :( 
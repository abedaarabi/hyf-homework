function tempIs(temperature){
    if(temperature >= 20){
        return "you can wear your jacket"
    }
    if(temperature >= 15){
        return "weather is cold get your jacket on"
    }
    else{
        return 'you going to die because of the cold'
    }
}
console.log(tempIs(20));
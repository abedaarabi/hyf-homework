
// Age-ify (A future age calculator)

const yearOfBirth = 1991;
const yearFuture = 2027
const futureYear = yearFuture - yearOfBirth;

console.log(futureYear);
console.log('I WILL BE IN THE ' + futureYear + 'YEARS OLD IN ' + yearFuture);

//Goodboy-Oldboy (A dog age calculator)
const dogYearOfBirth = 2018;
const dogYearFuture  = 2027;
const dogYear = dogYearFuture - dogYearOfBirth;
const ageOfDog =  ageInHumanYear ;
const ageInHumanYear = dogYearFuture - dogYearOfBirth; 
const shouldShowResultInDogYears = true;
if (shouldShowResultInDogYears){
    console.log(" Your dog will be " + ageOfDog +  " dog years old in " +  dogYearFuture)
}
else{
    console.log( "Your dog will be " + dogYear * 7 +" dog years old in " + yearFuture  )
}

// Housey pricey (A house price estimator)
//______________INputs values_____________
const width = 8;
const height = 10;
const depth = 8;
const volumeInMeters =  width * height * depth + 100; //the volume with the garden 'total'
const housePrice = volumeInMeters * 2.5 * 1000 + 100 * 300;

console.log(housePrice );
if
    (housePrice <= 2500000);{

    console.log("Peter should take his father with him next time :D")
    }

//Ez Namey (Startup name generator) Optional
const firstWords = ['Serendipity ','Petrichor ','Supine ','Solitude ','Aurora ','Idyllic ','Clinomania ','Pluviophile ','Euphoria','Sequoia '];
const secondWords = ['letter ','word ','that ','has ','letter ','vowels','redwood ','tree','especially ','especially '];
const  startupName = firstWords[Math.floor(Math.random()* 10 + 0)] + secondWords[Math.floor(Math.random()* 10 + 0)];
console.log("startup name is" + startupName + ",  it is " + startupName.length + " characters ");

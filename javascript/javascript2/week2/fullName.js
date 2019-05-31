
// //Flight booking fullname function v1.0
// const fullname1 = true ;  //Trying to use global variable 
//   const fullname2 = true ;  

//   function getFullname(){
//   }
//  if(fullname1 == true){
//      console.log('Abed Aarabi');
//  }
//  else{
//      console.log('NOT SURE IF MY COSE RIGHT');  
//  } 
//  if(fullname2 == true){
//      console.log('Lord Abed Aarabi :D')
//  }  
//  else{
//      console.log('NOT SURE IF MY COSE RIGHT')









//Flight booking fullname function v1.1
const firstName = 'Abd ';
const surname = ' Aarabi';
const formalName =" Lord ";
let useFormalName = [1, 0];
let fullName1;
let fullName2;

function getFullName(firstName,surName,useFormalName){
    if(useFormalName === 1){
        fullName1 = formalName + firstName + surName;
        return fullName1;
    }
    else{
        fullName2 = firstName + surName;
        return fullName2;
    }
}

console.log(getFullName(firstName, surname, useFormalName[0]));
//[0] = Lord Abd  Aarabi
//[1] =  Abd  Aarabi
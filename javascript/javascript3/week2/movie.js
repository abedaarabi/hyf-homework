// fetch('https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json')
// .then(res => res.json())
// .then(json => {
//     const badMOvises = json.filter(movie => movie.rating < 8 ? true : false)
//     const moviesFrom = json.filter(movie => movie.rating < 8 && movie.year > 2000 ? true : false)
//     const badMovieFrom = moviesFrom.map(movie => movie.title)
//     console.log(JSON.stringify(badMovieFrom, undefined,2));

// })
///////////////////////////////////////////////////////////////////
/*******************  JUst an example ****************************/
// const p = new Promise((resolve, reject) => {                   /  
//     setTimeout(() => {                                         /  
//         const a = 1 + 6                                        / 
//         if(a == 7){
//             resolve('Heloo Jounes')
//         }
//         else{
//             reject('Something went wrong')
//         }
//     }, 3000);
// })
// p
// .then((value) => {console.log(value);})
// .catch((value) => {console.log(value)})
// console.log(p);
/***********************************************/

/* ------------  Promise that resolves after set time  ------------*/

// function resolveAfter(){
//     const promies = new Promise((resolve) => {
//         setTimeout(() => {
//           resolve('I am called asynchronously')  
//         }, 3000);
//     })
//     promies.then((string) => {console.log(string)})
//     console.log(promies);
    

// }

// resolveAfter()

/**------------------- Fetching and waiting -------------------- */

const promise = new Promise(( resolve) => {
 setTimeout(() => {
 resolve(fetch('https://jsonplaceholder.typicode.com/users'))
    
}, 3000);

}).then(res => res.json())
.then(json => {
    const emailData = json.filter(mail => mail.email)
    const addressData = json.filter(address => address.phone)
    console.log(JSON.stringify(emailData,undefined,2))
    
})

  


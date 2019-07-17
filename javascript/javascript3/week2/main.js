// function translateOneByOne(){
//     const circles = document.querySelectorAll('li')
//     const promise = moveElement(circles[0], {x: 20, y: 300}).then(() => {
//         return moveElement(circles[1], {x: 400, y: 300})
//     }).then(()=> {
//         return moveElement(circles[2], {x: 400, y: 20})
//     })
// }   



// translateOneByOne()
// //translateOneByOne(document.querySelectorAll('li')[1], 400, 300)


function translateAllAtOnce (){
    const circles = document.querySelectorAll('li')
    const p1 =   moveElement(circles[0], {x: 20, y: 300})
    const p2 =   moveElement(circles[1], {x: 400, y: 300})
    const p3 =   moveElement(circles[2], {x: 400, y: 20})

    Promise.all([p1,p2,p3])
} 
translateAllAtOnce()
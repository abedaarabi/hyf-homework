window.addEventListener('load', ()=>{
    const canvas = document.querySelector('#canvas')
    const ctx = canvas.getContext('2d')

    /**---------------//Resizing---------------- */

    canvas.height = window.innerHeight
    canvas.width = window.innerWidth
    
    /**-------------//Draw Recg...-------------- */
    
    // ctx.lineWidth = 2.3
    // ctx.strokeStyle = 'green'
    // ctx.strokeRect(100,50,200,200)

    // ctx.strokeStyle = 'red'
    // ctx.strokeRect(200,80,200,200)

    // ctx.strokeStyle = 'blue'
    // ctx.strokeRect(300,110,230,200)
    
    
    /**------------Draw line---------------------- */
    
    // ctx.beginPath()
    // ctx.moveToo(100,100)
    // ctx.lineTo(200,100)
    // ctx.stroke(200,150)
    // ctx.stroke()


    let painting = false

    function startPosition(e){
        painting = true
        draw(e)
    }

    function finishedPosition(){
        painting = false
        ctx.beginPath()
    }

    function draw(e){
        if(!painting)
        return
        ctx.strokeStyle = 'red'
        ctx.lineWidth = 10
        ctx.lineCap = 'round'
        ctx.lineTo(e.clientX, e.clientY)
        ctx.stroke()
        ctx.beginPath()
        ctx.moveTo(e.clientX,e.clientY)
    }

    canvas.addEventListener('mousedown', startPosition)
    canvas.addEventListener('mouseup', finishedPosition)
    canvas.addEventListener('mousemove', draw)
    
})


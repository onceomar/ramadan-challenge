window.addEventListener('load', func1)

function func1(){
    const canvas = document.querySelector('#canvas');
    ctx = canvas.getContext('2d');
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    let painting = false;
    let color = document.querySelector(".color").value;
    let btn = document.querySelector(".btn");
    let size = document.querySelector(".size").value;
    btn.addEventListener("click",func1)
    ctx.strokeStyle = color;

    function start_position(e){
        painting = true;
        draw(e);
    }

    function finished_position(){
        painting = false;
        ctx.beginPath()
    }

    function draw(e){
        if(!painting){
        return
    };

        ctx.lineWidth=size;
        ctx.lineCap="round";
        ctx.lineTo(e.clientX,e.clientY)
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX,e.clientY);
    }

    canvas.addEventListener("mousedown",start_position,false)
    canvas.addEventListener("mouseup",finished_position,false)
    canvas.addEventListener("mousemove",draw,false)
    canvas.addEventListener("touchstart",start_position,false)
    canvas.addEventListener("touchend",finished_position,false)
    canvas.addEventListener("touchmove",draw,false)

}

let canvas = document.getElementById("myCanvas");

console.log(canvas.width);

if(canvas.getContext) {
    const c = canvas.getContext("2d");

    console.log(c);
    c.fillStyle = "red";
    c.fillRect(100, 50, 45, 80);


    c.fillStyle = "blue";
    c.fillRect(160, 50, 45, 80);


    for(var i=0; i<30; i++) {
        const xCircle = Math.random()*canvas.width;
        const yCircle = Math.random()*canvas.height;

        c.beginPath();
        c.arc(xCircle, yCircle, i*2, 0, Math.PI*2, false);
        c.strokeStyle = "blue";
        c.stroke();
    }

    c.beginPath();
    c.strokeStyle = "green"
    c.moveTo(50, 30);
    c.lineTo(300, 250);
    c.stroke();
}
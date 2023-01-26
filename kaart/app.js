class Kaart
{
    constructor()
    {
        this.c = document.getElementById("CanvasYo");
        this.ctx = this.c.getContext("2d");
        this.foto = document.getElementById("carti");
        this.fotoX = 0;
        this.fotoY = Math.floor(Math.random() * 330)
        this.newCord = 0
    }

    setBackground()
    {
        let ctx = this.ctx
        ctx.fillStyle = "white";
        ctx.fillRect(0,0,1000,700);

        ctx.strokeStyle = "black";
        ctx.strokeRect(0,0,1000,700);
        ctx.lineWidth = 10;
    }

    drawVillage(x,y)
    {
        let g = this.ctx
        let randomgetal =  Math.random(0,1);

        g.strokeStyle = "black"
        

        //roof
        g.beginPath();
        g.fillStyle = "white"
        g.moveTo(x+150,y+50);
        g.lineTo(x+100,y+150);
        g.lineTo(x+300,y+200);
        g.lineTo(x+350,y+100);
        g.closePath();
        g.stroke();
        g.fill();

        //walls
        g.beginPath();
        g.fillStyle = "red"
        g.moveTo(x+300,y+200);
        g.lineTo(x+100,y+150);
        g.lineTo(x+100,y+250);
        g.lineTo(x+300,y+300);
        g.lineTo(x+400,y+250);
        g.lineTo(x+400,y+150);
        g.lineTo(x+350,y+100);
        g.lineTo(x+300,y+200);
        g.closePath();
        g.stroke();
        g.fill();

        //windows
        g.beginPath();
            g.fillStyle = "black"
        g.moveTo(x+250,y+215);
        g.lineTo(x+150,y+190);
        g.lineTo(x+150,y+240);
        g.lineTo(x+250,y+265);
        g.closePath();
        g.stroke();
        g.fill();
    }

    drawTree(x, y) {
        let ctx = this.ctx
        ctx.fillStyle = "brown";
        ctx.fillRect(x-10, y, 20, 120);
      
        ctx.beginPath();
        ctx.moveTo(x - 60, y+85);
        ctx.lineTo(x + 60, y+85);
        ctx.lineTo(x, y - 85);
        ctx.lineTo(x - 60, y+85);
        ctx.fillStyle = "green";
        ctx.strokeStyle = "black";
        ctx.fill();
        ctx.stroke();
      
        ctx.beginPath();
        ctx.moveTo(x, y - 100);
        ctx.lineTo(x - 15, y - 80);
        ctx.lineTo(x, y - 60);
        ctx.lineTo(x + 15, y - 80);
        ctx.lineTo(x, y - 100);
        ctx.fillStyle = "yellow";
        ctx.fill();
    }

    drawball(x, y)
    {
        let ctx = this.ctx
        ctx.beginPath();
        ctx.fillStyle = "red"
        ctx.arc(y+70, x-80, 11, 0, 2 * Math.PI);
        ctx.arc(y+140, x-40, 10, 0, 2 * Math.PI);
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle = "red"
        ctx.arc(y+90, x-125, 12 , 0, 2 * Math.PI);
        ctx.arc(y+105, x-150, 10, 0, 2 * Math.PI);
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle = "white"
        ctx.arc(y+90, x-50, 8, 0, 2 * Math.PI);
        ctx.arc(y+70, x-30, 10, 0, 2 * Math.PI);
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle = "black"
        ctx.arc(y+105, x-90, 13, 0, 2 * Math.PI);
        ctx.arc(y+115, x-40, 10, 0, 2 * Math.PI);
        ctx.fill();
    } 

    drawRoad()
    {
        let ctx = this.ctx
        ctx.fillStyle = "grey"
        ctx.fillRect(5, 300, 990, 150)
    }

    drawRoadthingy(x,y)
    {
        let ctx = this.ctx
        ctx.fillStyle = "white"
        ctx.fillRect(50+x, 350+y, 110, 25)
    }
    
    text()
    {
        let ctx = this.ctx

        ctx.fillStyle = "black"
        ctx.font = "35px Arial";
        ctx.fillText("HAPPY CHARTIMAS!! WHA?! WHA?!", 200, 600);
    }

    Frame()
    {
        let scope = this
        setInterval(function () { scope.doGameFrame() }, 33)
    }

    doGameFrame()
    {
        this.setBackground();
        this.drawVillage(-70,-10);
        this.drawVillage(570,-10);
        this.drawVillage(250,-10);
        this.text();
        this.drawTree(100,560);
        this.drawTree(900,560);
        this.drawball(650,0);
        this.drawball(650,800);
        this.drawRoad();
        this.drawRoadthingy(0,15);
        this.drawRoadthingy(200,15);
        this.drawRoadthingy(400,15);
        this.drawRoadthingy(600,15);
        this.drawRoadthingy(800,15);
        this.ctx.drawImage(this.foto, this.fotoX, this.fotoY);
        this.fotoX += 5;

    }
    
    
}

let kaart = new Kaart;
kaart.Frame();
Footer

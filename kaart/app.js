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
        ctx.fillStyle = "green";
        ctx.fillRect(0,0,1000,600);

        ctx.strokeStyle = "red";
        ctx.strokeRect(10,10,980,580);
        ctx.lineWidth = 10;
    }

    drawVillage(x,y)
    {
        let g = this.ctx
        let randomgetal =  Math.random(0,1);

        g.strokeStyle = "black"
        

        //dak
        g.beginPath();
        g.fillStyle = "red"
        g.moveTo(x+150,y+50);
        g.lineTo(x+100,y+150);
        g.lineTo(x+300,y+200);
        g.lineTo(x+350,y+100);
        g.closePath();
        g.stroke();
        g.fill();

        //muren
        g.beginPath();
        g.fillStyle = "grey"
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

        //raam
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
        ctx.fillRect(x-10, y, 20, 100);
      
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
      
        ctx.beginPath();
        ctx.moveTo(x, y - 100);
        ctx.lineTo(x - 15, y - 80);
        ctx.lineTo(x, y - 60);
        ctx.lineTo(x + 15, y - 80);
        ctx.lineTo(x, y - 100);
        ctx.fillStyle = "yellow";
        ctx.fill();
    }

    tekst()
    {
        let ctx = this.ctx

        ctx.fillStyle = "black"
        ctx.font = "35px Arial";
        ctx.fillText("HAPPY CHARTIMAS!! WHA?! WHA?!", 200, 560);
    }

    Frame()
    {
        let scope = this
        setInterval(function () { scope.doGameFrame() }, 33)
    }

    doGameFrame()
    {
        this.setBackground();
        this.drawVillage(-80,90);
        this.drawVillage(550,200);
        this.drawVillage(300,-30);
        this.tekst();
        this.drawTree(450,350);
        this.ctx.drawImage(this.foto, this.fotoX, this.fotoY);
        this.fotoX += 10;
        
    }
    
    
}

let kaart = new Kaart;
kaart.Frame();
Footer

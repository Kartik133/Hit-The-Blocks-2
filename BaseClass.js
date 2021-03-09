class BaseClass {
    constructor(x,y,width,height) {
        var options = {
            isStatic:false,
            restitution:1,
            friction:1,
            density:1,
        }
  
        //this.image = loadImage("polygon.png");
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }

    display() {
       
       // console.log(this.body.speed);

        var pos = this.body.position;
        var Angle = this.body.angle;

        push();
          translate(pos.x,pos.y);
          rotate(Angle);
          rectMode(CENTER);
          rect(0,0,this.width,this.height);
        pop();
    }
}
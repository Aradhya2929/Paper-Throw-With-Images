class Dustbin{
    constructor(x,y,width,height){
        var options={
isStatic : true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        World.add(world,this.body)
        //this.image = loadImage("dustbingreen.png");
    }
    
display(){
var pos = this.body.position
translate(this.body.position.x, this.body.position.y);
        
//imageMode(CENTER);
 //image(this.image,this.pos.x,this.pos.y, this.width, this.height);
 rectMode(CENTER);
 rect(this.body.position.x,this.body.position.y,this.width,this.height);
}
}
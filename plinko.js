class Plinko{
    constructor(x,y,r){
        var options={
            restitution:0.4,
            isStatic:true
        }
   
    this.body = Matter.Bodies.circle(x,y,10,options); 
    this.r=10; 
    this.color=color(random(255,255),random(255,255),random(255,255));
    Matter.World.add(world,this.body);
    }
    display(){
var pos=this.body.position;
var angle = this.body.angle;

push();
//translate(pos.x,pos.y);
//rotate(angle);
noStroke();
fill(this.color)
ellipseMode(RADIUS)
ellipse(pos.x,pos.y,this.r,this.r)
pop();
}
} 
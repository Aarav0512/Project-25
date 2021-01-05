class Paper{
    constructor(x,y,r){
        var options = {
            isStatic : false,
            restitution : 0.3,
            friction : 0.5,
            density : 3
        }
    this.body = Matter.Bodies.circle(x,y,r,options)
    this.image = loadImage("paper.png") 
    this.r = r
    World.add(world,this.body);
    }

    display(){
        ellipseMode(RADIUS);
        var pos = this.body.position
        push()
        translate(pos.x,pos.y)
        imageMode(CENTER)
        image(this.image,0,0,this.r*3,this.r*3) 
        pop()  
    }

}
class Dustbin {
    constructor() {
    var options = {
        isStatic:true
    }
    this.leftBody=Bodies.rectangle(520,600,20,100,options);
    this.rightBody=Bodies.rectangle(680,600,20,100,options);
    this.bottomBody=Bodies.rectangle(600,640,150,20,options);
    this.image = loadImage("dustbin.png");
    World.add(world,this.leftBody);
    World.add(world,this.rightBody);
    World.add(world,this.bottomBody);
}
display(){
rectMode(CENTER)
rect(this.leftBody.position.x, this.leftBody.position.y, 20, 100);
rect(this.rightBody.position.x,this.rightBody.position.y, 20, 100);
imageMode(CENTER)
image(this.image,this.bottomBody.position.x,this.bottomBody.position.y - 75,180,150);
}
}
class Roof{
    constructor (x,y,width,height){
        var options={
        isStatic:true
           }
    this.body= Matter.Bodies.rectangle(x,y,width,height,options);
    World.add(world,this.body);
    this.width=this.width
    this.height=this.height

    }   
    display(){
    var pos=this.body.position
    rect(200,100,335,15);
    }
    }
class Bob {
    constructor(x,y) {
      var options = {
          isStatic:true
         
      }
      this.body = Bodies.circle(x,y,20,options);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x,pos.y);
      ellipseMode(CENTER);
      fill("pink");
      ellipse(0, 0, this.width );
      pop();
    }
  };
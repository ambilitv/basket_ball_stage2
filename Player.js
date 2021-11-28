class Player {
    constructor(x,y,width,height) {
      var options = {
        restitution: 0.1,
        friction: 0.1,
        density: 0.8,
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(centerMode){
        var pos = this.body.position;
        push();
     // translate(pos.x, pos.y);
      rectMode(CENTER);
      fill("black");
      rect(this.body.position.x, this.body.position.y, this.width, this.height);
      pop();
    }
  };
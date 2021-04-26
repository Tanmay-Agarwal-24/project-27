class bob {
    constructor(x, y, radius) {
      var options= {
          isStatic: false, 
          restitution:1.0,
          friction:1.0,
          density:1.0
      }

      this.radius = radius;
      this.body = Bodies.circle(x, y, this.radius/2, options);

       
      
      World.add(world, this.body);
    }
    display(){

      fill("purple");
      var posit = this.body.position;
     
      
      ellipse(posit.x, posit.y, this.radius, this.radius);
     

    }
}
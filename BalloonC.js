class BalloonC{
    constructor(x,y,r,angle){
        var options={  
         isStatic:false
        }
        this.body = Bodies.circle(x,y,r,options);
        this.image = loadImage("images/balloon3.png");
        this.Visiblity = 255;
        World.add(world,this.body);
    }
    display(){
        if(this.body.speed < 4){
            var angle = this.body.angle;
            push();
            translate(this.body.position.x, this.body.position.y);
            rotate(angle);
            imageMode(CENTER);
            image(this.image, 0, 30, 150, 150);
            pop();
           }
           else{
             World.remove(world, this.body);
             push();
             this.Visiblity = this.Visiblity - 5;
             tint(255,this.Visiblity);
             image(this.image, this.body.position.x, this.body.position.y, 50, 50);
             pop();
           }
    }
    score(){
        if (this.Visiblity < 0 && this.Visiblity > -1005){
          score++;
        }
      }
}
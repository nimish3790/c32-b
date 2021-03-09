class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.path = loadImage("images/character.png");
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    attach(body){
        this.sling.bodyA = body;
    }
    
    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.path,200,300,100,100);
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            
            stroke("blue");
            if(pointA.x < 220) {
                strokeWeight(7);
                line(pointA.x, pointA.y, pointB.x +30, pointB.y+48);
                line(pointA.x, pointA.y, pointB.x + 30, pointB.y -15);
            }
            else{
                strokeWeight(3);
                line(pointA.x, pointA.y, pointB.x +30, pointB.y+48);
                line(pointA.x, pointA.y, pointB.x + 30, pointB.y -15);
            }
            pop();
        }
    }
}
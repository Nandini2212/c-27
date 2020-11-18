class Chain{
    constructor(body1,body2){
        var options={
            bodyA:body1,bodyB:body2,length:10,stiffness:0.03
        }
        this.body=Constraint.create(options);
        World.add(world,this.body);
        this.body1=body1;
        this.body2=body2;
    }
    display(){
        line(this.body1.position.x,this.body1.position.y,this.body2.position.x,this.body2.position.y);
    }
}
class Chain {
constructor(bodyA,bodyB){
var options = {
bodyA:bodyA,bodyB:bodyB,length:10,stiffness:0.04
}
this.Chain = Con.create(options)
World.add(world,this.Chain)
}
display(){
line(this.Chain.bodyA.position.x,this.Chain.bodyA.position.y,this.Chain.bodyB.position.x,this.Chain.bodyB.position.y)
}}

export class Player {
    velocity: {x:number, y:number}
    size: number
    color: string = 'white'
    angle: number
    thrust: number //aceleracion
    friction: number
    isRotatingLeft: boolean
    isRotatingRight: boolean
    isThrusting: boolean
    rotationSpeed: number

    constructor(public x:number, public y:number){
        this.velocity = { x:0,y:0}
        this.size=20
        this.angle = Math.PI
        this.thrust = 0.99
        this.friction = 0.99
        this.isRotatingLeft = false
        this.isRotatingRight = false
        this.isThrusting = false
        this.rotationSpeed = 0.3
    }

    draw(ctx:CanvasRenderingContext2D){
        ctx.save()
        ctx.translate(this.x, this.y)
        ctx.beginPath()
        ctx.moveTo(this.size, 0)
        ctx.lineTo(-this.size/2, this.size/2)
        ctx.lineTo(-this.size/2, -this.size/2)
        ctx.closePath()
        ctx.fillStyle = this.color
        ctx.fill()
        ctx.restore()
    }

    update(){

        if(this.isThrusting){
            this.velocity.y = Math.sin(this.angle)*this.thrust
            this.velocity.x = Math.cos(this.angle)*this.thrust
        }
        
        if(this.isRotatingLeft) this.angle += this.rotationSpeed
        if(this.isRotatingRight) this.angle -= this.rotationSpeed

        this.x += this.velocity.x
        this.y += this.velocity.y

        this.velocity.x *= this.friction
        this.velocity.y *= this.friction
    }

}
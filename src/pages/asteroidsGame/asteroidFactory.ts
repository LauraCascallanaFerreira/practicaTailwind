import { Asteroid } from "./asteroid";
import { WIDTH, HEIGHT } from "./game";


interface AsteroidFactory{
    create(): Asteroid
}

export default class EdgeAsteroidFactory implements AsteroidFactory{
    create(): Asteroid{
        const MAX_SIZE =40
        const MIN_SIZE = 20
        const pos = Math.floor(Math.random()*4) //numero entre 0 y 4 que sea entero
        const size = Math.random()*(MAX_SIZE-MIN_SIZE)+MIN_SIZE
        let x = 0
        let y = 0
        switch(pos){
            case 0:
                x=Math.random()*WIDTH
                break
            case 1:
                x=WIDTH
                y=Math.random()*HEIGHT
                break
            case 2:
                x=Math.random()*WIDTH
                y=HEIGHT
                break
            case 3: 
                y=Math.random()*HEIGHT
                break
        }
        return new Asteroid(x,y,size)
    }
}
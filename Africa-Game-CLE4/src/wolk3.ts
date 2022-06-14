import * as PIXI from 'pixi.js'
export class WOLKEN3 extends PIXI.Sprite {

    speed: number



    constructor(texture: PIXI.Texture) {
        super(texture)

        
        this.x = 20
        this.speed = Math.random() * 0.2
        this.y = 301
        
        this.scale.set(0.4)






    }



    update(delta: number) {

        this.x -= this.speed

        // Get cloud back to the  beginning of the screen

        if (this.x <= -700) {

            this.x = 1100

        }

    }



}

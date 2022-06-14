import * as PIXI from 'pixi.js'
export class WOLKEN2 extends PIXI.Sprite {

    speed: number



    constructor(texture: PIXI.Texture) {
        super(texture)

        
        this.x = 40
        this.speed = 0.1
        this.y = 100
        
        this.scale.set(0.8)






    }



    update(delta: number) {

        this.x -= this.speed

        // Get cloud back to the  beginning of the screen

        if (this.x <= -1000) {

            this.x = 400

        }

    }



}

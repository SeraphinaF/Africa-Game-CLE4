import * as PIXI from 'pixi.js'
export class WOLKEN extends PIXI.Sprite {

    speed: number



    constructor(texture: PIXI.Texture) {
        super(texture)
        this.x = 400
        this.speed = 0.1
        this.y = -50
        this.scale.set(1)






    }



    update(delta: number) {
        // cloud moving speed
        this.x -= this.speed

        // Get cloud back to the  beginning of the screen

        if (this.x <= -1000) {

            this.x = 400

        }

    }



}

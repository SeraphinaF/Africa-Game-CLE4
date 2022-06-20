import * as PIXI from "pixi.js"

//GEEL
export class GameCard1 extends PIXI.Sprite{

    loader: PIXI.Loader
    djembeAudio : HTMLAudioElement

    constructor(texture: PIXI.Texture, sound:HTMLAudioElement) {
        super(texture)
        // this.anchor.set(0.5)
        this.scale.set(0.3)
        this.x = 300
        this.y = 200
        this.djembeAudio = sound
        this.interactive = true
        this.buttonMode = true
        this.on('pointerdown', () => this.cardClicked())
        this.on('pointerup', () => this.cardOnClicked())
    }

    cardClicked(){
        this.djembeAudio.play()
        this.scale.set(0.32)
        // MISSCHIEN PUBLIC IN GAME.ts?
    }

    cardOnClicked(){
        this.scale.set(0.3)
    }

    update(delta: number){

    }
}



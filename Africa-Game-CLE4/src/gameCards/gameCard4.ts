import * as PIXI from "pixi.js"

//ROOD
export class GameCard4 extends PIXI.Sprite{

    loader: PIXI.Loader
    djembeAudio : HTMLAudioElement

    constructor(texture: PIXI.Texture, sound:HTMLAudioElement) {
        super(texture)
        this.scale.set(0.3)
        this.x = 600
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
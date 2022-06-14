
import * as PIXI from       "pixi.js"
import backgroundImage from "./images/egyptebg2.png"
import wolk1Image from      "./images/wolk1.png"
import wolk2Image from      "./images/wolk2.png"
import wolk3Image from      "./images/wolk3.png"

import rect1Image from      "./images/rect1.png"
import rect2Image from      "./images/rect2.png"
import rect3Image from      "./images/rect3.png"
import rect4Image from      "./images/rect4.png"

import soundTrackEgypt from "url:./audio/soundtrack-ancient-egypt.mp3"
import soundDjembe1 from    "url:./audio/djembe1.wav"
import soundDjembe2 from    "url:./audio/djembe2.wav"
import soundDjembe3 from    "url:./audio/djembe3.wav"
import soundDjembe4 from    "url:./audio/djembe4.wav"

import { GAMECARD } from    "./gameCard"
import { WOLKEN } from      "./wolk"
import { WOLKEN2 } from     "./wolk2"
import { WOLKEN3 } from     "./wolk3"
import { GameCard1 } from   "./gameCards/gameCard1"
import { GameCard2 } from   "./gameCards/gameCard2"
import { GameCard3 } from   "./gameCards/gameCard3"
import { GameCard4 } from   "./gameCards/gameCard4"

class Game {

    public pixi: PIXI.Application
    public container: PIXI.Container
    public loader: PIXI.Loader
    gameCardes: GAMECARD
    wolk: WOLKEN
    wolk2: WOLKEN2
    wolk3: WOLKEN3
    Rect1 : GameCard1
    Rect2 : GameCard2
    Rect3 : GameCard3
    Rect4 : GameCard4
    public djembeAudio : HTMLAudioElement
        // background variable 
    background = backgroundImage
       // game variables
    startButton = document.getElementById('start')
    sequence = []
    playerInput = []
    level = 0

 
    constructor() {
        //  ipad resolutie 
        const container = document.querySelector("#container")!
        this.pixi = new PIXI.Application({ width: 1112, height: 834 })
        container.appendChild(this.pixi.view)

        this.startButton?.addEventListener('click', this.startGame)
        this.nextStep()

        this.loader = new PIXI.Loader()
        this.loader
        // objecten toevoegen 
            .add("backgroundTexture", backgroundImage)
            .add('wolkTexture', wolk1Image)
            .add('wolk2Texture', wolk2Image)
            .add('wolk3Texture', wolk3Image)
            .add("rect1Texture", rect1Image)
            .add("rect2Texture", rect2Image)
            .add("rect3Texture", rect3Image)
            .add("rect4Texture", rect4Image)
            .add('egypteBgAudio', soundTrackEgypt)
            .add('djembe1Audio', soundDjembe1)
            .add('djembe2Audio', soundDjembe2)
            .add('djembe3Audio', soundDjembe3)
            .add('djembe4Audio', soundDjembe4)
        this.loader.load(() => this.doneLoading())
        this.loader.load(()=> this.playAudio())
    }

    doneLoading() {
        console.log("all textures loaded!")
        // Add background to screen 
        this.background = new PIXI.Sprite(this.loader.resources["backgroundTexture"].texture!)
        this.pixi.stage.addChild(this.background)

        // animated clouds 
        // wolk 1  class call
        this.wolk = new WOLKEN(this.loader.resources["wolkTexture"].texture!)
        this.pixi.stage.addChild(this.wolk)

        // wolk2 class call
        this.wolk2 = new WOLKEN2(this.loader.resources["wolk2Texture"].texture!)
        this.pixi.stage.addChild(this.wolk2)

        // wolk3 class call
        this.wolk3 = new WOLKEN3(this.loader.resources["wolk3Texture"].texture!)
        this.pixi.stage.addChild(this.wolk3)

        //add rectangles to screen
        this.Rect1 = new GameCard1(this.loader.resources["rect1Texture"].texture!, this.loader.resources["djembe1Audio"].data!)
        this.pixi.stage.addChild(this.Rect1)

        this.Rect2 = new GameCard2(this.loader.resources["rect2Texture"].texture!, this.loader.resources["djembe2Audio"].data!)
        this.pixi.stage.addChild(this.Rect2)

        this.Rect3 = new GameCard3(this.loader.resources["rect3Texture"].texture! , this.loader.resources["djembe3Audio"].data!)
        this.pixi.stage.addChild(this.Rect3)
    
        this.Rect4 = new GameCard4(this.loader.resources["rect4Texture"].texture! ,this.loader.resources["djembe4Audio"].data!)
        this.pixi.stage.addChild(this.Rect4)

        this.pixi.ticker.add((delta) => this.updateTheStage(delta))
    } 

    playAudio(){
        //adding background audio
        let soundtrack = this.loader.resources["egypteBgAudio"].data!
        soundtrack.play()
    }

    updateTheStage(delta: number) {
        // calling animated cloud 
        this.wolk.update(delta)
        this.wolk2.update(delta)
        this.wolk3.update(delta)
    }
    
    nextStep(){
        const tiles = [GameCard1, GameCard2, GameCard3, GameCard4 ]
        const random = tiles[Math.floor(Math.random() * tiles.length)];

        // console.log(tiles)
        console.log(tiles)

        return random;
        
    }

    nextRound(){
        this.level += 1

        const nextSequence = [...this.sequence]
        nextSequence.push(nextStep) 
    }

    startGame(){
        console.log("start game")
        this.startButton?.classList.add('hidden')
    }
}

new Game()


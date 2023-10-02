"use client"

const Artyom = require("artyom.js");

const START_TIMEOUT_MS = 250;

export default class Listener {
    private artyom: any;
    next;
    prev;
    stop;
    cont;
    ingredients;
    start;
    repeat;

    constructor(
        props: { handles: { 
            next: () => void, 
            prev: () => void, 
            stop: () => void, 
            cont: () => void, 
            ingredients: () => void, 
            start: () => void, 
            repeat: () => void 
        }}) {
        const { next, prev, stop, cont, ingredients, start, repeat } = props.handles;
        this.artyom = new Artyom();
        this.next = next;
        this.prev = prev;
        this.stop = stop;
        this.cont = cont;
        this.ingredients = ingredients;
        this.start = start;
        this.repeat = repeat;
        this.#initArtyom();
    } 

    #initArtyom() {
        this.#setCommands();
        this.#listen();
    }
    
    #listen(){
        this.artyom.fatality();
    
        setTimeout(() => {
             this.artyom.initialize({
                lang:"en-GB",
                continuous:true,
                listen:true,
                soundex: true,
                debug:true,
                speed:1,
                name: 'sue'
            }).then(() => {
                this.artyom.say(`Hey! I'm Sue, you're personal sous-chef.`);
            });
        }, START_TIMEOUT_MS);
    }

    #setCommands() {
        this.artyom.addCommands([
            {
                indexes: [/next/],
                smart:true,
                action: () => {
                    this.artyom.say('the next step is: ');
                    this.next(); 
                }
            },
            {
                indexes: [/previous|back/],
                smart:true,
                action: () => {
                    this.artyom.say('the previous step was: ');
                    this.prev();
                }
            },
            {
                indexes: [/stop|pause|wait/],
                smart:true,
                action: () => {
                    this.artyom.say('paused. say "continue" to undo.');
                    this.stop();
                }
            },
            {
                indexes: [/continue|resume/],
                smart:true,
                action: () => {
                    this.artyom.say('resuming...');
                    this.cont();
                }
            },
            {
                indexes: [/(instructions)|(first step)|(from the .*(top|beginning|start))/],
                smart:true,
                action: () => {
                    this.artyom.say('starting from the top...');
                    this.start();
                }
            },         
            {
                indexes: [/continue|resume/],
                smart:true,
                action: () => {
                    this.artyom.say('resuming...');
                    this.cont();
                }
            },
            {
                indexes: [/repeat/],
                smart:true,
                action: () => {
                    this.artyom.say('sure!');
                    this.repeat();
                }
            },
            {
                indexes: [/ingredients/],
                smart: true,
                action: () => {
                    this.ingredients();
                }
            }
        ]);
    }
}
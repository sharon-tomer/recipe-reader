"use client"

import Listener from "../Listener/Listener";
import Reader from "../Reader/Reader";
import Recipe from "../Recipe/Recipe";
import mockData from "../Recipe/mock.json";

export default class RecipeNavigator {
    reader;
    listener;
    handles;
    recipe;
    private currentStepIndex;

    constructor() {
        this.recipe = new Recipe(mockData.recipes[0]);
        // this.reader = new Reader();
        this.handles = {
            next: this.next.bind(this),
            prev: this.prev.bind(this),
            ingredients: this.ingredients.bind(this),
            start: this.start.bind(this),
            repeat: this.repeat.bind(this)
        }
        this.currentStepIndex = 0;
        this.listener = new Listener({handles: this.handles});
        this.listener.init();
    }

    #currentStep() {
        return this.recipe.getStep(this.currentStepIndex).instruction;
    }

    next() {
        this.listener.read(this.#currentStep());
        this.currentStepIndex++;
    }
    prev() {
        this.currentStepIndex--;
        this.listener.read(this.#currentStep());
    }
    ingredients() {
        this.listener.read(this.recipe.getIngredients().map((item, index) => `${index}) ${item.quantity} ${item.unit} ${item.description}`).join('\n'));
    }
    start() {
        this.currentStepIndex = 0;
        this.listener.read(this.#currentStep());
    }
    repeat() {
        this.listener.read(this.#currentStep());
    }
}